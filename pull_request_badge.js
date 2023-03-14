const fs = require("fs");
const yaml = require("js-yaml");
const axios = require("axios");
const core = require("@actions/core");
const github = require("@actions/github");
const pullRequest = github.context.payload.pull_request;
// const sha = core.getInput("sha") || github.context.sha;
// console.log("Yea ehsan");
// console.log(sha);

// console.log(github.context);

// console.log(github.context.payload.pull_request);
// console.log(github.context.payload.pull_request.title);

// return 0;

const configPath = ".github/pr-badge.yml";
const issuePrefixRegex = /^(\w+-\d+)/i;

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

  // console.log("2code ", code);
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
  const config = yaml.load(fs.readFileSync(configPath, "utf8"));
  const badges = config.badges
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

  const { data: pullRequest2 } = await octokit.rest.pulls.update({
    owner: "ehsanpo",
    repo: "nextjs-portfolio",
    pull_number: pullRequest.number,
    body: newBody,
  });

  console.log(
    `Added ${badges.length} badge(s) to Pull Request #${pullRequestInfo.pullRequest.number}`
  );
}

run();
