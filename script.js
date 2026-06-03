const stage = document.querySelector(".stage");
const envelope = document.querySelector(".envelope");
const card = document.querySelector(".card");
const hint = document.querySelector(".hint");

let isOpen = false;
let isFlipped = false;
let readyTimer = 0;

function openEnvelope() {
  if (isOpen) return;

  isOpen = true;
  stage.dataset.state = "open";
  stage.classList.add("is-open");
  envelope.setAttribute("aria-expanded", "true");
  hint.textContent = "";

  window.clearTimeout(readyTimer);
  readyTimer = window.setTimeout(() => {
    stage.classList.add("is-ready");
    card.disabled = false;
    hint.textContent = "点击翻页";
  }, 1120);
}

function flipCard() {
  if (!isOpen || card.disabled) return;

  isFlipped = !isFlipped;
  stage.classList.toggle("is-flipped", isFlipped);
  stage.dataset.state = isFlipped ? "back" : "front";
  hint.textContent = isFlipped ? "" : "点击翻页";
}

envelope.addEventListener("click", openEnvelope);
card.addEventListener("click", flipCard);
