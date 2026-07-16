const state = {
  route: "home",
  routeStack: [],
  sync: "syncing",
  detailId: "n5",
  detailReturnRoute: "all",
  activeBookId: "b2",
  selectionMode: false,
  selected: new Set(),
  attentionOnly: false,
  modal: null,
  captureStep: 1,
  isRecording: false,
  editingThought: false,
  askAnswered: false,
  askSaved: false,
  askQuery: "",
  askScope: null,
  scopeSearchQuery: "",
  linkSearchQuery: "",
  activeSkill: null,
  searchOpen: false,
  searchQuery: "",
  bookSearchQuery: "",
  bookNoteSearchQuery: "",
  librarySearchOpen: false,
  librarySortOpen: false,
  bookSortBy: "updated",
  importContext: "books",
  searchFilterMenu: null,
  dateFilter: "all",
  bookFilter: "all",
  tagFilter: "all",
  tagFilters: [],
  tagMatchMode: "any",
  containsFilter: "all",
  sortBy: "newest",
  quickFilter: null,
  tagTargets: [],
  tagManagerTag: null,
  captureSource: "mark",
  manualDraft: "",
  manualBookId: "b3",
  manualTags: [],
  manualSourceOpen: false,
  manualTagOpen: false,
  manualHasPhoto: false,
  manualRecording: false,
  batchFilter: null,
  batchTagDecision: null,
  cardMenuNoteId: null,
};

const insightPrompts = {
  "Knowledge Connector": "Please act as my Knowledge Connector. Current note from Thinking, Fast and Slow: “People often judge a decision by its outcome instead of the quality of the decision process.” My thought: “A good process can still produce a bad result, so I should evaluate decisions before I know the outcome.” Scan my notes from the last three months. Find 3 older notes that contradict this view and 2 underlying principles that support it. End with one sentence: is my thinking deepening or migrating?",
  "Essence Distiller": "Please act as my Essence Distiller. Remove stories, examples, rhetoric, and emotional adjectives. Compress this note into one factual If–Then action rule of no more than 20 words. If the causal logic is weak, say: “The causal relationship does not hold,” then explain why.",
  "Critical Prism": "Please act as my Critical Prism. Assume you are a top expert who strongly disagrees with my note. Ask three questions: what is its biggest hidden assumption, what extreme counterexample breaks it, and would the conclusion survive if its most emotional word were removed?",
  "Knowledge Auditor": "Please act as my Knowledge Auditor. Analyze my notes on this topic, extract the five most frequent concepts, compare them with a 5W1H or PDCA framework, identify the least-mentioned core element, and ask three sharp questions I should have asked.",
};

const books = [
  { id: "b1", title: "The Creative Act", author: "Rick Rubin", year: "2023", added: "Apr 16, 2026", color: "#567f98", cover: "creative", summary: "Attention, taste, and the courage to notice what others miss.", reason: "To understand how attention and taste shape creative work.", note: "Notice which passages change how I observe my own creative process." },
  { id: "b2", title: "48 Laws of Power", author: "Robert Greene", year: "1998", added: "Jul 15, 2026", color: "#b98725", cover: "power", summary: "Power becomes clearer when you notice the gap between words and intent.", reason: "To recognize power dynamics without accepting every tactic in the book.", note: "Separate useful observation from advice I disagree with." },
  { id: "b3", title: "Thinking, Fast and Slow", author: "Daniel Kahneman", year: "2011", added: "May 2, 2026", color: "#6d845f", cover: "thinking", summary: "A practical map of judgment, bias, and the limits of intuition.", reason: "To examine where my product decisions rely too heavily on intuition.", note: "Collect examples that can be applied to consumer decision design." },
  { id: "b4", title: "Shoe Dog", author: "Phil Knight", year: "2016", added: "Jun 11, 2026", color: "#87506f", cover: "shoe", summary: "Ambition feels less heroic—and more human—up close.", reason: "To understand the uncertain, unpolished side of building a company.", note: "Pay attention to identity, persistence, and founder judgment." },
  { id: "b5", title: "Atomic Habits", author: "James Clear", year: "2018", added: "Jul 10, 2026", color: "#b8b0a0", cover: "atomic", summary: "Small systems compound into durable change.", reason: "To design habits that survive imperfect motivation.", note: "Focus on systems, identity, and environmental cues." },
  { id: "b6", title: "Deep Work", author: "Cal Newport", year: "2016", added: "Jun 28, 2026", color: "#44728a", cover: "deep", summary: "Focused attention is becoming both rarer and more valuable.", reason: "To protect concentration in an interruption-heavy workflow.", note: "Collect practical rules for sustained focus." },
  { id: "b7", title: "The Design of Everyday Things", author: "Don Norman", year: "2013", added: "Jun 3, 2026", color: "#d8c34e", cover: "design", summary: "Good design makes the right action visible and understandable.", reason: "To sharpen my judgment about everyday product affordances.", note: "Notice where confusion is caused by the object, not the user." },
  { id: "b8", title: "Sapiens", author: "Yuval Noah Harari", year: "2011", added: "May 25, 2026", color: "#c8b08a", cover: "sapiens", summary: "Shared stories let large groups coordinate.", reason: "To revisit how narratives shape institutions and behavior.", note: "Separate memorable framing from historical certainty." },
  { id: "b9", title: "Man's Search for Meaning", author: "Viktor E. Frankl", year: "1946", added: "May 12, 2026", color: "#a66a44", cover: "meaning", summary: "Meaning can preserve agency under severe constraint.", reason: "To understand resilience without reducing it to optimism.", note: "Pay attention to choice, responsibility, and suffering." },
  { id: "b10", title: "The Almanack of Naval Ravikant", author: "Eric Jorgenson", year: "2020", added: "Apr 30, 2026", color: "#222d2d", cover: "almanack", summary: "Specific knowledge and leverage change how value is created.", reason: "To examine the relationship between judgment, wealth, and freedom.", note: "Keep ideas that can be tested in real decisions." },
];

const notes = [
  { id: "n1", bookId: "b1", page: 18, quote: "Look for what you notice but no one else sees.", thought: "Attention may be the root of creative taste.", raw: "I think, um, attention might actually be the root of having creative taste.", date: "Apr 16 · 8:10 AM", discipline: "Creativity", concepts: ["Attention", "Taste"], response: ["Resonated"], suggestedResponse: "Inspired", folder: "Creative Practice", tags: ["#Creativity/Attention"], color: "blue" },
  { id: "n2", bookId: "b1", page: 52, quote: "Our world grows in proportion to what we are able to perceive.", thought: "A richer life may begin with noticing more, not doing more.", raw: "Maybe a richer life is just noticing more things, not necessarily doing more and more.", date: "Apr 18 · 10:23 PM", discipline: "Philosophy", concepts: ["Awareness", "Perception"], response: ["Resonated"], suggestedResponse: "Curious", folder: "Attention & Perception", tags: ["#Life/Awareness"], color: "plum" },
  { id: "n3", bookId: "b3", page: 74, quote: "Nothing in life is as important as you think it is while you are thinking about it.", thought: "Attention does not merely reveal importance; it manufactures it.", raw: "Attention kind of makes things feel more important than they really are.", date: "May 02 · 7:54 AM", discipline: "Psychology", concepts: ["Cognitive Bias", "Attention"], response: ["Surprised"], suggestedResponse: "Questioned", folder: "Attention & Perception", tags: ["#Psychology/Bias"], color: "green" },
  { id: "n4", bookId: "b4", page: 112, quote: "The cowards never started and the weak died along the way.", thought: "Persistence is often just identity surviving uncertainty.", raw: "Maybe persistence is just your identity surviving all the uncertainty.", date: "Jun 11 · 9:05 PM", discipline: "Biography", concepts: ["Identity", "Persistence"], response: ["Inspired"], suggestedResponse: "Actionable", folder: "Work & Identity", tags: ["#Work/Identity"], color: "plum" },
  { id: "n5", bookId: "b2", page: 41, quote: "A truce is not peace.", thought: "Temporary calm can hide an unresolved conflict; relief is not resolution.", raw: "Another impressive moment from, um, once when speaking about my exes, he referred to them as my blacklist.", date: "Today · 12:38 AM", discipline: "Strategy", concepts: ["Conflict", "Power"], response: ["Questioned"], suggestedResponse: "Uneasy", folder: "Power & Decisions", tags: [], suggestedTags: ["#Life/Conflict"], color: "gold" },
  { id: "n6", bookId: "b2", page: 56, quote: "Never put too much trust in friends; learn how to use enemies.", thought: "Trust should be earned from aligned incentives, not familiar history.", raw: "Trust is not just because we have known each other for a long time, it is about incentives.", date: "Today · 12:41 AM", discipline: "Strategy", concepts: ["Trust", "Incentives"], response: ["Challenged"], suggestedResponse: "Disagreed", folder: "Power & Decisions", tags: [], suggestedTags: ["#Life/Trust"], color: "gold" },
  { id: "n7", bookId: "b2", page: 63, quote: "Always say less than necessary.", thought: "Silence preserves optionality; over-explaining gives away leverage.", raw: "When I explain too much I think I lose room to move, so silence keeps options.", date: "Today · 12:44 AM", discipline: "Communication", concepts: ["Silence", "Power"], response: ["Actionable"], suggestedResponse: "Resonated", folder: "Power & Decisions", tags: [], suggestedTags: ["#Work/Communication"], color: "blue" },
  { id: "n8", bookId: "b2", page: 88, quote: "The moment of victory is often the moment of greatest peril.", thought: "Success lowers vigilance exactly when consequences become larger.", raw: "Success makes people relax right when, um, the consequences get bigger.", date: "Today · 12:47 AM", discipline: "Psychology", concepts: ["Risk", "Overconfidence"], response: [], suggestedResponse: "Surprised", folder: "Power & Decisions", tags: [], suggestedTags: ["#DecisionMaking/Risk"], color: "green", attention: true },
  { id: "n9", bookId: "b2", page: 78, quote: "When asking for help, appeal to people's self-interest.", thought: "Requests become clearer when they show the other person what they gain.", raw: "People probably respond better when the request makes their own benefit clear.", date: "Today · 12:50 AM", discipline: "Strategy", concepts: ["Incentives", "Communication"], response: ["Actionable"], suggestedResponse: "Useful", folder: "Power & Decisions", tags: [], suggestedTags: ["#DecisionMaking/Incentives"], color: "blue" },
  { id: "n10", bookId: "b2", page: 102, quote: "So much depends on reputation—guard it with your life.", thought: "Reputation compresses trust before direct evidence appears.", raw: "Reputation works like a shortcut for trust before people see the actual evidence.", date: "Today · 12:53 AM", discipline: "Strategy", concepts: ["Reputation", "Trust"], response: ["Resonated"], suggestedResponse: "Questioned", folder: "Power & Decisions", tags: [], suggestedTags: ["#Work/Reputation"], color: "plum" },
  { id: "n11", bookId: "b2", page: 131, quote: "Cultivate an air of unpredictability.", thought: "Unpredictability can protect options, but it also taxes trust.", raw: "Being unpredictable may preserve options, but people might stop trusting you.", date: "Today · 12:56 AM", discipline: "Psychology", concepts: ["Uncertainty", "Trust"], response: ["Questioned"], suggestedResponse: "Uneasy", folder: "Power & Decisions", tags: [], suggestedTags: ["#Life/Uncertainty"], color: "green" },
  { id: "n12", bookId: "b2", page: 164, quote: "Use absence to increase respect and honor.", thought: "Scarcity changes perceived value, but absence without substance becomes emptiness.", raw: "Scarcity can make something seem more valuable, but only if there was value there first.", date: "Today · 12:59 AM", discipline: "Behavior", concepts: ["Scarcity", "Value"], response: ["Challenged"], suggestedResponse: "Useful", folder: "Power & Decisions", tags: [], suggestedTags: ["#Behavior/Scarcity"], color: "gold" },
  { id: "n13", bookId: "b2", page: 190, quote: "Pose as a friend, work as a spy.", thought: "Curiosity reveals more than interrogation, but hidden intent corrodes relationships.", raw: "Listening with curiosity works better than interrogation, but secret motives damage relationships.", date: "Today · 1:01 AM", discipline: "Communication", concepts: ["Listening", "Intent"], response: ["Questioned"], suggestedResponse: "Disagreed", folder: "Power & Decisions", tags: [], suggestedTags: ["#Work/Communication"], color: "blue" },
  { id: "n14", bookId: "b2", page: 231, quote: "Control the options: get others to play with the cards you deal.", thought: "Good product choices reduce complexity without making users feel trapped.", raw: "For products, good choices reduce complexity but should not make the user feel trapped.", date: "Today · 1:03 AM", discipline: "Product", concepts: ["Choice", "Control"], response: ["Actionable"], suggestedResponse: "Inspired", folder: "Power & Decisions", tags: [], suggestedTags: ["#Product/ChoiceArchitecture"], color: "green" },
  { id: "n15", bookId: "b2", page: 305, quote: "Plan all the way to the end.", thought: "A plan is valuable when it exposes consequences, not when it pretends uncertainty is gone.", raw: "Planning helps because it reveals consequences, not because it removes uncertainty.", date: "Today · 1:05 AM", discipline: "Strategy", concepts: ["Planning", "Uncertainty"], response: ["Resonated"], suggestedResponse: "Actionable", folder: "Power & Decisions", tags: [], suggestedTags: ["#DecisionMaking/Planning"], color: "plum" },
  { id: "n16", bookId: "b2", page: 420, quote: "Assume formlessness.", thought: "Adaptability is preserving purpose while changing form.", raw: "Being adaptable means the purpose stays stable while the form changes.", date: "Today · 1:06 AM", discipline: "Growth", concepts: ["Adaptability", "Purpose"], response: ["Inspired"], suggestedResponse: "Resonated", folder: "Power & Decisions", tags: ["#Growth/Adaptability"], suggestedTags: [], color: "blue" },
  { id: "n17", bookId: "b5", page: 27, quote: "You do not rise to the level of your goals. You fall to the level of your systems.", thought: "A reliable system matters most on the days motivation disappears.", raw: "The system is what remains when motivation is gone.", date: "Jul 10 · 9:12 PM", discipline: "Behavior", concepts: ["Systems", "Habits"], response: ["Actionable"], suggestedResponse: "Useful", folder: "Personal Systems", tags: ["#Life/Habits"], color: "green" },
  { id: "n18", bookId: "b6", page: 44, quote: "Clarity about what matters provides clarity about what does not.", thought: "Focus is partly the courage to leave worthwhile things undone.", raw: "Choosing focus means some good things still do not get done.", date: "Jun 28 · 7:40 AM", discipline: "Work", concepts: ["Focus", "Tradeoffs"], response: ["Resonated"], suggestedResponse: "Actionable", folder: "Focused Work", tags: ["#Work/Focus"], color: "blue" },
  { id: "n19", bookId: "b7", page: 13, quote: "When an error happens, it is usually a problem of the system, not the person.", thought: "Good products make recovery obvious instead of blaming the user.", raw: "A user error often means the interface did not explain the action.", date: "Jun 03 · 10:18 PM", discipline: "Design", concepts: ["Affordance", "Recovery"], response: ["Actionable"], suggestedResponse: "Inspired", folder: "Product Design", tags: ["#Product/Design"], color: "gold" },
  { id: "n20", bookId: "b8", page: 32, quote: "Large numbers of strangers can cooperate successfully by believing in common myths.", thought: "Products also scale through shared stories about identity and belonging.", raw: "Shared stories might be infrastructure for communities and products.", date: "May 25 · 8:32 PM", discipline: "History", concepts: ["Narrative", "Coordination"], response: ["Curious"], suggestedResponse: "Questioned", folder: "Social Systems", tags: ["#Society/Narrative"], color: "plum" },
  { id: "n21", bookId: "b9", page: 66, quote: "When we are no longer able to change a situation, we are challenged to change ourselves.", thought: "Agency sometimes survives by changing the stance we take toward reality.", raw: "Sometimes our remaining choice is how we relate to what cannot change.", date: "May 12 · 6:45 AM", discipline: "Psychology", concepts: ["Agency", "Meaning"], response: ["Resonated"], suggestedResponse: "Meaningful", folder: "Meaning", tags: ["#Life/Meaning"], color: "gold" },
  { id: "n22", bookId: "b10", page: 31, quote: "Specific knowledge is found by pursuing your genuine curiosity and passion.", thought: "The most defensible expertise often feels unusually natural to its owner.", raw: "Specific knowledge can look effortless because it fits the person.", date: "Apr 30 · 11:08 PM", discipline: "Work", concepts: ["Knowledge", "Leverage"], response: ["Inspired"], suggestedResponse: "Useful", folder: "Career", tags: ["#Work/SpecificKnowledge"], color: "green" },
];

const captureBatches = [
  { id: "batch-today", label: "Today · 12:38–1:06 AM", method: "Mark device", bookId: "b2", noteIds: ["n5", "n6", "n7", "n8", "n9", "n10", "n11", "n12", "n13", "n14", "n15", "n16"], status: "Ready to review" },
  { id: "batch-jun11", label: "Jun 11 · 9:05 PM", method: "Mark device", bookId: "b4", noteIds: ["n4"], status: "Synced" },
  { id: "batch-may02", label: "May 02 · 7:54 AM", method: "Photo", bookId: "b3", noteIds: ["n3"], status: "Confirmed" },
  { id: "batch-apr", label: "Apr 16–18", method: "Mark device", bookId: "b1", noteIds: ["n1", "n2"], status: "Synced" },
];

const app = document.querySelector("#app");
const modalRoot = document.querySelector("#modal-root");
const toastRoot = document.querySelector("#toast-root");

const byBook = id => books.find(book => book.id === id);
const noteCount = id => notes.filter(note => note.bookId === id).length;
const escapeHtml = value => String(value ?? "").replace(/[&<>'"]/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[char]);
const primaryRoutes = new Set(["home", "books", "all", "search"]);
const childRoutes = new Set(["history", "batch", "recent", "profile", "book", "detail", "ask"]);
const routeFallbacks = { history: "home", batch: "home", recent: "home", profile: "home", book: "books", detail: "all", ask: "home" };

function navigateToRoute(route, options = {}) {
  if (!route || route === state.route) return;
  if (childRoutes.has(route)) state.routeStack.push(state.route);
  if (primaryRoutes.has(route)) state.routeStack = [];
  state.route = route;
  if (route === "books" || route === "all") { state.librarySearchOpen = false; state.librarySortOpen = false; }
  if (route === "all") { state.batchFilter = null; state.attentionOnly = false; state.searchQuery = ""; state.dateFilter = "all"; state.bookFilter = "all"; state.tagFilter = "all"; state.tagFilters = []; state.containsFilter = "all"; state.quickFilter = null; }
  if (!options.preserveSelection) {
    state.selectionMode = false;
    state.selected.clear();
  }
  render();
  window.scrollTo(0, 0);
}

function goBackRoute() {
  const fallback = state.route === "detail" ? (state.detailReturnRoute || "all") : (routeFallbacks[state.route] || "home");
  const previous = state.routeStack.pop();
  state.route = previous && previous !== state.route ? previous : fallback;
  state.selectionMode = false;
  state.selected.clear();
  render();
  window.scrollTo(0, 0);
}

function markIcon() {
  return `<span class="mark-glyph" aria-label="Mark"></span>`;
}

function searchIcon() {
  return `<svg class="search-icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5"></circle><path d="M15.5 15.5 21 21"></path></svg>`;
}

function filterIcon() {
  return `<svg class="filter-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6h16M7 12h10M10 18h4"></path></svg>`;
}

function sortIcon() {
  return `<svg class="library-tool-svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 4v16M5 7l3-3 3 3M16 20V4M13 17l3 3 3-3"></path></svg>`;
}

function importIcon() {
  return `<svg class="library-tool-svg" viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="3.5" width="13" height="13" rx="2"></rect><path d="M14 18.5h7M17.5 15v7"></path></svg>`;
}

function chatIcon() {
  return `<svg class="chat-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5.5h16v11H10l-4.5 3.5v-3.5H4z"></path></svg>`;
}

function topbar() {
  return `<header class="mark-topbar">
    <button class="brand-button" data-route="profile" aria-label="Profile and connected Mark">${markIcon()}</button>
    <div class="topbar-actions">
      <button class="round-button" data-action="open-capture" aria-label="Add note">＋</button>
    </div>
  </header>`;
}

function librarySortPanel(active) {
  if (!state.librarySortOpen) return "";
  if (active === "books") {
    return `<div class="library-sort-panel">${[["updated","Recently updated"],["name","Name A–Z"],["notes","Most notes"]].map(([value, label]) => `<button class="${state.bookSortBy === value ? "active" : ""}" data-book-sort="${value}"><span>${label}</span><i>${state.bookSortBy === value ? "✓" : ""}</i></button>`).join("")}</div>`;
  }
  return `<div class="library-sort-panel">${[["newest","Recently updated"],["oldest","Oldest first"],["book","Book A–Z"]].map(([value, label]) => `<button class="${state.sortBy === value ? "active" : ""}" data-sort-value="${value}"><span>${label}</span><i>${state.sortBy === value ? "✓" : ""}</i></button>`).join("")}</div>`;
}

function libraryHeader(active) {
  const isBooks = active === "books";
  const query = isBooks ? state.bookSearchQuery : state.searchQuery;
  const inputId = isBooks ? "book-library-search" : "all-search-input";
  const inputLabel = isBooks ? "Search books, authors, or notes" : "Search all notes";
  return `<div class="library-view-head">
    <div class="library-view-tabs"><button class="${isBooks ? "active" : ""}" data-route="books">Books</button><button class="${isBooks ? "" : "active"}" data-route="all">Notes</button></div>
    <div class="library-view-tools"><button class="${state.librarySearchOpen ? "active" : ""}" data-action="toggle-library-search" aria-label="Search ${isBooks ? "books" : "notes"}">${searchIcon()}</button><button class="${state.librarySortOpen ? "active" : ""}" data-action="toggle-library-sort" aria-label="Sort ${isBooks ? "books" : "notes"}">${sortIcon()}</button><button data-action="open-import" aria-label="Import books and notes">${importIcon()}</button></div>
  </div>
  ${state.librarySearchOpen ? `<label class="library-search-panel"><span>${searchIcon()}</span><input id="${inputId}" value="${escapeHtml(query)}" placeholder="${inputLabel}" aria-label="${inputLabel}" autofocus />${query ? (isBooks ? `<button type="button" data-action="clear-book-search" aria-label="Clear library search">×</button>` : `<button type="button" data-action="clear-note-search" aria-label="Clear library search">×</button>`) : ""}</label>` : ""}
  ${librarySortPanel(active)}`;
}

function nav(active) {
  return `<div class="bottom-dock">
    <nav class="mark-nav" aria-label="Primary navigation">
      ${[["home", "Home"], ["books", "Bookshelf"], ["search", "Search"]].map(([route, label]) =>
        `<button class="mark-nav-button ${active === route ? "active" : ""}" data-route="${route}">${label}</button>`
      ).join("")}
    </nav>
    <button class="ask-fab" data-route="ask" aria-label="Ask Mark">${chatIcon()}</button>
  </div>`;
}

function noteCard(note, options = {}) {
  const book = byBook(note.bookId);
  const selected = state.selected.has(note.id);
  return `<article class="idea-card ${options.grid ? "grid" : ""} ${selected ? "selected" : ""}" data-note-id="${note.id}" data-color="${note.color}" tabindex="0">
    ${state.selectionMode ? `<span class="select-dot">${selected ? "✓" : ""}</span>` : ""}
    <p class="idea-time">${note.date}</p>
    <h3>${note.thought}</h3>
    ${options.withQuote && !note.manual ? `<p class="idea-quote">“${note.quote}”</p>` : ""}
    <div class="idea-meta"><span>${book ? book.title : "Unassigned"}</span><span>p. ${note.page}</span></div>
  </article>`;
}

function compactNoteCard(note, options = {}) {
  const book = byBook(note.bookId);
  const selected = state.selected.has(note.id);
  const tags = note.tags || [];
  const suggestedTags = options.showSuggestions ? (note.suggestedTags || []) : [];
  return `<article class="compact-note-card ${selected ? "selected" : ""}" data-note-id="${note.id}" tabindex="0">
    ${state.selectionMode ? `<span class="compact-check">${selected ? "✓" : ""}</span>` : ""}
    <div class="compact-note-body">
      ${!state.selectionMode ? `<button class="card-more" data-card-menu="${note.id}" aria-label="More actions for this note">•••</button>` : ""}
      <p class="compact-quote">${note.manual ? escapeHtml(note.thought) : `“${escapeHtml(note.quote)}”`}</p>
      ${note.manual ? "" : `<p class="compact-thought">${escapeHtml(note.thought)}</p>`}
      <div class="compact-meta"><span>${book ? book.title : "Source suggested"} · p.${note.page}</span><time>${note.date.replace("Today · ", "")}</time></div>
      <div class="compact-tags">${tags.map(tag => `<span>${tag}</span>`).join("")}${suggestedTags.map(tag => `<button class="suggested-tag ${note.attention ? "low-confidence" : ""}" data-accept-note-tag="${note.id}" data-tag-value="${escapeHtml(tag)}">${note.attention ? "?" : "✦"} ${escapeHtml(tag)}</button>`).join("")}${state.selectionMode || options.allowTagAdd === false ? "" : `<button data-tag-note="${note.id}">${tags.length || suggestedTags.length ? "+" : "+ Tag"}</button>`}</div>
    </div>
  </article>`;
}

function visibleAllNotes() {
  const query = state.searchQuery.trim().toLowerCase();
  const filtered = notes.filter(note => {
    if (state.batchFilter) {
      const batch = captureBatches.find(item => item.id === state.batchFilter);
      if (batch && !batch.noteIds.includes(note.id)) return false;
    }
    if (state.attentionOnly && !note.attention) return false;
    if (state.bookFilter !== "all" && note.bookId !== state.bookFilter) return false;
    if (state.dateFilter === "today" && !note.date.startsWith("Today")) return false;
    if ((state.dateFilter === "week" || state.dateFilter === "month") && !note.date.startsWith("Today")) return false;
    if (state.tagFilters.length) {
      const tags = note.tags || [];
      const matchesTags = state.tagMatchMode === "all"
        ? state.tagFilters.every(tag => tags.includes(tag))
        : state.tagFilters.some(tag => tags.includes(tag));
      if (!matchesTags) return false;
    }
    if (state.containsFilter === "thought" && !note.thought.trim()) return false;
    if (state.containsFilter === "linked" && !notes.some(item => item.id !== note.id && item.concepts.some(concept => note.concepts.includes(concept)))) return false;
    if (state.containsFilter === "attention" && !note.attention) return false;
    if (state.containsFilter === "untagged" && (note.tags || []).length) return false;
    if (state.tagFilter !== "all" && !(note.tags || []).includes(state.tagFilter)) return false;
    if (state.quickFilter === "attention" && !note.attention) return false;
    if (state.quickFilter === "untagged" && (note.tags || []).length) return false;
    if (state.quickFilter === "linked" && !notes.some(item => item.id !== note.id && item.concepts.some(concept => note.concepts.includes(concept)))) return false;
    if (state.quickFilter === "thoughts" && !note.thought.trim()) return false;
    if (state.quickFilter === "week" && !note.date.startsWith("Today")) return false;
    if (!query) return true;
    const book = byBook(note.bookId);
    return [note.quote, note.thought, book?.title, book?.author, ...(note.tags || []), ...(note.suggestedTags || [])].filter(Boolean).join(" ").toLowerCase().includes(query);
  });
  if (state.sortBy === "oldest") return filtered;
  if (state.sortBy === "book") return [...filtered].sort((a, b) => (byBook(a.bookId)?.title || "Unassigned").localeCompare(byBook(b.bookId)?.title || "Unassigned"));
  return [...filtered].reverse();
}

function allNotesFilterPanel() {
  const tags = [...new Set(notes.flatMap(note => note.tags || []))];
  if (state.searchFilterMenu === "sort") {
    return `<div class="mem-filter-panel mem-option-list">${[["newest","Newest first"],["oldest","Oldest first"],["book","Book A–Z"]].map(([value, label]) => `<button class="${state.sortBy === value ? "active" : ""}" data-sort-value="${value}"><span>${label}</span><i>${state.sortBy === value ? "✓" : ""}</i></button>`).join("")}</div>`;
  }
  if (state.searchFilterMenu === "tags") {
    return `<div class="mem-filter-panel tag-filter-panel">
      <div class="tag-match-mode"><button class="${state.tagMatchMode === "any" ? "active" : ""}" data-tag-mode="any">In any of</button><button class="${state.tagMatchMode === "all" ? "active" : ""}" data-tag-mode="all">In all of</button></div>
      <div class="filter-tag-list">${tags.map(tag => `<button class="${state.tagFilters.includes(tag) ? "active" : ""}" data-filter-tag="${tag}">${tag}<span>${state.tagFilters.includes(tag) ? "✓" : "+"}</span></button>`).join("")}</div>
      ${state.tagFilters.length ? `<button class="clear-tag-filters" data-action="clear-tag-view">Clear tags</button>` : ""}
    </div>`;
  }
  if (state.searchFilterMenu === "contains") {
    return `<div class="mem-filter-panel mem-option-list">${[["all","Anything"],["thought","Has a thought"],["linked","Has links"],["attention","Needs attention"],["untagged","No tags"]].map(([value, label]) => `<button class="${state.containsFilter === value ? "active" : ""}" data-contains-value="${value}"><span>${label}</span><i>${state.containsFilter === value ? "✓" : ""}</i></button>`).join("")}</div>`;
  }
  return "";
}

function searchMenuOptions() {
  const tags = [...new Set(notes.flatMap(note => note.tags || []))];
  if (state.searchFilterMenu === "date") {
    return `<div class="search-option-menu">${[["all","Any time"],["today","Today"],["week","This week"],["month","This month"]].map(([value, label]) => `<button class="${state.dateFilter === value ? "active" : ""}" data-search-date="${value}">${label}<span>${state.dateFilter === value ? "✓" : ""}</span></button>`).join("")}</div>`;
  }
  if (state.searchFilterMenu === "book") {
    return `<div class="search-option-menu"><button class="${state.bookFilter === "all" ? "active" : ""}" data-search-book="all">All books<span>${state.bookFilter === "all" ? "✓" : ""}</span></button>${books.map(book => `<button class="${state.bookFilter === book.id ? "active" : ""}" data-search-book="${book.id}">${book.title}<span>${state.bookFilter === book.id ? "✓" : ""}</span></button>`).join("")}</div>`;
  }
  if (state.searchFilterMenu === "tag") {
    return `<div class="search-option-menu"><button class="${state.tagFilter === "all" ? "active" : ""}" data-tag-filter="all">All tags<span>${state.tagFilter === "all" ? "✓" : ""}</span></button>${tags.map(tag => `<button class="${state.tagFilter === tag ? "active" : ""}" data-tag-filter="${tag}">${tag}<span>${state.tagFilter === tag ? "✓" : ""}</span></button>`).join("")}</div>`;
  }
  return "";
}

function notesSearchScreen() {
  const visible = visibleAllNotes();
  const activeSearch = Boolean(state.searchQuery.trim() || state.dateFilter !== "all" || state.bookFilter !== "all" || state.tagFilter !== "all" || state.containsFilter !== "all" || state.quickFilter);
  const dateLabel = { all: "Date", today: "Today", week: "This week", month: "This month" }[state.dateFilter];
  const bookLabel = state.bookFilter === "all" ? "Book" : byBook(state.bookFilter)?.title;
  const tagLabel = state.tagFilter === "all" ? "Tag" : state.tagFilter;
  const containsLabel = { all: "Contains", thought: "Thought", linked: "Links", attention: "Attention", untagged: "No tags" }[state.containsFilter];
  const quickFilters = [["attention","Needs attention"],["untagged","Untagged"],["linked","Has links"],["thoughts","Has thoughts"],["week","This week"]];
  return `<section class="screen professional-search-screen">
    ${topbar()}
    <div class="professional-search-title"><h1>Search</h1></div>
    <label class="professional-search-field"><span>${searchIcon()}</span><input id="all-search-input" value="${escapeHtml(state.searchQuery)}" placeholder="Search quotes, thoughts, books, authors, or tags" aria-label="Professional search" />${state.searchQuery ? `<button type="button" data-action="clear-note-search" aria-label="Clear professional search">×</button>` : ""}</label>
    <div class="search-dropdown-row professional-filter-row">
      <button class="${state.dateFilter !== "all" ? "active" : ""}" data-search-menu="date">${escapeHtml(dateLabel)} <span>⌄</span></button>
      <button class="${state.bookFilter !== "all" ? "active" : ""}" data-search-menu="book">${escapeHtml(bookLabel || "Book")} <span>⌄</span></button>
      <button class="${state.tagFilter !== "all" ? "active" : ""}" data-search-menu="tag">${escapeHtml(tagLabel)} <span>⌄</span></button>
      <button class="${state.containsFilter !== "all" ? "active" : ""}" data-filter-menu="contains">${escapeHtml(containsLabel)} <span>⌄</span></button>
    </div>
    ${searchMenuOptions()}
    ${allNotesFilterPanel()}
    <section class="quick-searches"><h2>Quick filters</h2><div>${quickFilters.map(([value, label]) => `<button class="${state.quickFilter === value ? "active" : ""}" data-search-quick="${value}">${label}</button>`).join("")}</div></section>
    ${activeSearch ? `<div class="search-results-head"><strong>${visible.length} ${visible.length === 1 ? "result" : "results"}</strong><span>Newest first</span></div><div class="compact-note-list search-results-list">${visible.length ? visible.map(compactNoteCard).join("") : `<div class="compact-empty"><strong>No matching notes</strong><span>Try another word or remove a filter.</span></div>`}</div>` : `<div class="search-empty-state"><span>⌕</span><p>Search exact words or combine filters to narrow your library.</p></div>`}
  </section>${nav("search")}`;
}

function syncCard() {
  if (state.sync === "syncing") {
    return `<div class="sync-card syncing">
      <span class="sync-orb"></span>
      <div><strong>Syncing with Mark</strong><small>12 notes found on device</small></div>
      <span class="sync-count">7 / 12</span>
    </div>`;
  }
  return `<button class="sync-card complete" data-view-batch="batch-today">
    <span class="sync-check">✓</span>
    <div><strong>12 notes synced</strong><small>Ready to review and organize</small></div>
    <span class="sync-arrow">›</span>
  </button>`;
}

function homeScreen() {
  const recentReadyNotes = notes.filter(note => (note.tags || []).length);
  const latestNote = [...recentReadyNotes].reverse().find(note => note.date.startsWith("Today")) || recentReadyNotes.at(-1);
  const latestBook = byBook(latestNote?.bookId);
  const homeCollections = ["b3", "b4", "b2", "b1"].map(byBook).filter(Boolean);
  return `<section class="screen home-screen">
    ${topbar()}
    <div class="welcome-head"><h1>Welcome back</h1><span class="device-status"><i></i> Mark connected</span></div>
    ${syncCard()}

    <div class="section-heading home-heading"><h2>Daily Review</h2></div>
    <div class="recent-captured-stack home-recent-stack">
      <span class="recent-captured-paper back"></span>
      <span class="recent-captured-paper middle"></span>
      <button class="recent-captured-card" data-route="recent">
        <i class="recent-captured-arrow">›</i>
        <strong>${escapeHtml(latestNote?.quote || latestNote?.thought || "12 new notes")}</strong>
        <span class="recent-ready-tag">${escapeHtml(latestNote?.tags?.[0] || "#RecentlyCaptured")}</span>
        <small><span>⌛</span>${escapeHtml(latestBook?.title || "Reading notes")}</small>
      </button>
    </div>

    <div class="section-heading collection-heading"><h2>All Collections</h2></div>
    <div class="home-collection-grid">${homeCollections.map(book => `<button class="home-collection-card" data-book-id="${book.id}" style="--collection-color:${book.color}"><strong>${escapeHtml(book.title)}</strong><small>${escapeHtml(book.summary)}</small></button>`).join("")}</div>
  </section>${nav("home")}`;
}

function recentlyCapturedScreen() {
  const recentReadyNotes = notes.filter(note => (note.tags || []).length);
  const note = [...recentReadyNotes].reverse().find(item => item.date.startsWith("Today")) || recentReadyNotes.at(-1) || notes.at(-1);
  const book = byBook(note.bookId);
  return `<section class="screen no-tabbar daily-review-screen">
    <header class="mini-topbar"><button class="back-button" data-action="go-back" aria-label="Back">‹</button><span class="mini-title">DAILY REVIEW</span><span class="topbar-spacer" aria-hidden="true"></span></header>
    <article class="daily-review-card">
      <div class="daily-review-meta"><span>Highlight</span><time>${escapeHtml(note.date)}</time></div>
      <blockquote>“${escapeHtml(note.quote)}”</blockquote>
      <button class="daily-review-book" data-book-id="${book.id}" aria-label="Open ${escapeHtml(book.title)}">
        <span class="book-cover cover-${book.cover}" aria-hidden="true"><b>${escapeHtml(book.title)}</b><small>${escapeHtml(book.author)}</small><em></em></span>
        <span><strong>${escapeHtml(book.title)}</strong><small>${escapeHtml(book.author)}</small></span>
        <i>›</i>
      </button>
    </article>
  </section>`;
}

function historyScreen() {
  return `<section class="screen no-tabbar history-screen">
    <header class="mini-topbar"><button class="back-button" data-action="go-back" aria-label="Back">‹</button><span class="mini-title">CAPTURE HISTORY</span><button class="icon-button" data-action="history-info">?</button></header>
    <div class="page-title compact-title"><p class="eyebrow">SYNCED IN BATCHES</p><h1>What you captured</h1><p>Each session stays together, so you can review what arrived and correct it as one batch.</p></div>
    <div class="history-list">${captureBatches.map(batch => {
      const book = byBook(batch.bookId);
      return `<button class="history-batch" data-view-batch="${batch.id}"><span class="batch-method">${batch.method}</span><time>${batch.label}</time><strong>${batch.noteIds.length} ${batch.noteIds.length === 1 ? "note" : "notes"}</strong><small>${book?.title || "Book to confirm"} · ${batch.status}</small><i>›</i></button>`;
    }).join("")}</div>
  </section>`;
}

function selectionNotesScreen(visible, showSuggestions = false) {
  const librarySelection = state.route === "all";
  return `<section class="screen selection-screen">
    <header class="selection-header"><button data-action="cancel-selection">Cancel</button><strong>${state.selected.size} selected</strong><button data-action="select-all">All ${visible.length}</button></header>
    <div class="compact-note-list selection-list">${visible.map(note => compactNoteCard(note, { showSuggestions })).join("")}</div>
  </section><div class="bulk-bar ${librarySelection ? "three-actions" : ""}">${librarySelection ? `<button data-action="auto-tag-selected" ${state.selected.size ? "" : "disabled"}>✦ Auto-tag</button>` : ""}<button class="primary-bulk" data-action="open-tags" ${state.selected.size ? "" : "disabled"}>＋ Tag</button><button data-action="open-move" ${state.selected.size ? "" : "disabled"}>Move</button></div>`;
}

function batchSuggestionPanel(visible) {
  const pending = visible.filter(note => (note.suggestedTags || []).length);
  if (!pending.length) {
    const declined = state.batchTagDecision === "declined";
    return `<section class="batch-suggestions accepted ${declined ? "declined" : ""}"><span>${declined ? "×" : "✓"}</span><div><strong>${declined ? "AI tag suggestions declined" : "Suggested tags added"}</strong><small>${declined ? "No suggested tags will be added." : "Suggestions are ready to save with this batch."}</small></div></section>`;
  }
  const roots = new Map();
  pending.flatMap(note => note.suggestedTags || []).forEach(tag => {
    const root = tag.split("/")[0];
    roots.set(root, (roots.get(root) || 0) + 1);
  });
  const rootTags = [...roots.entries()].sort((a, b) => b[1] - a[1]).slice(0, 5);
  return `<section class="batch-suggestions">
    <div class="suggestion-heading"><span>✦ AI SUGGESTED TAGS</span></div>
    <div class="suggestion-roots">${rootTags.map(([tag, count]) => `<span>${tag} · ${count}</span>`).join("")}</div>
    <div class="suggestion-actions"><button class="decline" data-action="decline-suggested-tags">Decline all</button><button data-action="accept-suggested-tags">Accept all</button></div>
  </section>`;
}

function batchReviewScreen() {
  const batch = captureBatches.find(item => item.id === state.batchFilter) || captureBatches[0];
  const visible = visibleAllNotes();
  if (state.selectionMode) return selectionNotesScreen(visible, true);
  return `<section class="screen no-tabbar batch-review-screen">
    <header class="mini-topbar batch-review-topbar"><button class="back-button" data-action="go-back" aria-label="Back">‹</button><span class="mini-title">RECENTLY CAPTURED</span><div class="batch-review-actions"><button data-action="start-selection">Edit</button><button class="save" data-action="save-batch-review">Save</button></div></header>
    <div class="batch-review-title"><p class="eyebrow">${batch.label.toUpperCase()}</p><h1>${visible.length} notes synchronized</h1><p>Review this sync batch before it becomes part of your wider library.</p></div>
    ${batchSuggestionPanel(visible)}
    <div class="compact-note-list batch-note-list">${visible.map(note => compactNoteCard(note, { showSuggestions: true })).join("")}</div>
  </section>`;
}

function profileScreen() {
  return `<section class="screen no-tabbar profile-screen">
    <header class="mini-topbar"><button class="back-button" data-action="go-back" aria-label="Back">‹</button><span class="mini-title">YOUR MARK</span><button class="icon-button" data-action="profile-help">?</button></header>
    <div class="profile-device">${markIcon()}<span class="device-live">CONNECTED</span><h1>Mark Bookmark</h1><p>Battery 82% · Last synced just now</p></div>
    <div class="profile-list">
      <button data-action="sync-now"><span><strong>Sync now</strong><small>Check the device for new captures</small></span><i>›</i></button>
      <button data-action="device-settings"><span><strong>Device settings</strong><small>Audio, capture and connection preferences</small></span><i>›</i></button>
      <button data-action="open-tag-manager"><span><strong>Tag management</strong><small>Review, rename, merge, or delete tags</small></span><i>›</i></button>
      <button data-action="export-notes"><span><strong>Export notes</strong><small>Markdown demo export</small></span><i>›</i></button>
    </div>
  </section>`;
}

function booksScreen() {
  const query = state.bookSearchQuery.trim().toLowerCase();
  const matchingBooks = books.filter(book => {
    if (!query) return true;
    const bookNotes = notes.filter(note => note.bookId === book.id);
    return [book.title, book.author, ...bookNotes.flatMap(note => [note.quote, note.thought])].join(" ").toLowerCase().includes(query);
  });
  const visibleBooks = [...matchingBooks].sort((a, b) => {
    if (state.bookSortBy === "name") return a.title.localeCompare(b.title);
    if (state.bookSortBy === "notes") return noteCount(b.id) - noteCount(a.id);
    return new Date(b.added) - new Date(a.added);
  });
  return `<section class="screen books-library-screen">
    ${topbar()}
    ${libraryHeader("books")}
    <div class="book-folder-list">
      ${visibleBooks.length ? visibleBooks.map(book => `<button class="book-folder" data-book-id="${book.id}" style="--folder-color:${book.color}">
        <span class="book-cover cover-${book.cover}" aria-hidden="true"><b>${book.title}</b><small>${book.author}</small><em></em></span><span class="book-folder-copy"><strong>${book.title}</strong><small>${book.author}<br>${noteCount(book.id)} ${noteCount(book.id) === 1 ? "note" : "notes"}</small></span><i>›</i>
      </button>`).join("") : `<div class="book-search-empty"><strong>No books found</strong><span>Try another title or author.</span></div>`}
    </div>
  </section>${nav("books")}`;
}

function bookScreen() {
  const book = byBook(state.activeBookId) || books[0];
  const allBookNotes = notes.filter(note => note.bookId === book.id);
  const query = state.bookNoteSearchQuery.trim().toLowerCase();
  const bookNotes = allBookNotes.filter(note => !query || `${note.quote} ${note.thought} ${(note.tags || []).join(" ")}`.toLowerCase().includes(query));
  return `<section class="screen no-tabbar book-page ${state.selectionMode ? "selecting" : ""}">
    <div class="book-page-header-slot"><header class="mini-topbar book-page-topbar"><button class="back-button" data-action="go-back" aria-label="Back">‹</button><span class="mini-title book-page-default-title">BOOK NOTES</span><span class="mini-title book-page-compact-title">${escapeHtml(book.title)}</span><span class="topbar-spacer" aria-hidden="true"></span></header></div>
    <div class="book-hero" style="--book-color:${book.color}">
      <div class="book-mini-cover"><span>${book.title}</span></div>
      <div><h1>${book.title}</h1><p class="book-author">${book.author}</p><p class="book-fact-line">Published ${book.year} · Added ${book.added}</p><p>${allBookNotes.length} ${allBookNotes.length === 1 ? "note" : "notes"}</p></div>
    </div>
    <div class="book-note-tools">
      <label><span>${searchIcon()}</span><input id="book-note-search" value="${escapeHtml(state.bookNoteSearchQuery)}" placeholder="Search notes" aria-label="Search notes in ${escapeHtml(book.title)}" />${state.bookNoteSearchQuery ? `<button type="button" data-action="clear-book-note-search" aria-label="Clear book note search">×</button>` : ""}</label>
      ${state.selectionMode ? `<button class="book-edit-button" data-action="cancel-selection">Done</button>` : `<button class="book-edit-button" data-action="start-book-edit">Edit</button>`}
    </div>
    <div class="book-note-list">${bookNotes.length ? bookNotes.map(note => noteCard(note, { withQuote: true })).join("") : `<div class="book-note-empty"><strong>No matching notes</strong><span>Try another word.</span></div>`}</div>
  </section>${state.selectionMode ? `<div class="book-bulk-bar">
    <button class="book-selected-count" data-action="cancel-selection">${state.selected.size} selected <span>×</span></button>
    <div><button data-action="auto-tag-selected" ${state.selected.size ? "" : "disabled"}>✦ Auto-tag</button><button data-action="open-tags" ${state.selected.size ? "" : "disabled"}>Edit tags</button><button data-action="open-move" ${state.selected.size ? "" : "disabled"}>Move</button></div>
  </div>` : ""}`;
}

function allNotesScreen() {
  const visible = visibleAllNotes();
  if (state.selectionMode) return selectionNotesScreen(visible);
  return `<section class="screen library-notes-screen">
    ${topbar()}
    ${libraryHeader("notes")}
    <div class="compact-note-list">${visible.length ? visible.map(compactNoteCard).join("") : `<div class="compact-empty"><strong>No matching notes</strong><span>Try another word or remove a filter.</span></div>`}</div>
  </section>${nav("books")}`;
}

function detailScreen() {
  const note = notes.find(item => item.id === state.detailId) || notes[0];
  const book = byBook(note.bookId);
  const relatedNotes = (note.linkedNoteIds || []).map(id => notes.find(item => item.id === id)).filter(Boolean);
  return `<section class="screen no-tabbar detail-page">
    <header class="mini-topbar"><button class="back-button" data-action="go-back" aria-label="Back">‹</button><button class="source-pill" data-action="change-source">${book ? book.title : "Choose a book"} ›</button><div class="detail-actions"><button class="detail-action delete" data-action="delete-detail-note" aria-label="Delete note"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M9 7V4h6v3M7 7l1 13h8l1-13M10 11v5M14 11v5"></path></svg></button><button class="detail-action edit" data-action="edit-detail-note" aria-label="Edit my thought"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 16 1-4L15.5 2.5a2.1 2.1 0 0 1 3 3L9 15l-4 1ZM4 21h16"></path></svg></button><button class="detail-action share" data-action="share" aria-label="Share note"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6h-3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3M13 4h7v7M20 4 10 14"></path></svg></button></div></header>
    <div class="detail-date">${note.date}</div>
    <article class="note-paper">
      <div class="paper-source"><span>FROM THE BOOK · P.${note.page}</span><p>“${note.quote}”</p></div>
      <div class="paper-thought" data-edit-thought aria-label="My thought. Double-tap to edit."><span>MY THOUGHT</span>
        ${state.editingThought ? `<textarea id="thought-editor">${note.thought}</textarea><button class="save-inline" data-action="save-thought">Save</button>` : `<p>${note.thought}</p>`}
      </div>
      <div class="paper-connections" aria-label="Tags and linked notes">
        <section class="paper-connection-section paper-tags"><span>TAGS</span><div class="paper-tag-values">${(note.tags || []).map(tag => `<button data-tag-note="${note.id}">${escapeHtml(tag)}</button>`).join("") || `<span class="empty-paper-connection">No tags</span>`}<button class="add-paper-connection" data-action="tag-detail-note">＋ Add tag</button></div></section>
        <section class="paper-connection-section paper-linked-notes"><span>LINKED NOTES</span><div class="paper-linked-list">${relatedNotes.map(item => `<button data-note-open="${item.id}"><i>↗</i>${escapeHtml(item.thought)}</button>`).join("") || `<span class="empty-paper-connection">No linked notes yet</span>`}<button class="add-paper-connection" data-action="link-detail-note">＋ Add link</button></div></section>
      </div>
    </article>
    ${note.attention ? `<button class="attention-detail" data-action="change-source"><strong>Book needs confirmation</strong><span>Choose book ›</span></button>` : ""}
  </section>`;
}

function askScreen() {
  return `<section class="screen no-tabbar ask-screen">
    <header class="mini-topbar"><button class="back-button" data-action="go-back" aria-label="Back">‹</button><span class="mini-title">ASK MARK</span><button class="icon-button" data-action="reset-ask">↻</button></header>
    ${state.askAnswered ? askAnswer() : askLanding()}
    <div class="ask-composer">
      <button class="ask-scope ${state.askScope ? "selected" : "empty"}" data-action="open-ask-scope" aria-label="${state.askScope ? `Answer scope: ${escapeHtml(askScopeLabel())}` : "Choose answer scope"}">${state.askScope ? `<b>${escapeHtml(askScopeLabel())}</b>` : `<span class="ask-scope-plus">＋</span>`}</button>
      <button class="skill-trigger ${state.activeSkill ? "active" : ""}" data-action="open-skills" aria-label="Choose insight mode${state.activeSkill ? `: ${escapeHtml(state.activeSkill)}` : ""}">✦<span>${escapeHtml(state.activeSkill || "Insight")}</span></button>
      <input id="ask-input" placeholder="Ask your notes…" value="${escapeHtml(state.askQuery)}" />
      <button class="ask-send" data-action="send-ask">↑</button>
    </div>
  </section>`;
}

function askLanding() {
  return `<div class="ask-landing">
    <div class="ask-landing-center">${markIcon()}<h1>What's on your mind?</h1><p>Ask anything about your notes and books.</p>
      <div class="ask-suggestions">
        <button data-ask-suggestion="Give me an overview of my notes">Give me an overview of my notes</button>
        <button data-ask-suggestion="${insightPrompts["Knowledge Connector"]}">Connect my Thinking, Fast and Slow notes</button>
      </div>
    </div>
  </div>`;
}

function askAnswer() {
  const result = buildAskResult(state.askQuery);
  return `<div class="ask-thread">
    <div class="user-question">${escapeHtml(state.askQuery)}</div>
    ${state.activeSkill ? `<span class="active-lens">✦ ${state.activeSkill}</span>` : ""}
    <p class="answer-copy">${result.answer}</p>
    ${result.evidence.map(note => {
      const book = byBook(note.bookId);
      return `<button class="evidence-card" data-note-open="${note.id}"><span>${escapeHtml((book?.title || "UNASSIGNED").toUpperCase())} · P.${note.page}</span><strong>“${escapeHtml(note.thought)}”</strong></button>`;
    }).join("")}
    <div class="answer-closing-row"><p class="answer-closing">${result.closing}</p><button class="save-answer-button ${state.askSaved ? "saved" : ""}" data-action="save-ask-note" aria-label="${state.askSaved ? "Answer saved to Notes" : "Save answer as a note"}" ${state.askSaved ? "disabled" : ""}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 4h12v17l-6-4-6 4z"></path>${state.askSaved ? `<path d="m9 10 2 2 4-4"></path>` : `<path d="M12 8v6M9 11h6"></path>`}</svg></button></div>
  </div>`;
}

function scopedAskNotes() {
  if (!state.askScope || state.askScope === "all") return notes;
  if (state.askScope.startsWith("note:")) {
    const noteId = state.askScope.slice(5);
    return notes.filter(note => note.id === noteId);
  }
  return notes.filter(note => note.bookId === state.askScope);
}

function askScopeLabel() {
  if (!state.askScope) return "";
  if (state.askScope === "all") return "All Notes";
  if (state.askScope.startsWith("note:")) {
    return notes.find(note => note.id === state.askScope.slice(5))?.thought || "Selected note";
  }
  return byBook(state.askScope)?.title || "All Notes";
}

function buildAskResult(query) {
  const pool = scopedAskNotes();
  const words = query.toLowerCase().split(/[^a-z0-9]+/).filter(word => word.length > 3);
  const ranked = pool.map(note => {
    const book = byBook(note.bookId);
    const haystack = [note.quote, note.thought, book?.title, ...(note.tags || [])].join(" ").toLowerCase();
    return { note, score: words.reduce((score, word) => score + (haystack.includes(word) ? 1 : 0), 0) };
  }).sort((a, b) => b.score - a.score);
  const evidence = ranked.filter(item => item.score > 0).slice(0, 2).map(item => item.note);
  if (!evidence.length) evidence.push(...pool.slice(0, 2));
  const first = evidence[0] || notes[0];
  const second = evidence[1];
  const scopeName = !state.askScope || state.askScope === "all"
    ? "your reading notes"
    : state.askScope.startsWith("note:")
      ? "the note you selected"
      : `your notes from ${byBook(state.askScope)?.title}`;
  const lensLead = {
    "Knowledge Connector": "Your recent note deepens an older question about how you judge decisions: outcome, process, or both.",
    "Essence Distiller": "The note becomes clearest when its examples are removed and its condition–action relationship is stated directly.",
    "Critical Prism": "The strongest pressure point is the assumption that this principle holds across every context, incentive, and outcome.",
    "Knowledge Auditor": "Your notes repeatedly name judgment and attention, while leaving the surrounding evidence and measurement steps less explored.",
    "Summarize": "The clearest summary is a movement from observation toward personal judgment.",
    "Explore": "The most useful connection appears between two notes that frame the same issue differently.",
    "Reflect": "Your thinking changes when a passage becomes a claim in your own words.",
    "My Take": "Your own take is more nuanced than the book's original claim.",
  }[state.activeSkill] || "A consistent pattern appears when your own thoughts are read beside the original passages.";
  return {
    answer: `${lensLead} ${second ? `In ${scopeName}, “${escapeHtml(first.thought)}” connects with “${escapeHtml(second.thought)}”` : `In ${scopeName}, the clearest relevant thought is “${escapeHtml(first.thought)}”`} The answer is based only on the notes shown below, not on invented context.`,
    evidence: evidence.slice(0, 2),
    closing: `A useful next question: what would change if you treated this as a decision principle rather than only an interesting idea?`,
  };
}

function capturedQuote() {
  return state.captureSource === "photo"
    ? "Nothing in life is as important as you think it is while you are thinking about it."
    : "The moment of victory is often the moment of greatest peril.";
}

function captureModal() {
  if (state.captureStep === 0) return `<div class="modal-backdrop"><section class="modal-sheet capture-choice-sheet"><div class="sheet-handle"></div><header class="modal-head"><div><p class="eyebrow">INPUT</p><h2>Add to Mark</h2></div><button class="close-button" data-action="close-modal">×</button></header><div class="capture-options">
    <button data-action="capture-from-mark"><span>⌁</span><div><strong>Capture with Mark</strong><small>Scan a passage and keep reading</small></div><i>›</i></button>
    <button data-action="capture-photo"><span>▧</span><div><strong>Take a Photo</strong><small>Use your camera when Mark is not with you</small></div><i>›</i></button>
    <button data-action="capture-manual"><span>✎</span><div><strong>Write a Thought</strong><small>Add a passage or idea manually</small></div><i>›</i></button>
  </div><p class="capture-principle">Every input keeps its source, original evidence, and capture method.</p></section></div>`;
  if (state.captureStep === 1) return `<div class="modal-backdrop"><section class="modal-sheet"><div class="sheet-handle"></div><header class="modal-head"><h2>Capture a passage</h2><button class="close-button" data-action="close-modal">×</button></header><div class="capture-visual"><div class="scan-line"></div><div class="capture-copy">The moment of victory is often the moment of <mark>greatest peril.</mark></div></div><p class="modal-copy">In the real product, pass Mark over the line.</p><button class="modal-button primary" data-action="capture-quote">Simulate highlight</button></section></div>`;
  if (state.captureStep === 4) return `<div class="modal-backdrop"><section class="modal-sheet"><div class="sheet-handle"></div><header class="modal-head"><div><p class="eyebrow">CAMERA INPUT</p><h2>Select the passage</h2></div><button class="close-button" data-action="close-modal">×</button></header><div class="photo-capture"><span class="photo-page">74</span><p>Nothing in life is as important as you think it is while you are thinking about it.</p><div class="ocr-selection"></div></div><p class="modal-copy">AI corrected the page angle and suggested one paragraph. Adjust the selection before saving.</p><button class="modal-button primary" data-action="confirm-photo">Use this passage</button></section></div>`;
  if (state.captureStep === 5) {
    const sourceBook = byBook(state.manualBookId) || books[2];
    const manualTagOptions = ["#Reading/Thought", "#Life/Awareness", "#Work/Idea"];
    return `<div class="modal-backdrop quick-note-backdrop"><section class="modal-sheet quick-note-sheet"><div class="sheet-handle"></div>
      <header class="quick-note-head"><button class="quick-note-source" data-action="toggle-manual-source"><span class="book-dot" style="--dot:${sourceBook.color}"></span><strong>${escapeHtml(sourceBook.title)}</strong><i>⌄</i></button><button class="close-button" data-action="close-modal" aria-label="Close quick note">×</button></header>
      ${state.manualSourceOpen ? `<div class="quick-source-options">${books.map(book => `<button class="${book.id === state.manualBookId ? "active" : ""}" data-manual-book="${book.id}"><span style="--dot:${book.color}"></span>${escapeHtml(book.title)}<i>${book.id === state.manualBookId ? "✓" : ""}</i></button>`).join("")}</div>` : ""}
      <textarea id="manual-note-input" class="quick-note-input" placeholder="What are you thinking?" aria-label="Write a note" autofocus>${escapeHtml(state.manualDraft)}</textarea>
      <div class="quick-note-context">
        ${state.manualTags.map(tag => `<span>${escapeHtml(tag)}<button data-remove-manual-tag="${escapeHtml(tag)}" aria-label="Remove ${escapeHtml(tag)}">×</button></span>`).join("")}
        ${state.manualHasPhoto ? `<span>▧ Photo attached<button data-action="remove-manual-photo" aria-label="Remove photo">×</button></span>` : ""}
        ${state.manualRecording ? `<span class="recording-status"><i></i> Recording…</span>` : ""}
      </div>
      ${state.manualTagOpen ? `<div class="quick-tag-options">${manualTagOptions.map(tag => `<button class="${state.manualTags.includes(tag) ? "active" : ""}" data-manual-tag="${escapeHtml(tag)}">${escapeHtml(tag)}</button>`).join("")}</div>` : ""}
      <footer class="quick-note-tools">
        <div><button class="${state.manualTagOpen ? "active" : ""}" data-action="toggle-manual-tags" aria-label="Add tag">#</button><button class="${state.manualHasPhoto ? "active" : ""}" data-action="attach-manual-photo" aria-label="Attach photo">▧</button><button class="${state.manualRecording ? "active recording" : ""}" data-action="toggle-manual-recording" aria-label="Record voice">●</button></div>
        <button class="quick-note-send" data-action="save-manual" aria-label="Save note">↑</button>
      </footer>
    </section></div>`;
  }
  if (state.captureStep === 2) return `<div class="modal-backdrop"><section class="modal-sheet"><div class="sheet-handle"></div><header class="modal-head"><h2>Add your thought</h2><button class="close-button" data-action="close-modal">×</button></header><div class="quote-captured">“${capturedQuote()}”</div><button class="record-orb ${state.isRecording ? "recording" : ""}" data-action="toggle-recording">${state.isRecording ? "■" : "●"}</button><div class="waveform ${state.isRecording ? "active" : ""}">${Array.from({length:15},()=>"<span></span>").join("")}</div><p class="modal-copy">${state.isRecording ? "Listening… tap to finish" : "Tap once to speak your thought"}</p></section></div>`;
  return `<div class="modal-backdrop"><section class="modal-sheet"><div class="sheet-handle"></div><header class="modal-head"><h2>Ready to keep</h2><button class="close-button" data-action="close-modal">×</button></header><div class="quote-captured">“${capturedQuote()}”</div><div class="transcript-card"><div class="label">MY THOUGHT · CLEANED</div><p>${state.captureSource === "photo" ? "Attention can distort importance before judgment even begins." : "Success lowers vigilance exactly when consequences become larger."}</p></div><div class="preserved-note"><span class="check-dot">✓</span><span>Original ${state.captureSource === "photo" ? "photo, " : ""}audio and transcript are always kept.</span></div><button class="modal-button primary" data-action="save-capture">Keep this thought</button></section></div>`;
}

function moveModal() {
  return `<div class="modal-backdrop"><section class="modal-sheet move-sheet"><div class="sheet-handle"></div><header class="modal-head"><h2>Move ${state.selected.size} notes</h2><button class="close-button" data-action="close-modal">×</button></header><label class="book-search">⌕ <input placeholder="Search books" /></label><div class="move-book-list">${books.map(book => `<button data-move-book="${book.id}"><i style="--dot:${book.color}"></i><span><strong>${book.title}</strong><small>${book.author}</small></span><b>›</b></button>`).join("")}</div><button class="add-book-button" data-action="add-book-demo">＋ Add another book</button></section></div>`;
}

function importModal() {
  return `<div class="modal-backdrop"><section class="modal-sheet library-import-sheet"><div class="sheet-handle"></div><header class="modal-head"><div><p class="eyebrow">LIBRARY</p><h2>Import books & notes</h2></div><button class="close-button" data-action="close-modal">×</button></header>
    <p class="import-intro">Bring in a complete book together with its highlights, notes, and source details.</p>
    <div class="import-options">
      <button data-action="import-kindle"><span class="import-source kindle">K</span><div><strong>Kindle</strong><small>Import books, highlights, and notes</small></div><i>›</i></button>
      <button data-action="import-file"><span class="import-source file">↥</span><div><strong>Markdown or CSV</strong><small>Bring an existing reading archive</small></div><i>›</i></button>
      <button data-action="import-scan"><span class="import-source scan">▧</span><div><strong>Scan a physical book</strong><small>Add the book first, then match captured notes</small></div><i>›</i></button>
    </div>
    <p class="import-footnote">Imported content stays editable and keeps its original source.</p>
  </section></div>`;
}

function tagsModal() {
  const count = state.tagTargets.length || state.selected.size;
  const tags = ["#Life/Choices", "#Life/Relationships", "#Work/Product", "#Work/Communication", "#Psychology/Bias", "#Creativity/Attention"];
  return `<div class="modal-backdrop"><section class="modal-sheet tags-sheet"><div class="sheet-handle"></div><header class="modal-head"><div><p class="eyebrow">ORGANIZE</p><h2>Add tags to ${count} ${count === 1 ? "note" : "notes"}</h2></div><button class="close-button" data-action="close-modal">×</button></header>
    <p class="tag-rule">Tags belong to knowledge cards—not books. Use one parent and one child, such as <strong>#Life/Choices</strong>.</p>
    <div class="tag-options">${tags.map(tag => `<button data-apply-tag="${tag}">${tag}</button>`).join("")}</div>
    <label class="custom-tag-field"><span>#</span><input id="custom-tag-input" placeholder="Custom tag, e.g. Learning/AI" /><button data-action="apply-custom-tag">Add</button></label>
  </section></div>`;
}

function tagManagerModal() {
  const tagCounts = new Map();
  notes.flatMap(note => note.tags || []).forEach(tag => tagCounts.set(tag, (tagCounts.get(tag) || 0) + 1));
  const managedTags = [...tagCounts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
  const taggedNotes = notes.filter(note => (note.tags || []).length).length;
  return `<div class="modal-backdrop"><section class="modal-sheet tag-manager-sheet"><div class="sheet-handle"></div>
    <header class="modal-head"><div><p class="eyebrow">ORGANIZE</p><h2>Tag management</h2></div><button class="close-button" data-action="close-modal">×</button></header>
    <div class="tag-manager-summary"><strong>${managedTags.length} tags</strong><span>${taggedNotes} tagged notes</span></div>
    <p class="tag-manager-intro">Keep your vocabulary clear as your library grows. Changes apply to every note using the tag.</p>
    <div class="tag-manager-list">${managedTags.map(([tag, count]) => {
      const active = state.tagManagerTag === tag;
      return `<article class="tag-manager-item ${active ? "active" : ""}">
        <button class="tag-manager-row" data-manage-tag="${escapeHtml(tag)}" aria-expanded="${active}"><span><strong>${escapeHtml(tag)}</strong><small>${count} ${count === 1 ? "note" : "notes"}</small></span><i>${active ? "×" : "•••"}</i></button>
        ${active ? `<div class="tag-manager-actions"><button data-tag-manager-action="Rename" data-tag-name="${escapeHtml(tag)}">Rename</button><button data-tag-manager-action="Merge" data-tag-name="${escapeHtml(tag)}">Merge</button><button class="danger" data-tag-manager-action="Delete" data-tag-name="${escapeHtml(tag)}">Delete</button></div>` : ""}
      </article>`;
    }).join("")}</div>
    <button class="tag-manager-new" data-action="create-managed-tag">＋ New tag</button>
  </section></div>`;
}

function bookDetailsModal() {
  const book = byBook(state.activeBookId) || books[0];
  return `<div class="modal-backdrop"><section class="modal-sheet book-details-sheet"><div class="sheet-handle"></div><header class="modal-head"><div><p class="eyebrow">BOOK DETAILS</p><h2>${book.title}</h2></div><button class="close-button" data-action="close-modal">×</button></header>
    <dl class="book-facts"><div><dt>Author</dt><dd>${book.author}</dd></div><div><dt>First published</dt><dd>${book.year}</dd></div></dl>
    <label class="book-detail-field"><span>WHY I'M READING</span><textarea id="book-reason-editor">${book.reason}</textarea></label>
    <label class="book-detail-field"><span>MY NOTE ABOUT THIS BOOK</span><textarea id="book-note-editor">${book.note}</textarea></label>
    <p class="book-detail-rule">Books preserve source and reading context. Tags stay on individual knowledge cards.</p>
    <button class="modal-button primary" data-action="save-book-details">Save details</button>
  </section></div>`;
}

function skillsModal() {
  const skills = [
    ["Knowledge Connector", "Knowledge Connector", "Connect current notes to older ideas and reveal how your thinking changes"],
    ["Essence Distiller", "Essence Distiller", "Strip away rhetoric and compress a note into one actionable principle"],
    ["Critical Prism", "Critical Prism", "Expose hidden assumptions and test a claim with a strong counterexample"],
    ["Knowledge Auditor", "Knowledge Auditor", "Spot recurring concepts and the blind spots missing from your knowledge system"]
  ];
  return `<div class="modal-backdrop"><section class="modal-sheet skill-sheet"><div class="sheet-handle"></div><header class="modal-head"><div><p class="eyebrow">INSIGHT SKILLS</p><h2>Choose a lens</h2></div><button class="close-button" data-action="close-modal">×</button></header><div class="skill-list">${skills.map(([name, label, desc]) => `<button data-skill="${name}"><span>✦</span><div><strong>${label}</strong><small>${desc}</small></div><i>›</i></button>`).join("")}</div><p class="skill-footnote">Applies to your next question only. Mark never changes your notes.</p></section></div>`;
}

function askScopeModal() {
  const query = state.scopeSearchQuery.trim().toLowerCase();
  const matchingNotes = [...notes].reverse().filter(note => {
    if (!query) return true;
    const book = byBook(note.bookId);
    return [note.quote, note.thought, book?.title, ...(note.tags || [])].filter(Boolean).join(" ").toLowerCase().includes(query);
  }).slice(0, query ? 6 : 3);
  const matchingBooks = books.filter(book => !query || [book.title, book.author].join(" ").toLowerCase().includes(query));
  return `<div class="modal-backdrop"><section class="modal-sheet ask-scope-sheet ask-scope-browser"><div class="sheet-handle"></div>
    <label class="scope-search-field"><span>${searchIcon()}</span><input id="scope-search-input" value="${escapeHtml(state.scopeSearchQuery)}" placeholder="Search notes or books" aria-label="Search notes or books" /><button type="button" data-action="close-modal" aria-label="Close evidence search">×</button></label>
    <div class="scope-browser-scroll">
      <section class="scope-section"><h2>RECENT NOTES</h2><div class="recent-scope-cards">
        ${matchingNotes.length ? matchingNotes.map(note => {
          const book = byBook(note.bookId);
          const value = `note:${note.id}`;
          return `<button class="recent-scope-card ${state.askScope === value ? "active" : ""}" data-ask-scope="${value}"><span><strong>${escapeHtml(note.thought)}</strong><q>${escapeHtml(note.quote)}</q><small>${escapeHtml(book?.title || "Book to confirm")} · p.${note.page}</small></span><i>${state.askScope === value ? "✓" : "›"}</i></button>`;
        }).join("") : `<p class="scope-empty">No recent notes match “${escapeHtml(state.scopeSearchQuery)}”.</p>`}
      </div></section>
      <section class="scope-section"><h2>BOOKS</h2><div class="scope-book-list">
        ${matchingBooks.length ? matchingBooks.map(book => `<button class="scope-book-row ${state.askScope === book.id ? "active" : ""}" data-ask-scope="${book.id}"><span class="book-cover cover-${book.cover}" aria-hidden="true"><b>${escapeHtml(book.title)}</b><small>${escapeHtml(book.author)}</small><em></em></span><span><strong>${escapeHtml(book.title)}</strong><small>${noteCount(book.id)} notes · ${escapeHtml(book.author)}</small></span><i>${state.askScope === book.id ? "✓" : "›"}</i></button>`).join("") : `<p class="scope-empty">No books match “${escapeHtml(state.scopeSearchQuery)}”.</p>`}
      </div></section>
    </div>
    <button class="use-all-notes ${state.askScope === "all" ? "active" : ""}" data-ask-scope="all"><span>Use all notes</span><small>${notes.length} notes across ${books.length} books</small><i>${state.askScope === "all" ? "✓" : "›"}</i></button>
  </section></div>`;
}

function cardMenuModal() {
  const note = notes.find(item => item.id === state.cardMenuNoteId);
  const book = note ? byBook(note.bookId) : null;
  if (!note) return "";
  return `<div class="modal-backdrop transparent"><section class="modal-sheet card-action-sheet"><div class="sheet-handle"></div><header class="card-menu-head"><span>${escapeHtml(book?.title || "Book to confirm")} · p.${note.page}</span><button class="close-button" data-action="close-modal">×</button></header>
    <div class="card-menu-preview"><strong>“${escapeHtml(note.quote)}”</strong><small>${escapeHtml(note.thought)}</small></div>
    <div class="card-menu-actions">
      <button data-action="edit-menu-note"><span>✎</span>Edit note</button>
      <button data-action="select-menu-note"><span>✓</span>Select this note</button>
      <button data-action="tag-menu-note"><span>#</span>Add tags</button>
      <button data-action="link-menu-note"><span>@</span>Add a link</button>
      <button data-action="move-menu-note"><span>↗</span>Move to another book</button>
      <button class="danger" data-action="delete-menu-note"><span>⌫</span>Delete</button>
    </div>
  </section></div>`;
}

function linkModal() {
  const current = notes.find(item => item.id === state.cardMenuNoteId) || notes.find(item => state.selected.has(item.id));
  const query = state.linkSearchQuery.trim().toLowerCase();
  const linkedIds = new Set(current?.linkedNoteIds || []);
  const candidates = notes.filter(note => {
    if (note.id === current?.id || linkedIds.has(note.id)) return false;
    if (!query) return true;
    const book = byBook(note.bookId);
    return [note.quote, note.thought, book?.title, book?.author, ...(note.tags || [])].filter(Boolean).join(" ").toLowerCase().includes(query);
  }).slice(0, query ? 8 : 4);
  return `<div class="modal-backdrop"><section class="modal-sheet link-sheet"><div class="sheet-handle"></div>
    <header class="modal-head"><div><p class="eyebrow">CONNECTION</p><h2>Link a related note</h2></div><button class="close-button" data-action="close-modal">×</button></header>
    <label class="scope-search-field link-search-field"><span>${searchIcon()}</span><input id="link-search-input" value="${escapeHtml(state.linkSearchQuery)}" placeholder="Search thoughts, quotes, books, or tags" aria-label="Search notes to link" />${state.linkSearchQuery ? `<button type="button" data-action="clear-link-search" aria-label="Clear link search">×</button>` : ""}</label>
    <div class="link-results-head"><span>${query ? "SEARCH RESULTS" : "AI SUGGESTED"}</span><small>${candidates.length} ${candidates.length === 1 ? "note" : "notes"}</small></div>
    <div class="link-options">${candidates.length ? candidates.map(note => `<button data-link-note="${note.id}"><span>@</span><div><strong>${escapeHtml(note.thought)}</strong><small>${escapeHtml(byBook(note.bookId)?.title || "Book to confirm")}</small></div><i>＋</i></button>`).join("") : `<p class="link-empty">No notes match “${escapeHtml(state.linkSearchQuery)}”.</p>`}</div>
  </section></div>`;
}

function sourceModal() {
  return `<div class="modal-backdrop"><section class="modal-sheet move-sheet"><div class="sheet-handle"></div><header class="modal-head"><h2>Choose a book</h2><button class="close-button" data-action="close-modal">×</button></header><div class="move-book-list">${books.map(book => `<button data-source-book="${book.id}"><i style="--dot:${book.color}"></i><span><strong>${book.title}</strong><small>${book.author}</small></span><b>›</b></button>`).join("")}</div></section></div>`;
}

function renderModal() {
  document.body.classList.toggle("modal-open", Boolean(state.modal));
  if (state.modal === "capture") modalRoot.innerHTML = captureModal();
  else if (state.modal === "move") modalRoot.innerHTML = moveModal();
  else if (state.modal === "skills") modalRoot.innerHTML = skillsModal();
  else if (state.modal === "source") modalRoot.innerHTML = sourceModal();
  else if (state.modal === "tags") modalRoot.innerHTML = tagsModal();
  else if (state.modal === "tag-manager") modalRoot.innerHTML = tagManagerModal();
  else if (state.modal === "book-details") modalRoot.innerHTML = bookDetailsModal();
  else if (state.modal === "ask-scope") modalRoot.innerHTML = askScopeModal();
  else if (state.modal === "card-menu") modalRoot.innerHTML = cardMenuModal();
  else if (state.modal === "link") modalRoot.innerHTML = linkModal();
  else if (state.modal === "import") modalRoot.innerHTML = importModal();
  else modalRoot.innerHTML = "";
}

function render() {
  const screens = { home: homeScreen, history: historyScreen, batch: batchReviewScreen, recent: recentlyCapturedScreen, profile: profileScreen, books: booksScreen, book: bookScreen, all: allNotesScreen, search: notesSearchScreen, detail: detailScreen, ask: askScreen };
  app.innerHTML = (screens[state.route] || homeScreen)();
  renderModal();
  bindEvents();
  requestAnimationFrame(syncBookPageHeader);
}

function syncBookPageHeader() {
  const slot = document.querySelector(".book-page-header-slot");
  const header = document.querySelector(".book-page-topbar");
  const hero = document.querySelector(".book-page .book-hero");
  if (!slot || !header || !hero) return;
  const compactAt = hero.offsetTop + hero.offsetHeight - slot.offsetHeight;
  header.classList.toggle("compact", window.scrollY > compactAt);
}

function bindEvents() {
  document.querySelectorAll("[data-route]").forEach(node => node.addEventListener("click", () => {
    navigateToRoute(node.dataset.route);
  }));
  document.querySelectorAll("[data-book-id]").forEach(node => node.addEventListener("click", () => {
    state.activeBookId = node.dataset.bookId; state.bookNoteSearchQuery = ""; navigateToRoute("book");
  }));
  document.querySelectorAll("[data-note-id]").forEach(node => node.addEventListener("click", event => {
    if (event.target.closest("button")) return;
    const id = node.dataset.noteId;
    if (state.selectionMode) state.selected.has(id) ? state.selected.delete(id) : state.selected.add(id);
    else { state.detailId = id; state.detailReturnRoute = state.route; state.editingThought = false; navigateToRoute("detail"); return; }
    render();
  }));
  document.querySelectorAll(".book-note-list [data-note-id], .batch-note-list [data-note-id], .library-notes-screen .compact-note-list [data-note-id]").forEach(node => {
    let holdTimer;
    const cancelHold = () => window.clearTimeout(holdTimer);
    node.addEventListener("pointerdown", () => {
      if (!["book", "batch", "all"].includes(state.route) || state.selectionMode) return;
      holdTimer = window.setTimeout(() => {
        state.selectionMode = true;
        state.selected = new Set([node.dataset.noteId]);
        haptic(24);
        render();
      }, 520);
    });
    node.addEventListener("pointerup", cancelHold);
    node.addEventListener("pointercancel", cancelHold);
    node.addEventListener("pointerleave", cancelHold);
    node.addEventListener("contextmenu", event => event.preventDefault());
  });
  document.querySelectorAll("[data-tag-note]").forEach(node => node.addEventListener("click", event => {
    event.stopPropagation();
    state.tagTargets = [node.dataset.tagNote];
    state.modal = "tags";
    render();
  }));
  document.querySelectorAll("[data-accept-note-tag]").forEach(node => node.addEventListener("click", event => {
    event.stopPropagation();
    acceptSuggestedTag(node.dataset.acceptNoteTag, node.dataset.tagValue);
  }));
  document.querySelectorAll("[data-card-menu]").forEach(node => node.addEventListener("click", event => {
    event.stopPropagation();
    state.cardMenuNoteId = node.dataset.cardMenu;
    state.modal = "card-menu";
    render();
  }));
  document.querySelectorAll("[data-view-batch]").forEach(node => node.addEventListener("click", event => {
    event.stopPropagation();
    state.batchFilter = node.dataset.viewBatch;
    state.attentionOnly = false;
    state.searchOpen = false;
    navigateToRoute("batch");
  }));
  document.querySelectorAll("[data-action]").forEach(node => node.addEventListener("click", event => {
    if (node.closest("[data-note-id]") && node.dataset.action !== "edit-thought") return;
    handleAction(node.dataset.action, event);
  }));
  document.querySelectorAll("[data-move-book]").forEach(node => node.addEventListener("click", () => moveSelected(node.dataset.moveBook)));
  document.querySelectorAll("[data-source-book]").forEach(node => node.addEventListener("click", () => changeSource(node.dataset.sourceBook)));
  document.querySelectorAll("[data-manual-book]").forEach(node => node.addEventListener("click", () => {
    state.manualBookId = node.dataset.manualBook;
    state.manualSourceOpen = false;
    render();
  }));
  document.querySelectorAll("[data-manual-tag]").forEach(node => node.addEventListener("click", () => {
    const tag = node.dataset.manualTag;
    state.manualTags = state.manualTags.includes(tag) ? state.manualTags.filter(item => item !== tag) : [...state.manualTags, tag];
    render();
  }));
  document.querySelectorAll("[data-remove-manual-tag]").forEach(node => node.addEventListener("click", () => {
    state.manualTags = state.manualTags.filter(tag => tag !== node.dataset.removeManualTag);
    render();
  }));
  document.querySelectorAll("[data-apply-tag]").forEach(node => node.addEventListener("click", () => applyTag(node.dataset.applyTag)));
  document.querySelectorAll("[data-manage-tag]").forEach(node => node.addEventListener("click", () => {
    state.tagManagerTag = state.tagManagerTag === node.dataset.manageTag ? null : node.dataset.manageTag;
    render();
  }));
  document.querySelectorAll("[data-tag-manager-action]").forEach(node => node.addEventListener("click", () => {
    const action = node.dataset.tagManagerAction;
    const followUp = action === "Rename" ? "name editor ready" : action === "Merge" ? "choose a destination tag" : "confirmation required";
    showToast(`${action} ${node.dataset.tagName} · ${followUp}`);
  }));
  document.querySelectorAll("[data-skill]").forEach(node => node.addEventListener("click", () => {
    state.activeSkill = node.dataset.skill;
    state.askQuery = insightPrompts[state.activeSkill] || "";
    state.askAnswered = false;
    state.askSaved = false;
    state.modal = null;
    render();
    requestAnimationFrame(() => {
      const input = document.querySelector("#ask-input");
      if (input) { input.focus(); input.setSelectionRange(input.value.length, input.value.length); }
    });
    showToast(`${state.activeSkill} prompt added — edit or send it`);
  }));
  document.querySelectorAll("[data-ask-suggestion]").forEach(node => node.addEventListener("click", () => {
    state.askQuery = node.dataset.askSuggestion;
    state.askAnswered = false;
    state.askSaved = false;
    render();
    requestAnimationFrame(() => {
      const input = document.querySelector("#ask-input");
      if (input) { input.focus(); input.setSelectionRange(input.value.length, input.value.length); }
    });
  }));
  document.querySelectorAll("[data-ask-scope]").forEach(node => node.addEventListener("click", () => { state.askScope = node.dataset.askScope; state.scopeSearchQuery = ""; state.modal = null; state.askAnswered = false; state.askSaved = false; const label = askScopeLabel(); render(); showToast(`Answer scope: ${label}`); }));
  document.querySelectorAll("[data-link-note]").forEach(node => node.addEventListener("click", () => linkNote(node.dataset.linkNote)));
  document.querySelectorAll("[data-search-menu]").forEach(node => node.addEventListener("click", () => { state.searchFilterMenu = state.searchFilterMenu === node.dataset.searchMenu ? null : node.dataset.searchMenu; render(); }));
  document.querySelectorAll("[data-search-date]").forEach(node => node.addEventListener("click", () => { state.dateFilter = node.dataset.searchDate; state.searchFilterMenu = null; render(); }));
  document.querySelectorAll("[data-search-book]").forEach(node => node.addEventListener("click", () => { state.bookFilter = node.dataset.searchBook; state.searchFilterMenu = null; render(); }));
  document.querySelectorAll("[data-tag-filter]").forEach(node => node.addEventListener("click", () => { state.tagFilter = node.dataset.tagFilter; state.searchFilterMenu = null; render(); }));
  document.querySelectorAll("[data-search-quick]").forEach(node => node.addEventListener("click", () => { state.quickFilter = state.quickFilter === node.dataset.searchQuick ? null : node.dataset.searchQuick; render(); }));
  document.querySelectorAll("[data-filter-menu]").forEach(node => node.addEventListener("click", () => { state.searchFilterMenu = state.searchFilterMenu === node.dataset.filterMenu ? null : node.dataset.filterMenu; render(); }));
  document.querySelectorAll("[data-sort-value]").forEach(node => node.addEventListener("click", () => { state.sortBy = node.dataset.sortValue; state.searchFilterMenu = null; state.librarySortOpen = false; render(); }));
  document.querySelectorAll("[data-book-sort]").forEach(node => node.addEventListener("click", () => { state.bookSortBy = node.dataset.bookSort; state.librarySortOpen = false; render(); }));
  document.querySelectorAll("[data-tag-mode]").forEach(node => node.addEventListener("click", () => { state.tagMatchMode = node.dataset.tagMode; render(); }));
  document.querySelectorAll("[data-filter-tag]").forEach(node => node.addEventListener("click", () => {
    const tag = node.dataset.filterTag;
    state.tagFilters = state.tagFilters.includes(tag) ? state.tagFilters.filter(item => item !== tag) : [...state.tagFilters, tag];
    render();
  }));
  document.querySelectorAll("[data-contains-value]").forEach(node => node.addEventListener("click", () => { state.containsFilter = node.dataset.containsValue; state.searchFilterMenu = null; render(); }));
  document.querySelectorAll("[data-note-open]").forEach(node => node.addEventListener("click", () => { state.detailId = node.dataset.noteOpen; state.detailReturnRoute = state.route === "detail" ? state.detailReturnRoute : state.route; if (state.route === "detail") render(); else navigateToRoute("detail"); }));
  document.querySelectorAll("[data-edit-thought]").forEach(node => {
    let lastTap = 0;
    node.addEventListener("click", () => {
      const now = Date.now();
      if (now - lastTap < 360) { state.editingThought = true; render(); }
      lastTap = now;
    });
  });
  const searchInput = document.querySelector("#all-search-input");
  if (searchInput) searchInput.addEventListener("input", () => {
    state.searchQuery = searchInput.value;
    render();
    requestAnimationFrame(() => {
      const nextInput = document.querySelector("#all-search-input");
      if (nextInput) { nextInput.focus(); nextInput.setSelectionRange(nextInput.value.length, nextInput.value.length); }
    });
  });
  const bookSearchInput = document.querySelector("#book-library-search");
  if (bookSearchInput) bookSearchInput.addEventListener("input", () => {
    state.bookSearchQuery = bookSearchInput.value;
    render();
    requestAnimationFrame(() => {
      const nextInput = document.querySelector("#book-library-search");
      if (nextInput) { nextInput.focus(); nextInput.setSelectionRange(nextInput.value.length, nextInput.value.length); }
    });
  });
  const bookNoteSearchInput = document.querySelector("#book-note-search");
  if (bookNoteSearchInput) bookNoteSearchInput.addEventListener("input", () => {
    state.bookNoteSearchQuery = bookNoteSearchInput.value;
    render();
    requestAnimationFrame(() => {
      const nextInput = document.querySelector("#book-note-search");
      if (nextInput) { nextInput.focus(); nextInput.setSelectionRange(nextInput.value.length, nextInput.value.length); }
    });
  });
  const scopeSearchInput = document.querySelector("#scope-search-input");
  if (scopeSearchInput) scopeSearchInput.addEventListener("input", () => {
    state.scopeSearchQuery = scopeSearchInput.value;
    render();
    requestAnimationFrame(() => {
      const nextInput = document.querySelector("#scope-search-input");
      if (nextInput) { nextInput.focus(); nextInput.setSelectionRange(nextInput.value.length, nextInput.value.length); }
    });
  });
  const linkSearchInput = document.querySelector("#link-search-input");
  if (linkSearchInput) linkSearchInput.addEventListener("input", () => {
    state.linkSearchQuery = linkSearchInput.value;
    render();
    requestAnimationFrame(() => {
      const nextInput = document.querySelector("#link-search-input");
      if (nextInput) { nextInput.focus(); nextInput.setSelectionRange(nextInput.value.length, nextInput.value.length); }
    });
  });
  const askInput = document.querySelector("#ask-input");
  if (askInput) {
    askInput.addEventListener("input", () => { state.askQuery = askInput.value; });
    askInput.addEventListener("keydown", event => { if (event.key === "Enter") { event.preventDefault(); submitAsk(); } });
  }
  const manualInput = document.querySelector("#manual-note-input");
  if (manualInput) {
    manualInput.addEventListener("input", () => { state.manualDraft = manualInput.value; });
    requestAnimationFrame(() => {
      if (!state.manualSourceOpen) {
        manualInput.focus();
        manualInput.setSelectionRange(manualInput.value.length, manualInput.value.length);
      }
    });
  }
}

function handleAction(action) {
  const actions = {
    "go-back": () => goBackRoute(),
    "open-capture": () => {
      state.modal = "capture";
      state.captureStep = 5;
      state.captureSource = "manual";
      state.manualDraft = "";
      state.manualBookId = state.activeBookId || "b3";
      state.manualTags = [];
      state.manualSourceOpen = false;
      state.manualTagOpen = false;
      state.manualHasPhoto = false;
      state.manualRecording = false;
      state.isRecording = false;
    },
    "close-modal": () => { state.modal = null; state.isRecording = false; state.manualRecording = false; },
    "capture-from-mark": () => { state.captureSource = "mark"; state.captureStep = 1; },
    "capture-photo": () => { state.captureSource = "photo"; state.captureStep = 4; },
    "capture-manual": () => { state.captureSource = "manual"; state.captureStep = 5; },
    "confirm-photo": () => { state.captureStep = 2; },
    "capture-quote": () => { state.captureStep = 2; haptic(18); },
    "toggle-recording": () => { if (!state.isRecording) state.isRecording = true; else { state.isRecording = false; state.captureStep = 3; } haptic(24); },
    "save-capture": () => { const book = state.captureSource === "photo" ? "Thinking, Fast and Slow" : "48 Laws of Power"; state.modal = null; state.route = "home"; state.sync = "done"; showToast(`${state.captureSource === "photo" ? "Photo and thought" : "Thought"} kept with ${book}`); },
    "toggle-manual-source": () => { state.manualSourceOpen = !state.manualSourceOpen; state.manualTagOpen = false; },
    "toggle-manual-tags": () => { state.manualTagOpen = !state.manualTagOpen; state.manualSourceOpen = false; },
    "attach-manual-photo": () => { state.manualHasPhoto = true; showToast("Photo attached"); },
    "remove-manual-photo": () => { state.manualHasPhoto = false; },
    "toggle-manual-recording": () => { state.manualRecording = !state.manualRecording; haptic(20); },
    "save-manual": () => saveManualNote(),
    "review-attention": () => { state.batchFilter = null; state.attentionOnly = true; state.route = "all"; },
    "clear-attention": () => { state.attentionOnly = false; state.batchFilter = null; state.searchQuery = ""; state.dateFilter = "all"; state.bookFilter = "all"; state.tagFilter = "all"; state.tagFilters = []; state.containsFilter = "all"; state.quickFilter = null; },
    "clear-tag-view": () => { state.tagFilters = []; state.tagMatchMode = "any"; state.searchFilterMenu = null; },
    "clear-note-search": () => { state.searchQuery = ""; },
    "clear-book-search": () => { state.bookSearchQuery = ""; },
    "clear-book-note-search": () => { state.bookNoteSearchQuery = ""; },
    "clear-link-search": () => { state.linkSearchQuery = ""; },
    "toggle-library-search": () => { state.librarySearchOpen = !state.librarySearchOpen; state.librarySortOpen = false; },
    "toggle-library-sort": () => { state.librarySortOpen = !state.librarySortOpen; state.librarySearchOpen = false; },
    "open-import": () => { state.importContext = state.route === "all" ? "notes" : "books"; state.modal = "import"; },
    "toggle-search": () => { state.searchOpen = true; state.searchFilterMenu = null; },
    "toggle-filter": () => { state.searchOpen = true; state.searchFilterMenu = "date"; },
    "close-search": () => { state.searchOpen = false; state.searchQuery = ""; state.searchFilterMenu = null; state.dateFilter = "all"; state.bookFilter = "all"; state.tagFilter = "all"; state.quickFilter = null; },
    "start-selection": () => { state.selectionMode = true; state.selected.clear(); },
    "start-book-edit": () => { state.selectionMode = true; state.selected.clear(); },
    "select-visible-results": () => { state.selectionMode = true; state.selected = new Set(visibleAllNotes().map(note => note.id)); },
    "select-recent-batch": () => { state.batchFilter = "batch-today"; state.selectionMode = true; state.selected = new Set(captureBatches[0].noteIds); navigateToRoute("batch", { preserveSelection: true }); },
    "select-book-notes": () => { state.selectionMode = true; state.attentionOnly = false; state.selected = new Set(notes.filter(note => note.bookId === state.activeBookId).map(note => note.id)); navigateToRoute("all", { preserveSelection: true }); },
    "cancel-selection": () => { state.selectionMode = false; state.selected.clear(); },
    "auto-tag-selected": () => showToast(`AI tag suggestions ready for ${state.selected.size} ${state.selected.size === 1 ? "note" : "notes"}`),
    "select-all": () => { state.selected = new Set(visibleAllNotes().map(note => note.id)); },
    "open-tags": () => { if (state.selected.size) { state.tagTargets = []; state.modal = "tags"; } },
    "accept-suggested-tags": () => acceptSuggestedTagsForBatch(),
    "decline-suggested-tags": () => declineSuggestedTagsForBatch(),
    "save-batch-review": () => saveBatchReview(),
    "open-move": () => { if (state.selected.size) state.modal = "move"; },
    "open-book-details": () => { state.modal = "book-details"; },
    "save-book-details": () => {
      const book = byBook(state.activeBookId) || books[0];
      const reason = document.querySelector("#book-reason-editor");
      const note = document.querySelector("#book-note-editor");
      if (reason) book.reason = reason.value;
      if (note) book.note = note.value;
      state.modal = null;
      showToast("Book details saved");
    },
    "apply-custom-tag": () => {
      const input = document.querySelector("#custom-tag-input");
      if (input && input.value.trim()) applyTag(`#${input.value.trim().replace(/^#/, "")}`);
      return;
    },
    "change-source": () => { state.modal = "source"; },
    "edit-detail-note": () => { state.editingThought = true; },
    "delete-detail-note": () => deleteDetailNote(),
    "save-thought": () => { const editor = document.querySelector("#thought-editor"); if (editor) notes.find(n => n.id === state.detailId).thought = editor.value; state.editingThought = false; showToast("Thought updated · original preserved"); },
    "share": () => showToast("Share card ready"),
    "ask-book": () => { state.askScope = state.activeBookId; state.activeSkill = "Knowledge Connector"; state.askQuery = "Give me an overview of my notes about this book"; state.askAnswered = true; state.askSaved = false; navigateToRoute("ask"); },
    "open-skills": () => { state.modal = "skills"; },
    "open-ask-scope": () => { state.scopeSearchQuery = ""; state.modal = "ask-scope"; },
    "tag-detail-note": () => { state.tagTargets = [state.detailId]; state.modal = "tags"; },
    "link-detail-note": () => { state.cardMenuNoteId = state.detailId; state.linkSearchQuery = ""; state.modal = "link"; },
    "send-ask": () => submitAsk(),
    "save-ask-note": () => saveAskAnswer(),
    "reset-ask": () => { state.askAnswered = false; state.askSaved = false; state.askQuery = ""; state.askScope = null; state.activeSkill = null; },
    "open-notes-to-think": () => { state.batchFilter = null; state.route = "all"; state.tagFilter = "all"; state.searchQuery = ""; state.quickFilter = null; showToast("12 notes surfaced for review"); },
    "history-info": () => showToast("Captures stay grouped by sync session and input method"),
    "profile-help": () => showToast("This demo simulates a connected Mark device"),
    "sync-now": () => { state.sync = "done"; showToast("Mark is up to date · no new captures"); },
    "device-settings": () => showToast("Device settings are simulated in this demo"),
    "open-tag-manager": () => { state.tagManagerTag = null; state.modal = "tag-manager"; },
    "create-managed-tag": () => showToast("New tag editor ready"),
    "export-notes": () => showToast(`Markdown export prepared · ${notes.length} notes`),
    "add-book-demo": () => showToast("Book search would open here"),
    "import-kindle": () => { state.modal = null; showToast("Kindle import connected · preview ready"); },
    "import-file": () => { state.modal = null; showToast("Import file picker ready"); },
    "import-scan": () => { state.modal = null; showToast("Book cover scanner ready"); },
    "edit-menu-note": () => { state.modal = null; state.detailId = state.cardMenuNoteId; state.detailReturnRoute = "all"; state.editingThought = true; navigateToRoute("detail"); },
    "select-menu-note": () => { state.modal = null; state.selectionMode = true; state.selected = new Set([state.cardMenuNoteId]); state.route = "all"; },
    "tag-menu-note": () => { state.tagTargets = [state.cardMenuNoteId]; state.modal = "tags"; },
    "link-menu-note": () => { state.linkSearchQuery = ""; state.modal = "link"; },
    "move-menu-note": () => { state.selected = new Set([state.cardMenuNoteId]); state.modal = "move"; },
    "delete-menu-note": () => deleteMenuNote(),
  };
  if (actions[action]) { actions[action](); render(); }
}

function saveManualNote() {
  const input = document.querySelector("#manual-note-input");
  const thought = (input?.value ?? state.manualDraft).trim();
  if (!thought) {
    showToast("Write a thought first");
    return;
  }
  const book = byBook(state.manualBookId) || books[2];
  const note = {
    id: `manual-${Date.now()}`,
    bookId: book.id,
    page: "—",
    quote: thought,
    thought,
    raw: thought,
    date: "Today · just now",
    discipline: "Reading",
    concepts: [],
    response: [],
    suggestedResponse: "",
    folder: "",
    tags: [...state.manualTags],
    color: "green",
    manual: true,
    attachment: state.manualHasPhoto ? "photo" : null,
    inputMethod: state.manualRecording ? "voice" : "manual",
  };
  notes.push(note);
  state.modal = null;
  state.route = "home";
  state.sync = "done";
  state.manualDraft = "";
  state.manualRecording = false;
  showToast(`Note kept with ${book.title}`);
}

function submitAsk() {
  const input = document.querySelector("#ask-input");
  const query = (input?.value ?? state.askQuery).trim() || insightPrompts[state.activeSkill] || "";
  if (!query) {
    showToast("Write a question first");
    return;
  }
  state.askQuery = query;
  state.askAnswered = true;
  state.askSaved = false;
  render();
}

function saveAskAnswer() {
  if (!state.askAnswered || state.askSaved) return;
  const result = buildAskResult(state.askQuery);
  const thought = `${result.answer} ${result.closing}`;
  notes.push({
    id: `ask-${Date.now()}`,
    bookId: null,
    page: "—",
    quote: `Ask Mark · ${state.askQuery}`,
    thought,
    raw: thought,
    date: "Today · just now",
    discipline: "Insight",
    concepts: ["AI Insight"],
    response: [],
    suggestedResponse: "",
    folder: "Ask Mark",
    tags: ["#AI/Insight"],
    linkedNoteIds: result.evidence.map(note => note.id),
    color: "green",
    inputMethod: "ask",
  });
  state.askSaved = true;
  render();
  showToast("Saved to Notes · evidence linked");
}

function deleteMenuNote() {
  const index = notes.findIndex(note => note.id === state.cardMenuNoteId);
  if (index < 0) return;
  const [removed] = notes.splice(index, 1);
  state.modal = null;
  state.cardMenuNoteId = null;
  render();
  showToast("Note deleted", () => { notes.splice(index, 0, removed); render(); });
}

function deleteDetailNote() {
  const index = notes.findIndex(note => note.id === state.detailId);
  if (index < 0) return;
  const [removed] = notes.splice(index, 1);
  const previous = state.routeStack.pop();
  state.route = previous && previous !== "detail" ? previous : (state.detailReturnRoute || "all");
  state.editingThought = false;
  render();
  showToast("Note deleted", () => { notes.splice(index, 0, removed); render(); });
}

function linkNote(targetId) {
  const source = notes.find(item => item.id === state.cardMenuNoteId) || notes.find(item => state.selected.has(item.id));
  const target = notes.find(item => item.id === targetId);
  if (!source || !target || source.id === target.id) return;
  source.linkedNoteIds = source.linkedNoteIds || [];
  if (!source.linkedNoteIds.includes(target.id)) source.linkedNoteIds.push(target.id);
  state.modal = null;
  state.linkSearchQuery = "";
  render();
  showToast(`Linked to “${target.thought}”`, () => {
    source.linkedNoteIds = source.linkedNoteIds.filter(id => id !== target.id);
    render();
  });
}

function applyTag(tag) {
  const targetIds = state.tagTargets.length ? state.tagTargets : [...state.selected];
  targetIds.forEach(id => {
    const note = notes.find(item => item.id === id);
    if (!note) return;
    note.tags = note.tags || [];
    if (!note.tags.includes(tag)) note.tags.push(tag);
    note.suggestedTags = (note.suggestedTags || []).filter(item => item !== tag);
  });
  const count = targetIds.length;
  state.modal = null;
  state.tagTargets = [];
  state.selectionMode = false;
  state.selected.clear();
  render();
  showToast(`${tag} added to ${count} ${count === 1 ? "note" : "notes"}`);
}

function acceptSuggestedTagsForBatch() {
  const batch = captureBatches.find(item => item.id === state.batchFilter) || captureBatches[0];
  const snapshot = batch.noteIds.map(id => {
    const note = notes.find(item => item.id === id);
    return { id, tags: [...(note?.tags || [])], suggestedTags: [...(note?.suggestedTags || [])], attention: Boolean(note?.attention) };
  });
  let accepted = 0;
  snapshot.forEach(before => {
    const note = notes.find(item => item.id === before.id);
    if (!note) return;
    note.tags = note.tags || [];
    (note.suggestedTags || []).forEach(tag => {
      if (!note.tags.includes(tag)) note.tags.push(tag);
      accepted += 1;
    });
    note.suggestedTags = [];
    note.attention = false;
  });
  state.batchTagDecision = "accepted";
  render();
  showToast(`${accepted} suggested tags added`, () => {
    snapshot.forEach(before => {
      const note = notes.find(item => item.id === before.id);
      if (!note) return;
      note.tags = [...before.tags];
      note.suggestedTags = [...before.suggestedTags];
      note.attention = before.attention;
    });
    state.batchTagDecision = null;
    render();
  });
}

function declineSuggestedTagsForBatch() {
  const batch = captureBatches.find(item => item.id === state.batchFilter) || captureBatches[0];
  const snapshot = batch.noteIds.map(id => {
    const note = notes.find(item => item.id === id);
    return { id, suggestedTags: [...(note?.suggestedTags || [])], attention: Boolean(note?.attention) };
  });
  snapshot.forEach(before => {
    const note = notes.find(item => item.id === before.id);
    if (!note) return;
    note.suggestedTags = [];
    note.attention = false;
  });
  state.batchTagDecision = "declined";
  render();
  showToast("AI tag suggestions declined", () => {
    snapshot.forEach(before => {
      const note = notes.find(item => item.id === before.id);
      if (!note) return;
      note.suggestedTags = [...before.suggestedTags];
      note.attention = before.attention;
    });
    state.batchTagDecision = null;
    render();
  });
}

function saveBatchReview() {
  state.route = "home";
  state.routeStack = [];
  state.batchFilter = null;
  state.selectionMode = false;
  state.selected.clear();
  state.sync = "done";
  render();
  window.scrollTo(0, 0);
  showToast("Review saved · notes added to your library");
}

function acceptSuggestedTag(noteId, tag) {
  const note = notes.find(item => item.id === noteId);
  if (!note || !tag) return;
  note.tags = note.tags || [];
  if (!note.tags.includes(tag)) note.tags.push(tag);
  note.suggestedTags = (note.suggestedTags || []).filter(item => item !== tag);
  if (!note.suggestedTags.length) note.attention = false;
  render();
  showToast(`${tag} confirmed`);
}

function moveSelected(bookId) {
  const selectedIds = [...state.selected];
  const before = selectedIds.map(id => [id, notes.find(n => n.id === id).bookId]);
  selectedIds.forEach(id => { const note = notes.find(n => n.id === id); note.bookId = bookId; note.attention = false; });
  const count = selectedIds.length;
  state.modal = null; state.selectionMode = false; state.selected.clear(); state.attentionOnly = false;
  render();
  showToast(`${count} notes moved to “${byBook(bookId).title}”`, () => { before.forEach(([id, oldBook]) => notes.find(n => n.id === id).bookId = oldBook); render(); });
}

function changeSource(bookId) {
  const note = notes.find(n => n.id === state.detailId);
  note.bookId = bookId; note.attention = false; state.modal = null; render(); showToast(`Moved to “${byBook(bookId).title}”`);
}

function showToast(message, undo) {
  toastRoot.innerHTML = `<div class="toast"><span class="check-dot">✓</span><span>${message}</span>${undo ? `<button id="undo-toast">Undo</button>` : ""}</div>`;
  if (undo) document.querySelector("#undo-toast").addEventListener("click", () => { undo(); toastRoot.innerHTML = ""; });
  window.setTimeout(() => { toastRoot.innerHTML = ""; }, 3200);
}

function haptic(pattern) { if (navigator.vibrate) navigator.vibrate(pattern); }

if ("serviceWorker" in navigator) window.addEventListener("load", () => navigator.serviceWorker.register("service-worker.js").catch(() => {}));
window.addEventListener("scroll", syncBookPageHeader, { passive: true });

render();
window.setTimeout(() => { if (state.sync === "syncing") { state.sync = "done"; render(); haptic([12, 30, 12]); } }, 1800);
