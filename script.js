/* PASSWORD */
const correctPassword = "malkin 221041";

function unlockWebsite() {
  const input = document.getElementById("passwordInput");
  const error = document.getElementById("passwordError");

  if (input.value === correctPassword) {
    document.getElementById("passwordScreen").classList.add("hidden");
    document.getElementById("mainWebsite").classList.remove("hidden");
    error.innerText = "";
  } else {
    error.innerText = "❌ Wrong password! Please try again.";
    input.select();
  }
}

document.getElementById("passwordInput").addEventListener("keydown", function(event) {
  if (event.key === "Enter") unlockWebsite();
});


/* QUESTIONS */
let currentQuestion = 0;
let answers = [];

const questions = [
  " Rameen Hamari sabse funny memory kaunsi hai? 😄",
  "Hamari muhabat ka sabse special moment ap ke liye kya hai? ❤️",
  "Meri kaunsi baat apko sabse zyada smile karwati hai? 😊",
  "Agar hamari muhabat ka title hota, to kya hota? 💕",
  "Hamari koi aisi memory jo ap kabhi nahi bhoologi? 🌸",
  "Movie night 🎬 ya outing 🌸 aik bar phir wedding night  — ap kya choose karogi?",
  "Surprise gift 🎁 ya surprise trip ✈️?",
  "Long conversation 💬 ya peaceful time together 🌙?",
  " hmari muhabt ka raz kia hy ? ❤️",
  "Cake 🎂 ya favourite food 🍕?",
  "Meri kaunsi habit apko secretly funny lagti hai? 😂",
  "apke hisaab se meri dream surprise kya hogi? 🎁",
  "Mere mood ko instantly kya better kar sakta hai? 😊",
  "Agar main ek din ke liye invisible ho jaun to main sabse pehle kya karunga? 😂",
  "Mujhe 3 words mein describe karo. ❤️",
  "Complete this: Ham dono ki sabse special baat ______.",
  "Complete this: ap mere liye ______ ho. ❤️",
  "Complete this: Hamari next amazing memory ______ honi chahiye.",
  "Complete this: Mujhe sabse zyada smile tab aati hai jab ______.",
  "Complete this: Hamari story ______ hai. 💕",
  "TRUTH 💭 — Mere baare mein ek secret opinion batao.",
  "TRUTH 💭 — Hamari kaunsi memory ap dobara experience karna chahogi?",
  "TRUTH 💭 — Mere liye tumhari ek special wish kya hai? ❤️",
  "TRUTH 💭 — Meri sabse cute habit kaunsi hai? 😄",
  "DARE 🎀 — Mujhe ek funny nickname do.",
  "DARE 🎀 — Mere liye 3 words ka cute message likho.",
  "DARE 🎀 — Hamare future ke liye ek fun plan banao.",
  "MYSTERY 🔐 — Agar hamari story ki sirf ek memory save karni ho, woh kaunsi hogi?",
  "MYSTERY 🔐 — Aaj apki birthday par apki ek wish kya hai? 🎂",
  "FINAL QUESTION 🔓 — Are you ready for your final surprise? 🎁❤️"
];

const pictures = [
  "photos/photo1.jpeg", "photos/photo2.jpeg", "photos/photo3.jpeg",
  "photos/photo1.jpeg", "photos/photo2.jpeg", "photos/photo3.jpeg",
  "photos/photo1.jpeg", "photos/photo2.jpeg", "photos/photo3.jpeg",
  "photos/photo1.jpeg", "photos/photo2.jpeg", "photos/photo3.jpeg",
  "photos/photo1.jpeg", "photos/photo2.jpeg", "photos/photo3.jpeg",
  "photos/photo1.jpeg", "photos/photo2.jpeg", "photos/photo3.jpeg",
  "photos/photo1.jpeg", "photos/photo2.jpeg", "photos/photo3.jpeg",
  "photos/photo1.jpeg", "photos/photo2.jpeg", "photos/photo3.jpeg",
  "photos/photo1.jpeg", "photos/photo2.jpeg", "photos/photo3.jpeg",
  "photos/photo1.jpeg", "photos/photo2.jpeg", "photos/photo3.jpeg"
];

function startGame() {
  document.getElementById("startPage").classList.add("hidden");
  document.getElementById("game").classList.remove("hidden");
  showQuestion();
}

function showQuestion() {
  document.getElementById("question").innerText = questions[currentQuestion];
  document.getElementById("counter").innerText = `Question ${currentQuestion + 1} of ${questions.length}`;
  document.getElementById("questionImage").src = pictures[currentQuestion];
  document.getElementById("answer").value = answers[currentQuestion] || "";
  document.getElementById("progressBar").style.width = `${((currentQuestion + 1) / questions.length) * 100}%`;
  document.getElementById("nextButton").innerText = currentQuestion === questions.length - 1 ? "Finish 🎉" : "Next ➜";
}

function nextQuestion() {
  answers[currentQuestion] = document.getElementById("answer").value;
  currentQuestion++;

  if (currentQuestion < questions.length) {
    showQuestion();
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    document.getElementById("game").classList.add("hidden");
    document.getElementById("memories").classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}


/* MUSIC */
const music = document.getElementById("birthdayMusic");
const musicButton = document.getElementById("musicButton");

function toggleMusic() {
  if (music.paused) {
    music.play().then(() => {
      musicButton.innerText = "⏸ Pause Music";
    }).catch(() => {
      musicButton.innerText = "▶ Play Music";
    });
  } else {
    music.pause();
    musicButton.innerText = "▶ Play Music";
  }
}

music.addEventListener("ended", () => {
  musicButton.innerText = "▶ Play Music";
});


/* GIFT */
function showGift() {
  document.getElementById("memories").classList.add("hidden");
  document.getElementById("giftPage").classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function openGift() {
  document.getElementById("giftClosed").classList.add("hidden");
  document.getElementById("giftOpened").classList.remove("hidden");
  launchConfetti();
}

function launchConfetti() {
  const symbols = ["🎉", "✨", "💖", "🎊", "💕", "⭐"];
  for (let i = 0; i < 35; i++) {
    const piece = document.createElement("span");
    piece.innerText = symbols[Math.floor(Math.random() * symbols.length)];
    piece.style.position = "fixed";
    piece.style.left = Math.random() * 100 + "vw";
    piece.style.top = "-30px";
    piece.style.fontSize = (16 + Math.random() * 18) + "px";
    piece.style.zIndex = "9999";
    piece.style.pointerEvents = "none";
    piece.style.transition = `top ${2 + Math.random() * 2}s linear, transform ${2 + Math.random() * 2}s linear`;
    document.body.appendChild(piece);

    requestAnimationFrame(() => {
      piece.style.top = "105vh";
      piece.style.transform = `rotate(${Math.random() * 720 - 360}deg)`;
    });

    setTimeout(() => piece.remove(), 4500);
  }
}
