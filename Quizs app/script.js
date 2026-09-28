const questionList = [
    {
        question:
            "Which gas do plants primarily absorb from the atmosphere during photosynthesis?",
        options: {
            A: "Oxygen",
            B: "Nitrogen",
            C: "Carbon Dioxide",
            D: "Hydrogen",
        },
        answer: "C",
        explanation:
            "Plants take in carbon dioxide and release oxygen during the process of making their own food.",
    },
    {
        question: "What is the approximate distance between Earth and the Moon?",
        options: {
            A: "384,400 km",
            B: "150,000 km",
            C: "1,000,000 km",
            D: "50,000 km",
        },
        answer: "A",
        explanation:
            "The average distance between Earth and the Moon is approximately 384,400 kilometers.",
    },
    {
        question: "Which is the largest ocean on Earth?",
        options: {
            A: "Atlantic Ocean",
            B: "Indian Ocean",
            C: "Arctic Ocean",
            D: "Pacific Ocean",
        },
        answer: "D",
        explanation:
            "The Pacific Ocean is the largest and deepest of Earth's oceanic divisions.",
    },
    {
        question: "How many continents are there on Earth?",
        options: {
            A: "5",
            B: "6",
            C: "7",
            D: "8",
        },
        answer: "C",
        explanation:
            "The seven continents are Asia, Africa, North America, South America, Antarctica, Europe, and Australia.",
    },
    {
        question: "Which organ in the human body pumps blood?",
        options: {
            A: "Lungs",
            B: "Brain",
            C: "Kidneys",
            D: "Heart",
        },
        answer: "D",
        explanation:
            "The heart acts as a pump that circulates blood throughout the entire body.",
    },
    {
        question: "What is the capital city of India?",
        options: {
            A: "London",
            B: "Berlin",
            C: "Delhi",
            D: "Rome",
        },
        answer: "C",
        explanation: "Delhi is the capital and most populous city of India.",
    },
    {
        question: "Which of these is the hardest natural substance found on Earth?",
        options: {
            A: "Gold",
            B: "Iron",
            C: "Diamond",
            D: "Graphite",
        },
        answer: "C",
        explanation:
            "Diamond is a solid form of the element carbon and is the hardest known natural mineral.",
    },
    {
        question: "Which animal is known as the 'Ship of the Desert'?",
        options: {
            A: "Horse",
            B: "Camel",
            C: "Elephant",
            D: "Donkey",
        },
        answer: "B",
        explanation:
            "Camels are called the ship of the desert because they can travel across hot sands for long periods without water.",
    },
    {
        question: "In which direction does the Sun Set?",
        options: {
            A: "North",
            B: "South",
            C: "East",
            D: "West",
        },
        answer: "D",
        explanation:
            "The Earth rotates from West to East, which makes the Sun appear to set in the West.",
    },
    {
        question: "What is the Freezing point of water at sea level?",
        options: {
            A: "0°C",
            B: "5°C",
            C: "10°C",
            D: "15°C",
        },
        answer: "A",
        explanation:
            "At standard atmospheric pressure, pure water freezes at 0 degrees Celsius.",
    },
];

const timer = document.getElementById("timer");

const questionIndex = document.getElementById("question-index");
const questions = document.getElementById("questions");

const optionA = document.getElementById("option-A");
const optionB = document.getElementById("option-B");
const optionC = document.getElementById("option-C");
const optionD = document.getElementById("option-D");

const optionBoxA = document.getElementById("option-box-A");
const optionBoxB = document.getElementById("option-box-B");
const optionBoxC = document.getElementById("option-box-C");
const optionBoxD = document.getElementById("option-box-D");

const nextBtn = document.getElementById("next-button");

let currentIndex = 0;
let timeCounter = 60;
let intervalId;
let answerList = [];
let score = 0;

function displayQuestions() {
    if (currentIndex > questionList.length - 1) {
        nextBtn.textContent = "Submitt";
        clearInterval(intervalId);
    } else {
        startTimer();
        questionIndex.textContent = "Q ." + (currentIndex + 1);
        questions.textContent = questionList[currentIndex].question;

        optionA.textContent = questionList[currentIndex].options.A;
        optionB.textContent = questionList[currentIndex].options.B;
        optionC.textContent = questionList[currentIndex].options.C;
        optionD.textContent = questionList[currentIndex].options.D;
    }
}

nextBtn.addEventListener("click", () => {
    currentIndex++;
    if (currentIndex < questionList.length) {
        displayQuestions();
        if (currentIndex == questionList.length - 1) {
            nextBtn.textContent = "Submit";
        }
    } else {
        scoreCounter();
    }
});

function startTimer() {
    clearInterval(intervalId);
    timeCounter = 60;
    intervalId = setInterval(() => {
        timeCounter--;
        timer.textContent = timeCounter;
        if (timeCounter <= 0) {
            currentIndex++;
            displayQuestions();
        }
    }, 1000);
}

function scoreCounter() {
    questionList.forEach((que, i) => {
        if (que.answer == answerList[i]) {
            score++;
        }
    });
    console.log(score);
    document.getElementById("score-dis").textContent =
        "Your score:" + score + "/" + questionList.length;

    alert("your score :" + score);

    //   if (score >= 6) {
    //     document.getElementById("pass-fail").textContent = "you'r passed";
    //   } else {
    //     document.getElementById("pass-fail").textContent = "you'r failed";
    //   }
}

optionBoxA.addEventListener("click", () => {
    answerList.push("A");
});
optionBoxB.addEventListener("click", () => {
    answerList.push("B");
});
optionBoxC.addEventListener("click", () => {
    answerList.push("C");
});
optionBoxD.addEventListener("click", () => {
    answerList.push("D");
});

displayQuestions();