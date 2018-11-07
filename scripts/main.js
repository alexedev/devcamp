function changeText(x) {
  x.innerText = 'Привет мир!';
}

var headings = document.querySelectorAll('h1');
headings.forEach(changeText);

function sum(x, y) {
  return x + y;
}

var list = [5, 4, 3, 6];

sum(5, 4);

var myVariable;

const text = 'lol1';

let changeable = 1;

const sdfsdf = { name: 'Vasia', surname: 'Lol' };

const ssdf = [];

const isBlue = true;

let color = 'green';

// тут я описал пример использования условного оператора
// sdfdsfds
if (isBlue === true) {
  // fdsfdsfsdfsfsdf
  color = 'blue';
} else if (isBlue === 'sfsdf') {
  color = 'purple';
} else if (sdfdsfds === 'sfsdf') {
  color = 'purple';
} else {
}
var myImage = document.querySelector('img');

myImage.onclick = function() {
  var mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/prague.jpg') {
    myImage.setAttribute('src', 'images/dubai.jpg');
  } else {
    myImage.setAttribute('src', 'images/prague.jpg');
  }
};

const param = 'dsfdsf';
