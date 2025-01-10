const quizList = [
  {
    question: 'What is the capital of japan?',
    options: ['Tokyo', 'bangkok', 'seoul', 'beijing'],
    ans:'Tokyo',
  },
  {
    question: 'Which of these is the largest planet in our solar system?',
    options: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
    ans:'Jupiter',
  },  
  
  {
    question:'who wrote the play "Romeo and Juliet"?',
    options:['Charles Dickens','Mark Twain','William Shakespeare','Jane Austen'],
    ans:'William Shakespeare'
  },
  {
    question:'which element has the chemical symbol "O"?',
    options:['Oxygen','Osmium','Ozone','Oganesson'],
    ans:'Oxygen'
  },
  {
    question:'1+1? ',
    options:['2','3','10','11'],
    ans:'2'
  },
{
    question:'when the covid-19 started? ', 
    options: ['2000','2008','2011','2019' ], 
    ans:'2019'} 
];
const submitButton = document.querySelector('.submit-button');
const quiz = document.querySelector('.quiz');
let curentquizindex = 0;
let currentscore =0;
let userans ='';

function startquiz (){
  curentquizindex = 0;
  score = 0;
  showquiz();
}
function showquiz(){
    let curntqiz = quizList[curentquizindex]
    trueans = curntqiz.ans;
    const header = document.createElement("h3");
    header.innerHTML=curntqiz.question;
    quiz.appendChild(header);
    curntqiz.options.forEach((option)=>{
      const ansbutton = document.createElement("button");
    ansbutton.classList.add("option");
    ansbutton.classList.add("option-js");
    ansbutton.innerHTML= option;
    quiz.appendChild(ansbutton);
    });
      let button = document.querySelectorAll('.option-js');
      button.forEach((ansbutton)=>{
        ansbutton.addEventListener('click',()=>{
          submitButton.style.display="block";
          if(ansbutton.textContent===trueans){
            ansbutton.style.backgroundColor="lightgreen";
            score++;
            document.querySelectorAll('.option-js').forEach((button)=>{button.disabled=true;});
          }
          else{
            ansbutton.style.backgroundColor="rgb(212,46,46)";
            document.querySelectorAll('.option-js').forEach((button)=>{
              if(button.textContent===trueans){
                button.style.backgroundColor="lightgreen";
              }

              button.disabled=true;
            });
          }
        });

      })
    
  
    
  curntqiz=[];
  
}
startquiz();
submitButton.addEventListener('click',()=>{nextQuiz()});
function showscore(){
  quiz.innerHTML=`<h3> you get ${score} of ${quizList.length}`
  submitButton.innerHTML="play agin";
  submitButton.style.display="block";
}
function handel (){
  curentquizindex++;
  if(curentquizindex<quizList.length){
    showquiz();
  }
  else{
    showscore();
  }
}

function nextQuiz(){
  submitButton.style.display="none";
  quiz.innerHTML="";
  if(curentquizindex<quizList.length){
    handel();
  }
  else{
    startquiz();
  }
  console.log(curentquizindex);
}
function playagin(){
  
}
