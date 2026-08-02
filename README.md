# Mark — Independent AI Reading Product Demo

An independent interactive iPhone product-design concept for Mark, a hardware-and-software reading companion. The concept explores how physical-book readers could capture highlighted passages, preserve the thought they had in that moment, and gradually turn scattered notes into an inspectable personal knowledge network.

> **Brand and ownership notice:** Mark is not my product. Mark was created by the team behind [Think with Mark](https://www.thinkwithmark.com). This repository is an independent product-design exercise created for a job application; it is not the official Mark product, is not affiliated with or endorsed by the Mark team, and does not claim ownership of the Mark brand or original product.

> **Prototype notice:** Bluetooth sync, OCR, speech recognition, AI source-book suggestions, and AI responses are simulated with local demo data. This prototype demonstrates consumer product thinking, AI interaction design, and rapid prototyping rather than a production implementation.

**Online preview:** [GitHub Pages demo](https://mumu-w-01.github.io/mark-reading-demo/) · [Source repository](https://github.com/mumu-w-01/mark-reading-demo)

## 1. What is this for?

Mark is designed for people who read physical books and regularly underline passages, add sticky notes, or record ideas elsewhere.

The intended hardware flow is simple:

1. Scan a passage with the Mark pen.
2. Hold the button and speak for up to 1 minute 30 seconds.
3. Sync the captured passage and voice note to the phone.
4. Let AI suggest the most likely source book.
5. Confirm or correct the suggested book manually, or leave the note unassigned when its source is unknown.
6. Review the original passage and the thought together in the App.

The product follows four priorities, in this order:

1. Capture every note smoothly.
2. Make book-note review simple and fluid.
3. Help users retrieve the exact information they need.
4. Offer AI insights grounded in the user's own notes.

## 2. What problem does it solve?

Physical reading creates valuable thoughts, but those thoughts are often lost between the page, a voice memo, and a separate note-taking tool. Existing knowledge-management products also tend to make users organize information before they have finished capturing it.

Mark addresses this by:

- keeping the highlighted source and the user's own thought in one traceable note;
- separating fast capture from later organization;
- suggesting a likely source book after sync without forcing uncertain attribution;
- letting the user confirm or correct the source, or keep the note unassigned;
- supporting review by book or across all notes;
- providing focused search across quotes, thoughts, books, authors, dates, and tags;
- letting AI suggest tags, links, and insights while keeping the evidence visible;
- requiring user confirmation for important AI suggestions and keeping actions reversible.

The core principle is: **AI suggests; the reader decides.**

## 3. How do I use it?

### Run the demo

On macOS, double-click `启动Mark演示.command`.

Or run it from this folder:

```bash
python3 -m http.server 4173
```

Then open:

```text
http://localhost:4173/?v=58
```

No package installation or external API key is required.

### Recommended walkthrough

1. **Home** — review the latest sync status and open **Daily Review** to revisit one captured idea.
2. **Recently Captured** — inspect the 12-note sync batch, accept or decline AI-suggested tags, edit selected notes, and save the batch.
3. **Bookshelf · Books** — browse notes grouped by physical book, search the shelf, change sorting, or preview a full-book import.
4. **Bookshelf · Notes** — view the complete note stream. Long-press a card to select notes for auto-tagging, manual tagging, or moving to another book.
5. **Book Notes** — open a book, search within it, and scroll so the reading surface collapses to a compact title bar.
6. **Note Detail** — review or edit the source passage, personal thought, tags, and linked notes as one knowledge card; delete, edit, or share from the header.
7. **Search** — retrieve information with exact text and combined Date, Book, Tag, and Contains filters.
8. **Ask Mark** — choose an evidence scope and insight mode, ask a question, inspect cited notes, and save a useful answer back to Notes.

### Interaction check

Run the local coverage test after changing the UI:

```bash
node smoke-test.js
```

The current prototype covers 65 action types and 29 critical flows with no unbound visible buttons.

## 4. Last updated

**16 July 2026 — Demo v58**

Latest update: Ask Mark now includes four focused English-only Insight Skills—Knowledge Connector, Essence Distiller, Critical Prism, and Knowledge Auditor—with editable prompts and a simulated Thinking, Fast and Slow example. The current version also includes the Bookshelf/Notes dual view, dedicated Search, batch review, editable knowledge cards, evidence-backed Ask Mark responses, and save-to-Notes for useful AI answers.

## Project files

- `index.html` — application shell and PWA metadata
- `app.js` — screens, demo data, state, and interactions
- `styles.css` — mobile visual system and responsive layout
- `service-worker.js` — offline cache for the static prototype
- `smoke-test.js` — dependency-free interaction coverage check
- `DECISIONS.md` — product and interaction decisions behind the prototype

## Product design principles

- Input before organization.
- Preserve the user's meaning and its source.
- Keep AI conclusions inspectable.
- Let AI make suggestions, not irreversible decisions.
- Optimize mobile for capture, confirmation, and quick review.
- Build a knowledge network through human judgment rather than one-click automation.
