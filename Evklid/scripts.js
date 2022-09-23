let burger = document.querySelector(".burger");
let menu = document.querySelector(".head");
let MenuLinks = menu.querySelectorAll(".header_nav_item");

burger.addEventListener("click", function () {
  burger.classList.toggle("burger--active");

  menu.classList.toggle("head--active");

  document.body.classList.toggle("stop_scroll");
});

MenuLinks.forEach(function (el) {
  el.addEventListener("click", function () {
    burger.classList.remove("burger--active");

    menu.classList.remove("head--active");

    document.body.classList.remove("stop_scroll");
  });
});

let search = document.querySelector(".search");
let searchForm = document.querySelector(".search_form");
let closeSearch = document.querySelector(".close_search");

search.addEventListener("click", function () {
  searchForm.classList.add("search_form--active");
});

closeSearch.addEventListener("click", function () {
  search.classList.remove("search_hidden");

  searchForm.classList.remove("search_form--active");
});

document.querySelectorAll(".steps-item").forEach(function (tabsBtn) {
  tabsBtn.addEventListener("click", function (e) {
    const path = e.currentTarget.dataset.path;
    document.querySelectorAll(".steps-item").forEach(function (btn) {
      btn.classList.remove("steps_item--active");
    });
    e.currentTarget.classList.add("steps_item--active");
    document.querySelectorAll(".tabs_item").forEach(function (tabsBtn) {
      tabsBtn.classList.remove("tabs_item--active");
    });
    document
      .querySelector(`[data-target="${path}"]`)
      .classList.add("tabs_item--active");
  });
});

new Swiper(".swiper", {
  loop: true,
  spaceBetween: 30,
  autoplay: {
    delay: 4000,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
});

$(".accordion").accordion({
  heightStyle: "content",
});
