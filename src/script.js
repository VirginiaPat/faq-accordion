const faqButtons = document.querySelectorAll(".faq-button");

faqButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const answerId = btn.getAttribute("aria-controls");
    const answer = document.getElementById(answerId);
    const isExpanded = btn.getAttribute("aria-expanded") === "true";

    answer.classList.toggle("hidden");
    btn.setAttribute("aria-expanded", String(!isExpanded));
    btn.querySelector(".icon-plus").classList.toggle("hidden");
    btn.querySelector(".icon-minus").classList.toggle("hidden");

    // Update sr-only text
    btn.querySelector(".sr-only").textContent = isExpanded
      ? "Show answer"
      : "Hide answer";
  });
});
