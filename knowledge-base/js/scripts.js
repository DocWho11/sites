ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map("map", {
    center: [48.872185073737896, 2.354223999999991],
    zoom: 15,
  });
  let Placemark = new ymaps.Placemark(
    [48.872185073737896, 2.354223999999991],
    {},
    {
      iconLayout: "default#image",
      iconImageHref: "img/pin.svg",
      iconImageSize: [28, 48],
    }
  );
  myMap.geoObjects.add(Placemark);
}

const validate = new window.JustValidate("#form");
validate
  .addField("#name", [
    {
      rule: "required",
      errorMessage: "Вы не ввели имя",
    },
    {
      rule: "minLength",
      value: 2,
      errorMessage: "Имя неверное",
    },
    {
      rule: "maxLength",
      value: 30,
    },
  ])

  .addField("#phone", [
    {
      rule: "required",
      errorMessage: "Вы не ввели телефон",
    },
    {
      rule: "minLength",
      value: 11,
      errorMessage: "Телефон неверный",
    },
  ])

  .addField("#email", [
    {
      rule: "required",
      errorMessage: "Вы не ввели e-mail",
    },
    {
      rule: "email",
      errorMessage: "Email is invalid!",
    },
  ]);

var selector = document.getElementById("phone");

var im = new Inputmask("+7 (999) 999-99-99");
im.mask(selector);

tippy("#myButton", {
  content: "Глава 2, страница 176",
  maxWidth: 163,
});
