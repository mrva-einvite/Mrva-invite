const card = document.getElementById("card");
const front = card.querySelector(".front");
const back = card.querySelector(".back");

function setFlipped(flipped) {
  card.classList.toggle("flipped", flipped);
  front.setAttribute("aria-hidden", String(flipped));
  back.setAttribute("aria-hidden", String(!flipped));
}

document.getElementById("detailsBtn").addEventListener("click", () => setFlipped(true));
document.getElementById("backBtn").addEventListener("click", () => setFlipped(false));

// a link ending in #details opens straight onto the details side
if (location.hash === "#details") setFlipped(true);
