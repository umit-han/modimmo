# 🚀 modimmo

This project is built using **Next.js**, **TypeScript**, **TailwindCSS**, **Storybook**, **ESLint**, **Prettier**, **Commitlint**, and more. It provides a modern frontend development setup focused on scalability, consistency, and developer experience.

---

## 🛠️ Technologies Used

- **Next.js** – React-based framework for server-side rendering and routing
- **TypeScript** – Strongly typed JavaScript for better code quality
- **TailwindCSS** – Utility-first CSS framework for fast UI development
- **ESLint & Prettier** – Code linting and formatting
- **Storybook** – UI component development and documentation tool
- **Commitlint & Husky** – Enforces conventional commit messages and Git hooks

---

## 📦 Getting Started

To set up the development environment:

```bash
git clone git@github.com:umit-han/modimmo.git
cd modimmo
npm install
npm run prepare # Sets up Husky Git hooks
```

---

## 📜 Available Scripts

Here’s a list of useful npm scripts included in the project:

| Script                 | Description                                                      |
|-----------------------|------------------------------------------------------------------|
| `npm run dev`         | Starts the Next.js development server at localhost:3000         |
| `npm run build`       | Builds the production-ready Next.js app                         |
| `npm run start`       | Starts the production build                                     |
| `npm run lint`        | Runs ESLint and auto-fixes issues                              |
| `npm run lint-staged` | Lints only staged files (used with Husky pre-commit hook)       |
| `npm run format`      | Formats the entire codebase using Prettier                     |
| `npm run storybook`   | Starts Storybook locally at localhost:6006                    |
| `npm run test-storybook` | Runs Storybook component tests                               |
| `npm run build-storybook` | Builds a static version of Storybook for deployment        |
| `npm run prepare`     | Initializes Git hooks using Husky                               |

---

## 🧪 Code Quality & Linting

- **ESLint** is used for static code analysis.
- **Prettier** ensures consistent code formatting.
- **lint-staged** ensures only staged files are linted.
- **Husky** enables Git hook scripts for automatic checks.
- **Commitlint** enforces conventional commit message standards.

### ✅ Commit Message Format

Examples:

```bash
feat(button): add outline variant
fix(auth): correct token expiry bug
```