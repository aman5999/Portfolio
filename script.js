function toggleMenu() {
  const nav = document.getElementById('navLinks');
  nav.classList.toggle('active');
}
const phrases = [
  ",I'm a Web Developer..",
  ",React Enthusiast..",
  ",Problem Solver..",
  ",Frontend Designer..",
];

let currentPhraseIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
const typingSpeed = 100;
const erasingSpeed = 50;
const delayBetweenPhrases = 1500;

const typingText = document.getElementById("typing-text");

function type() {
  const currentPhrase = phrases[currentPhraseIndex];
  if (isDeleting) {
    currentCharIndex--;
  } else {
    currentCharIndex++;
  }

  typingText.textContent = currentPhrase.substring(0, currentCharIndex);

  if (!isDeleting && currentCharIndex === currentPhrase.length) {
    setTimeout(() => {
      isDeleting = true;
      type();
    }, delayBetweenPhrases);
  } else if (isDeleting && currentCharIndex === 0) {
    isDeleting = false;
    currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
    setTimeout(type, 200);
  } else {
    setTimeout(type, isDeleting ? erasingSpeed : typingSpeed);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  type();
});

