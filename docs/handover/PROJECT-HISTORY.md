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


## 2026-08-18 — Benchmarks page and methodology split

Added a dedicated Benchmarks page, navigation entry and cross-links from Performance/Docs. The page reports Minify++ output on three public CSS fixtures against the output sizes published by Lightning CSS for esbuild/Lightning CSS, while keeping local Minify++ timing separate because the competitor timing environment/API boundary is different. It also documents the Nift adapter prepared for the privatenumber JavaScript benchmark and refuses to invent an upstream rank before an actual run.

The follow-up checkpoint completed that measurement rather than leaving the
adapter aspirational. The page now leads with the i7-12700H host/methodology,
same-host current CSS versions and exact latency/size tables, then reports Nift's
complete 12-artifact upstream JavaScript run. Locally vendored Chart.js 4.5.1
adds responsive charts without replacing the tables. The published interpretation
keeps the unflattering evidence: Lightning CSS made every CSS fixture smaller,
Nift ranked last under the upstream size-heavy score, large JavaScript artifacts
exposed latency growth, and unavailable/failed competitors remain disclosed.

## 2026-08-18 — Documentation URL normalization

Normalized the Minify++ website to the same public documentation shape used by nift.dev: `/docs.html` remains the landing page and every secondary documentation, evidence, AI and design page now lives under `/docs/*.html`. Authored content moved under `content/docs/`, tracked names and `@pathto(...)` references were reconciled, stale root-level generated pages/metadata were removed, and current GitHub links were aligned with the `nift-dev` organization.

## 2026-08-18 — Architectural comparisons

Added `/docs/comparisons.html` as a decision-oriented comparison of Minify++ with Lightning CSS, esbuild, SWC, Terser and html-minifier-terser. The page separates architectural scope from measured benchmark evidence, calls out Minify++'s weaker AST/semantic optimization explicitly, and explains when using a specialist compiler/minifier is the better choice.

## 2026-08-18 — Comparison framing revision

- Reworked `docs/comparisons` so the table and tool-by-tool sections lead with strengths, weaknesses and scope differences rather than winner/loser language.
- Added explicit weaknesses to the table and retained contextual fit guidance for cases where a specialist or Minify++ is the more appropriate tool.
