# Playwright Tip: Using `force: true` Safely

Playwright allows developers to override default interaction safety checks using the `force: true` option in actions like `.click()`.

```ts
await locator.click({ force: true });
```

---

## ⚠️ Use as a Surgical Workaround

**Like a scalpel, not a sledgehammer.**

This setting should only be used **strategically and sparingly** to work around visual or layout blockers.

---

## 🔍 What It Does

`force: true` will force the click to happen even when:

- The element is covered by another DOM node
- It's not fully visible
- It's considered non-interactable by normal Playwright constraints

---

## 🚨 Why It’s Risky

Overusing `force: true` can lead to unreliable tests:

- ✅ **False positives** – Tests might pass even though real users can't click
- 🐛 **Masked issues** – UI bugs like slow rendering, animation delays, or z-index layering get hidden

---

## ✅ When to Use It

Use `force: true` only if:

- You’re confident the blocking element is harmless (e.g., a decorative `<h2>` floating near the click target)
- You’ve already tried and exhausted more reliable approaches

---

## 🧼 Recommended Alternatives

Before reaching for `force: true`, consider these strategies:

- `scrollIntoViewIfNeeded()` – Brings the element fully into view
- `waitFor({ state: 'visible' })` – Ensures rendering is complete
- CSS fix:

```css
.floating-banner {
  pointer-events: none;
}
```

These techniques help preserve test integrity and better reflect real user interactions.


*This file was generated with assistance from AI.*