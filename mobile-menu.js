document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("header").forEach(function (header) {
    var nav = header.querySelector("nav"); if (!nav) return;
    var button = document.createElement("button"); button.className = "mobile-menu-toggle"; button.type = "button"; button.setAttribute("aria-label", "Open navigation menu"); button.setAttribute("aria-expanded", "false"); button.innerHTML = '<span></span><span></span><span></span><b>Menu</b>';
    button.addEventListener("click", function () { var open = header.classList.toggle("mobile-open"); button.setAttribute("aria-expanded", String(open)); button.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu"); });
    nav.querySelectorAll("a").forEach(function (link) { link.addEventListener("click", function () { header.classList.remove("mobile-open"); button.setAttribute("aria-expanded", "false"); }); });
    header.appendChild(button);
  });
  document.addEventListener("keydown", function (event) { if (event.key === "Escape") document.querySelectorAll("header.mobile-open").forEach(function (header) { header.classList.remove("mobile-open"); }); });
});
