/*here quizDB is an array with 'a single question and its corresponding options' as a single array element represented as key value pairs*/
//so we can reference the value as array_name['array_index'].key
//the ans key corresponds to correct answer 

const quizDB = [
    {
        question: "Q1:Which language has file extension as .c?",
        a: "C ",
        b: "Java ",
        c: "cpp",
        d: "Python",
        ans: "ans1"
    },

    {
        question: "Q2:Which language has file extension as .cpp?",
        a: "C ",
        b: "Java ",
        c: "cpp",
        d: "Perl",
        ans: "ans3"
    },

    {
        question: "Q3:Which language has file extension as .js?",
        a: "Perl ",
        b: "Java ",
        c: "Javascript",
        d: "PHP",
        ans: "ans3"
    },

    {
        question: "Q4:Which language has file extension as .py?",
        a: "LISP",
        b: "Ruby",
        c: "Perl",
        d: "Python",
        ans: "ans4"//here ans4 is id of correct answer
    },

    {
        question: "Q5:Which language has file extension as .java?",
        a: "C ",
        b: "Java ",
        c: "cpp",
        d: "Perl",
        ans: "ans2"
    }
];

const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");

const submit = document.querySelector("#submit");

/*here answers is array of options with keys a,b,c,d and ids ans1,ans2,ans3,ans4 respectively*/
const answers = document.querySelectorAll(".answer");


const showscore = document.querySelector("#showscore");

//initially first quetion is loaded by referring to array index 0
//here question count refers to index of quizDB Array

let questionCount = 0;
let score = 0;
const loadquestion = () => {
    //console.log(quizDB[0])
    //console.log(quizDB[0].question)

    const questionList = quizDB[questionCount];
    question.innerHTML = questionList.question;

    option1.innerHTML = questionList.a;
    option2.innerHTML = questionList.b;
    option3.innerHTML = questionList.c;
    option4.innerHTML = questionList.d;


}

//function to load question into respective space provided via html tags
loadquestion();



//function to get chosen or checked option 
const getcheckAnswer=() =>{
    let answer;

    answers.forEach(curAnsElem => {
        if (curAnsElem.checked) {
            answer = curAnsElem.id;

        }

    });

    
    return answer;
};


const deselectAll=() =>{
    answers.forEach(curAnsElem => curAnsElem.checked=false);
}



//after submitting a answer for a question next question is loaded

/*getcheckAnswer returns the id of checked option
which is compared with the ans key which has the id of correct answer as its  value*/

submit.addEventListener("click",()=> {
    const checkedAnswer = getcheckAnswer();
    //console.log(checkedAnswer);


    if (checkedAnswer == quizDB[questionCount].ans) {
        score++;
    }

    questionCount++;

    deselectAll();

    if (questionCount < quizDB.length) {
        loadquestion();
    }
    else {
        showscore.innerHTML =
            `
             <h1>YOu  Scored  ${score}/${quizDB.length}   </h1>
                <button class="btn" onclick='location.reload()'>PLAY AGAIN</button>
        `;

        showscore.classList.remove('scoreArea');
    }


});







