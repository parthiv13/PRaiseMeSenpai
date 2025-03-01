const core = require("@actions/core");
const github = require("@actions/github");

const gifs = [
    'https://github.com/parthiv13/treat/blob/master/assets/1.gif',
    'https://github.com/parthiv13/treat/blob/master/assets/2.jpg',
    'https://github.com/parthiv13/treat/blob/master/assets/3.gif',
    'https://github.com/parthiv13/treat/blob/master/assets/4.gif',
    'https://github.com/parthiv13/treat/blob/master/assets/5.gif',
    'https://github.com/parthiv13/treat/blob/master/assets/6.jpg',
    'https://github.com/parthiv13/treat/blob/master/assets/7.gif',
    'https://github.com/parthiv13/treat/blob/master/assets/8.gif',
    'https://github.com/parthiv13/treat/blob/master/assets/9.gif',
    'https://github.com/parthiv13/treat/blob/master/assets/10.gif',
    'https://github.com/parthiv13/treat/blob/master/assets/11.gif'
];

async function run() {
    try {
        const token = core.getInput("github_token");

        const pics = gifs;
        // Select a random image
        const randomImage = pics[Math.floor(Math.random() * pics.length)];
        const prNumber = github.context.payload.pull_request?.number;

        if (!prNumber) {
            core.info("No pull request found, skipping.");
            return;
        }

        const commentBody = `![Random Pic](${randomImage})`;

        const octokit = github.getOctokit(token);
        await octokit.rest.issues.createComment({
            owner: github.context.repo.owner,
            repo: github.context.repo.repo,
            issue_number: prNumber,
            body: commentBody
        });

        core.info(`Comment posted on PR #${prNumber} with image: ${randomImage}`);

    } catch (error) {
        core.setFailed(error.message);
    }
}

run()