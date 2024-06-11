document.addEventListener("DOMContentLoaded", () => {
  const iphoneButton = document.getElementById("iphone-button");
  const nv1Button = document.getElementById("nv1-button");
  let iphoneScale = 1;
  let nv1Scale = 1;
  let clickCount = 0;
  const maxClicks = 8;

  iphoneButton.addEventListener("click", () => {
    clickCount++;
    iphoneScale -= 0.1;
    nv1Scale += 0.2;

    iphoneButton.style.transform = `scale(${iphoneScale})`;
    nv1Button.style.transform = `scale(${nv1Scale})`;

    //Công thức di chuyển ngẫu nhiên button
    const container = document.querySelector(".container");
    const maxTop = container.clientHeight - iphoneButton.clientHeight;
    const maxLeft = container.clientWidth - iphoneButton.clientWidth;
    const randomTop = Math.random() * maxTop;
    const randomLeft = Math.random() * maxLeft;
    iphoneButton.style.position = "absolute";
    iphoneButton.style.top = `${randomTop}px`;
    iphoneButton.style.left = `${randomLeft}px`;

    if (clickCount >= maxClicks) {
      iphoneButton.style.display = "none";
      nv1Button.click();
    }
  });

  nv1Button.addEventListener("click", () => {
    window.location.href = "index1.html";
  });
});
