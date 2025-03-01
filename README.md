<p align="center">
  <img alt="Cat Gif" src="https://github.com/parthiv13/treat/blob/master/assets/brand.jpeg">
</p>

# PRaiseMeSenpai
Because every PR deserves recognition

This is a simple Github Action which comments on your PRs with a gif of my friends pic as a reward for pushing some code.

This is just a novelty action, but feel free to use it. If you'd like to contribute then just open a PR.

## Usage

```yaml          
name: Treat for your PR 🍬

on:
  pull_request_target:
    types:
      - opened
      - reopened

jobs:
  aTreatForCreatingThePullRequest:
    name: A treat for your effort!
    runs-on: ubuntu-latest
    steps:
      - uses: parthiv13/treat@final
        with:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```