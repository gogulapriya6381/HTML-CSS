document.addEventListener('DOMContentLoaded', () => {
    const box = document.getElementById('box');
    const square = document.getElementsByClassName('square');
    const players = ["X", "O"];
    let cp = players[0];

    const boxtext = document.createElement('h1');
    boxtext.textContent = "X's turn!";
    boxtext.style.marginTop = '20px';
    boxtext.style.textAlign = 'center';
    box.after(boxtext);

    
    const conditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

   
    for (let i = 0; i < square.length; i++) {
        square[i].addEventListener('click', () => {
            if (square[i].textContent !== '') {
                return;
            }
            square[i].textContent = cp;
          if(cp=="X")
          {
            square[i].style.color="blue";
            square[i].style.fontSize="3em";
          }
          else{
            square[i].style.color="blue";
            square[i].style.fontSize="3em";

          }
            if (checkwin(cp)) {
                boxtext.textContent = 'Game Over!! ' + cp + " wins!";
                return;
            }
            if (checktie()) {
                boxtext.textContent = 'Game tied!';
                return;
            }

            cp = (cp === players[0]) ? players[1] : players[0];
            boxtext.textContent = cp + "'s turn";
        });
    }


    function checkwin(cp) {
        for (let i = 0; i < conditions.length; i++) {
            const [x, y, z] = conditions[i];
            if (square[x].textContent === cp && square[y].textContent === cp && square[z].textContent === cp) {
                return true;
            }
        }
        return false;
    }


    function checktie() {
        for (let i = 0; i < square.length; i++) {
            if (square[i].textContent === "") {
                return false;
            }
        }
        return true;
    }


    function restartbutton() {
        for (let i = 0; i < square.length; i++) {
            square[i].textContent = "";
        }
        boxtext.textContent = "X's turn!";
        cp = players[0];
    }

    const restartBtn = document.getElementById('restartbutton');
    restartBtn.addEventListener('click', restartbutton);
});