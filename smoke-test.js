const fs = require("fs");
const path = require("path");

const source = fs.readFileSync(path.join(__dirname, "app.js"), "utf8");
const actionMarkup = new Set([...source.matchAll(/data-action="([^"]+)"/g)].map(match => match[1]));
const actionMapSource = source.slice(source.indexOf("const actions = {"), source.indexOf("if (actions[action])"));
const actionHandlers = new Set([...actionMapSource.matchAll(/^\s+"([^"]+)":/gm)].map(match => match[1]));
const missingActions = [...actionMarkup].filter(action => !actionHandlers.has(action));

const unboundButtons = [...source.matchAll(/<button\b([^>]*)>/g)]
  .map(match => match[1])
  .filter(attributes => !/(data-|id=)/.test(attributes));

const requiredFlows = [
  ["Capture History", "function historyScreen"],
  ["All Notes selection", '"start-selection"'],
  ["Select current filtered results", '"select-visible-results"'],
  ["Card action menu", "function cardMenuModal"],
  ["Ask evidence scope", "function askScopeModal"],
  ["Dynamic Ask answer", "function buildAskResult"],
  ["Save Ask answer as a linked note", "function saveAskAnswer"],
  ["Capture flow", "function captureModal"],
  ["Direct quick-note capture", 'state.captureStep = 5'],
  ["Quick-note save", "function saveManualNote"],
  ["Book review", "function bookScreen"],
  ["Inline linked notes", "paper-connections"],
  ["Sync batch review", "function batchReviewScreen"],
  ["Organized recently captured view", "function recentlyCapturedScreen"],
  ["Suggested-tag acceptance", "function acceptSuggestedTagsForBatch"],
  ["Suggested-tag decline and batch save", "function declineSuggestedTagsForBatch"],
  ["Per-note low-confidence tag confirmation", "function acceptSuggestedTag"],
  ["Expandable library search", "library-search-panel"],
  ["Library Books and Notes views", "function libraryHeader"],
  ["Library Notes long-press selection", ".library-notes-screen .compact-note-list [data-note-id]"],
  ["Book, author, and note search", "Search books, authors, or notes"],
  ["Searchable Ask evidence scope", "scope-search-input"],
  ["Searchable note linking", "link-search-input"],
  ["Persisted explicit note link", "function linkNote"],
  ["Single-note Ask evidence", "note:"],
  ["Source-aware child-page back navigation", "function goBackRoute"],
  ["Book and note import", "function importModal"],
  ["Dedicated professional search", "professional-search-screen"],
  ["Global tag management", "function tagManagerModal"],
];
const missingFlows = requiredFlows.filter(([, marker]) => !source.includes(marker)).map(([name]) => name);

if (missingActions.length || unboundButtons.length || missingFlows.length) {
  console.error("Interaction smoke test failed.");
  if (missingActions.length) console.error("Missing data-action handlers:", missingActions.join(", "));
  if (unboundButtons.length) console.error("Buttons without an interaction contract:", unboundButtons.length);
  if (missingFlows.length) console.error("Missing critical flows:", missingFlows.join(", "));
  process.exit(1);
}

console.log(`PASS · ${actionMarkup.size} action types are handled · ${requiredFlows.length} critical flows are present · 0 unbound buttons`);
