const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in");

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -250px 0px",
};

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});

sliders.forEach((slider) => {
  appearOnScroll.observe(slider);
});

//intersection observer for counter

const counterOptions = {
  rootMargin: "0px",
  threshold: 1,
};

const counter = document.querySelectorAll(".counter");

const counterAppearance = new IntersectionObserver(function (
  entries,
  observer
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      counter.forEach((counts) => {
        let count = 0;
        let endValue = parseInt(counts.getAttribute("data-value"));
        let interval;
        interval = setInterval(() => {
          if (count >= endValue) {
            counts.innerText = endValue;
            clearInterval(interval);
          } else {
            // counts.innerText = count + "%";
            counts.innerText = count;
            count++;
          }
        }, 20);
      });
      counterAppearance.unobserve(entry.target);
    }
  });
},
counterOptions);

counter.forEach((counts) => {
  counterAppearance.observe(counts);
});

const counterN = document.querySelectorAll(".counterN");
console.log("heloo");
counterN.forEach((counts) => {
  counts.addEventListener("mouseover", function event(e) {
    this.removeEventListener("mouseover", event);
    console.log("heloo");
    setTimeout(() => {
      this.addEventListener("mouseover", event);
    }, 2100);

    let count = 0;
    let interval;
    interval = setInterval(() => {
      if (count >= e.target.dataset.value) {
        e.target.innerText = e.target.dataset.value;
        clearInterval(interval);
      } else {
        e.target.innerText = count;
        count++;
      }
    }, 20);
  });
});
