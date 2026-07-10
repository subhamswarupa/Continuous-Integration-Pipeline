# Continuous Integration Pipeline

[![CI](https://github.com/YOUR_USERNAME/Continuous-Integration-Pipeline/actions/workflows/ci.yml/badge.svg)](https://github.com/YOUR_USERNAME/Continuous-Integration-Pipeline/actions/workflows/ci.yml)
[![Security](https://github.com/YOUR_USERNAME/Continuous-Integration-Pipeline/actions/workflows/security.yml/badge.svg)](https://github.com/YOUR_USERNAME/Continuous-Integration-Pipeline/actions/workflows/security.yml)
![Node Version](https://img.shields.io/badge/node-22%20%7C%2020-brightgreen)
[![License](https://img.shields.io/badge/license-MIT-blue)](LICENSE)

A production-ready **Continuous Integration (CI) pipeline** built with **GitHub Actions**, demonstrating modern DevOps practices for Node.js applications. This project automatically lints, formats, tests, and builds code on every push and pull request.

---

## Features

- **Automated CI Pipeline** — Triggers on push, PR open, synchronize, and reopen
- **Multi-version Testing** — Matrix strategy for Node.js 20 and 22
- **Code Quality** — ESLint static analysis with fail-on-error
- **Code Formatting** — Prettier enforcement with fail-on-mismatch
- **Unit Testing** — Jest framework with code coverage reports
- **Security Scanning** — npm audit, CodeQL, secret scanning, dependency review
- **Dependency Management** — Automated Dependabot updates (weekly)
- **Build Artifacts** — Uploaded and retained for 7 days
- **Workflow Summary** — Clear job status table in every run
- **Dependency Caching** — Fast installs via npm cache
- **Concurrency Control** — Auto-cancels stale workflow runs

---

## Repository Structure

```
Continuous-Integration-Pipeline/
├── .github/
│   ├── workflows/
│   │   ├── ci.yml              # Main CI workflow
│   │   └── security.yml         # Security scanning workflow
│   └── dependabot.yml           # Automated dependency updates
├── src/
│   ├── index.js                 # Application entry point
│   ├── math.js                  # Math utility functions
│   ├── stringUtils.js           # String manipulation utilities
│   └── user.js                  # User class with validation
├── tests/
│   ├── math.test.js             # Tests for math utilities
│   ├── stringUtils.test.js      # Tests for string utilities
│   └── user.test.js             # Tests for User class
├── package.json                 # Project configuration
├── eslint.config.js             # ESLint flat config
├── .prettierrc                  # Prettier configuration
├── .gitignore                   # Git ignore rules
└── README.md                    # Project documentation
```

---

## Workflow Explanation

### CI Workflow (`ci.yml`)

The main pipeline runs four jobs in a dependency chain:

```
                                    ┌─────────────┐
                                    │  Lint &     │
                                    │  Format     │
                                    └──────┬──────┘
                                           │
                    ┌──────────────────────┼──────────────────────┐
                    │                      │                      │
                    ▼                      ▼                      ▼
            ┌──────────────┐      ┌──────────────┐      ┌──────────────┐
            │  Tests       │      │  Tests       │      │  Tests       │
            │  (Node 20)   │      │  (Node 22)   │      │  (Coverage)  │
            └──────┬───────┘      └──────┬───────┘      └──────┬───────┘
                   │                     │                     │
                   └─────────────────────┼─────────────────────┘
                                         │
                                         ▼
                                 ┌───────────────┐
                                 │    Build      │
                                 │   + Artifacts │
                                 └───────┬───────┘
                                         │
                                         ▼
                                 ┌───────────────┐
                                 │   Summary     │
                                 └───────────────┘
```

| Job | Description |
|-----|-------------|
| **Lint & Format** | Runs ESLint and Prettier checks. Fails on any violation. |
| **Unit Tests (Node 20 & 22)** | Runs Jest tests with coverage on both Node versions. Uploads coverage report on Node 22. |
| **Build** | Executes the application build. Uploads `dist/` as a build artifact. |
| **Summary** | Prints a markdown table with all job results to the workflow run page. |

### GitHub Actions Trigger Events

- **push** — Any commit to the `main` branch
- **pull_request (opened)** — A new PR is created
- **pull_request (synchronize)** — New commits are pushed to an existing PR
- **pull_request (reopened)** — A closed PR is reopened

---

## Security Features

| Feature | Description | Tool |
|---------|-------------|------|
| **npm Audit** | Checks dependencies for known vulnerabilities; fails on critical | `npm audit` |
| **CodeQL Analysis** | GitHub's semantic code analysis engine | `github/codeql-action` |
| **Secret Scanning** | Scans files for accidentally committed secrets/tokens | Trivy |
| **Dependency Review** | Reviews PR dependency changes for malicious packages | `actions/dependency-review-action` |
| **Scheduled Scan** | Security workflow also runs weekly on Mondays | cron schedule |

---

## Testing

- **Framework:** Jest
- **Coverage:** Generated via `jest --coverage` (lcov, json, text, clover)
- **Uploaded Artifact:** Coverage report from Node 22 run
- **Test files:** 3 test suites with 14 individual test cases

Run tests locally:

```bash
npm test
```

---

## Linting

- **Tool:** ESLint 9 (flat config)
- **Config:** `eslint.config.js` using `@eslint/js` recommended rules
- **Scope:** `src/` and `tests/` directories
- **Fail condition:** Any ESLint error will fail the workflow

```bash
npm run lint
```

---

## Formatting

- **Tool:** Prettier
- **Config:** `.prettierrc` (single quotes, trailing commas, 80 char width)
- **Scope:** `src/` and `tests/` JavaScript files
- **Fail condition:** Any formatting mismatch fails the workflow

```bash
npm run format       # Check only
npm run format:fix   # Auto-fix
```

---

## Build Process

The build step executes the application entry point to verify correctness and prepares a `dist/` directory containing:

- All source files (copied from `src/`)
- Build output log (`build-output.log`)

The artifact is uploaded and retained for 7 days.

```bash
npm run build
```

---

## How to Run Locally

### Prerequisites

- Node.js >= 20.0.0
- npm

### Setup

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/Continuous-Integration-Pipeline.git
cd Continuous-Integration-Pipeline

# Install dependencies
npm install

# Run linting
npm run lint

# Check formatting
npm run format

# Run tests with coverage
npm test

# Build
npm run build
```

---

## How to Trigger Workflow

1. Push code to the `main` branch
2. Open a pull request against `main`
3. Add commits to an existing pull request
4. Reopen a closed pull request

The workflow runs automatically — no manual trigger needed.

---

## Screenshots

*Screenshots of workflow runs, test results, and coverage reports will be added here.*

---

## Demo Video

*Link to a walkthrough video demonstrating the pipeline in action will be added here.*

---

## Future Improvements

- [ ] Add automatic release workflow with semantic versioning
- [ ] Add Docker image build and push to container registry
- [ ] Integrate with a deployment environment (staging/production)
- [ ] Add end-to-end (E2E) tests
- [ ] Add performance benchmarking to the pipeline
- [ ] Implement SonarQube for deeper code quality analysis
- [ ] Add Slack/email notifications for workflow failures

---

## Branch Protection Recommendations

Enable these rules in your GitHub repository settings under **Settings > Branches > Add rule**:

- Require pull request reviews before merging
- Require status checks to pass before merging (`Lint & Format`, `Unit Tests`, `Build`)
- Require branches to be up to date
- Do not allow bypassing the above settings

---

## License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

<p align="center">
  Built with ❤️ for HackWeek
</p>
