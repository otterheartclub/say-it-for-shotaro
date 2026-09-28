// Comment bank intentionally left empty while the site structure is being finalized.
const comments = [];

const commentEl = document.getElementById("comment");
const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");
const statusEl = document.getElementById("status");

let currentComment = "";
let lastIndex = -1;

generateBtn.addEventListener("click", () => {
  if (!comments.length) return;

  let index;
  do {
    index = Math.floor(Math.random() * comments.length);
  } while (comments.length > 1 && index === lastIndex);

  lastIndex = index;
  currentComment = comments[index];
  commentEl.textContent = currentComment;
  copyBtn.disabled = false;
  statusEl.textContent = "";
});

copyBtn.addEventListener("click", async () => {
  if (!currentComment) return;

  try {
    await navigator.clipboard.writeText(currentComment);
  } catch {
    const textarea = document.createElement("textarea");
    textarea.value = currentComment;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
  }

  statusEl.textContent = "COPIED ♡";
  setTimeout(() => statusEl.textContent = "", 1400);
});
