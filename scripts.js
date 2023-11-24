let squaresElementArray = [
  document.getElementById('squareOne'),
  document.getElementById('squareTwo'),
  document.getElementById('squareThree'),
  document.getElementById('squareFour'),
  document.getElementById('squareFive'),
  document.getElementById('squareSix'),
  document.getElementById('squareSeven'),
  document.getElementById('squareEight'),
  document.getElementById('squareNine'),
  document.getElementById('squareTen'),
  document.getElementById('squareEleven'),
  document.getElementById('squareTwelve'),
  document.getElementById('squareThirteen'),
  document.getElementById('squareFourteen'),
  document.getElementById('squareFifteen'),
];
let color = [
  'green',
  'green',
  'green',
  'green',
  'green',
  'green',
  'green',
  'green',
  'green',
  'green',
  'green',
  'green',
  'green',
  'green',
  'green',
];
function loadSquaresColor() {
  for (let i = 0; i < color.length; i++) {
    squaresElementArray[i].style.background = color[i];
  }
};

loadSquaresColor();

function toggleSquareOne() {
  if (color[0] === 'green') {
    color[0] = 'red';
  } else {
    color[0] = 'green';
  }
  loadSquaresColor();
}
function toggleSquareTwo() {
  if (color[1] === 'green') {
    color[1] = 'red';
  } else {
    color[1] = 'green';
  }
  loadSquaresColor();
}
function toggleSquareThree() {
  if (color[2] === 'green') {
    color[2] = 'red';
  } else {
    color[2] = 'green';
  }
  loadSquaresColor();
}
function toggleSquareFour() {
  if (color[3] === 'green') {
    color[3] = 'red';
  } else {
    color[3] = 'green';
  }
  loadSquaresColor();
}
function toggleSquareFive() {
  if (color[4] === 'green') {
    color[4] = 'red';
  } else {
    color[4] = 'green';
  }
  loadSquaresColor();
}
function toggleSquareFive() {
  if (color[4] === 'green') {
    color[4] = 'red';
  } else {
    color[4] = 'green';
  }
  loadSquaresColor();
}
function toggleSquareSix() {
  if (color[5] === 'green') {
    color[5] = 'red';
  } else {
    color[5] = 'green';
  }
  loadSquaresColor();
}
function toggleSquareSeven() {
  if (color[6] === 'green') {
    color[6] = 'red';
  } else {
    color[6] = 'green';
  }
  loadSquaresColor();
}
function toggleSquareEight() {
  if (color[7] === 'green') {
    color[7] = 'red';
  } else {
    color[7] = 'green';
  }
  loadSquaresColor();
}
function toggleSquareNine() {
  if (color[8] === 'green') {
    color[8] = 'red';
  } else {
    color[8] = 'green';
  }
  loadSquaresColor();
}
function toggleSquareEleven() {
  if (color[10] === 'green') {
    color[10] = 'red';
  } else {
    color[10] = 'green';
  }
  loadSquaresColor();
}
function toggleSquareTwelve() {
  if (color[11] === 'green') {
    color[11] = 'red';
  } else {
    color[11] = 'green';
  }
  loadSquaresColor();
}
function toggleSquareThirteen() {
  if (color[12] === 'green') {
    color[12] = 'red';
  } else {
    color[12] = 'green';
  }
  loadSquaresColor();
}
function toggleSquareFourteen() {
  if (color[13] === 'green') {
    color[13] = 'red';
  } else {
    color[13] = 'green';
  }
  loadSquaresColor();
}
function toggleSquareFifteen() {
  if (color[14] === 'green') {
    color[14] = 'red';
  } else {
    color[14] = 'green';
  }
  loadSquaresColor();
}
function toggleSquareTen() {
  if (color[9] === 'green') {
    color[9] = 'red';
  } else {
    color[9] = 'green';
  }
  loadSquaresColor();
}
function CheckIfAllSquaresAreRed() {
  let textElement = document.getElementById('text');
  let allSquaresAreRed = true;
  let j = 0;
  while (allSquaresAreRed && j < color.length) {
    if (color[j] === 'red') {
      allSquaresAreRed = true;
    } else {
      allSquaresAreRed = false;
    };
    j++;
  }
  if (allSquaresAreRed) {
    textElement.style.display = "block";
    console.log(true);
  } else {
    console.log(false);
    textElement.style.display = "none";
  }
}
function toggleSquare(num) {
  switch (num) {
    case 1:
      toggleSquareOne();
      toggleSquareTwo();
      toggleSquareSix();
      CheckIfAllSquaresAreRed();
      break;
    case 2:
      toggleSquareTwo();
      toggleSquareOne();
      toggleSquareThree();
      toggleSquareSeven();
      CheckIfAllSquaresAreRed();
      break;
    case 3:
      toggleSquareThree();
      toggleSquareTwo();
      toggleSquareFour();
      toggleSquareEight();
      CheckIfAllSquaresAreRed();
      break;
    case 4:
      toggleSquareFour();
      toggleSquareThree();
      toggleSquareFive();
      toggleSquareNine();
      CheckIfAllSquaresAreRed();
      break;
    case 5:
      toggleSquareFive();
      toggleSquareFour();
      toggleSquareTen();
      CheckIfAllSquaresAreRed();
      break;
    case 6:
      toggleSquareSix();
      toggleSquareOne();
      toggleSquareSeven();
      toggleSquareEleven();
      CheckIfAllSquaresAreRed();
      break;
    case 7:
      toggleSquareSeven();
      toggleSquareTwo();
      toggleSquareSix();
      toggleSquareEight();
      toggleSquareTwelve();
      CheckIfAllSquaresAreRed();
      break;
    case 8:
      toggleSquareEight();
      toggleSquareThree();
      toggleSquareSeven();
      toggleSquareNine();
      toggleSquareThirteen();
      CheckIfAllSquaresAreRed();
      break;
    case 9:
      toggleSquareNine();
      toggleSquareFour();
      toggleSquareEight();
      toggleSquareTen();
      toggleSquareFourteen();
      CheckIfAllSquaresAreRed();
      break;
    case 10:
      toggleSquareTen();
      toggleSquareFive();
      toggleSquareNine();
      toggleSquareFifteen();
      CheckIfAllSquaresAreRed();
      break;
    case 11:
      toggleSquareEleven();
      toggleSquareSix();
      toggleSquareTwelve();
      CheckIfAllSquaresAreRed();
      break;
    case 12:
      toggleSquareTwelve();
      toggleSquareSeven();
      toggleSquareEleven();
      toggleSquareThirteen();
      CheckIfAllSquaresAreRed();
      break;
    case 13:
      toggleSquareThirteen();
      toggleSquareEight();
      toggleSquareTwelve();
      toggleSquareFourteen();
      CheckIfAllSquaresAreRed();
      break;
    case 14:
      toggleSquareFourteen();
      toggleSquareNine();
      toggleSquareThirteen();
      toggleSquareFifteen();
      CheckIfAllSquaresAreRed();
      break;
    case 15:
      toggleSquareFifteen();
      toggleSquareTen();
      toggleSquareFourteen();
      CheckIfAllSquaresAreRed();
      break;
  }
};



