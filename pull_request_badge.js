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
  console.log("yes");

  const pullRequestInfo = await getPullRequestInfo();

  console.log("pullRequestInfo", pullRequestInfo);

  const config = yaml.safeLoad(fs.readFileSync(configPath, "utf8"));

  const badges = config.badges
    .filter((badge) => evaluateCondition(badge.condition, pullRequestInfo))
    .map(createBadgeMarkdown);

  if (badges.length === 0) {
    console.log("No badges to display");
    return;
  }

  const body = pullRequestInfo.pullRequest.body || "";
  const newBody = `${badges.join("\n")}\n\n${body}EPXXX`;

  const myToken = core.getInput("myToken");

  const octokit = github.getOctokit(myToken);

  const { data: pullRequest2 } = await octokit.rest.pulls.update({
    owner: "ehsanpo",
    repo: "nextjs-portfolio",
    pull_number: pullRequest.pull_number,
    body: newBody,
  });

  console.log(pullRequest2);

  // console.log(
  //   `Added ${badges.length} badge(s) to Pull Request #${pullRequestInfo.pullRequest.number}`
  // );
}

run();
