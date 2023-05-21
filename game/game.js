document.addEventListener("DOMContentLoaded", function() {
    const player = document.getElementById("player");
    const obstacles = document.getElementsByClassName("obstacle");
    const scoreValue = document.getElementById("score-value");
    
    let score = 0;
    let isJumping = false;
    let gravity = 0.9;
    let jumpStrength = 15;
    let jumpInterval;
    
    document.addEventListener("keydown", function(event) {
      if (event.code === "Space" && !isJumping) {
        isJumping = true;
        jumpInterval = setInterval(jump, 20);
      }
    });
    
    function jump() {
      let playerBottom = parseInt(getComputedStyle(player).bottom);
      
      if (playerBottom < 200) {
        player.style.bottom = (playerBottom + jumpStrength) + "px";
        jumpStrength -= gravity;
      } else {
        clearInterval(jumpInterval);
        isJumping = false;
        jumpStrength = 15;
      }
    }
    
    function checkCollision() {
      let playerLeft = parseInt(getComputedStyle(player).left);
      let playerBottom = parseInt(getComputedStyle(player).bottom);
      let playerRight = playerLeft + parseInt(getComputedStyle(player).width);
      
      for (let i = 0; i < obstacles.length; i++) {
        let obstacleLeft = parseInt(getComputedStyle(obstacles[i]).left);
        let obstacleBottom = parseInt(getComputedStyle(obstacles[i]).bottom);
        let obstacleRight = obstacleLeft + parseInt(getComputedStyle(obstacles[i]).width);
        
        if (playerRight > obstacleLeft && playerLeft < obstacleRight && playerBottom < obstacleBottom + 20) {
          clearInterval(jumpInterval);
          isJumping = false;
          jumpStrength = 15;
          score = 0;
          scoreValue.textContent = score;
        }
      }
    }
    
    function updateScore() {
      score++;
      scoreValue.textContent = score;
    }
    
    setInterval(checkCollision, 10);
    setInterval(updateScore, 1000);
  });  