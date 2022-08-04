const game = ()=> {
    let pScore = 0;
    let cScore = 0;


    const startGame = ()=> {
        const playBut = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBut.addEventListener('click', () =>{
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn');
        });
    }

    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const compHand = document.querySelector('.comp-hand');

        //Computer Moves
        const compOptions = ['rock', 'paper', 'scissors'];

        options.forEach(option=>{
            option.addEventListener('click', function(){
                const compNumber = Math.floor(Math.random() * 3);
                const compChoice = compOptions[compNumber];
                
                compareHands(this.textContent, compChoice);

                //Update Images
                playerHand.src = `/Assets/${this.textContent}.png`;
                compHand.src = `/Assets/${compChoice}.png`;


            });
        });
    }

    const updateScore = () => {
        playerScore = document.querySelector('.player-score p');
        compScore = document.querySelector('.comp-score p');

        playerScore.textContent = pScore;
        compScore.textContent = cScore;
    }

    const compareHands = (player, comp) => {
        const winner = document.querySelector('.winner');
        if(player === comp){
            winner.textContent = 'It is a tie';
            return;
        }
        
        if(player === 'rock'){
            if(comp === 'paper'){
                winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
                return;
            }else{
                winner.textContent = 'Player Wins';
                pScore++;
                updateScore();
                return;
            }
        }
        if(player === 'paper'){
            if(comp === 'scissors'){
                winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
                return;
            }else{
                winner.textContent = 'Player Wins';
                pScore++;
                updateScore();
                return;
            }
        }
        if(player === 'scissors'){
            if(comp === 'rock'){
                winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
                return;
            }else{
                winner.textContent = 'Player Wins';
                pScore++;
                updateScore();
                return;
            }
        }
    }

    startGame();
    playMatch();
}

//Call game function
game();