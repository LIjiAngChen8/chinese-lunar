
> English | [简体中文](./CONTRIBUTING.md)
# Contributing

Thank you for taking your time to contribute and make this project better! Here are some guidelines to help you get started. Please make sure to take a moment and read through them before submitting your contributions.

## Code of Conduct

This project is governed by the [Contributor Covenant Code of Conduct](./CODE_OF_CONDUCT.md). By participating, you are expected to adhere to it.

## Open Development

All work happens directly on GitHub. Both core team members and external contributors send pull requests which go through the same review process.

## Semantic Versioning

This project follows semantic versioning. We release patch versions for bug fixes or other changes that do not change the behavior of the API, minor versions for new features that are backward-compatible, and major versions for any breaking changes.

Every significant change is documented in the changelog file.

## Reporting Issues

We use [Github issues](https://github.com/LIjiAngChen8/datepicker-pro-vue/issues) for bug reports and feature requests. Before reporting an issue, please make sure you have searched for similar [issues](https://github.com/LIjiAngChen8/datepicker-pro-vue/issues) as they may have been already answered or being fixed. A new issue should be submitted via [issue helper](https://github.com/LIjiAngChen8/datepicker-pro-vue/issues). For bug reporting, please include the minimum code that can be used to reproduce the problem. For feature request, please specify what changes you want and what behavior you expect.

## Sending a pull request

1. Fork [this repository](https://github.com/LIjiAngChen8/chinese-lunar) and create a branch from `main`.
2. Make sure you have installed the yarn package manager, and execute`yarn install`to install project dependencies.
3. Make your modifications.
4. Execute `yarn lint-staged` to check and fix the code.
5. Make changes to the codebase. If applicable, make sure to write corresponding tests.
6. Verify the code formatting and ensure that all tests pass.
7. Commit your changes using git commit, and follow the [CommitGuidelines](#CommitGuidelines).
8. Submit a pull request, and if there is a corresponding issue, [link](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword) it using keywords.

## CommitGuidelines

Commit messages are required to follow the [conventional-changelog standard](https://www.conventionalcommits.org/en/v1.0.0/):

```bash
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Commit types

The following is a list of commit types:

- feat: New feature or functionality
- fix: Bug fix
- docs: Documentation update
- style: Code style or component style updates
- refactor: Code refactoring (refactoring, code modification without affecting internal code behavior or functionality)
- perf: Performance optimization
- test: Unit testing
- build: Changes affecting project builds or dependencies
- revert: Revert previous commit
- ci: Continuous integration related file changes
- chore: Other changes (modifications not included in the above types)
- workflow: Workflow related file changes

### Web-Vue Component Directory

```
├── dist (Note: You do not need to edit the files in this folder, it is generated by rollup packaging)
├── example
│   └── xxx
│
├── docs
│   │
│   │── .vitepress
│   └──  ...md
│
├── src
│   │
│   │── constant.ts
│   │── index.ts
│   └── utils.ts
│
├── test
│   ├── demo.test.js
│   └── utils.test.js
│ 
└── ....（Project-related configuration files）

```


## License

By contributing your code to the repository, you agree to license your contribution under the [MIT license](./LICENSE).