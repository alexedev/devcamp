function changeText(x) {
  x.innerText = 'Привет мир!';
}

var headings = document.querySelectorAll('h1');
headings.forEach(changeText);

function sum(x, y) {
  return x + y;
}

var list = [5, 4, 3, 5];

sum(5, 4);
