function openPopup() {
  var popup = document.querySelector(".popup");
  if (popup) {
    popup.style.display = "block";
  }
}

function closePopup() {
  var popup = document.querySelector(".popup");
  if (popup) {
    popup.style.display = "none";
  }
}


document.addEventListener('DOMContentLoaded', function () {
  const svg = document.querySelector('.goods-dots__icon');
  const popup = document.getElementById("popup");

  document.addEventListener('click', function (event) {
    const isClickInsidePopup = popup.contains(event.target) || event.target === svg;

    if (isClickInsidePopup) {
      togglePopup();
    } else if (popup.style.display === 'flex') {
      closePopup();
    }
  });
});

function togglePopup() {
  const popup = document.getElementById("popup");
  popup.style.display = popup.style.display === 'flex' ? 'none' : 'flex';
}

function closePopup() {
  const popup = document.getElementById("popup");
  popup.style.display = "none";
}



document.addEventListener('DOMContentLoaded', function () {
  const basketButton = document.getElementById("basketPopup");
  const popupBackground = document.getElementById("popupBackground");
  const closeIcon = document.getElementById("closeIcon");

  if (basketButton && popupBackground && closeIcon) {
    basketButton.addEventListener('click', function () {
      togglePopup();
    });

    closeIcon.addEventListener('click', function (event) {
      event.stopPropagation();
      closePopup();
    });
  }

  function togglePopup() {
    popupBackground.style.display = popupBackground.style.display === 'flex' ? 'none' : 'flex';
  }

  function closePopup() {
    popupBackground.style.display = "none";
  }
});


document.addEventListener('DOMContentLoaded', function () {
  const oneClickButton = document.getElementById("oneClickPopup");
  const oneClickPopupBackground = document.getElementById("oneClickPopupBackground");
  const clickCloseIcon = document.getElementById("clickCloseIcon");

  if (oneClickButton && oneClickPopupBackground && clickCloseIcon) {
    oneClickButton.addEventListener('click', function (event) {
      event.preventDefault();
      toggleOneClickPopup();
    });

    clickCloseIcon.addEventListener('click', function (event) {
      event.stopPropagation();
      closeOneClickPopup();
    });
  }

  function toggleOneClickPopup() {
    oneClickPopupBackground.style.display = oneClickPopupBackground.style.display === 'flex' ? 'none' : 'flex';
  }

  function closeOneClickPopup() {
    oneClickPopupBackground.style.display = "none";
  }
});
















