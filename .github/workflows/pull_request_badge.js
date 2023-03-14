const github = require("/usr/local/lib/node_modules/@actions/github");
const pullRequest = github.context.payload.pull_request;

console.log(github.context);
console.log(github.context.payload);

const configPath = ".github/pr-badge.yml";
const issuePrefixRegex = /^(\w+-\d+)/i;
const configBadges = {
  badges: [
    {
      name: "Preview",
      image: "https://img.shields.io/badge/Preview-orange",
      link: "https://preview.example.com",
      condition: "true",
    },
    {
      name: "Redmine",
      image: "https://img.shields.io/badge/size-small-yellow",
      condition: "true",
    },
    {
      name: "Size - Large",
      image: "https://img.shields.io/badge/size-large-red",
      condition: "size > 1000",
    },
    {
      name: "Size - Small",
      image: "https://img.shields.io/badge/size-small-blue",
      condition: "size < 1000",
    },
    {
      name: "Test",
      image: "https://img.shields.io/badge/size-small-yellow",
      condition: "true",
    },
  ],
};

function getIssuePrefix(title) {
  const matches = title.match(issuePrefixRegex);
  return matches ? matches[1] : null;
}

async function getPullRequestInfo() {
  const title = pullRequest.title;
  const branchName = pullRequest.head.ref;
  const issuePrefix = getIssuePrefix(title) || getIssuePrefix(branchName);

  return {
    pullRequest,
    title,
    branchName,
    issuePrefix,
    size: pullRequest.additions + pullRequest.deletions,
  };
}

function evaluateCondition(condition, pullRequestInfo) {
  if (!condition) {
    return true;
  }

  const vars = {
    issuePrefix: pullRequestInfo.issuePrefix,
    title: pullRequestInfo.title,
    branchName: pullRequestInfo.branchName,
    size: pullRequestInfo.size,
    title: pullRequestInfo.title,
  };

  preview_available = true;
  size = vars.size;

  const code =
    Object.keys(vars)
      .map((varName) => `const ${varName} = "${vars[varName]}";`)
      .join("\n") + condition;

  return eval(code);
}

function createBadgeMarkdown(badge, pullRequestInfo) {
  if (badge.name === "Preview") {
    badge.link =
      "http://" + pullRequestInfo.branchName + ".front-a7u.pages.dev/";
  }
  if (badge.name === "Redmine") {
    // an reg ex that take first numbers from Xstring until a "-"
    const redmineId = pullRequestInfo.title.match(/\d+/)[0];
    badge.link = "https://redmine.bredband2.se/" + redmineId;
    badge.image = `https://img.shields.io/badge/Redmine-${redmineId}-red`;
  }
  if (badge.name === "Test") {
    // a reg exthat check for " # Test" and an paragraph after it in the body of the pull request
    const test = pullRequestInfo.pullRequest.body.match(/# Testguide[\s\S]/);
    if (test) {
      badge.image = `https://img.shields.io/badge/Test_Plan-pass-green`;
    } else {
      badge.image = `https://img.shields.io/badge/Missing-test_plan-red`;
    }
  }

  const image = badge.image;
  const link = badge.link || "";

  return `[![${badge.name}](${image})](${link})`;
}

async function run() {
  const pullRequestInfo = await getPullRequestInfo();
  const badges = configBadges.badges
    .filter((badge) => evaluateCondition(badge.condition, pullRequestInfo))
    .map(function (badge) {
      return createBadgeMarkdown(badge, pullRequestInfo);
    });

  if (badges.length === 0) {
    console.log("No badges to display");
    return;
  }

  const body = pullRequestInfo.pullRequest.body || "";
  //remove all line starting with [![
  const bodyWithoutBadges2 = body.replace(/\[!\[.*\]\(.*\)\]\(.*\)/g, "");
  const newBody = `${badges.join(" ")}\n\n${bodyWithoutBadges2}`;

  const octokit = github.getOctokit(process.env.GITHUB_TOKEN);

  console.log(github.context.repository_owner);
  console.log(github.context.repository);
  console.log(github.context.repository.split("/")[1]);

  const { data: pullRequest2 } = await octokit.rest.pulls.update({
    owner: github.context.repository_owner,
    repo: github.context.repository.split("/")[1],
    pull_number: pullRequest.number,
    body: newBody,
  });

  console.log(
    `Added ${badges.length} badge(s) to Pull Request #${pullRequestInfo.pullRequest.number}`
  );
}

run();
