$(document).ready(function() {
  $(".switcher-dot").click(function(e) {
    e.preventDefault();

    // Скрываем все блоки
    $(".content-block").removeClass("content-active");

    // Получаем целевой блок из атрибута data-target
    var targetBlock = $(this).data("target");

    // Показываем целевой блок
    $("#" + targetBlock).addClass("content-active");
  });
});



document.addEventListener('DOMContentLoaded', function () {
  // Найти все li-элементы
  const listItems = document.querySelectorAll('.select-list__item');

  // Добавить обработчик клика для каждого li
  listItems.forEach(function (item) {
    const answerContainer = item.querySelector('.answer-container');

    // При клике на стрелочку
    item.addEventListener('click', function () {
      // Переключить видимость контейнера ответов
      answerContainer.style.display = answerContainer.style.display === 'block' ? 'none' : 'block';
    });

    // При клике вне .select-list__item скрываем контейнер
    document.addEventListener('click', function (event) {
      if (!item.contains(event.target)) {
        answerContainer.style.display = 'none';
      }
    });
  });
});

let counter = 0;

function increment() {
  counter++;
  document.getElementById('counter').innerText = counter;
}

function decrement() {
  if (counter > 0) {
    counter--;
    document.getElementById('counter').innerText = counter;
  }
}
