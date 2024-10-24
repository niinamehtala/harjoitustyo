document.addEventListener('DOMContentLoaded', () => {
    
    const challenges = [
        "Drink a glass of water",
        "Walk around for 5 minutes",
        "Do 10 push ups",
        "Look out the window and take 5 deep breaths",
        "Stretch for 3 minutes",
        "Do 20 squats",
        "Quickly write down 5 things you are grateful for",
        "Dance to your favorite song for 2 minutes",
        "Close your eyes and listen to the surrounding sounds for 2 minutes"
        
    ];

   
    const challengeButton = document.getElementById('random-challenge-button');
    const challengeResult = document.getElementById('challenge-result');

    
    challengeButton.addEventListener('click', () => {
        
        const randomIndex = Math.floor(Math.random() * challenges.length);
        const randomChallenge = challenges[randomIndex];

        
        challengeResult.textContent = randomChallenge;
    });
});