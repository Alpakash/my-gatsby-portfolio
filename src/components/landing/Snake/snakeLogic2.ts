// Wall
const snakeThroughWall = () => {
  const ReachedLeftWall = snake1[0].x < 0;
  const ReachedRightWall = snake1[0].x > snakeboard2.width - 10;
  const ReachedTopWall = snake1[0].y < 0;
  const ReachedBottomWall = snake1[0].y > snakeboard2.height - -10;
  if (ReachedRightWall) {
    let head1 = { x: -10, y: snake1[0].y };
    snake1.unshift(head1);
    snake1.pop();
  } else if (ReachedLeftWall) {
    head1 = { x: snakeboard2.width, y: snake1[0].y };
    snake1.unshift(head1);
    snake1.pop();
  } else if (ReachedTopWall) {
    head1 = { x: snake1[0].x, y: snakeboard2.height };
    snake1.unshift(head1);
    snake1.pop();
  } else if (ReachedBottomWall) {
    head1 = { x: snake1[0].x, y: -10 };
    snake1.unshift(head1);
    snake1.pop();
  }
};

const restartSnake = () => {
  generateFood();
  resetGame();
  main();
};

const resetGame = () => {
  // Reset the snakes position to the middle of the canvas
  snake1 = [
    { x: 200, y: 200 },
    { x: 190, y: 200 },
    { x: 180, y: 200 },
    { x: 170, y: 200 },
    { x: 160, y: 200 }
  ];
  speed = 60;

  // reset snakes direction, head1 moving to the right
  dx = 10;
  dy = 0;
};

const collision = () => {
  for (let i = 4; i < snake1.length; i++) {
    // return true if the snake's head1 collides against tail
    const collided = snake1[i].x === snake1[0].x && snake1[i].y === snake1[0].y;
    if (collided) return true;
  }

  if (wallTurnedOn) {
    // return true if the snake hits the wall with it's head1;
    const hitLeftWall = snake1[0].x < 0;
    const hitRightWall = snake1[0].x > snakeboard2.width - 10;
    const hitTopWall = snake1[0].y < 0;
    const hitBottomWall = snake1[0].y > snakeboard2.height - 10;

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
let food_x1;
let food_y1;

const random_food = (min, max) => {
  return Math.round((Math.random() * (max - min) + min) / 10) * 10;
};

const generateFood = () => {
  food_x1 = random_food(0, snakeboard2.width - 10);
  food_y1 = random_food(0, snakeboard2.height - 10);
  snake1.forEach(function hasSnakeEatenFood(part) {
    const has_eaten = part.x == food_x1 && part.y == food_y1;
    if (has_eaten) generateFood();
  });
};

const drawFood = () => {
  context.fillStyle = 'lightblue';
  context.strokeStyle = 'blue';
  context.fillRect(food_x1, food_y1, 10, 10);
  context.strokeRect(food_x1, food_y1, 10, 10);
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
  const head1 = { x: snake1[0].x + dx, y: snake1[0].y + dy };
  snake1.unshift(head1);
  const hasEatenFood = snake1[0].x === food_x1 && snake1[0].y === food_y1;

  if (hasEatenFood) {
    // generate new food location
    generateFood();

    // playAudio();

    speed -= 4;
  } else {
    snake1.pop();
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
let speed = 60;
let snake1 = [
  { x: 200, y: 200 },
  { x: 190, y: 200 },
  { x: 180, y: 200 },
  { x: 170, y: 200 },
  { x: 160, y: 200 }
];

// Get the canvas id and make a context
const snakeboard2 = document.getElementById('snakeboard2');
const context = snakeboard2.getContext('2d');

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
  context.fillRect(0, 0, snakeboard2.width, snakeboard2.height);
  context.strokeRect(0, 0, snakeboard2.width, snakeboard2.height);
};

// get array length of snake and draw the snake tail for every element
const drawSnake = () => {
  snake1.forEach(drawSnakePart);
};

// create rectangle(s) for the snake tail
const drawSnakePart = snakePart => {
  context.fillStyle = 'blue';
  context.strokeStyle = 'white';
  context.fillRect(snakePart.x, snakePart.y, 10, 10);
  context.strokeRect(snakePart.x, snakePart.y, 10, 10);
};
