// FAQ toggle
const questions = document.querySelectorAll(".faq-question");

questions.forEach(q => {
  q.addEventListener("click", () => {

    const answer = q.nextElementSibling;
    const icon = q.querySelector(".qn-icon");

    answer.classList.toggle("show");
    icon.classList.toggle("rotate");

  });
});


// Slider buttons
const container = document.querySelector(".cards-container");

document.querySelector(".next").onclick = () => {
  container.scrollBy({ left: 320, behavior: "smooth" });
};

document.querySelector(".prev").onclick = () => {
  container.scrollBy({ left: -320, behavior: "smooth" });
};

//Steps
const steps = document.querySelectorAll(".step");

steps.forEach(step => {
  step.addEventListener("click", () => {
    steps.forEach(btn => btn.classList.remove("active"));
     step.classList.add("active");
    });
});

//testimonals
const testimonialContainer = document.querySelector(".testimonial-container");

document.querySelector(".test-next").onclick = () => {
  testimonialContainer.scrollBy({ left: 400, behavior: "smooth" });
};

document.querySelector(".test-prev").onclick = () => {
  testimonialContainer.scrollBy({ left: -400, behavior: "smooth" });
};