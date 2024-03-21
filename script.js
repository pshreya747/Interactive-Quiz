const a = [
    { Question: 'What is Capital of India?', option: ["Delhi", "Mumbai", "Kolkata"], correctAnswer: "Delhi" },
    { Question: "What is 2+2 ?", option: [4, 2, 6], correctAnswer: 4 },
    { Question: 'Who is the CEO of Tesla ?', option: ["Elon Musk", "Read Jefree", "Bobby Marsh"], correctAnswer: "Elon Musk" },
    { Question: "Who Is Prime Minister Of India ?", option: ["Narendra Modi", "Ramnath Govind", "None Of the Above"], correctAnswer: "Narendra Modi" },
    { Question: "Who Is the First Person Step Foot on Moon ?", option: ["Neil Armstrong", "Miceal Aldrin", "Alan Shepard"], correctAnswer: "Neil Armstrong" },
    { Question: "Which State Has Longest Coastline In India?", option: ["Gujarat", "Goa", "Kerela"], correctAnswer: "Gujarat" },
    { Question: "Sun Rises From ____?", option: ["East", "West", "Nowhere"], correctAnswer: "East" },
    { Question: "What is the Highest Mountain in The World?", option: ["Mt Everest", "Kunchenjunga", "Mt Abu"], correctAnswer: "Mt Everest" },
    { Question: "Name the Longest River in the World ?", option: ["Nile", "Chile", "Moonstone"], correctAnswer: "Nile" },
    { Question: "Which Footballer has the most Balla'dor?", option: ["Messi", "Ronaldo", "Neymar"], correctAnswer: "Messi" }
];

let currentQuestion = 0;
let score = 0;
const questionElement = document.getElementById('questions');
const optionElement = document.getElementById('option');

function loadQuestions() {
    const currentQuizData = a[currentQuestion];
    questionElement.innerText = currentQuizData.Question;
    optionElement.innerHTML = "";

    currentQuizData.option.forEach(option => {
        const label = document.createElement('label');
        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'correctAnswer'; // Added name attribute
        radio.value = option;
        label.appendChild(radio);
        label.appendChild(document.createTextNode(option));
        optionElement.appendChild(label);
    });
}

function nextQuestion() {
    let selectOption = document.querySelector('input[name="correctAnswer"]:checked');
    if (!selectOption) {
        alert("Please select an Option");
        return;
    }
    const answer = selectOption.value;
    if (answer === a[currentQuestion].correctAnswer.toString()) {
        alert("Correct Answer");
        score++;
    } else {
        alert('Wrong Answer and correct answer is :' + a[currentQuestion].correctAnswer);
    }
    currentQuestion++;
    if (currentQuestion >= a.length) {
        alert('Game Over! Your score is :' + score);
    } else {
        loadQuestions();
    }
    scoreElement.innerText= 'Score:' + score;
}


loadQuestions();