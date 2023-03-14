const fs = require("fs");
const yaml = require("js-yaml");
const axios = require("axios");

const configPath = ".github/pr-badge.yml";
const issuePrefixRegex = /^(\w+-\d+)/i;

function getIssuePrefix(title) {
  const matches = title.match(issuePrefixRegex);
  return matches ? matches[1] : null;
}

async function getPullRequestInfo() {
  const response = await axios.get(process.env.GITHUB_EVENT_PATH, {
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      Accept: "application/vnd.github.v3+json",
    },
  });

  const pullRequest = response.data;
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
  };

  const code =
    Object.keys(vars)
      .map((varName) => `const ${varName} = "${vars[varName]}";`)
      .join("\n") + condition;

  return eval(code);
}

function createBadgeMarkdown(badge) {
  const image = badge.image;
  const link = badge.link || "";

  return `[![${badge.name}](${image})](${link})`;
}

async function run() {
  const pullRequestInfo = await getPullRequestInfo();
  const config = yaml.safeLoad(fs.readFileSync(configPath, "utf8"));

  const badges = config.badges
    .filter((badge) => evaluateCondition(badge.condition, pullRequestInfo))
    .map(createBadgeMarkdown);

  if (badges.length === 0) {
    console.log("No badges to display");
    return;
  }

  const body = pullRequestInfo.pullRequest.body || "";
  const newBody = `${badges.join("\n")}\n\n${body}`;

  await axios.patch(
    pullRequestInfo.pullRequest.url,
    {
      body: newBody,
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        Accept: "application/vnd.github.v3+json",
      },
    }
  );

  console.log(
    `Added ${badges.length} badge(s) to Pull Request #${pullRequestInfo.pullRequest.number}`
  );
}

run();