// Wall
const snakeThroughWall = () => {
  const ReachedLeftWall = snake[0].x < 0;
  const ReachedRightWall = snake[0].x > snakeboard.width - 10;
  const ReachedTopWall = snake[0].y < 0;
  const ReachedBottomWall = snake[0].y > snakeboard.height - -10;
  if (ReachedRightWall) {
    let head = { x: -10, y: snake[0].y };
    snake.unshift(head);
    snake.pop();
  } else if (ReachedLeftWall) {
    head = { x: snakeboard.width, y: snake[0].y };
    snake.unshift(head);
    snake.pop();
  } else if (ReachedTopWall) {
    head = { x: snake[0].x, y: snakeboard.height };
    snake.unshift(head);
    snake.pop();
  } else if (ReachedBottomWall) {
    head = { x: snake[0].x, y: -10 };
    snake.unshift(head);
    snake.pop();
  }
};

const restartSnake = () => {
  generateFood();
  resetGame();
  main();
};

const resetGame = () => {
  // Reset the snakes position to the middle of the canvas
  snake = [
    { x: 200, y: 200 },
    { x: 190, y: 200 },
    { x: 180, y: 200 },
    { x: 170, y: 200 },
    { x: 160, y: 200 }
  ];
  speed = 100;

  // reset snakes direction, head moving to the right
  dx = 10;
  dy = 0;
};

const collision = () => {
  for (let i = 4; i < snake.length; i++) {
    // return true if the snake's head collides against tail
    const collided = snake[i].x === snake[0].x && snake[i].y === snake[0].y;
    if (collided) return true;
  }

  if (wallTurnedOn) {
    // return true if the snake hits the wall with it's head;
    const hitLeftWall = snake[0].x < 0;
    const hitRightWall = snake[0].x > snakeboard.width - 10;
    const hitTopWall = snake[0].y < 0;
    const hitBottomWall = snake[0].y > snakeboard.height - 10;

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
let food_x;
let food_y;

const random_food = (min, max) => {
  return Math.round((Math.random() * (max - min) + min) / 10) * 10;
};

const generateFood = () => {
  food_x = random_food(0, snakeboard.width - 10);
  food_y = random_food(0, snakeboard.height - 10);
  snake.forEach(function hasSnakeEatenFood(part) {
    const has_eaten = part.x == food_x && part.y == food_y;
    if (has_eaten) generateFood();
  });
};

const drawFood = () => {
  context.fillStyle = 'lightgreen';
  context.strokeStyle = 'green';
  context.fillRect(food_x, food_y, 10, 10);
  context.strokeRect(food_x, food_y, 10, 10);
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
  const head = { x: snake[0].x + dx, y: snake[0].y + dy };
  snake.unshift(head);
  const hasEatenFood = snake[0].x === food_x && snake[0].y === food_y;

  if (hasEatenFood) {
    // generate new food location
    generateFood();

    // playAudio();

    speed -= 4;
  } else {
    snake.pop();
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
let speed = 70;
let snake = [
  { x: 200, y: 200 },
  { x: 190, y: 200 },
  { x: 180, y: 200 },
  { x: 170, y: 200 },
  { x: 160, y: 200 }
];

// Get the canvas id and make a context
const snakeboard = document.getElementById('snakeboard');
const context = snakeboard.getContext('2d');

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
  context.fillRect(0, 0, snakeboard.width, snakeboard.height);
  context.strokeRect(0, 0, snakeboard.width, snakeboard.height);
};

// get array length of snake and draw the snake tail for every element
const drawSnake = () => {
  snake.forEach(drawSnakePart);
};

// create rectangle(s) for the snake tail
const drawSnakePart = snakePart => {
  context.fillStyle = 'green';
  context.strokeStyle = 'white';
  context.fillRect(snakePart.x, snakePart.y, 10, 10);
  context.strokeRect(snakePart.x, snakePart.y, 10, 10);
};
