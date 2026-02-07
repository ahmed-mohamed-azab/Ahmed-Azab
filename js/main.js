document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     MOBILE MENU
  ========================= */
  const menuToggle = document.querySelector(".menu-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");
  const menuClose = document.querySelector(".menu-close");

  if (menuToggle && mobileMenu && menuClose) {
    menuToggle.addEventListener("click", () => {
      mobileMenu.classList.add("active");
    });

    menuClose.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
    });
  }

  /* =========================
     LITE YOUTUBE EMBED – FIXED
  ========================= */
  document.querySelectorAll(".lite-yt").forEach(el => {
    const videoId = el.dataset.id;
    const startTime = el.dataset.start || 0;

    /* Create thumbnail */
    const thumb = document.createElement("div");
    thumb.className = "yt-thumb";
    thumb.style.backgroundImage =
      `url(https://i.ytimg.com/vi/${videoId}/hqdefault.jpg)`;

    /* Create play button */
    const play = document.createElement("div");
    play.className = "yt-play";
    play.textContent = "▶";

    el.appendChild(thumb);
    el.appendChild(play);

    el.addEventListener("click", () => {
      if (el.classList.contains("active")) return;

      el.classList.add("active");

      el.innerHTML = `
        <iframe
          src="https://www.youtube.com/embed/${videoId}?autoplay=1&start=${startTime}"
          frameborder="0"
          allow="autoplay; encrypted-media; fullscreen"
          allowfullscreen
          style="position:absolute;inset:0;width:100%;height:100%;border:0;">
        </iframe>
      `;
    });
  });

});
