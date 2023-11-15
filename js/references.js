    var copy = document.querySelector(".references-box").cloneNode(true);
    var holder = document.querySelector(".references-section__holder");
    var icon = document.querySelector(".fa-pause");

    holder.appendChild(copy);
    function stopAnimation() {
      holder.classList.toggle("stop");
      icon.classList.toggle("fa-play");
    }

    window.addEventListener("resize", () => {
        if(holder.classList.contains("stop")){
          holder.classList.remove("stop");
        }
})
