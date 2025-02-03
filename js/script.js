// JavaScript for Spider-Man Fan Page

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const targetId = event.target.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    // Web-Shooter Game Variables
    let score = 0;
    let gameInterval;
    let maxMisses = 5;
    let misses = 0;

    function startGame() {
        score = 0;
        misses = 0;
        document.getElementById("score").textContent = score;

        gameInterval = setInterval(spawnVillain, 1000);
    }

    function spawnVillain() {
        if (misses >= maxMisses) {
            clearInterval(gameInterval);
            alert("Game Over! You let too many villains escape.");
            return;
        }
    
        const gameArea = document.getElementById("game-area");
        const villain = document.createElement("div");
        villain.classList.add("villain");
    
        // Randomly select a villain and use the first letter
        const villainNames = ["Green Goblin", "Venom", "Doctor Octopus", "Sandman", "Mysterio", "Electro", "Lizard"];
        const randomVillain = villainNames[Math.floor(Math.random() * villainNames.length)];
        villain.textContent = randomVillain.charAt(0); // First letter
    
        // Position the villain randomly
        const x = Math.random() * (gameArea.clientWidth - 50);
        const y = Math.random() * (gameArea.clientHeight - 50);
    
        villain.style.left = `${x}px`;
        villain.style.top = `${y}px`;
    
        // Click event to capture the villain
        villain.addEventListener("click", () => {
            score++;
            document.getElementById("score").textContent = score;
            villain.remove();
        });
    
        gameArea.appendChild(villain);
    
        // Villain disappears after 2 seconds if not clicked
        setTimeout(() => {
            if (document.body.contains(villain)) {
                villain.remove();
                misses++;
            }
        }, 2000);
    }


    // Theme Selector Logic
    function setTheme(theme) {
        document.body.classList.remove("classic-theme", "black-theme", "miles-theme", "iron-spider-theme");
        document.body.classList.add(theme);
        localStorage.setItem('spidermanTheme', theme);
    }

    // Apply the last selected theme on page load
    const savedTheme = localStorage.getItem("spidermanTheme");
    if (savedTheme) {
        document.body.classList.add(savedTheme);
    }

    document.querySelectorAll("#theme-selector button").forEach(button => {
        button.addEventListener("click", () => {
            const theme = button.getAttribute("data-theme");
            setTheme(theme);
        });
    });


    // Villain Spotlight Feature
    const villains = [
        { name: "Green Goblin", fact: "Norman Osborn's alter ego, one of Spider-Man's deadliest foes." },
        { name: "Venom", fact: "A symbiote-powered anti-hero who once was Spider-Man's enemy." },
        { name: "Doctor Octopus", fact: "A genius scientist with mechanical tentacles!" },
        { name: "Sandman", fact: "Flint Marko, a villain who can turn into sand and reshape his body." },
        { name: "Mysterio", fact: "A master illusionist who uses special effects and trickery." },
        { name: "Electro", fact: "Max Dillon, a villain who can control and generate electricity." },
        { name: "Lizard", fact: "Dr. Curt Connors, a scientist who mutated into a reptilian villain." }
    ];

    function loadRandomVillain() {
        const randomVillain = villains[Math.floor(Math.random() * villains.length)];
        document.getElementById('villain-name').textContent = randomVillain.name;
        document.getElementById('villain-fact').textContent = randomVillain.fact;
    }

    loadRandomVillain();
    // Additional Spider-Man Quiz Questions
    // Continuous Quiz Logic with Leaderboard
    const questions = [
        { question: "What is the name of Spider-Man's first love interest?", answer: "Gwen Stacy" },
        { question: "Who is Spider-Man's best friend?", answer: "Harry Osborn" },
        { question: "What is the name of Spider-Man's boss at the Daily Bugle?", answer: "J. Jonah Jameson" },
        { question: "What is the name of Spider-Man's clone?", answer: "Ben Reilly" },
        { question: "Who is the villain in Spider-Man: Homecoming?", answer: "Vulture" },
        { question: "What is the name of Spider-Man's uncle?", answer: "Uncle Ben" },
        { question: "What is Spider-Man's motto?", answer: "With great power comes great responsibility" },
        { question: "Who is the villain in Spider-Man: Far From Home?", answer: "Mysterio" },
        { question: "What is the name of Spider-Man's symbiote suit?", answer: "Venom" },
        { question: "Who is the villain in Spider-Man: Into the Spider-Verse?", answer: "Kingpin" },
        { question: "What is the name of Spider-Man's daughter in an alternate universe?", answer: "Mayday Parker" },
        { question: "Who is the villain in The Amazing Spider-Man?", answer: "Lizard" },
        { question: "What is the name of Spider-Man's wife?", answer: "Mary Jane Watson" },
        { question: "Who is the villain in The Amazing Spider-Man 2?", answer: "Electro" },
        { question: "What is the name of Spider-Man's aunt's full name?", answer: "May Parker" },
        { question: "Who is the villain in Spider-Man 3?", answer: "Sandman" },
        { question: "What is the name of Spider-Man's high school?", answer: "Midtown High School" },
        { question: "Who is the villain in Spider-Man 2?", answer: "Doctor Octopus" },
        { question: "What is the name of Spider-Man's college?", answer: "Empire State University" },
        { question: "Who is the villain in Spider-Man?", answer: "Green Goblin" },
        { question: "What is the name of Spider-Man's daughter in the MC2 universe?", answer: "Mayday Parker" },
        { question: "Who is the villain in Spider-Man: Shattered Dimensions?", answer: "Mysterio" },
        { question: "What is the name of Spider-Man's son in an alternate universe?", answer: "Ben Parker" },
        { question: "Who is the villain in Spider-Man: Web of Shadows?", answer: "Venom" },
        { question: "What is the name of Spider-Man's clone's superhero identity?", answer: "Scarlet Spider" },
        { question: "Who is the villain in Spider-Man: Edge of Time?", answer: "Walker Sloan" },
        { question: "What is the name of Spider-Man's daughter in the Renew Your Vows universe?", answer: "Annie Parker" },
        { question: "Who is the villain in Spider-Man: Friend or Foe?", answer: "Mysterio" },
        { question: "What is the name of Spider-Man's son in the Spider-Girl universe?", answer: "Benjy Parker" },
        { question: "Who is the villain in Spider-Man: The Animated Series?", answer: "Kingpin" },
        { question: "What is the name of Spider-Man's daughter in the Spider-Girl universe?", answer: "Mayday Parker" },
        { question: "Who is the villain in Spider-Man: The New Animated Series?", answer: "Kingpin" },
        { question: "What is the name of Spider-Man's son in the Spider-Man: Reign universe?", answer: "Ben Parker" },
        { question: "Who is the villain in Spider-Man: Unlimited?", answer: "High Evolutionary" },
        { question: "What is the name of Spider-Man's daughter in the Spider-Man: Reign universe?", answer: "May Parker" },
        { question: "Who is the villain in Spider-Man: The Animated Series?", answer: "Green Goblin" },
        { question: "What is the name of Spider-Man's son in the Spider-Man: Life Story universe?", answer: "Ben Parker" },
        { question: "Who is the villain in Spider-Man: The New Animated Series?", answer: "Lizard" },
        { question: "What is the name of Spider-Man's daughter in the Spider-Man: Life Story universe?", answer: "May Parker" },
        { question: "Who is the villain in Spider-Man: Unlimited?", answer: "Venom" },
        { question: "What is the name of Spider-Man's son in the Spider-Man: Life Story universe?", answer: "Ben Parker" },
        { question: "Who is the villain in Spider-Man: The Animated Series?", answer: "Doctor Octopus" },
        { question: "What is the name of Spider-Man's daughter in the Spider-Man: Life Story universe?", answer: "May Parker" },
        { question: "Who is the villain in Spider-Man: The New Animated Series?", answer: "Electro" },
        { question: "What is the name of Spider-Man's son in the Spider-Man: Life Story universe?", answer: "Ben Parker" },
        { question: "Who is the villain in Spider-Man: Unlimited?", answer: "Carnage" },
        { question: "What is the name of Spider-Man's daughter in the Spider-Man: Life Story universe?", answer: "May Parker" },
        { question: "Who is the villain in Spider-Man: The Animated Series?", answer: "Mysterio" },
        { question: "What is the name of Spider-Man's son in the Spider-Man: Life Story universe?", answer: "Ben Parker" },
        { question: "Who is the villain in Spider-Man: The New Animated Series?", answer: "Kraven the Hunter" },
        { question: "What is the name of Spider-Man's daughter in the Spider-Man: Life Story universe?", answer: "May Parker" },
        { question: "Who is the villain in Spider-Man: Unlimited?", answer: "Green Goblin" },
        { question: "What is the name of Spider-Man's son in the Spider-Man: Life Story universe?", answer: "Ben Parker" },
        { question: "Who is the villain in Spider-Man: The Animated Series?", answer: "Shocker" },
        { question: "What is the name of Spider-Man's daughter in the Spider-Man: Life Story universe?", answer: "May Parker" },
        { question: "Who is the villain in Spider-Man: The New Animated Series?", answer: "Rhino" },
        { question: "What is the name of Spider-Man's son in the Spider-Man: Life Story universe?", answer: "Ben Parker" },
        { question: "Who is the villain in Spider-Man: Unlimited?", answer: "Scorpion" },
        { question: "What is the name of Spider-Man's daughter in the Spider-Man: Life Story universe?", answer: "May Parker" },
        { question: "Who is the villain in Spider-Man: The Animated Series?", answer: "Hobgoblin" },
        { question: "What is the name of Spider-Man's son in the Spider-Man: Life Story universe?", answer: "Ben Parker" },
        { question: "Who is the villain in Spider-Man: The New Animated Series?", answer: "Chameleon" },
        { question: "What is the name of Spider-Man's daughter in the Spider-Man: Life Story universe?", answer: "May Parker" },
        { question: "Who is the villain in Spider-Man: Unlimited?", answer: "Beetle" },
        { question: "What is the name of Spider-Man's son in the Spider-Man: Life Story universe?", answer: "Ben Parker" },
        { question: "Who is the villain in Spider-Man: The Animated Series?", answer: "Tombstone" },
        { question: "What is the name of Spider-Man's daughter in the Spider-Man: Life Story universe?", answer: "May Parker" },
        { question: "Who is the villain in Spider-Man: The New Animated Series?", answer: "Hammerhead" },
        { question: "What is the name of Spider-Man's son in the Spider-Man: Life Story universe?", answer: "Ben Parker" },
        { question: "Who is the villain in Spider-Man: Unlimited?", answer: "Morbius" },
        { question: "What is the name of Spider-Man's daughter in the Spider-Man: Life Story universe?", answer: "May Parker" },
        { question: "Who is the villain in Spider-Man: The Animated Series?", answer: "Hydro-Man" },
        { question: "What is the name of Spider-Man's son in the Spider-Man: Life Story universe?", answer: "Ben Parker" },
        { question: "Who is the villain in Spider-Man: The New Animated Series?", answer: "Silvermane" },
        { question: "What is the name of Spider-Man's daughter in the Spider-Man: Life Story universe?", answer: "May Parker" },
        { question: "Who is the villain in Spider-Man: Unlimited?", answer: "Jackal" },
        { question: "What is the name of Spider-Man's son in the Spider-Man: Life Story universe?", answer: "Ben Parker" },
        { question: "Who is the villain in Spider-Man: The Animated Series?", answer: "Black Cat" },
        { question: "What is the name of Spider-Man's daughter in the Spider-Man: Life Story universe?", answer: "May Parker" },
        { question: "Who is the villain in Spider-Man: The New Animated Series?", answer: "Tinkerer" },
        { question: "What is the name of Spider-Man's son in the Spider-Man: Life Story universe?", answer: "Ben Parker" },
        { question: "Who is the villain in Spider-Man: Unlimited?", answer: "Prowler" },
        { question: "What is the name of Spider-Man's daughter in the Spider-Man: Life Story universe?", answer: "May Parker" },
        { question: "Who is the villain in Spider-Man: The Animated Series?", answer: "Silver Sable" },
        { question: "What is the name of Spider-Man's son in the Spider-Man: Life Story universe?", answer: "Ben Parker" },
        { question: "Who is the villain in Spider-Man: The New Animated Series?", answer: "Big Wheel" },
        { question: "What is the name of Spider-Man's daughter in the Spider-Man: Life Story universe?", answer: "May Parker" },
        { question: "Who is the villain in Spider-Man: Unlimited?", answer: "Swarm" },
        { question: "What is the name of Spider-Man's son in the Spider-Man: Life Story universe?", answer: "Ben Parker" },
        { question: "Who is the villain in Spider-Man: The Animated Series?", answer: "Molten Man" },
        { question: "What is the name of Spider-Man's daughter in the Spider-Man: Life Story universe?", answer: "May Parker" },
        { question: "Who is the villain in Spider-Man: The New Animated Series?", answer: "Man-Wolf" },
        { question: "What is Spider-Man's real name?", answer: "Peter Parker" },
        { question: "Who created Spider-Man?", answer: "Stan Lee and Steve Ditko" },
        { question: "What year did Spider-Man first appear in comics?", answer: "1962" },
        { question: "What is the name of Spider-Man's Aunt?", answer: "Aunt May" },
        { question: "What city does Spider-Man protect?", answer: "New York" }
    ];

    let playerName = "";
    let wrongAnswers = 0;
    const maxWrongAnswers = 3;
    let scoreQuiz = 0;
    let askedQuestions = new Set();

    const leaderboardKey = "spidermanLeaderboard";
    const quizContainer = document.getElementById('quiz-container');
    const leaderboardSection = document.getElementById('leaderboard-list');
    const resultDisplay = document.getElementById('test-result');

    function getLeaderboard() {
        return JSON.parse(localStorage.getItem(leaderboardKey)) || [];
    }

    function saveLeaderboard(leaderboard) {
        localStorage.setItem(leaderboardKey, JSON.stringify(leaderboard));
    }

    function updateLeaderboard(name, score) {
        const leaderboard = getLeaderboard();
        leaderboard.push({ name, score });
        leaderboard.sort((a, b) => b.score - a.score);
        if (leaderboard.length > 10) leaderboard.pop(); // Keep top 10 scores
        saveLeaderboard(leaderboard);
        displayLeaderboard();
    }

    function displayLeaderboard() {
        const leaderboard = getLeaderboard();
        leaderboardSection.innerHTML = leaderboard
            .map(entry => `<li>${entry.name}: ${entry.score}</li>`)
            .join('');
    }

    function getRandomQuestion() {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * questions.length);
        } while (askedQuestions.has(randomIndex));

        askedQuestions.add(randomIndex);
        return questions[randomIndex];
    }

    function askPlayerName() {
        quizContainer.innerHTML = `
            <h2>Enter Your Name</h2>
            <form id="name-form">
                <input type="text" id="player-name" name="player-name" required placeholder="Your name">
                <button type="submit">Start Quiz</button>
            </form>
        `;
        document.getElementById('name-form').addEventListener('submit', event => {
            event.preventDefault();
            playerName = document.getElementById('player-name').value.trim();
            if (playerName) {
                loadQuestion();
            }
        });
    }

    function loadQuestion() {
        if (wrongAnswers >= maxWrongAnswers) {
            updateLeaderboard(playerName, scoreQuiz);
            quizContainer.innerHTML = `<h2>Game Over!</h2><p>You got 3 questions wrong. Better luck next time!</p>`;
            return;
        }
        const currentQuestion = getRandomQuestion();
        quizContainer.innerHTML = `
            <h2>Spider-Man Knowledge Test</h2>
            <p>${currentQuestion.question}</p>
            <form id="quiz-form">
                <input type="text" id="answer" name="answer" required placeholder="Your answer">
                <button type="submit">Submit</button>
            </form>
        `;
    }

    askPlayerName();
    displayLeaderboard();
});
