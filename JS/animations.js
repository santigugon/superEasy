export function headerSlider() {
  // HEADER SIDES VARIABLES
  const left = document.getElementById("left-side");
  const initialSideTopDistance = left.getBoundingClientRect().top;
  const trackMessage = document.querySelector(".track__message");
  const webNameImage = document.querySelector(".webname__img");

  //POINTER VARIABLES
  const pointerContainer = document.querySelector(".relative__container");
  const pointerIcon = document.querySelector(".icon");
  const initialPointerTopDistance =
    pointerContainer.getBoundingClientRect().top;

  window.onscroll = (e) => {
    //SIDES SLIDER
    const sideTopDistance = left.getBoundingClientRect().top;

    let width = (sideTopDistance / initialSideTopDistance) * 100;
    width = Math.max(width, 10);
    left.style.width = `${width < 15 ? width - 10 : width}%`;
    console.log("ANCHO ", width);

    if (width - 10 == 0) {
      trackMessage.classList.remove("hidden");
      trackMessage.classList.add("fade__down");
      webNameImage.classList.remove("hidden");
      webNameImage.classList.add("fade__down");
    }

    const pointerTopDistance = pointerContainer.getBoundingClientRect().top;

    //POINTER SIDE ANIMATION
    let percentage = (pointerTopDistance / initialPointerTopDistance) * 100;

    percentage = Math.max(percentage, 10);
    percentage = Math.min(percentage, 100);

    if (percentage < 95) {
      if (
        pointerIcon.firstElementChild.classList.contains("fa-arrow-pointer")
      ) {
        pointerIcon.firstElementChild.classList.toggle("fa-arrow-pointer");
        pointerIcon.firstElementChild.classList.toggle("fa-hand-pointer");
      }
    } else {
      if (pointerIcon.firstElementChild.classList.contains("fa-hand-pointer")) {
        pointerIcon.firstElementChild.classList.toggle("fa-arrow-pointer");
        pointerIcon.firstElementChild.classList.toggle("fa-hand-pointer");
      }
    }
    // console.log(pointerIcon.children);

    console.log("PERCENTAGE", percentage);
    pointerIcon.animate(
      { transform: `translateX(${percentage}%)` },
      { duration: 1200, fill: "forwards" }
    );
  };
}

export function mouseSlide() {
  window.onscroll = (e) => {};
}

export function carrouselSlider() {
  const carrouselContainer = document.querySelector(".welcome__carrousel");

  const track = document.getElementById("image-track");
  window.onmousedown = (e) => {
    track.dataset.mouseDownAt = e.clientX;
  };

  window.onmouseup = (e) => {
    track.dataset.mouseDownAt = "0";
    if (e.target == carrouselContainer || carrouselContainer.contains(e.target))
      track.dataset.prevPercentage = track.dataset.percentage;
  };

  window.onmousemove = (e) => {
    if (track.dataset.mouseDownAt === "0") return;
    if (
      e.target == carrouselContainer ||
      carrouselContainer.contains(e.target)
    ) {
      const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
        maxDelta = window.innerWidth / 2;
      const percentage = (mouseDelta / maxDelta) * -100;
      let nextPercentage =
        parseFloat(track.dataset.prevPercentage) + percentage;
      nextPercentage = Math.min(nextPercentage, 0);
      nextPercentage = Math.max(nextPercentage, -100);
      track.dataset.percentage = nextPercentage;
      track.animate(
        { transform: `translate(${nextPercentage}%,-50%)` },
        { duration: 1200, fill: "forwards" }
      );

      for (const image of track.getElementsByClassName("img")) {
        image.animate(
          {
            objectPosition: `${nextPercentage * -1}% center`,
          },
          { duration: 1200, fill: "forwards" }
        );
      }
    }
  };
}
