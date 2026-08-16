# Minify++ website handover

## Repository and source authority

Canonical Nift source lives on `stage` in `content/`, `templates/`, and `.nift/`.
The `main` branch is the built website, with deployable HTML and assets at its
root. On `stage`, `public/` is an embedded checkout of this repository's `main`
branch and is recorded as a Git link, matching the established Nift website
workflow. This handover belongs only on `stage`; do not place it on built `main`.

Edit source, run Nift to regenerate, and inspect the result. Do not hand-edit
generated HTML as the canonical change. The current configuration uses
`public/` output, modified-mode incrementality, and `templates/template.html`.
Commit source/tracking/handover changes on `stage`; commit the regenerated files
inside `public/` on its `main` branch; then commit the updated `public` Git-link
pointer on `stage`. Push both branches only when authorized. Never build while the
outer repository is on `main`, and never treat built HTML as source authority.

CSS and JavaScript are canonical readable sources under `content/assets/`, not
hand-edited files inside the deployment checkout. They are tracked Nift outputs
with per-entry `.css`/`.js` extensions and the content-only
`templates/asset.txt` template. Project-wide `minify-exts` minifies HTML, CSS,
and JavaScript after successful rendering. A normal `build-all` publishes pages
and assets together; if a deployment asset has deliberately been removed during
recovery, build the asset entries first so referring pages never race a missing
path during validation.

## Product responsibility

The site should explain a deliberately focused tool simply and honestly:

> Minify++ is a compact conservative C++ minifier for JavaScript, JSX, HTML, CSS,
> JSON, XML, and SVG.

Use the straightforward `minify` CLI as a strength. Do not invent a platform,
ecosystem, bundler, or compiler story around it.

Current identity is Minify++ 1.1.0; Sift is historical. Audit any old branding.
Minify++ is standalone. Nift consumes its public API for explicitly configured
final-output minification; Minify++ does not depend on Nift.

The 2026-08 content checkpoint expands the site from eight to eleven pages. In
addition to getting-started, CLI, formats, architecture, test evidence, and AI
evaluation, it now owns dedicated C++ API, performance, and production-readiness
references. `templates/sidebar.html` is the canonical documentation navigation;
do not reintroduce eleven divergent inline copies.

## Truthfulness and evidence

Correctness is at least as important as speed/output size. Explain conservative
semantic priorities and actual test families. Current homepage counts (15,459 JS
programs, 180 JSX/TSX cases, seven formats, format version 1) are checkpoint facts
and must be updated or replaced when scripts/contracts change.

Benchmark claims must include corpus, machine, build flags, tool versions,
iterations, and output-size/semantic-aggressiveness context. Report competitor
advantages honestly. Never publish a faster/smaller claim from a semantically
broken candidate.

XML/SVG wording must remain conservative: Minify++ is not a complete validating
XML parser. Do not imply universal modern-language support beyond tests and docs.

## Development workflow

When public behavior changes:

1. Reconcile website claims with current Minify++ source/tests/README/notes.
2. Search all content for affected formats, limits, commands, versions, counts,
   old Sift naming, Nift integration, and benchmark claims.
3. Verify important command examples against the candidate `minify` executable.
4. Build the site with the intended Nift binary.
5. Inspect generated diff, links/assets, responsive layout, and relevant themes.
6. Review release/download references and maturity language.
7. Review this handover and the product roadmap.

Internal refactors without public effect normally require only compatibility
validation, not marketing churn.

## Design

Keep the site proportional to the tool: direct, readable, fast, and low in
ceremony. Preserve the current design unless a redesign is requested. Do not copy
Nift's branding merely to manufacture a suite identity.

## Living production-support roadmap

Current priorities: reconcile site against Minify++ 1.1.0, ensure no stale Sift
identity, audit supported-format and malformed-input wording, verify examples and
test counts, contextualize benchmarks, describe standalone/Nift boundaries, and
validate release/download/publication information before production claims.

The 2026-08-16 product assessment is **PASS WITH KNOWN LIMITATIONS** for the
documented conservative contract on directly validated Linux x86-64. The site may
state that scoped decision only while it also preserves the explicit macOS/Windows,
XML/SVG validation, finite-corpus, and host-specific benchmark limitations.

The production-readiness page is the canonical public explanation of that
decision. Keep its evidence wall, limitations, downgrade triggers, and assessment
date synchronized with the standalone product's
`docs/handover/PRODUCTION-READINESS.md`. The performance page owns the public
host-specific benchmark table and must be refreshed whenever the retained
benchmark reference changes.

This roadmap and handover are living infrastructure. Review them at every
substantial Minify++ or website checkpoint. Correct/reorganize obsolete guidance,
capture durable lessons, and do not append a diary or let public claims outrun
implementation evidence.

Detailed Minify++ website history lives at
`docs/handover/PROJECT-HISTORY.md`, including naming history,
correctness/benchmark communication, development flow, production-support gates,
and the living roadmap.
