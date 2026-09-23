# Extension summary for IJCSIS

**Journal submission:** *Learned Patterns and Offline Operation in Spanish: A Human-Centered, Multi-Distribution Natural Language Interface for GNU/Linux*

**Extends:** Aragon Toledo, J. R. and Ruiz Rodríguez, R. (2026). *BOTAS: A Human-Centered Natural Language Interface for GNU/Linux System Management with Multi-Distribution Support.* In Proceedings of the International Conferences on Artificial Intelligence in Society 2026, Digital Transformation and Innovation Management 2026 and Connected Smart Cities 2026, pp. 100–110. Valencia, Spain: IADIS Press. ISBN 978-989-8704-78-8.

This paper has not been extended into any other journal manuscript or book chapter.

---

## 1. Extent of the extension

Measured on the body text of both manuscripts (introduction through conclusion, excluding front matter and reference list), counted by the same script:

| | Conference version | Journal version | Change |
|---|---:|---:|---|
| Body words | 3,366 | 6,749 | **+3,383 (+101 %)** |
| Sections / subsections | 6 / 17 | 6 / 20 | +3 subsections |
| Figures (panels) | 5 (5) | 5 (7) | all newly produced |
| Tables | 2 | 4 | +2 |
| References | 33 | 32 | see note below |
| Length | — | 18 pages | within the 16–18 page guidance, in both the typeset PDF and the Word source |

The requirement is a minimum of 30 %. The body text has doubled.

## 2. What is new, section by section

| Section | Status | Content |
|---|---|---|
| 1. Introduction | rewritten | Restated contributions; explicit statement of what this version adds over the conference paper. |
| 2. Related Work | expanded | New subsections on free-software voice assistants for GNU/Linux (Jasper, Mycroft, OpenVoiceOS) and on how a learned-pattern tier differs from semantic caching of model responses. |
| 3.1 Three-tier pipeline | rewritten | The architecture is re-presented as a cost-escalating pipeline; transcription deduplication documented. |
| **3.2 Learned task patterns** | **entirely new** | The `TaskLearner` module: TF–IDF with smoothed IDF and cosine retrieval in pure Perl, the 0.60 confidence threshold, duplicate suppression at 0.95, reverse engineering of variables into parameterised templates, the six semantic roles and 62 lexical anchors used to refill them, the three-strategy fill chain, and the pattern lifecycle with its utility-based eviction. New Figures 2 and 3. |
| 3.3 Safety | expanded | From four categories of dangerous operation to the six deterministic layers, including environment sanitisation, path whitelisting and operational limits. |
| 3.4 Multi-distribution support | expanded | Six families with their managers, the 12 × 4 package-translation dictionary with Debian naming as lingua franca, the unattended installer and the architecture-independent packaging. |
| **3.5 Online and offline operation** | **entirely new** | The three components that swap between cloud and local implementations, hot switching, and the adaptations a small local model requires (history truncation, token limits, extended timeouts, reduced prompt, heuristic JSON extraction). |
| 4.1 Note on published figures | **entirely new** | Transparent reconciliation of the figures reported in the proceedings against the present measurements — see §4 below. |
| 4.2 Benchmark | rewritten | Enlarged from 200 to 250 tasks, scored by an automated harness under an action-agreement criterion over an in-scope subset. New coverage-against-precision analysis contrasting two cloud models. New Table 2. |
| **4.3 Offline viability** | **entirely new** | 100-task subset against a locally served 6.7-billion-parameter model, with the three hardware constraints that had to be reconciled (parameter floor for valid structured output, latency cost of reasoning models, and fitting a quantised model plus its key–value cache into 6 GB of video memory). |
| **4.4 Multi-distribution validation** | **entirely new** | Unattended installation on clean virtual machines across three package managers, and the four robustness defects the exercise surfaced. New Table 3. |
| **4.5 Usability study** | **entirely new** | Second round, n = 14, within-subject for modality and between-subject for language model. Effectiveness, efficiency and satisfaction. New Figure 4 and Table 4. |
| **4.6 Voice against manual command lookup** | **entirely new** | Controlled within-subject comparison, n = 7, counterbalanced. New Figure 5 and Table 5. |
| 5. Discussion | rewritten | New framing reconciling the two speed results; model choice as an interaction-design decision; expanded and more explicit limitations. |
| 6. Conclusion | rewritten | Rewritten around the three principal results. |

## 3. New empirical material

None of the following appears in the conference version:

1. **Second usability study** (n = 14, plus one pilot): three realistic file-management tasks, each performed first with pointer and keyboard and then by voice, under two language-model back ends assigned alternately. Weighted success rates, times with dispersion, post-task and final satisfaction instruments, and thematic coding of observer sheets and verbalisations.
2. **Controlled comparison against manual command lookup** (n = 7): within-subject, counterbalanced, five-minute cap, with participants free to consult search engines, tutorials and general-purpose conversational assistants in the baseline condition. Exact Wilcoxon signed-rank test, paired *t*, effect size and confidence interval, plus order-effect and sensitivity analyses.
3. **Enlarged benchmark**: 250 tasks scored by an automated harness, with risk detection cross-tabulated against expected risk level, and a second full run under a different cloud model.
4. **Offline evaluation**: 100-task subset against a locally served model, including the two safety false negatives it produced and what they imply for the deterministic safety layer.
5. **Multi-distribution validation**: unattended installation verified on clean machines across `apt`, `dnf` and `pacman`.

## 4. Why some figures differ from the published version

The conference paper reported 89 % command-generation accuracy over 200 tasks, a 9.4× speed-up against manual construction, and roughly 30 % of requests resolved by the local intent detector. The journal version reports 78.0 % coverage with 87.6 % precision when acting, a 2.80× speed-up, and 4.4 % local coverage.

The measurements were retaken with better instruments, and the paper says so explicitly in section 4.1 rather than substituting one set of numbers for the other silently:

- The task set grew from 200 to 250, and scoring moved from manual verification by the lead developer to an automated harness that drives the real pipeline.
- The correctness criterion was tightened to action agreement over an in-scope subset, with tasks outside the system's action repertoire removed from the denominator rather than scored generously.
- The informal timing comparison was replaced by a controlled, counterbalanced within-subject experiment, which yields a smaller speed-up that is, for the first time, statistically supported.
- The 30 % local-coverage estimate described conversational turns, which are frequent in daily use but almost absent from a benchmark composed of command-generation tasks; measured on that benchmark the figure is 4.4 %.

### A note on the reference list

The count is slightly lower than in the conference version (32 against 33) even though the manuscript has doubled in length. Fourteen references were added for the new material — voice assistants for GNU/Linux, semantic caching, thematic analysis, the usability standard, and the statistical methods behind the controlled comparison — while fifteen were removed: citations whose claim was already carried by a surviving reference, and citations of tools named in the text that do not require one.

## 5. Compliance with the invitation

| Requirement | Status |
|---|---|
| New title | Yes — new title, distinct from the conference paper |
| Revised abstract | Yes — rewritten around the new contributions and results |
| Extension of at least 30 % | Yes — body text +100 % |
| English, copy edited and proofread | Yes |
| Length rarely above 14 pages, maximum 16–18 | 18 pages |
| Journal guidelines and template | Yes — A4, margins 5.5 / 5.0 / 4.3 / 3.3 cm, Times 10 pt, no headers, footers or page numbers, Harvard author–date references with hanging indent |
| Colour figures | Yes — all figures are colour vector graphics, legible in greyscale |
| Source file in Word format | Yes — `BOTAS_IJCSIS_2026_EN.docx`, 18 pages, A4, journal template styles |
| Copyright form signed | **Pending — to be signed and returned with the manuscript** |
