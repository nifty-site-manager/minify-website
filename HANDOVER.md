# Minify++ website handover

## Repository and source authority

This repository is a Nift project on `main`. Canonical source is `content/`,
`templates/`, and `.nift/`; generated website output is `public/` in the same
repository. This handover belongs at the repository root and must not be placed in
`public/`.

Edit source, run Nift to regenerate, and inspect the result. Do not hand-edit
generated HTML as the canonical change. The current configuration uses
`public/` output, modified-mode incrementality, and `templates/template.html`.
Local builds are normal validation; commits, pushes, releases, and deployments
require explicit approval. Exact hosting/publication procedure remains to be
confirmed with Nick rather than inferred from a one-commit repository.

## Product responsibility

The site should explain a deliberately focused tool simply and honestly:

> Minify++ is a compact conservative C++ minifier for JavaScript, JSX, HTML, CSS,
> JSON, XML, and SVG.

Use the straightforward `minify` CLI as a strength. Do not invent a platform,
ecosystem, bundler, or compiler story around it.

Current identity is Minify++ 1.1.0; Sift is historical. Audit any old branding.
Minify++ is standalone. Nift consumes its public API for explicitly configured
final-output minification; Minify++ does not depend on Nift.

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

This roadmap and handover are living infrastructure. Review them at every
substantial Minify++ or website checkpoint. Correct/reorganize obsolete guidance,
capture durable lessons, and do not append a diary or let public claims outrun
implementation evidence.

Detailed Minify++ website history lives at
`docs/handover/PROJECT-HISTORY.md`, including naming history,
correctness/benchmark communication, development flow, production-support gates,
and the living roadmap.
