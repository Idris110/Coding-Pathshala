const quizdata = [
    {
        question: "Q1: What is full form of HTML ?",
        a: "hello to my language",
        b: "hyper text markup language",
        c: "hyper text makeup language",
        d: "hyper test markup language",
        ans: "ans2"
    },
    {
        question: "Q2: Who is making the web standards?",
        a: "Microsoft",
        b: "The World Wide Web Consortium",
        c: "Google",
        d: "Mozilla",
        ans: "ans2"
    },
    // {
    //     question: "Q5: Which character is used to indicate an end tag?",
    //     a: "/",
    //     b: "<",
    //     c: "*",
    //     d: "^",
    //     ans: " 
    // {
    //     question: "Q6: What does CSS stand for?",
    //     a: "Colourful Style Sheets",
    //     b: "Creative Style Sheets",
    //     c: "Cascading Style Sheets",
    //     d: "Computer Style Sheets",
    //     ans: "ans3"
    // },
    // {
    //     question: "Q7: Which HTML attribute is used to define inline styles?",
    //     a: "class",
    //     b: "style",
    //     c: "styles",
    //     d: "font",
    //     ans: "ans2"
    // },
    // {
    //     question: "Q8: Which is the correct CSS syntax?",
    //     a: "{body:color=black;}",
    //     b: "body {color: black;}",
    //     c: "{body;color:black;}",
    //     d: "body:color=black;",
    //     ans: "ans2"
    // },
    // {
    //     question: "Q9: How do you insert a comment in a CSS file?",
    //     a: "/* this is a comment */",
    //     b: "’this is a comment",
    //     c: "// this is a comment //",
    //     d: "// this is a comment",
    //     ans: "ans1"
    // },
    // {
    //     question: "Q10: Which CSS property controls the text size?",
    //     a: "text-size",
    //     b: "font-size",
    //     c: "text-style",
    //     d: "font-style",
    //     ans: "ans2"
    // }
];

const question = document.querySelector('#question');
const option1 = document.querySelector('#opt1');
const option2 = document.querySelector('#opt2');
const option3 = document.querySelector('#opt3');
const option4 = document.querySelector('#opt4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const result = document.querySelector('.showscore');
//const Name = document.querySelector('.hidden');



let quesNo = 0;
let score = 0;
const loadques = () => {
    question.innerHTML = quizdata[quesNo].question;
    option1.innerHTML = quizdata[quesNo].a;
    option2.innerHTML = quizdata[quesNo].b;
    option3.innerHTML = quizdata[quesNo].c;
    option4.innerHTML = quizdata[quesNo].d;
}
loadques();

const checkans = () => {
    let choosedans = "none";
    answers.forEach(curAnsEle => {

        if (curAnsEle.checked) {
            choosedans = curAnsEle.id;
        }
    });
    return choosedans;
};


submit.addEventListener('click', () => {
    const checkedans = checkans();
    //console.log(Name.innerHTML);
    if (checkedans === quizdata[quesNo].ans) {
        score = score + 2;
    };
    console.log(score);

    quesNo++;
    if (quesNo < quizdata.length) {
        answers.forEach((curSelans) => curSelans.checked = false);
        loadques();
    }
    else {
        const data ={Score:score};
        const options ={
            method : 'POST',
            headers :{
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(data)
        };
        fetch('/quiz',options);
        result.innerHTML=`
        <p>You scored ${score}/${quizdata.length*2}</p>
        
        `;
        result.classList.remove('showscore');
        submit.classList.add('hidenext');
    }
});