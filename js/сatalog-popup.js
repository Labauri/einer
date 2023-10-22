document.getElementById('colorLink').addEventListener('click', function(event) {
  event.stopPropagation();
  document.getElementById('colorPopup').classList.toggle('show');
});

document.addEventListener('click', function(event) {
  var colorPopup = document.getElementById('colorPopup');
  if (colorPopup.classList.contains('show') && !colorPopup.contains(event.target)) {
    colorPopup.classList.remove('show');
  }
});

function closePopup() {
  document.getElementById('colorPopup').classList.remove('show');
}



document.getElementById('manufacturerLink').addEventListener('click', function() {
  document.getElementById('manufacturerPopup').classList.toggle('show');
});

document.addEventListener('click', function(e) {
  const popup = document.getElementById('manufacturerPopup');
  const link = document.getElementById('manufacturerLink');

  if (!popup.contains(e.target) && !link.contains(e.target)) {
    popup.classList.remove('show');
  }
});



function toggleCheckbox(checkbox) {
  checkbox.classList.toggle('checked');
}

document.addEventListener('DOMContentLoaded', function () {
  const menuItems = document.querySelectorAll('.manufacturer-list__link');

  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      const checkbox = item.previousElementSibling;
      toggleCheckbox(checkbox);
    });
  });
});
