let questions = [
    {
        question: "Сколько всего независимых государств в мире?",
        options: ['193', '256', '195', '206'],
        correctAnswer: '193',
    },
    {
        question: "Какой основной язык в Бразилии?",
        options: ['Португальский', 'Английский', 'Турецкий', 'Немецкий'],
        correctAnswer: 'Португальский',
    },
    {
        question: "Сколько будет: 9 + (9 ÷ 9) + (9 × 9) – 9?",
        options: ['67', '82', '87', '99'],
        correctAnswer: '82',
    },
    {
        question: "Сколько лет длилась столетняя война?",
        options: ['111', '100', '121', '116'],
        correctAnswer: '116',
    },
    {
        question: "Кто доказал существование электромагнитных волн?",
        options: ['И. Ньютон', 'А. Эйнштейн', 'Г. Р. Герц', 'Д. К. Максвелл'],
        correctAnswer: 'Г. Р. Герц',
    },
    {
        question: "Какого языка программирования не существует?",
        options: ['SQL', 'С#', 'CH+', 'C++'],
        correctAnswer: 'CH+',
    },
    {
        question: "Какого языка программирования не существует?",
        options: ['SQL', 'С#', 'CH+', 'C++'],
        correctAnswer: 'CH+',
    },
    {
        question: "Какого языка программирования не существует?",
        options: ['SQL', 'С#', 'CH+', 'C++'],
        correctAnswer: 'CH+',
    },
]

let images = ['img/num1.jpg', 'img/num2.jpg', 'img/num3.jpg', 'img/num4.jpg', 'img/num5.jpg', 'img/num6.jpg', 'img/num7.jpg', 'img/num8.jpg', 'img/9may.jpg'];
let img = document.getElementById('img');
let i = 0;
img.src = images[i];
img.height = 600;

let currentQuestion = 0; // Текущий вопрос
let correctAnswers = 0; // Кол-во правильных ответов

function displayQuestion() {
    let questionElem = document.getElementById('question__num'); // Получить блоке куда размещать вопрос
    questionElem.textContent = `Вопрос №${currentQuestion + 1}`;
    let questionContent = document.getElementById('question');
    questionContent.textContent = `${questions[currentQuestion].question}`;
    // Получим блоки кнопок
    let optionsElem = document.getElementById('options');
    // Очистим блок с кнопками
    optionsElem.innerHTML = ''; // Свойство innerHTML позволяет получить и изменить HTML код элемента.

    // Массив ответов
    let optionArr = questions[currentQuestion].options;
    // Создаем кнопки с вариантами ответов и привязать к ним функцию nextQuestion
    optionArr.forEach((option) => {
        let button = document.createElement('button')
        optionsElem.append(button);
        button.textContent = option;
        button.classList.add('btn');
    });
    // При клике на блок с кнопками
    optionsElem.addEventListener('click', (event) => {
        // Получаем в переменную кнопку, на которую кликнули
        let target = event.target;
        console.log(target.textContent);
        // Вызовем функцию проверки ответов и перехода к следующему вопросу
        nextQuestion(target.textContent);
    }, { once: true });
}

// Функция для перехода к следующему вопросу
function nextQuestion(answer) {
    // Если ответ равен корректному то
    if (answer === questions[currentQuestion].correctAnswer) {
        // Увеличиваем на единицу количество верных ответов
        correctAnswers++;
    }
    currentQuestion++; // Переход к следующему вопросу
    i++;
    img.src = images[i];
    // Если номер текущего вопроса меньше количества вопросов то отображаем следующий вопрос
    if (currentQuestion < questions.length) {
        displayQuestion(); // Отображаем следующий вопрос
    } else {
        displayResult();
    }
}

function displayResult() {
    console.log(nextQuestion);
    const questionElem = document.getElementById('question');
    const optionsElem = document.getElementById('options');
    const resultElem = document.getElementById('result');
    const container = document.getElementById('container');
    const questionNum = document.getElementById('question__num');
    questionElem.style.display = 'none';
    questionNum.style.display = 'none';
    optionsElem.style.display = 'none';
    if (correctAnswers === 1) {
        resultElem.textContent = `Поздравляю вас с наступающим праздником 9 мая! У вас ${correctAnswers} правильный ответ из ${questions.length}`
    } else {
        resultElem.textContent = `Поздравляю вас с наступающим праздником 9 мая! У вас ${correctAnswers} правильных ответов из ${questions.length}`
    }
}

displayQuestion();