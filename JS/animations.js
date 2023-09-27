export function carrouselSlider() {
  console.log("sliding");

  const track = document.getElementById("image-track");
  window.onmousedown = (e) => {
    console.log("click");
    track.dataset.mouseDownAt = e.clientX;
  };
  window.onmousemove = (e) => {
    console.log("click");
    if (track.dataset.mouseDownAt === "0") return;
    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
      maxDelta = window.innerWidth / 2;
    const percentage = (mouseDelta / maxDelta) * -100;
    track.style.transform = `translate(${percentage}%,-50%)`;
  };
}
