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
