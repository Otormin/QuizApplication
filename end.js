const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

//getting item from local storage
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = (e) => {
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value
    };
    highScores.push(score);

    //this is for sorting. return b.score - a.score means if b.score is higher than a.score then put b.score before a.score
    //or you can just do this highScores.sort( (a,b) => b.score - a.score
    highScores.sort( (a,b) => {
        return b.score - a.score
    })

    //this means in the array highScores cut everything from index 5 below
    highScores.splice(5);

    localStorage.setItem('highScores', JSON.stringify(highScores));
    
    window.location.assign('index.html');
};