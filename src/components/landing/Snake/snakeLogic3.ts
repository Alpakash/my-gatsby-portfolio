// Wall
const snakeThroughWall = () => {
  const ReachedLeftWall = snake2[0].x < 0;
  const ReachedRightWall = snake2[0].x > snakeboard3.width - 10;
  const ReachedTopWall = snake2[0].y < 0;
  const ReachedBottomWall = snake2[0].y > snakeboard3.height - -10;
  if (ReachedRightWall) {
    let head3 = { x: -10, y: snake2[0].y };
    snake2.unshift(head3);
    snake2.pop();
  } else if (ReachedLeftWall) {
    head3 = { x: snakeboard3.width, y: snake2[0].y };
    snake2.unshift(head3);
    snake2.pop();
  } else if (ReachedTopWall) {
    head3 = { x: snake2[0].x, y: snakeboard3.height };
    snake2.unshift(head3);
    snake2.pop();
  } else if (ReachedBottomWall) {
    head3 = { x: snake2[0].x, y: -10 };
    snake2.unshift(head3);
    snake2.pop();
  }
};

const restartSnake = () => {
  generateFood();
  resetGame();
  main();
};

const resetGame = () => {
  // Reset the snakes position to the middle of the canvas
  snake2 = [
    { x: 200, y: 200 },
    { x: 190, y: 200 },
    { x: 180, y: 200 },
    { x: 170, y: 200 },
    { x: 160, y: 200 }
  ];
  speed = 50;

  // reset snakes direction, head3 moving to the right
  dx = 10;
  dy = 0;
};

const collision = () => {
  for (let i = 4; i < snake2.length; i++) {
    // return true if the snake's head3 collides against tail
    const collided = snake2[i].x === snake2[0].x && snake2[i].y === snake2[0].y;
    if (collided) return true;
  }

  if (wallTurnedOn) {
    // return true if the snake hits the wall with it's head3;
    const hitLeftWall = snake2[0].x < 0;
    const hitRightWall = snake2[0].x > snakeboard3.width - 10;
    const hitTopWall = snake2[0].y < 0;
    const hitBottomWall = snake2[0].y > snakeboard3.height - 10;

    return hitLeftWall || hitRightWall || hitTopWall || hitBottomWall;
  } else {
    snakeThroughWall();
  }
};

let wallTurnedOn = false;
const wallSwitch = () => {

};

wallSwitch();

// Food
let food_x3;
let food_y3;

const random_food = (min, max) => {
  return Math.round((Math.random() * (max - min) + min) / 10) * 10;
};

const generateFood = () => {
  food_x3 = random_food(0, snakeboard3.width - 10);
  food_y3 = random_food(0, snakeboard3.height - 10);
  snake2.forEach(function hasSnakeEatenFood(part) {
    const has_eaten = part.x == food_x3 && part.y == food_y3;
    if (has_eaten) generateFood();
  });
};

const drawFood = () => {
  context.fillStyle = 'red';
  context.strokeStyle = '#8b0000';
  context.fillRect(food_x3, food_y3, 10, 10);
  context.strokeRect(food_x3, food_y3, 10, 10);
};

// Move
let dx = 10;
let dy = 0;
let score = 0;

// Could not get the audio working:
// Uncaught (in promise) DOMException: Failed to load because no supported source was found.
// function playAudio() {
//   var audio = new Audio("../assets/sounds/Bubble5.mp3");
//   audio.play();
// }

// move the snake automatically to the right
const moveSnake = () => {
  const head3 = { x: snake2[0].x + dx, y: snake2[0].y + dy };
  snake2.unshift(head3);
  const hasEatenFood = snake2[0].x === food_x3 && snake2[0].y === food_y3;

  if (hasEatenFood) {
    // generate new food location
    generateFood();

    // playAudio();

    speed -= 4;
  } else {
    snake2.pop();
  }
};

const changeDirection = event => {
  // key constants
  const LEFT_KEY = 37;
  const RIGHT_KEY = 39;
  const UP_KEY = 38;
  const DOWN_KEY = 40;
  const W_KEY = 87;
  const A_KEY = 65;
  const S_KEY = 83;
  const D_KEY = 68;

  // get the keyCode
  const keyPressed = event.keyCode;

  // conditions of which direction the snake is going
  const goingUp = dy === -10;
  const goingDown = dy === 10;
  const goingRight = dx === 10;
  const goingLeft = dx === -10;

  // move the snake on the x- or y-axis
  switch (keyPressed) {
    case A_KEY:
      if (goingRight) return;
      dx = -10;
      dy = 0;
      break;
    case W_KEY:
      if (goingDown) return;
      dx = 0;
      dy = -10;
      break;
    case D_KEY:
      if (goingLeft) return;
      dx = 10;
      dy = 0;
      break;
    case S_KEY:
      if (goingUp) return;
      dx = 0;
      dy = 10;
      break;
  }
};

document.addEventListener('keydown', changeDirection);

// Snake
let speed = 50;
let snake2 = [
  { x: 200, y: 200 },
  { x: 190, y: 200 },
  { x: 180, y: 200 },
  { x: 170, y: 200 },
  { x: 160, y: 200 }
];

// Get the canvas id and make a context
const snakeboard3 = document.getElementById('snakeboard3');
const context = snakeboard3.getContext('2d');

generateFood();

// function to clear the board, move the snake to a direction and draw the snake parts
const main = () => {
  if (collision()) {
    clearBoard();
        generateFood();
        resetGame();
  }

  setTimeout(function onTick() {
    clearBoard();
    drawFood();
    moveSnake();
    drawSnake();
    // Call main again
    main();
  }, speed);
};

main();

const clearBoard = () => {
  context.fillStyle = 'white';
  context.strokeStyle = 'black';
  context.fillRect(0, 0, snakeboard3.width, snakeboard3.height);
  context.strokeRect(0, 0, snakeboard3.width, snakeboard3.height);
};

// get array length of snake and draw the snake tail for every element
const drawSnake = () => {
  snake2.forEach(drawSnakePart);
};

// create rectangle(s) for the snake tail
const drawSnakePart = snakePart => {
  context.fillStyle = 'red';
  context.strokeStyle = 'white';
  context.fillRect(snakePart.x, snakePart.y, 10, 10);
  context.strokeRect(snakePart.x, snakePart.y, 10, 10);
};
