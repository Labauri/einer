document.getElementById('basketIcon').addEventListener('mouseover', function () {
  document.getElementById('tooltip').style.display = 'block';
});

document.getElementById('basketIcon').addEventListener('mouseout', function () {
  document.getElementById('tooltip').style.display = 'none';
});


function decrement(elementId) {
  var counterElement = document.getElementById(elementId);
  var count = parseInt(counterElement.textContent);

  if (count > 1) {
    count--;
    counterElement.textContent = count;
  }
}

function increment(elementId) {
  var counterElement = document.getElementById(elementId);
  var count = parseInt(counterElement.textContent);

  count++;
  counterElement.textContent = count;
}
