# Demo interaction decisions

## 2026-07-16 · Replace Insight Skills with four deliberate thinking lenses

### Decision

- Keep exactly four Insight Skills: Knowledge Connector, Essence Distiller, Critical Prism, and Knowledge Auditor.
- Show each skill with a concise bilingual name and one-line explanation.
- Selecting a skill writes its complete, editable prompt into the Ask Mark composer.
- Use a simulated Thinking, Fast and Slow note as the Knowledge Connector example.

### Why

The Insight layer should help users perform distinct knowledge-work tasks rather than offer generic mood modes. Explicit prompts make the AI action inspectable before the user sends it.

## 2026-07-16 · Let users keep a useful Ask Mark answer

### Decision

- Add a compact save-to-Notes icon at the bottom-right of every completed Ask Mark answer.
- Save the original question, the answer, and its closing prompt as one AI Insight note.
- Preserve the evidence cards as explicit Linked Notes.
- Leave cross-book answers unassigned rather than forcing them into the first cited book.
- Change the icon to a saved state after one successful save.

### Why

AI output becomes durable knowledge only when the user explicitly decides it is worth keeping. Saving the evidence links makes the resulting note inspectable instead of turning it into an untraceable AI summary.

## 2026-07-16 · Make Library Notes directly batch-editable

### Decision

- Let a long press on any card in the Library's Notes view enter multi-select mode.
- Show selection checkboxes and keep tapping cards as the way to add or remove them from the batch.
- Offer `Auto-tag`, `＋ Tag`, and `Move` in the bottom action bar.
- Keep these controls hidden during normal browsing.

### Why

The Notes view is the user's complete working set, so it needs the same lightweight batch-editing behavior as notes inside one book without adding permanent interface clutter.

## 2026-07-16 · Separate AI-tag decisions from saving a sync batch

### Decision

- Replace `Select` with `Edit`, while keeping long-press as an equivalent way to enter selection mode.
- Put `Edit` and `Save` together in the top-right of Recently Captured.
- Remove explanatory microcopy and suggestion-count copy from the AI tag panel.
- Offer both `Decline all` and `Accept all`, with undo feedback for either decision.
- Let `Save` finish the review and return the user to Home.

### Why

Reviewing AI suggestions and completing a sync batch are separate decisions. Both should be explicit, compact, and reversible without forcing the user into selection mode.

## 2026-07-16 · Make one note read as one complete knowledge card

### Decision

- Place the source passage, `My Thought`, tags, and linked notes inside the same lined-paper card.
- Give `Tags` and `Linked Notes` the same section-label treatment as `My Thought`.
- Keep Delete, Edit, and Share together in the detail header, ordered left to right.
- Keep add-tag, add-link, direct editing, deletion, and undo behavior available from the detail page.

### Why

These elements describe one knowledge object rather than separate page modules. Keeping them on one paper surface improves traceability and makes the card easier to scan as a coherent unit.

## 2026-07-16 · Put global tag management in Your Mark

### Decision

- Add `Tag management` to the personal/device settings list, below `Device settings`.
- Open a focused sheet that shows every established tag and its current note count.
- Let a user reveal `Rename`, `Merge`, and `Delete` controls per tag, plus a separate `New tag` entry.
- Keep applying tags to notes inside the existing note and batch-edit flows.

### Why

Applying a tag and maintaining the tag vocabulary are different jobs. Note pages should stay optimized for capture and organization, while global cleanup belongs in the low-frequency personal settings area.

## 2026-07-16 · Make Search a dedicated primary destination

### Decision

- Rename the third bottom-navigation destination from `All Notes` to `Search`.
- Keep complete note browsing inside the Library's `Books / Notes` switch, with the Books tab active in bottom navigation for both Library perspectives.
- Give Search its own primary route and a professional retrieval surface.
- Search across highlighted text, personal thoughts, book titles, authors, and tags.
- Support combinable Date, Book, Tag, and Contains filters, plus quick filters for attention, missing tags, links, thoughts, and recent notes.

### Why

Browsing all notes and trying to retrieve one specific memory are different jobs. The Library provides broad browsing from either source or note perspective; Search becomes the focused place for exact queries and compound filtering.

## 2026-07-16 · Make Library switch between Books and Notes

### Decision

- Remove the weekly reading summary and the permanent Books search field.
- Keep the global top row as the Mark device icon on the left and `＋` on the right.
- Add large `Books / Notes` labels as two views of the same Library: Books groups notes by source; Notes shows the full note stream directly.
- Give both views the same three compact tools: expanding search, contextual sort, and import.
- Let search on Books match book titles, authors, and the notes inside each book.
- Add an import sheet for Kindle, Markdown/CSV, and physical-book scanning; every route represents importing a complete book together with its notes.
- Expand the demonstration library from four books to ten, with at least one example note in each added book.

### Why

The Library should answer two natural retrieval questions—“Which book was it in?” and “Which note was it?”—without mixing in reading analytics. Search, sort, and import support both perspectives, while the large view labels make the switch understandable before users learn the bottom navigation.

## 2026-07-16 · Simplify each Book page around retrieval and lightweight editing

### Decision

- Remove `Details`, the top-right overflow entry, and the Book-level AI Insight card from Book Notes.
- Show the author, publication year, shelf-added date, and note count directly beside the cover.
- Replace the `All notes / Select` heading with a persistent in-book search field and an `Edit` action.
- Let `Edit` or a long press enter the same multi-select state.
- Show a floating selected-count pill and three compact batch actions: `Auto-tag`, `Edit tags`, and `Move`.

### Why

The Book page is primarily a place to reopen notes from one known source. Essential book facts should be visible without a secondary details sheet, while search and lightweight batch editing belong next to the notes they affect. AI analysis remains available through Ask Mark rather than taking permanent space on every Book page.

## 2026-07-16 · Turn Recently Captured into Daily Review

### Decision

- Rename the Home section from `Recently Captured` to `Daily Review` and add a little more breathing room below the sync card.
- Keep the stacked Home preview, but make it open one focused review card instead of a list of recently organized notes.
- Structure the review card around capture type and date, the original highlighted passage, and a book-source row anchored at the bottom.
- Keep the page source-first: no tags, AI prompts, or organization controls are added to this review moment.

### Why

The Home entry should invite a calm daily return to one captured idea, not open another archive. A single spacious card makes the highlight easier to revisit and keeps its book provenance visible without turning review into management work.

## 2026-07-16 · Replace internal stages with a flomo-style retrieval page

### Decision

- Remove the visible `Stage / Captured / Knowledge` filter because those are internal data concepts, not natural retrieval intents.
- Search now opens a dedicated page patterned after flomo: one search field, `Date / Book / Tag` dropdowns, and quick filters.
- Quick filters cover `Needs attention`, `Untagged`, `Has links`, `Has thoughts`, and `This week`.
- Remove the separate `Found something worth keeping?` card and `Save as knowledge` modal from Book Notes.

### Why

Users remember when they read something, which book it came from, what tag they gave it, or a distinguishing phrase. The product should organize retrieval around those memories instead of asking users to understand the system's processing stages.

## 2026-07-16 · Make device sync a bounded 12-note review batch

### Decision

- The completed `12 notes synced` card opens a dedicated `Recently Captured` batch page, not `All Notes`.
- The page contains exactly the 12 notes from that device sync and keeps the one uncertain Book assignment visible in context.
- AI-suggested hierarchical tags remain proposals until the user chooses `Accept all`.
- Users can instead enter selection mode, choose any subset, and apply a tag in bulk.
- Accepting all suggestions is reversible through the toast undo action.

### Why

Synchronization, review, and long-term retrieval are different jobs. A bounded batch gives users a clear moment to inspect what arrived and confirm AI organization before those notes blend into the full library.

## 2026-07-16 · Flatten Note Detail organization

### Decision

- Remove the expandable `Organize this note` card and the Discipline, Concept, and Response chips.
- Keep only `Tags` and `Linked Notes`, rendered as flat inline text rows beneath the note.
- Preserve explicit `Add tag` and `Add link` actions without surrounding pill controls.

### Why

The chip-heavy property panel made metadata appear to float above the reading surface and gave every AI-derived attribute equal visual weight. Tags and links are the two user-controlled organization actions that matter here, so they should read as part of the note rather than as a separate database form.

## 2026-07-16 · Remove the separate reflection composer

### Decision

- Remove `Reflection Now` from Note Detail together with its save action and styles.
- Keep the saved thought itself directly editable; adding another reflection is not a separate high-frequency action in this detail view.

### Why

The note page should remain a compact reading-and-organization surface. A second writing composer duplicates the existing thought-editing capability and adds visual weight without a distinct core job.

## 2026-07-16 · Remove original-audio playback from Note Detail

### Decision

- Remove `Show original audio & transcript` from the note-detail page.
- Remove its UI state, event handler, and styles so the page has no dead or hidden playback interaction.
- Keep audio capture as an input mechanism; playback is not part of the high-frequency review journey.

### Why

Readers return to the cleaned thought and its book context, not to a short raw recording. Removing the playback control keeps Note Detail focused on reading, editing, tagging, linking, and reflection.

## 2026-07-15 · Complete interaction prototype

### Decision

- Home is a return surface: sync status, Capture History, exceptions, and this week's reading signal.
- All Notes is the management surface: high-density cards, search/filter, explicit batch selection, and per-card `•••` actions.
- A card's `•••` opens single-note actions; it never silently changes selection state. `Select this note` enters batch mode with that card preselected.
- Ask Mark requires an inspectable evidence scope. Any non-empty question returns a local example answer and source cards.
- Mobile shows related ideas locally inside a card instead of rendering a global graph.
- Complex folder management is excluded. Book attribution, hierarchical tags, and user-confirmed links are sufficient for this demo.

### Why

The prototype must demonstrate consumer-product judgment, not feature volume: immediate capture, dense review, low-cost correction, reversible organization, and AI that can show where its answer came from.

### Rejected alternatives

- Hidden long-press as the only selection entry: efficient but not discoverable.
- Permanent checkboxes: makes a reading archive feel like a task list.
- Card `•••` immediately toggles selection: conflicts with the common expectation that it opens item actions.
- Global mobile knowledge graph: visually impressive but low-frequency and hard to read on a small screen.

### Rollback

Revert `app.js`, `styles.css`, and the `v=11` cache/version updates in `index.html` and `service-worker.js`. No persisted data migration is involved.
## 2026-07-16 · Make All Notes retrieval behave like Mem

### Decision

- Keep a full-width search field visible above the note list.
- Replace the separate search/filter screens with one composable row: `Sort by`, `Tags`, and `Contains`.
- Let users combine multiple tags using `In any of` or `In all of`.
- Use the compact page heading as the current-view label: `All Notes` by default, the tag itself for one selected tag, and a back control to restore the prior unfiltered view.
- Do not expose internal processing stages such as `Captured` or `Knowledge` in retrieval.

### Why

People retrieve notes through remembered content and attributes, not through the product's processing pipeline. Search, tag logic, content presence, and sort order are understandable, composable dimensions; internal stages are not.
## 2026-07-16 · Replace capture with search on Books

### Decision

- Replace the Books-page `Add note` button with a persistent search field beside the Mark profile shortcut.
- Filter the visible book list immediately by title or author.
- Keep capture entry points on other surfaces; Books remains focused on finding and reopening books.

### Why

The high-frequency job on Books is retrieval. A global capture shortcut competes with that job and duplicates entry points available elsewhere, while book search reduces the time required to return to a specific reading context.
## 2026-07-16 · Turn Books into a compact visual shelf

### Decision

- Remove the redundant `Books` page title; the persistent book search already establishes context.
- Replace colored spines with compact, locally rendered cover art for each book.
- Compress weekly reading into a one-line summary and a four-week intensity heatmap.

### Why

Book covers are faster to recognize and create a stronger emotional connection than text-only rows. Reading activity is useful as a supporting signal, but it should not compete with the primary job of finding and reopening a book.

## 2026-07-16 · Make Ask Mark evidence selection a retrieval surface

### Decision

- Remove explanatory headings and product-language prefixes from the evidence picker.
- Use one persistent search field to find either a concrete recent note or a book.
- Split results into `Recent Notes` and `Books`; selecting a note scopes the answer to that card, while selecting a book scopes it to all notes from that book.
- Keep `Use all notes` as a clear fallback instead of mixing it into the book list.
- Make the sheet taller so knowledge cards remain readable without turning the picker into a separate page.

### Why

The user opens this sheet to retrieve evidence, not to learn what an answer scope is. Concrete note previews reduce selection errors, while the book-level option preserves a fast path for broader analysis.

## 2026-07-16 · Put Ask conditions and query on one row

### Decision

- Place evidence scope, insight mode, query input, and send action on one compact horizontal row.
- Show the selected book/note and selected insight name with truncation instead of stacking controls above the input.

### Why

Evidence scope and insight mode both change how Mark answers. Keeping them together beside the query makes their relationship visible and removes unnecessary vertical hierarchy from a frequent interaction.

## 2026-07-16 · Make every child-page back action source-aware

### Decision

- Keep the Mark profile icon on the three primary destinations: Home, Books, and All Notes.
- Use a consistent left-facing Back button on History, Capture Batch, Profile, Book Notes, Note Detail, and Ask Mark.
- Record the real source route when entering a child page, including nested flows such as History → Batch and Book → Ask.
- Fall back to the logical parent only when no source route exists.

### Why

A back arrow is a promise to restore the user's previous context. Hard-coded destinations break that promise and make nested review flows feel unpredictable.

## 2026-07-16 · Treat every sync as a batch to review

### Decision

- Remove the separate single-note warning from Home and avoid labeling one capture as the problem.
- Present the sync as one completed batch that is ready for review and organization.
- Keep uncertain AI tag suggestions visible as yellow chips; a confirmed suggestion becomes a normal gray-green tag.
- Rename the lower Home section to `All Collections` without a competing right-side action.

### Why

The user needs to confirm the batch, not diagnose an AI exception. Uncertainty belongs on the exact suggestion that needs judgment, while successful synchronization should remain a calm, trustworthy system state.

## 2026-07-16 · Restore Mark's original Recently Captured card

### Decision

- Remove the invented `Capture History` heading and batch-metadata row from Home.
- Restore the original stacked-paper card with a `Recently Captured` pill, one recent passage, and its book source.
- Keep the whole card as the entry to the latest 12-note batch review.

### Why

The original component communicates the latest captured idea directly and carries more emotional value than operational batch metadata. Batch management remains available after the user enters the card.

## 2026-07-16 · Make note linking searchable and persistent

### Decision

- Add a search field to `Link a related note` and match against thoughts, quotes, books, authors, and tags.
- Show AI suggestions only while the query is empty; switch to explicit search results once the user types.
- Exclude the current note and notes already linked to it.
- Persist the selected link on the source note so it appears under `Linked Notes` after the modal closes.

### Why

Suggestions are a useful shortcut but cannot replace intentional retrieval. A knowledge link represents the user's judgment, so the user must be able to find and choose the exact note they mean.

## 2026-07-16 · Select the current result set, not the whole library

### Decision

- Remove the isolated `Select` button from the All Notes heading.
- Place a `Select all results` checkbox directly between the filters and the note list.
- When checked, enter bulk-selection mode with only the notes produced by the current search and filters selected.

### Why

Bulk organization normally begins with retrieval: users first narrow the library, then act on the matching notes. Keeping selection beside the result set makes its scope visible and prevents accidental changes to notes outside the current view.

## 2026-07-16 · Separate sync review from recently organized knowledge

### Decision

- Promote `Recently Captured` to a Home section title at the same hierarchy as `All Collections`.
- Make the recent card open a list of recently organized, already-tagged notes.
- Keep AI tag confirmation inside the synchronization batch flow instead of the recent-review flow.
- Restore a 2×2 folder-style collection grid on Home and use a conventional chat-bubble icon for Ask Mark.

### Why

Sync review is operational work; Recently Captured is a return-to-knowledge moment. Separating them keeps Home calm and makes every entry's purpose predictable, while the folder grid preserves the tactile book-collection identity already established by Mark.

## 2026-07-16 · Make the plus button mean “write now”

### Decision

- Open a lightweight bottom input sheet immediately after the user taps `＋`.
- Remove the intermediate choice between Mark capture, photo, and manual writing from this entry.
- Keep the active book visible at the top, while tags, photo, and voice remain optional tools beneath the note.
- Save the note to the chosen book without requiring a title, folder, or tag.

### Why

The plus button is a high-frequency escape hatch for the moment when Mark is not in hand. Asking users to classify the input method before they can write creates unnecessary friction; the Flomo-style bottom sheet preserves context, opens faster, and still keeps source and optional organization one tap away.
