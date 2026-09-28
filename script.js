// ============================================================
// SAY IT FOR SHOTARO — CONTENT AREA
// Later, we only need to edit this section for each event.
// ============================================================

const eventPack = {
  eventName: "Coming soon",
  eventNote: "We’ll update this space when Shotaro’s next event is announced.",
  keywords: [],
  hashtags: [],
  comments: []
};

// ============================================================
// SITE LOGIC — no need to edit this for normal event updates.
// ============================================================

const commentEl = document.getElementById("comment");
const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");
const copyStatus = document.getElementById("copyStatus");
const eventNameEl = document.getElementById("eventName");
const eventNoteEl = document.getElementById("eventNote");
const keywordsEl = document.getElementById("keywords");
const hashtagsEl = document.getElementById("hashtags");
const copyKeywordsBtn = document.getElementById("copyKeywords");
const copyHashtagsBtn = document.getElementById("copyHashtags");

let lastIndex = -1;

eventNameEl.textContent = eventPack.eventName;
eventNoteEl.textContent = eventPack.eventNote;

if (eventPack.keywords.length) {
  keywordsEl.textContent = eventPack.keywords.join(" · ");
  copyKeywordsBtn.disabled = false;
}
if (eventPack.hashtags.length) {
  hashtagsEl.textContent = eventPack.hashtags.join(" ");
  copyHashtagsBtn.disabled = false;
}

function getRandomIndex(length) {
  if (length <= 1) return 0;
  let next;
  do { next = Math.floor(Math.random() * length); } while (next === lastIndex);
  return next;
}

function generateComment() {
  if (!eventPack.comments.length) {
    commentEl.textContent = "Lines are coming soon. ♡";
    copyStatus.textContent = "We’ll add the comment pack when the event is confirmed.";
    return;
  }
  const index = getRandomIndex(eventPack.comments.length);
  lastIndex = index;
  commentEl.textContent = eventPack.comments[index];
  copyStatus.textContent = "";
}

async function copyText(text, successMessage) {
  if (!text || text.includes("appear here") || text.includes("coming soon")) return;
  try {
    await navigator.clipboard.writeText(text);
    copyStatus.textContent = successMessage;
    setTimeout(() => { copyStatus.textContent = ""; }, 1800);
  } catch {
    copyStatus.textContent = "Copy didn’t work — press and hold the text to copy.";
  }
}

generateBtn.addEventListener("click", generateComment);
copyBtn.addEventListener("click", () => copyText(commentEl.textContent, "Copied! ♡"));
copyKeywordsBtn.addEventListener("click", () => copyText(eventPack.keywords.join(" "), "Keywords copied!"));
copyHashtagsBtn.addEventListener("click", () => copyText(eventPack.hashtags.join(" "), "Hashtags copied!"));
