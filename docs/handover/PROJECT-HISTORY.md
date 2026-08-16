# Project history and institutional context

> This is a living historical companion to the repository's operational handover. The live repository remains authoritative. Maintain, correct, reorganize, or supersede this material as project evidence evolves while retaining durable rationale.

# Minify++ Website

## Product Communication, Development and Production-Support Handover

# 1. Identity

The Minify++ website exists to explain a deliberately small product.

It should therefore remain correspondingly straightforward.

The product itself is approximately:

> **Minify++ — fast HTML, CSS and JavaScript minification.**

---

# 2. Naming

Current intended identity:

```text
Project: Minify++
Command: minify
```

Older material may use:

```text
Sift
```

because that was the working name during development.

Audit old website content/assets for stale naming.

---

# 3. Core message

The command itself communicates much of the product:

```bash
minify index.html
minify styles.css
minify app.js
minify index.html styles.css app.js
```

Use that simplicity.

Do not invent an enormous conceptual hierarchy around a small CLI.

---

# 4. Relationship to Nift

Explain accurately:

```text
Minify++:
    standalone tool

Nift:
    can use Minify++ functionality for configured output types
```

Avoid:

```text
Minify++ only exists as a Nift plugin
```

or:

```text
Nift requires Minify++
```

unless current architecture genuinely changes to that.

---

# 5. Nift integration wording

An important fact worth communicating:

> Minification in Nift is opt-in by configured extension.

This helps users understand the safety boundary.

---

# 6. Correctness positioning

A minifier website should not market only:

```text
fast
small output
```

Correctness matters at least as much.

A useful testing story can explain coverage around:

```text
HTML whitespace-sensitive contexts
CSS token boundaries
JavaScript ASI
strings
templates
comments
modern syntax
real-world corpus
malformed input
sanitizers
```

but only claim what the current suite genuinely verifies.

---

# 7. Benchmark integrity

Every performance comparison should include enough context to understand:

```text
machine
tool versions
input corpus
iterations
compiler/build flags
output size
```

where relevant.

Do not cherry-pick.

If another minifier compresses more aggressively, that can be stated.

If Minify++ is faster while deliberately more conservative, that can also be stated.

---

# 8. Website development workflow

When Minify++ changes publicly observable behavior:

```text
search site for affected claims
↓
update syntax/options/examples
↓
update limitations
↓
revalidate examples
↓
revalidate benchmarks if affected
↓
build site
↓
inspect rendered pages
↓
check download/version links
↓
handover/roadmap review
```

Internal refactoring does not require ceremonial website edits.

---

# 9. Relationship to production status

The Minify++ website should not declare the product production-ready before the implementation evidence supports it.

During pre-production stages, wording should accurately communicate maturity.

As production approaches, the site should be checked for:

```text
unsupported syntax accidentally presented as supported
stale limitations
old command syntax
old Sift naming
benchmark drift
incorrect Nift integration claims
version mismatch
```

---

# 10. Website production-support gate

Before a Minify++ production release, verify:

```text
current installation instructions
current CLI examples
current supported-language claims
current limitations
current Nift integration behavior
current download/release references
benchmark reproducibility/context
testing/correctness claims
```

---

# 11. Current website roadmap

**LIVING ROADMAP**

```text
reconcile site with current Minify++ implementation
↓
remove stale Sift naming
↓
clarify current maturity
↓
document supported behavior honestly
↓
build correctness/testing narrative
↓
validate examples
↓
benchmark audit
↓
Nift integration explanation
↓
release/download audit
↓
production-launch content pass
```

After production:

```text
keep syntax support current
keep benchmarks contextualized
update limitations
add meaningful examples
reflect new platforms/install methods
```

---

# 12. Roadmap maintenance

Add explicitly:

> The website roadmap follows Minify++ development. At every significant Minify++ checkpoint, review whether new syntax support, discovered limitations, testing evidence, performance results or release decisions require website changes. The roadmap should be revised continuously rather than treated as a pre-release checklist frozen in time.

---

# 13. Deployment

Determine from repository reality:

```text
source branch
build system
whether Nift builds it
generated output location
deployment branch
hosting
publication procedure
```

Do not copy Nift website's branch architecture simply for consistency.

---

# 14. Do not accidentally

```text
overcomplicate the product
claim semantic safety without evidence
publish unfair benchmarks
make Minify++ appear Nift-dependent
retain Sift branding accidentally
promise unsupported JS/CSS/HTML
```

---

---

