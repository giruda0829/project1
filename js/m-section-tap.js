document.addEventListener("DOMContentLoaded", () => {

  /* m-section1 */
  const tabContent = document.querySelectorAll(".m-c1-1>div");
  const targetLink = document.querySelectorAll(".m-c1-1>.tab-tit a");

  for (let i = 0; i < targetLink.length; i++) {
    targetLink[i].addEventListener("click", (e) => {
      e.preventDefault();
      for (let j = 0; j < targetLink.length; j++) {
        targetLink[j].classList.remove("active");
        e.target.classList.add("active");
      }
      let ogrTarget = e.target.getAttribute("href");
      for (let x = 0; x < tabContent.length; x++) {
        tabContent[x].style.display = "none";
      }
      document.querySelector(ogrTarget).style.display = "block";
    });
    document.querySelector("#notice").style.display = "block";
  }
});
