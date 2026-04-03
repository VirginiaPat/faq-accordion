const faqButtons = document.querySelectorAll(".faq-button");

faqButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const answerId = btn.getAttribute("aria-controls");
    // If attribute missing
    if (!answerId) {
      console.warn("Missing aria-controls on button:", btn);
      return;
    }

    const answer = document.getElementById(answerId);
    // If element with that id doesn't exist
    if (!answer) {
      console.warn(`No element found with id="${answerId}" referenced by`, btn);
      return;
    }

    const isExpanded = btn.getAttribute("aria-expanded") === "true";

    answer.classList.toggle("hidden");

    btn.setAttribute("aria-expanded", String(!isExpanded));

    btn.querySelector(".icon-plus")?.classList.toggle("hidden");

    btn.querySelector(".icon-minus")?.classList.toggle("hidden");

    if (btn.querySelector(".sr-only")) {
      sr.textContent = isExpanded ? "Show answer" : "Hide answer"; // safe update
    }
  });
});
