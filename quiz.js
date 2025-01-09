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
    const header = document.createElement("h3");
    trueans = curntqiz.ans;
    header.innerHTML=curntqiz.question;
    quiz.appendChild(header);
    curntqiz.options.forEach(options=>{
      const ansbutton = document.createElement("button");
    ansbutton.classList.add("option");
    ansbutton.classList.add("option-js");
    ansbutton.innerHTML= options;
    quiz.appendChild(ansbutton);
    trueans = curntqiz.ans;
    ansbutton.addEventListener('click',()=>{
      document.querySelector('.submit-button').style.display="block";
      if(ansbutton.textContent===trueans){
        ansbutton.style.backgroundColor="lightgreen";
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

