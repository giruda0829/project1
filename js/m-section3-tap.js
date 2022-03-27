document.addEventListener("DOMContentLoaded", () => {
  const tabContent2 = document.querySelectorAll(".publication-area>div");
  const targetLink2 = document.querySelectorAll(".publication-area>.tab-tit>a");

  for (let k = 0; k < targetLink2.length; k++) {
    targetLink2[k].addEventListener("click", (e) => {
      e.preventDefault();
      for (let h = 0; h < targetLink2.length; h++) {
        targetLink2[h].classList.remove("active");
        e.target.classList.add("active");
      }
      let view = e.target.getAttribute("href");
      for (let y = 0; y < tabContent2.length; y++) {
        tabContent2[y].style.display = "none";
      }
      document.querySelector(view).style.display = "block";
    });
    document.querySelector("#publication1").style.display = "block";
  }

  const tabContent21 = document.querySelectorAll(".tab-content>div");
  const targetLink21 = document.querySelectorAll(".tab-content>nav a");

  for (let k = 0; k < targetLink21.length; k++) {
    targetLink21[k].addEventListener("click", (e) => {
      e.preventDefault();
      for (let h = 0; h < targetLink21.length; h++) {
        targetLink21[h].classList.remove("active");
        e.target.classList.add("active");
      }
      let view = e.target.getAttribute("href");
      for (let y = 0; y < tabContent21.length; y++) {
        tabContent21[y].style.display = "none";
      }
      document.querySelector(view).style.display = "block";
    });
    document.querySelector("#publication1-1").style.display = "block";
  }
});
