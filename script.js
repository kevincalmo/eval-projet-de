//creation du script pour le jeu 

//definition des variables
var scores, roundScore, activePlayer, game;

newParty();

//on ajoute des evenement au click sur les differents bouttons
document.querySelector('.btn-new').addEventListener('click',newParty);
document.querySelector('.btn-roll').addEventListener('click',rollDice);
document.querySelector('.btn-hold').addEventListener('click',hold);



// creation des functions
function newParty(){
    game = true;
    scores=[0,0];
    activePlayer = 0;
    roundScore = 0;
    document.getElementById('dice').style.display='none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}
//fonction pour changer de joueur

function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore=0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.getElementById('dice').style.display = 'none';
    
}

//fonction pour lancer le dé
function rollDice(){
    
    if(game === true){
        var dice = Math.floor(Math.random()*6)+1;
        document.getElementById('dice').style.display='block';
        document.getElementById('dice').src = './media/dice-' + dice + '.png';

         if(dice === 1){
            nextPlayer();
        }else if(dice !== 1){
                roundScore += dice;
                document.querySelector('#current-' + activePlayer).textContent = roundScore;
        }else {
                nextPlayer();
    }
    }

   
    
}
//fonction pour envoyer le score temporaire dans le score global
function hold() {

    if(game === true){

        scores[activePlayer]+=roundScore;

        document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer];


         if(scores[activePlayer] >= 100){

            document.querySelector('#name-'+activePlayer).textContent = 'Winner !';
            document.getElementById('dice').style.display='none';
            document.querySelector('.player-'+ activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
            game = false;

            } else {
            nextPlayer();
            }
    } 
    

   
}

