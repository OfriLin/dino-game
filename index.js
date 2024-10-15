
const expressions = [
    { text: '4 > 3', isTrue: true },
    { text: '5 != 0', isTrue: true },
    { text: '2 + 2 == 5', isTrue: false },
    { text: '10 / 2 == 5', isTrue: true },
    { text: '8 < 6', isTrue: false },
    { text: '3 === 3', isTrue: true },
    { text: '7 + 3 > 10', isTrue: false },
    { text: '4 <= 4', isTrue: true },
    { text: '6 * 2 == 12', isTrue: true },
    { text: '9 != 3', isTrue: true },
    { text: '5 < 1', isTrue: false },
    { text: '0 === 0', isTrue: true },
    { text: '1 + 1 == 3', isTrue: false },
    { text: '2 * 2 === 4', isTrue: true },
    { text: '10 > 20', isTrue: false },
    { text: '15 % 5 == 0', isTrue: true },
    { text: '5 < 10 && 3 > 1', isTrue: true },
    { text: '2 * 3 == 6 || 1 + 1 == 3', isTrue: true },
    { text: '10 > 5 && 4 < 2', isTrue: false },
    { text: '8 === 8 || 3 > 4', isTrue: true },
    { text: '5 > 7 && 10 < 5', isTrue: false },
    { text: '2 == 2 && 2 != 3', isTrue: true },
    { text: '3 < 1 || 5 > 4', isTrue: true },
    { text: '7 >= 5 && 5 <= 5', isTrue: true },
    { text: '2 + 3 == 5 && 4 - 2 == 2', isTrue: true },
    { text: '5 * 2 == 10 || 6 - 4 == 3', isTrue: true },
    { text: '1 > 2 || 2 < 1', isTrue: false },
    { text: 'true && false', isTrue: false },
    { text: 'true || false', isTrue: true },
    { text: 'false && false', isTrue: false },
    { text: 'true && true', isTrue: true },
    { text: '5 < 3 && 2 > 1', isTrue: false },
    { text: '0 == 0 && 1 < 2', isTrue: true },
    { text: '10 / 2 == 5 || 4 * 3 == 12', isTrue: true },
    { text: '8 >= 9 && 7 < 6', isTrue: false },
    { text: '2 == 1 + 1 && 3 != 2', isTrue: true },
    { text: '4 < 5 && 5 > 6', isTrue: false },
    { text: '9 > 8 && 8 >= 8', isTrue: true },
    { text: '7 != 6 || 6 == 6', isTrue: true },
    { text: '3 * 3 == 9 && 10 / 2 == 5', isTrue: true },
    { text: '5 + 5 == 11 || 10 - 3 == 7', isTrue: true },
    { text: '1 + 1 == 3 && 3 > 2', isTrue: false },
    { text: 'false || (true && false)', isTrue: false },
    { text: 'true && (false || true)', isTrue: true },
    { text: '3 < 4 && 4 > 5', isTrue: false },
    { text: '2 < 3 && 3 < 4', isTrue: true },
    { text: '1 == 1 && 2 < 1', isTrue: false },
    { text: 'true || (false && true)', isTrue: true },
    { text: '5 > 4 && 3 < 2', isTrue: false },
    { text: '8 <= 8 || 7 > 10', isTrue: true },
    { text: '6 * 2 == 12 && 2 + 2 == 4', isTrue: true },
    { text: 'false && (true || false)', isTrue: false },
    { text: '0 != 0 || 1 == 1', isTrue: true },
    { text: 'true || true', isTrue: true },
    { text: '1 + 1 == 2 && 2 != 1', isTrue: true },
    { text: 'false && true', isTrue: false },
    { text: '4 < 3 && 3 == 3', isTrue: false },
    { text: '10 == 10 && 5 > 2', isTrue: true },
    { text: '2 + 2 == 5 || 1 + 1 == 2', isTrue: true },
    { text: '5 == 5 && 5 != 5', isTrue: false },
    { text: '3 <= 4 || 4 >= 5', isTrue: true },
    { text: 'true && (1 == 1)', isTrue: true },
    { text: 'false || (false && false)', isTrue: false },
    { text: '1 > 0 && 0 < 1', isTrue: true },
    { text: '10 != 9 || 8 == 8', isTrue: true },
    { text: '5 + 5 == 11 && 3 == 2', isTrue: false },
    { text: 'true && false && true', isTrue: false },
    { text: '6 > 5 && 4 < 3', isTrue: false },
    { text: '9 < 10 || 10 < 9', isTrue: true },
    { text: '8 < 8 && 7 > 6', isTrue: false },
    { text: '2 > 1 || 1 < 0', isTrue: true },
    { text: 'true && (false || true)', isTrue: true },
    { text: '5 < 3 || 7 < 8', isTrue: true },
    { text: '4 > 3 && 2 == 2', isTrue: true },
    { text: '1 == 1 || 2 == 3', isTrue: true },
    { text: 'false || false', isTrue: false },
    { text: '10 <= 10 || 9 == 8', isTrue: true },
    { text: '2 < 2 && 3 > 4', isTrue: false },
    { text: '0 >= 0 || 1 == 0', isTrue: true },
    { text: 'true || false', isTrue: true },
    { text: 'false && (true || true)', isTrue: false },
    { text: '3 * 3 != 10 && 10 / 2 == 5', isTrue: true },
    { text: '7 > 5 || 5 > 7', isTrue: true },
    { text: 'true || true', isTrue: true },
    { text: '4 <= 5 && 5 == 5', isTrue: true },
    { text: '3 != 3 || 4 == 5', isTrue: false },
    { text: 'false || (true && false)', isTrue: false },
    { text: '1 + 1 == 2 && 2 + 2 == 4', isTrue: true },
    { text: '5 > 10 || 10 > 5', isTrue: true },
    { text: '3 > 3 && 2 < 2', isTrue: false },
    { text: 'true || (false && true)', isTrue: true },
    { text: '2 < 1 && 3 > 4', isTrue: false },
    { text: '7 < 8 || 8 > 9', isTrue: true },
    { text: 'false || (true && false)', isTrue: false },
    { text: '10 == 10 && 5 < 6', isTrue: true },
    { text: '5 != 6 && 6 == 6', isTrue: true },
    { text: '8 > 9 || 10 < 9', isTrue: false },
    { text: '1 == 1 && 0 == 0', isTrue: true },
    { text: '4 > 5 || 5 > 4', isTrue: true },
     { text: '3 == 3', isTrue: true },
    { text: '5 < 10', isTrue: true },
    { text: '7 != 8', isTrue: true },
    { text: '4 > 2', isTrue: true },
    { text: '6 <= 6', isTrue: true },
    { text: '8 >= 5', isTrue: true },
    { text: '2 + 2 == 4', isTrue: true },
    { text: '10 - 5 == 5', isTrue: true },
    { text: '15 % 3 == 0', isTrue: true },
    { text: '12 / 4 == 3', isTrue: true },
    { text: '9 > 10', isTrue: false },
    { text: '3 != 3', isTrue: false },
    { text: '8 < 5', isTrue: false },
    { text: '4 >= 5', isTrue: false },
    { text: '2 + 3 != 5', isTrue: false },
    { text: '5 * 2 == 11', isTrue: false },
    { text: '6 < 3', isTrue: false },
    { text: '1 == 2', isTrue: false },
    { text: '0 == 1', isTrue: false },
    { text: '8 <= 7', isTrue: false },
    { text: '5 > 5', isTrue: false },
    { text: '7 + 2 == 10', isTrue: false },
    { text: '14 % 5 == 1', isTrue: true },
    { text: '4 + 1 == 5', isTrue: true },
    { text: '5 < 3', isTrue: false },
    { text: '20 - 10 == 10', isTrue: true },
    { text: '3 + 3 == 7', isTrue: false },
    { text: '4 * 2 == 8', isTrue: true },
    { text: '15 - 5 < 12', isTrue: true },
    { text: '8 > 6', isTrue: true },
    { text: '7 <= 5', isTrue: false },
    { text: '9 == 9', isTrue: true },
    { text: '2 * 3 == 6', isTrue: true },
    { text: '5 != 4', isTrue: true },
    { text: '6 > 6', isTrue: false },
    { text: '1 + 1 == 3', isTrue: false },
    { text: '0 != 0', isTrue: false },
    { text: '4 + 4 == 8', isTrue: true },
    { text: '10 / 2 == 5', isTrue: true },
    { text: '3 < 1', isTrue: false },
    { text: '5 - 2 == 3', isTrue: true },
    { text: '8 >= 9', isTrue: false },
    { text: '6 % 3 == 0', isTrue: true },
    { text: '12 > 10', isTrue: true },
    { text: '4 <= 3', isTrue: false },
    { text: '15 == 15', isTrue: true },
    { text: '2 * 5 != 10', isTrue: false },
    { text: '7 - 3 == 4', isTrue: false },
    { text: '10 < 12', isTrue: true },
    { text: '3 + 1 == 5', isTrue: false },
    { text: '6 <= 6', isTrue: true },
    { text: '5 >= 7', isTrue: false },
    { text: '8 == 8', isTrue: true },
    { text: '1 + 1 == 2', isTrue: true },
    { text: '10 - 2 == 8', isTrue: true },
    { text: '2 > 5', isTrue: false },
    { text: '4 != 5', isTrue: true },
    { text: '6 + 4 == 10', isTrue: false },
    { text: '3 * 3 == 9', isTrue: true },
    { text: '7 < 7', isTrue: false },
    { text: '10 / 2 > 4', isTrue: true },
    { text: '1 == 1', isTrue: true },
    { text: '3 != 2', isTrue: true },
    { text: '5 * 2 < 10', isTrue: false },
    { text: '20 > 15', isTrue: true },
    { text: '4 + 2 == 7', isTrue: false },
    { text: '6 < 8', isTrue: true },
    { text: '3 + 3 != 6', isTrue: false },
    { text: '10 >= 5', isTrue: true },
    { text: '8 - 5 == 3', isTrue: true },
    { text: '2 + 3 == 6', isTrue: false },
    { text: '1 * 1 == 1', isTrue: true },
    { text: '5 == 5', isTrue: true },
    { text: '4 < 4', isTrue: false },
    { text: '6 != 5', isTrue: true },
    { text: '10 - 3 == 8', isTrue: false },
    { text: '15 > 10', isTrue: true },
    { text: '2 * 4 == 7', isTrue: false },
    { text: '3 < 5', isTrue: true },
    { text: '9 >= 9', isTrue: true },
    { text: '6 == 6', isTrue: true },
    { text: '8 < 8', isTrue: false },
    { text: '1 + 1 != 3', isTrue: true },
    { text: '3 * 2 > 5', isTrue: false },
    { text: '4 >= 4', isTrue: true },
    { text: '5 + 5 == 10', isTrue: true },
    { text: '2 == 2', isTrue: true },
    { text: '10 < 0', isTrue: false },
    { text: '3 + 5 > 8', isTrue: false },
    { text: '8 != 7', isTrue: true },
    { text: '4 + 1 > 5', isTrue: false },
    { text: '6 > 2', isTrue: true },
    { text: '9 != 9', isTrue: false },
    { text: '1 + 0 == 1', isTrue: true },
    { text: '3 + 2 < 6', isTrue: true },
    { text: '5 >= 5', isTrue: true },
    { text: '10 < 20', isTrue: true },
    { text: '7 < 6', isTrue: false },
    { text: '2 != 3', isTrue: true },
    { text: '1 > 0', isTrue: true },
    { text: '6 - 4 == 2', isTrue: true },
    { text: '2 * 2 != 4', isTrue: false },
    { text: '3 > 1', isTrue: true },
    { text: '8 < 4', isTrue: false },
    { text: '5 == 4', isTrue: false },
];

  
  let score = 0;
  let gameOver = false;
  let isJumping = false;
  
  const dino = document.getElementById('dino');
  const scoreElement = document.getElementById('score');
  
  function jump() {
    if (isJumping) return;
    isJumping = true;
  
    const dinoImg = document.getElementById('dino-img');
    dinoImg.src = 'images/dinoStand.png'; // לשים את התמונה של הדינוזואר הקופץ
  
    let jumpHeight = 200; // גובה הקפיצה
    let jumpPosition = 0; // מיקום הקפיצה
    const jumpInterval = setInterval(() => {
      if (jumpPosition >= jumpHeight) {
        clearInterval(jumpInterval);
        // מתחילים לרדת
        const fallInterval = setInterval(() => {
          jumpPosition -= 5; // כמות הירידה בכל פרק זמן
          dino.style.bottom = jumpPosition + 'px'; // מעדכנים את המיקום של הדמות
  
          if (jumpPosition <= 0) {
            clearInterval(fallInterval);
            isJumping = false; // הקפיצה הסתיימה
            jumpPosition = 0; // מאפסים את המיקום
            dino.style.bottom = jumpPosition + 'px'; // מוודאים שהדמות על הקרקע
            dinoImg.src = 'images/dinoStand.png'; // שמים את התמונה של הדינוזואר העומד
          }
        }, 20);
      } else {
        jumpPosition += 5; // כמות העלייה בכל פרק זמן
        dino.style.bottom = jumpPosition + 'px'; // מעדכנים את המיקום של הדמות
      }
    }, 20);
  }
  
  
  function createExpression() {
    if (gameOver) return;

    const expressionDiv = document.createElement('div');
    const randomExpression = expressions[Math.floor(Math.random() * expressions.length)];

    expressionDiv.classList.add('expression');
    expressionDiv.textContent = randomExpression.text;
    document.getElementById('game-container').appendChild(expressionDiv);

    let expressionPosition = 0; // מתחילים מימין
    expressionDiv.style.right = expressionPosition + 'px'; // מגדירים את הערך של right

    const expressionInterval = setInterval(() => {
        if (gameOver) {
            clearInterval(expressionInterval); // עצור את ההנפשה של הביטויים אם המשחק נגמר
            return;
        }

        // העלאת הערך של right כדי להזיז את הביטוי שמאלה
        expressionPosition += 5;
        expressionDiv.style.right = expressionPosition + 'px';  // כאן מזיזים את הקופסה

        // בדיקה אם הביטוי עבר את הקצה השמאלי של המסך
        if (expressionPosition > 1200) { // עדכון לבדוק אם הביטוי עבר את רוחב הקונטיינר
            clearInterval(expressionInterval);

            // נבדוק אם הביטוי עדיין קיים בתוך המכולה (container)
            if (expressionDiv && expressionDiv.parentNode === document.getElementById('game-container')) {
                document.getElementById('game-container').removeChild(expressionDiv);
            }

            if (!isJumping && !randomExpression.isTrue) {
                endGame(); // לא קפצו מעל ביטוי שקרי
            }

            if (!gameOver && randomExpression.isTrue && !isJumping) {
                // הוספת האנימציה של האכילה
                eatExpression(expressionDiv);
                
                score += 10;
                scoreElement.textContent = `נקודות: ${score}`;
                scoreElement.classList.add('score-animation');
                  // הוסף את הקוד הזה כדי להחזיר את הניקוד למצב רגיל לאחר האנימציה
  setTimeout(() => {
    scoreElement.classList.remove('score-animation');
  }, 500); // הסר את האנימציה לאחר 500 מילישניות (שווה למיד של האנימציה)
            }
        }
    }, 20);

    // הוספת בדיקת מגע עם הביטוי
// הוספת בדיקת מגע עם הביטוי
const checkCollision = setInterval(() => {
    const dinoRect = dino.getBoundingClientRect();
    const expressionRect = expressionDiv.getBoundingClientRect();
  
    // בדוק אם יש מגע בין הדינוזואר לביטוי
    if (
      dinoRect.right > expressionRect.left &&
      dinoRect.left < expressionRect.right &&
      dinoRect.bottom > expressionRect.top
    ) {
      clearInterval(checkCollision);
      clearInterval(expressionInterval);
      
      // הסר את הביטוי מיד
      document.getElementById('game-container').removeChild(expressionDiv);
  
      // אם מדובר בביטוי שקר, סיים את המשחק
      if (!randomExpression.isTrue) {
        endGame(); // לא קפצו מעל ביטוי שקרי
      } else {
        // אם הביטוי נכון, הוסף ניקוד
        score += 10;
        scoreElement.textContent = `נקודות: ${score}`;
        scoreElement.classList.add('score-animation'); // הוסף את האנימציה
        
        // החזרת הניקוד למצב רגיל
        setTimeout(() => {
          scoreElement.classList.remove('score-animation');
        }, 500); // הסר את האנימציה לאחר 500 מילישניות
      }
    }
  }, 20);
  
}

// פונקציה להנפשה של אכילת הביטוי
function eatExpression(expressionDiv) {
    const dinoImg = document.getElementById('dino-img');
    dinoImg.src = 'images/dinoStand.png'; // לשים את התמונה של הדינוזואר הקופץ

    // הנפשת האכילה
    expressionDiv.classList.add('eating'); // הוספת מחלקה להנפשה

    setTimeout(() => {
        // הסרת הביטוי אחרי האנימציה
        if (expressionDiv.parentNode === document.getElementById('game-container')) {
            document.getElementById('game-container').removeChild(expressionDiv);
        }
    }, 500); // מתאם את משך האנימציה

    // שינוי צבע וגודל של הניקוד
    const scoreElement = document.getElementById('score');
    scoreElement.classList.add('score-animation'); // הוספת מחלקת אנימציה
    setTimeout(() => {
        scoreElement.classList.remove('score-animation'); // מסיר את המחלקה אחרי האנימציה
    }, 1000);
}

  
  function endGame() {
    gameOver = true; // עדכון מצב המשחק
    const gameOverElement = document.getElementById('game-over');
    gameOverElement.textContent = `המשחק נגמר! הניקוד הסופי הוא: ${score},  רענון את העמוד כדי להתחיל מחדש`; // הצגת הניקוד הסופי
    gameOverElement.style.display = 'flex'; // מציג את השכבת סיום
  }

  function run() {
    const dinoImg = document.getElementById('dino-img');
    
    if (!isJumping) {
      // אם לא קופץ, נחליף בין התמונות
      dinoImg.src = (dinoImg.src.includes('dinoRight.png')) ? 'images/dinoLeft.png' : 'images/dinoRight.png';
    }
  }
  
  // התחלת המשחק
// יצירת ביטוי כל 2 שניות
setInterval(createExpression, 2000);

// הוספת אירוע להקשות על מקש רווח
document.addEventListener('keydown', (event) => {
  if (event.code === 'Space') {
    jump(); // אם לוחצים על מקש רווח, מבצעים קפיצה
  }
});

// קביעת תנועת הדינוזואר
setInterval(() => {
  if (!gameOver) {
    run(); // קובעים אם הדינוזואר רץ
  }
}, 100); // כל 200 מילישניות
  