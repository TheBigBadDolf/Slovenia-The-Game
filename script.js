let xp = 0;
let level = 1;
let xpToNext = 100;

let achievements = [];

const titles = [
  "Tourist",
  "Explorer",
  "Adventurer",
  "Mountain Goat",
  "Slovenian Myth"
];

// XP SYSTEM
function addXP(amount) {
  xp += amount;

  if (xp >= xpToNext) {
    levelUp();
  }

  updateUI();
}

// LEVEL SYSTEM
function levelUp() {
  xp -= xpToNext;
  level++;

  xpToNext = Math.floor(xpToNext * 1.3);

  alert(`LEVEL UP! You are now level ${level}`);
}

// UI UPDATE
function updateUI() {
  document.getElementById("level").innerText = level;
  document.getElementById("xpText").innerText = `${xp} / ${xpToNext} XP`;

  let percent = (xp / xpToNext) * 100;
  document.getElementById("xpBar").style.width = percent + "%";

  document.getElementById("title").innerText =
    titles[Math.min(level - 1, titles.length - 1)];
}

// ADMIN TOGGLE
function toggleAdmin() {
  const panel = document.getElementById("adminPanel");
  panel.style.display = panel.style.display === "none" ? "block" : "none";
}

// ACHIEVEMENTS
function unlockAchievement() {
  const name = prompt("Achievement name:");

  if (!name) return;

  achievements.push(name);
  renderAchievements();
}

function renderAchievements() {
  const list = document.getElementById("achievements");
  list.innerHTML = "";

  achievements.forEach(a => {
    const li = document.createElement("li");
    li.innerText = "🏆 " + a;
    list.appendChild(li);
  });
}

// INIT
updateUI();
