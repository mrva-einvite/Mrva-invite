const card = document.getElementById("card");
const front = card.querySelector(".front");
const back = card.querySelector(".back");

function setFlipped(flipped) {
  // on <body> so the CSS can also stop the wobble and swap the hints
  document.body.classList.toggle("flipped", flipped);
  card.setAttribute("aria-pressed", String(flipped));
  front.setAttribute("aria-hidden", String(flipped));
  back.setAttribute("aria-hidden", String(!flipped));
}

const toggle = () => setFlipped(!document.body.classList.contains("flipped"));

// tap anywhere flips
card.addEventListener("click", toggle);
card.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    toggle();
  }
});

// opening the map shouldn't flip the card
document.querySelectorAll(".back a").forEach((a) =>
  a.addEventListener("click", (e) => e.stopPropagation())
);

// a link ending in #details opens straight onto the details side
if (location.hash === "#details") setFlipped(true);
