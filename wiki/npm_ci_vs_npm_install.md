# `npm ci` VS `npm install`

## ✨ Purpose & Use Case

### `npm install`

- Used during **development** to install dependencies
- Can **add**, **update**, or **modify** dependencies
- Updates `package-lock.json` if needed

### `npm ci` (Clean Install)

- Designed for **automated environments** like CI/CD pipelines
- Installs **exact versions** from `package-lock.json`
- Fails if `package.json` and `package-lock.json` are out of sync

## 🔍 Behavior Comparison

| Feature                      | `npm install`                      | `npm ci`                             |
| ---------------------------- | ---------------------------------- | ------------------------------------ |
| Requires `package-lock.json` | No                                 | Yes                                  |
| Modifies `package-lock.json` | Yes                                | Never                                |
| Deletes `node_modules`       | No                                 | Yes (always starts fresh)            |
| Adds new dependencies        | Yes                                | No                                   |
| Speed                        | Slower (especially with many deps) | Faster (deterministic install)       |
| Ideal for                    | Dev environments                   | CI/CD pipelines, reproducible builds |

## 🧠 Pro Tip

Use `npm ci` in your CI pipeline to ensure consistency and avoid unexpected dependency updates. For local development, stick with `npm install` when adding or updating packages.

---

🤖 _This file was generated with assistance from AI._
