const comments = []; // intentionally empty for now

const commentEl = document.getElementById("comment");
const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");
const statusEl = document.getElementById("status");
let currentComment = "";
let lastIndex = -1;

generateBtn.addEventListener("click", () => {
  if (!comments.length) return;
  let index;
  do index = Math.floor(Math.random() * comments.length);
  while (comments.length > 1 && index === lastIndex);
  lastIndex = index;
  currentComment = comments[index];
  commentEl.textContent = currentComment;
  copyBtn.disabled = false;
});

copyBtn.addEventListener("click", async () => {
  if (!currentComment) return;
  await navigator.clipboard.writeText(currentComment);
  statusEl.textContent = "COPIED ♡";
  setTimeout(() => statusEl.textContent = "", 1300);
});
