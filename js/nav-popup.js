document.addEventListener('DOMContentLoaded', function () {
  // Найти элементы
  const catalogLink = document.getElementById('catalogLink');
  const catalogPopup = catalogLink.querySelector('#catalog-popup');

  // Добавить обработчик клика для элемента "Каталог"
  catalogLink.addEventListener('click', function () {
    // Переключить видимость контейнера
    catalogPopup.style.display = catalogPopup.style.display === 'block' ? 'none' : 'block';
  });

  // При клике вне контейнера скрываем его
  document.addEventListener('click', function (event) {
    if (!catalogLink.contains(event.target) && !catalogPopup.contains(event.target)) {
      catalogPopup.style.display = 'none';
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  // Найти элементы
  const basketLink = document.getElementById('basketLink');
  const basketPopup = basketLink.querySelector('#basket-popup'); // Исправлено на basketLink

  // Добавить обработчик клика для элемента "Каталог"
  basketLink.addEventListener('click', function () {
    // Переключить видимость контейнера
    basketPopup.style.display = basketPopup.style.display === 'block' ? 'none' : 'block';
  });

  // При клике вне контейнера скрываем его
  document.addEventListener('click', function (event) {
    if (!basketLink.contains(event.target) && !basketPopup.contains(event.target)) {
      basketPopup.style.display = 'none';
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  // Найти элементы
  const infoLink = document.getElementById('infoLink');
  const infoPopup = infoLink.querySelector('#info-popup');

  // Добавить обработчик клика для элемента "Каталог"
  infoLink.addEventListener('click', function () {
    // Переключить видимость контейнера
    infoPopup.style.display = infoPopup.style.display === 'block' ? 'none' : 'block';
  });

  // При клике вне контейнера скрываем его
  document.addEventListener('click', function (event) {
    if (!infoLink.contains(event.target) && !infoPopup.contains(event.target)) {
      infoPopup.style.display = 'none';
    }
  });
});

















