export function headerSlider() {
  const left = document.getElementById("left-side");
  const right = document.getElementById("right-side");
  const initialtopDistance = left.getBoundingClientRect().top;
  const initialbottomDistance = left.getBoundingClientRect().bottom;
  const trackMessage = document.querySelector(".track__message");
  window.onscroll = (e) => {
    const topDistance = left.getBoundingClientRect().top;
    console.log("original", initialbottomDistance, topDistance);
    const bottomDistance = left.getBoundingClientRect().bottom;
    console.log(bottomDistance);
    let width = (topDistance / initialtopDistance) * 100;
    width = Math.max(width, 10);
    left.style.width = `${width < 15 ? width - 10 : width}%`;
    if (width - 10 == 0) {
      trackMessage.classList.remove("hidden");
      trackMessage.classList.add("fade__down");
    }
  };
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
