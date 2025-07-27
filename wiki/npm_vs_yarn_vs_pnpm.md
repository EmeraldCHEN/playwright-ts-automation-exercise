# 📦 `npm` vs `yarn` vs `pnpm`

JavaScript/TypeScript projects rely on package managers to handle dependencies.
The three most commonly used are **npm**, **yarn**, and **pnpm**.
This comparison highlights their differences, performance, features and workflow features.

## 📌 Overview

| Feature               | npm                    | yarn            | pnpm                   |
| --------------------- | ---------------------- | --------------- | ---------------------- |
| Developer             | npm (GitHub / OpenJS)  | Meta (Facebook) | Independent            |
| Installation Speed    | ⚪ Moderate            | 🟢 Fast         | 🟢 Fast (via symlinks) |
| Disk Space Efficiency | 🔴 Low (duplication)   | 🟡 Medium       | 🟢 High (shared store) |
| Determinism           | 🟡 `package-lock.json` | 🟢 `yarn.lock`  | 🟢 `pnpm-lock.yaml`    |
| Workspaces Support    | 🟢 Yes (v7+)           | 🟢 Yes          | 🟢 Yes                 |
| CLI Usability         | 🟢 Familiar            | 🟢 Friendly     | 🟡 Learning curve      |
| Community & Adoption  | 🟢 Widely used         | 🟢 Popular      | 🟡 Growing rapidly     |

## Performance Comparison

| Category         | **npm** | **yarn**                                   | **pnpm**                              |
| ---------------- | ------- | ------------------------------------------ | ------------------------------------- |
| Speed            | Slower  | Faster (v1), v2+ slower due to Plug’n’Play | Fastest due to symlinked node_modules |
| Disk Space Usage | High    | High                                       | Very Low (deduplicates packages)      |
| Network Caching  | Basic   | Good                                       | Excellent                             |

## 🛠️ Key Features

### npm

- Native to Node.js
- Supports workspaces since v7
- CLI is universally recognized

### Yarn

- Plug'n'Play (PnP) for faster installs
- Built-in workspaces
- Zero-installs via `.yarn/cache`

### pnpm

- Uses symlinks for optimal deduplication
- Strict `node_modules` isolation
- Fast and efficient with monorepos

### Pros and Cons

`npm`

✅ Pros:

- Official, default package manager

- Widely adopted and stable

- Improved performance in recent versions

❌ Cons:

- Historically slower

- Duplicate dependency installs

`yarn`

✅ Pros:

- Great for monorepos (Workspaces)

- Plug’n’Play (optional)

- Better output/logging

❌ Cons:

- Slightly more complex config

- Yarn v2+ not compatible with older tools

`pnpm`

✅ Pros:

- Blazing fast

- Saves disk space

- Strict dependency resolution

❌ Cons:

- May require adjustments for legacy projects

- Not as mainstream as `npm` or `yarn`

---

## ⚖️ Choosing the Right Tool

- Use **npm** if you want the default, Node-compatible experience with solid CI/CD support
- Choose **yarn** for large projects or PnP benefits
- Opt for **pnpm** if you care about disk space, performance, and monorepo scalability

---

🤖 _This file was generated with assistance from AI._
