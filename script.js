/* EduConnect: beginner-friendly educational portal */
"use strict";

const STORAGE_KEYS = { progress: "educonnect_progress_v1", theme: "educonnect_theme_v1" };

const notes = {
  python: {
    title: "Python Fundamentals",
    html: `<p>Python is a general-purpose programming language known for readable syntax. It is used in web development, automation, data analysis, and AI.</p>
      <h3>1. Variables and data types</h3><p>A variable stores a value. Common types include <code>int</code> (whole numbers), <code>float</code> (decimal numbers), <code>str</code> (text), and <code>bool</code> (True or False).</p><p><code>student = "Asha"</code><br><code>semester = 7</code></p>
      <h3>2. Conditions and loops</h3><p>An <code>if</code> statement makes a decision. A <code>for</code> or <code>while</code> loop repeats instructions.</p>
      <h3>3. Functions</h3><p>A function is a reusable block of code defined with <code>def</code>. Functions help keep programs organized.</p>
      <h3>Remember</h3><ul><li>Python uses indentation to group statements.</li><li>Lists store ordered collections and can be changed.</li><li>Use meaningful variable names.</li></ul>`
  },
  dbms: {
    title: "Database Essentials",
    html: `<p>A Database Management System (DBMS) helps organize, store, retrieve, and update data. Examples include MySQL, PostgreSQL, and SQLite.</p>
      <h3>1. Tables and records</h3><p>A table contains rows and columns. Each row is a record and each column describes an attribute.</p>
      <h3>2. Keys</h3><p>A primary key uniquely identifies each row. A foreign key links data in one table to a key in another table.</p>
      <h3>3. SQL</h3><p>SQL is used to work with relational databases. Example: <code>SELECT name FROM Students;</code> retrieves the name column.</p>
      <h3>Remember</h3><ul><li>Use <code>WHERE</code> to filter rows.</li><li>Use <code>JOIN</code> to combine related tables.</li><li>Normalization helps reduce unwanted duplication.</li></ul>`
  },
  ml: {
    title: "Machine Learning 101",
    html: `<p>Machine Learning (ML) is a field of AI where systems learn patterns from data to make predictions or decisions.</p>
      <h3>1. Main types</h3><p><b>Supervised learning</b> uses labeled examples. <b>Unsupervised learning</b> finds patterns in data without target labels. <b>Reinforcement learning</b> learns through rewards and penalties.</p>
      <h3>2. Training and testing</h3><p>A training set helps a model learn. A separate test set estimates how well it works on unseen examples.</p>
      <h3>3. Features and labels</h3><p>Features are input information; a label is the target value in a supervised task.</p>
      <h3>Remember</h3><ul><li>Clean, relevant data matters.</li><li>Overfitting means a model fits training data too closely and generalizes poorly.</li><li>Choose evaluation metrics that fit the task.</li></ul>`
  },
  networks: {
    title: "Computer Networking Basics",
    html: `<p>A computer network connects devices so they can exchange data and share resources.</p>
      <h3>1. IP addresses</h3><p>An IP address identifies a device or network interface for communication. IPv4 uses 32 bits; IPv6 uses 128 bits.</p>
      <h3>2. Protocols</h3><p>Protocols are agreed rules for communication. HTTP/HTTPS support web traffic, DNS translates domain names, and TCP provides reliable ordered delivery.</p>
      <h3>3. Network devices</h3><p>A router forwards packets between networks. A switch connects devices within a local network.</p>
      <h3>Remember</h3><ul><li>DNS helps find the IP address for a domain name.</li><li>HTTPS encrypts web communication using TLS.</li><li>Bandwidth and latency describe different aspects of network performance.</li></ul>`
  },
  ai: {
    title: "Introduction to Artificial Intelligence",
    html: `<p>Artificial Intelligence (AI) is the study of building systems that perform tasks associated with abilities such as reasoning, perception, language, and decision-making.</p>
      <h3>1. Intelligent agents</h3><p>An agent observes its environment and takes actions to achieve a goal.</p>
      <h3>2. Search and reasoning</h3><p>Search algorithms explore possible states to find a solution. Reasoning uses facts and rules to derive conclusions.</p>
      <h3>3. AI applications</h3><p>Examples include translation, recommendation systems, image recognition, accessibility tools, and robotics.</p>
      <h3>Remember</h3><ul><li>AI is a broad field; machine learning is one approach within AI.</li><li>AI systems can make mistakes and should be evaluated carefully.</li><li>Fairness, privacy, and transparency matter.</li></ul>`
  }
};

const quizzes = {
  "Python": [
    { q: "Which keyword is used to define a function in Python?", options: ["func", "def", "function", "make"], answer: 1, explanation: "Python functions are declared with the def keyword." },
    { q: "Which data type stores True or False?", options: ["str", "int", "bool", "list"], answer: 2, explanation: "The bool type represents the Boolean values True and False." },
    { q: "What is the output of 3 + 2 * 2?", options: ["10", "7", "12", "8"], answer: 1, explanation: "Multiplication happens before addition, so 3 + 4 equals 7." },
    { q: "Which symbol starts a single-line comment in Python?", options: ["//", "#", "<!--", "/*"], answer: 1, explanation: "A # begins a single-line comment in Python." },
    { q: "Which collection is ordered and mutable?", options: ["tuple", "string", "list", "integer"], answer: 2, explanation: "Lists preserve order and can be modified after creation." }
  ],
  "DBMS": [
    { q: "What is the main purpose of a primary key?", options: ["Sort every table", "Uniquely identify a row", "Encrypt the database", "Delete duplicates automatically"], answer: 1, explanation: "A primary key uniquely identifies each record in a table." },
    { q: "Which SQL command retrieves data?", options: ["SELECT", "PAINT", "FETCHFILE", "OPEN"], answer: 0, explanation: "SELECT queries data from one or more tables." },
    { q: "What does a foreign key usually do?", options: ["Changes font size", "Links related tables", "Creates a backup", "Compresses rows"], answer: 1, explanation: "A foreign key references a key in another or the same table to maintain relationships." },
    { q: "Which SQL clause filters rows?", options: ["ORDER BY", "WHERE", "GROUP TITLE", "STYLE"], answer: 1, explanation: "WHERE applies a condition to rows returned or affected by a query." },
    { q: "What is database normalization intended to reduce?", options: ["Data redundancy", "Data meaning", "Table names", "All security"], answer: 0, explanation: "Normalization structures tables to reduce avoidable duplication and anomalies." }
  ],
  "Machine Learning": [
    { q: "Which learning type uses labeled training examples?", options: ["Unsupervised", "Supervised", "Randomized only", "Manual sorting"], answer: 1, explanation: "Supervised learning uses examples paired with known target labels." },
    { q: "What is a feature in a dataset?", options: ["An input variable", "A model error only", "The computer screen", "A file extension"], answer: 0, explanation: "Features are the input variables used by a model." },
    { q: "Why keep a test dataset?", options: ["To make files larger", "To estimate performance on unseen data", "To replace training", "To hide labels forever"], answer: 1, explanation: "A held-out test set estimates how the trained model generalizes." },
    { q: "What is overfitting?", options: ["A model generalizes perfectly always", "A model learns training details too closely", "A dataset has no rows", "A program has no variables"], answer: 1, explanation: "Overfitting happens when a model fits training data too closely and performs poorly on new data." },
    { q: "Which is an unsupervised learning task?", options: ["Predicting a labeled exam score", "Grouping customers by similarity", "Using known labels to classify emails", "Checking a manually entered answer"], answer: 1, explanation: "Clustering groups examples by similarity without requiring target labels." }
  ],
  "Computer Networks": [
    { q: "What does DNS help a device do?", options: ["Translate domain names to IP addresses", "Charge a laptop", "Compress images only", "Create passwords"], answer: 0, explanation: "DNS resolves domain names to associated records, commonly IP addresses." },
    { q: "Which device forwards packets between networks?", options: ["Keyboard", "Router", "Monitor", "Scanner"], answer: 1, explanation: "Routers forward packets between different networks." },
    { q: "Which protocol provides reliable, ordered byte-stream delivery?", options: ["TCP", "HTML", "CSS", "JPEG"], answer: 0, explanation: "TCP provides reliable, ordered delivery of a byte stream." },
    { q: "What is the main purpose of an IP address?", options: ["Identify a network interface for communication", "Display a website's colors", "Store a document", "Measure battery level"], answer: 0, explanation: "IP addressing helps identify interfaces and route packets across networks." },
    { q: "What does HTTPS add to HTTP?", options: ["TLS-protected communication", "More screen brightness", "Automatic translation", "A new keyboard"], answer: 0, explanation: "HTTPS uses TLS to protect HTTP communication in transit." }
  ]
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
let activeQuiz = null;
let quizState = null;
let toastTimeout = null;

function readProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEYS.progress) || "[]");
    return Array.isArray(saved) ? saved.filter(item => item && typeof item.score === "number" && typeof item.total === "number") : [];
  } catch (error) {
    return [];
  }
}

function saveProgress(progress) {
  try {
    localStorage.setItem(STORAGE_KEYS.progress, JSON.stringify(progress));
  } catch (error) {
    showToast("Could not save progress in this browser.");
  }
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.remove("hidden");
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.add("hidden"), 2800);
}

function renderProgress() {
  const history = readProgress();
  const scores = history.map(item => Math.round((item.score / item.total) * 100));
  $("#completedMetric").textContent = String(history.length);
  $("#averageMetric").textContent = scores.length ? `${Math.round(scores.reduce((sum, score) => sum + score, 0) / scores.length)}%` : "0%";
  $("#bestMetric").textContent = scores.length ? `${Math.max(...scores)}%` : "0%";

  const list = $("#historyList");
  if (!history.length) {
    list.innerHTML = `<div class="empty-history"><span>📚</span><b>Your learning story starts here.</b><p>Complete a quiz to see your progress.</p><a href="#quiz-app" class="text-link">Try your first quiz →</a></div>`;
    return;
  }

  list.innerHTML = history.slice().reverse().slice(0, 8).map(item => {
    const percent = Math.round((item.score / item.total) * 100);
    const date = new Date(item.date);
    const dateLabel = Number.isNaN(date.getTime()) ? "Recently" : date.toLocaleString([], { dateStyle: "medium", timeStyle: "short" });
    const initials = item.subject === "Machine Learning" ? "ML" : item.subject === "Computer Networks" ? "NW" : item.subject.slice(0, 2).toUpperCase();
    return `<div class="history-row"><span class="history-subject-icon">${escapeHTML(initials)}</span><div class="history-detail"><b>${escapeHTML(item.subject)} quiz</b><small>${escapeHTML(dateLabel)} · ${item.score} of ${item.total} correct</small></div><span class="history-score">${percent}%</span></div>`;
  }).join("");
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
}

function openQuiz(subject) {
  if (!quizzes[subject]) return;
  activeQuiz = subject;
  quizState = { index: 0, answers: Array(quizzes[subject].length).fill(null), submitted: false };
  $("#quizPanel").classList.remove("hidden");
  $("#quizSubjectPill").textContent = subject.toUpperCase();
  $("#quizTitle").textContent = `${subject} Basics`;
  $("#quizResult").classList.add("hidden");
  $("#quizPanel").scrollIntoView({ behavior: "smooth", block: "start" });
  renderQuestion();
}

function renderQuestion() {
  if (!quizState || !activeQuiz) return;
  const questions = quizzes[activeQuiz];
  const current = questions[quizState.index];
  const number = quizState.index + 1;
  $("#questionCounter").textContent = `Question ${number} of ${questions.length}`;
  $("#questionPercent").textContent = `${Math.round((number / questions.length) * 100)}%`;
  $("#questionProgress").style.width = `${(number / questions.length) * 100}%`;
  $("#questionText").textContent = current.q;
  $("#quizFeedback").classList.add("hidden");
  $("#answerList").innerHTML = current.options.map((option, index) => {
    const selected = quizState.answers[quizState.index] === index;
    return `<button type="button" class="answer-option ${selected ? "selected" : ""}" data-answer="${index}" aria-pressed="${selected}"><span class="answer-letter">${String.fromCharCode(65 + index)}</span><span>${escapeHTML(option)}</span></button>`;
  }).join("");
  $$(".answer-option", $("#answerList")).forEach(button => {
    button.addEventListener("click", () => {
      if (quizState.submitted) return;
      quizState.answers[quizState.index] = Number(button.dataset.answer);
      renderQuestion();
    });
  });
  $("#previousQuestion").disabled = quizState.index === 0;
  $("#previousQuestion").style.opacity = quizState.index === 0 ? ".5" : "1";
  $("#nextQuestion").classList.toggle("hidden", quizState.index === questions.length - 1);
  $("#submitQuiz").classList.toggle("hidden", quizState.index !== questions.length - 1);
  $("#answerList").classList.remove("hidden");
  $("#questionText").classList.remove("hidden");
  $("#quizFeedback").classList.add("hidden");
  $("#quizResult").classList.add("hidden");
}

function submitQuiz() {
  if (!quizState || quizState.submitted) return;
  const unanswered = quizState.answers.findIndex(answer => answer === null);
  if (unanswered !== -1) {
    quizState.index = unanswered;
    renderQuestion();
    $("#quizFeedback").textContent = "Choose an answer before submitting. Your first unanswered question is shown.";
    $("#quizFeedback").classList.remove("hidden");
    return;
  }
  const questions = quizzes[activeQuiz];
  const score = questions.reduce((sum, question, index) => sum + (question.answer === quizState.answers[index] ? 1 : 0), 0);
  quizState.submitted = true;
  const attempt = { subject: activeQuiz, score, total: questions.length, date: new Date().toISOString() };
  const progress = readProgress();
  progress.push(attempt);
  saveProgress(progress);
  renderProgress();

  $("#answerList").classList.add("hidden");
  $("#questionText").classList.add("hidden");
  $("#quizFeedback").classList.add("hidden");
  $("#previousQuestion").classList.add("hidden");
  $("#nextQuestion").classList.add("hidden");
  $("#submitQuiz").classList.add("hidden");
  const percentage = Math.round((score / questions.length) * 100);
  const message = percentage === 100 ? "Perfect score! Excellent work." : percentage >= 60 ? "Nice work! Review the explanations to strengthen your knowledge." : "Good effort. Every attempt is a chance to learn.";
  $("#quizResult").innerHTML = `<div class="result-score">${score}/${questions.length} · ${percentage}%</div><p>${message}</p><div class="result-review">${questions.map((question, index) => {
    const correct = question.answer === quizState.answers[index];
    return `<div class="review-item"><b class="${correct ? "review-correct" : "review-wrong"}">${correct ? "✓ Correct" : "✕ Not quite"}: ${escapeHTML(question.q)}</b><div>Your answer: ${escapeHTML(question.options[quizState.answers[index]])}</div><div>Correct answer: ${escapeHTML(question.options[question.answer])}</div><p>${escapeHTML(question.explanation)}</p></div>`;
  }).join("")}</div><button type="button" class="button button-primary" id="retryQuiz" style="margin-top:18px">Try again ↻</button>`;
  $("#quizResult").classList.remove("hidden");
  $("#retryQuiz").addEventListener("click", () => openQuiz(activeQuiz));
  showToast(`Quiz saved: ${score}/${questions.length} correct.`);
  $("#quizResult").scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function closeQuiz() {
  $("#quizPanel").classList.add("hidden");
  activeQuiz = null;
  quizState = null;
}

function openNotes(key) {
  const note = notes[key];
  if (!note) return;
  $("#notesTitle").textContent = note.title;
  $("#notesContent").innerHTML = note.html;
  $("#notesModal").classList.remove("hidden");
  $("#closeNotes").focus();
}

function closeNotes() {
  $("#notesModal").classList.add("hidden");
}

function filterResources() {
  const query = $("#resourceSearch").value.trim().toLowerCase();
  const subject = $("#subjectFilter").value;
  let visible = 0;
  $$(".resource-card").forEach(card => {
    const matchesQuery = `${card.dataset.search} ${card.textContent}`.toLowerCase().includes(query);
    const matchesSubject = subject === "all" || card.dataset.subject === subject;
    const show = matchesQuery && matchesSubject;
    card.classList.toggle("hidden", !show);
    if (show) visible++;
  });
  $("#noResources").classList.toggle("hidden", visible > 0);
}

function initTheme() {
  let theme = "light";
  try { theme = localStorage.getItem(STORAGE_KEYS.theme) || "light"; } catch (error) {}
  document.body.classList.toggle("dark", theme === "dark");
  $("#themeToggle").textContent = theme === "dark" ? "☀" : "☾";
  $("#themeToggle").setAttribute("aria-label", theme === "dark" ? "Switch to light theme" : "Switch to dark theme");
}

function toggleTheme() {
  const dark = !document.body.classList.contains("dark");
  document.body.classList.toggle("dark", dark);
  $("#themeToggle").textContent = dark ? "☀" : "☾";
  $("#themeToggle").setAttribute("aria-label", dark ? "Switch to light theme" : "Switch to dark theme");
  try { localStorage.setItem(STORAGE_KEYS.theme, dark ? "dark" : "light"); } catch (error) {}
}

function initNavigation() {
  const menu = $("#mainNav");
  $("#menuToggle").addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    $("#menuToggle").setAttribute("aria-expanded", String(open));
  });
  $$(".nav-link").forEach(link => link.addEventListener("click", () => {
    $$(".nav-link").forEach(item => item.classList.remove("active"));
    link.classList.add("active");
    menu.classList.remove("open");
    $("#menuToggle").setAttribute("aria-expanded", "false");
  }));
  document.addEventListener("keydown", event => {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
      event.preventDefault();
      $("#resourceSearch").focus();
      $("#materials").scrollIntoView({ behavior: "smooth" });
    }
    if (event.key === "Escape") {
      closeNotes();
      menu.classList.remove("open");
      $("#menuToggle").setAttribute("aria-expanded", "false");
    }
  });
}

function init() {
  initTheme();
  initNavigation();
  renderProgress();
  $("#themeToggle").addEventListener("click", toggleTheme);
  $("#resourceSearch").addEventListener("input", filterResources);
  $("#subjectFilter").addEventListener("change", filterResources);
  $("#showAllResources").addEventListener("click", () => {
    $("#resourceSearch").value = "";
    $("#subjectFilter").value = "all";
    filterResources();
    showToast("Showing all learning resources.");
  });
  $$(".resource-open[data-note]").forEach(button => button.addEventListener("click", () => openNotes(button.dataset.note)));
  $$(".quiz-choice").forEach(button => button.addEventListener("click", () => openQuiz(button.dataset.quiz)));
  $("#previousQuestion").addEventListener("click", () => {
    if (quizState && quizState.index > 0) { quizState.index--; renderQuestion(); }
  });
  $("#nextQuestion").addEventListener("click", () => {
    if (!quizState) return;
    if (quizState.answers[quizState.index] === null) {
      $("#quizFeedback").textContent = "Please choose an answer before moving to the next question.";
      $("#quizFeedback").classList.remove("hidden");
      return;
    }
    if (quizState.index < quizzes[activeQuiz].length - 1) { quizState.index++; renderQuestion(); }
  });
  $("#submitQuiz").addEventListener("click", submitQuiz);
  $("#closeQuiz").addEventListener("click", closeQuiz);
  $("#closeNotes").addEventListener("click", closeNotes);
  $("#doneNotes").addEventListener("click", closeNotes);
  $("#notesModal").addEventListener("click", event => { if (event.target === $("#notesModal")) closeNotes(); });
  $("#clearProgress").addEventListener("click", () => {
    const history = readProgress();
    if (!history.length) { showToast("There is no saved progress to clear."); return; }
    if (window.confirm("Clear all saved quiz attempts from this browser? This cannot be undone.")) {
      saveProgress([]);
      renderProgress();
      showToast("Saved progress has been cleared.");
    }
  });
}

document.addEventListener("DOMContentLoaded", init);
