var questionbank=[

    {question:`Grand Central Terminal, Park Avenue, New York is the world's`,options:['largest railway station','	highest railway station','longest railway station','None of the above'],answer:'largest railway station'},
    {question:'Entomology is the science that studies',options:['Behavior of human beings','Insects','The origin and history of technical and scientific terms','The formation of rocks'],answer:'The formation of rocks'},
    {question:'Eritrea which became the 182nd member of the UN in 1993, is in the continent of',options:['asia','africa','europe','australia'],answer:'africa'},
    {question:'Garampani sanctuary is located at',options:['Junagarh, Gujarat','Diphu, Assam','Kohima, Nagaland','Gangtok, Sikkim'],answer:''}
]
var questions=document.getElementById('question');
console.log(questions)
var quizcontainer=document.getElementById('quizcontainer');
var scorecard=document.getElementById('scoreboard');
var option0=document.getElementById('option0');
var option1=document.getElementById('option1');
var option2=document.getElementById('option2');
var option3=document.getElementById('option3');
var next=document.querySelector('.next');
var back=document.querySelector('.back');
var stat=document.getElementById('stat')
var score1=document.getElementById('score')
var span=document.querySelectorAll('span');

var i=0;
var score=0;
var flag=0;
let scores = {}
//function to display questions
function displayquestion()
{
for(var a =0;a<span.length;a++)
{
     span[a].style.background='none';

}
questions.innerHTML='q. '+(i+1)+''+questionbank[i].question;
option0.innerHTML=questionbank[i].options[0]
console.log(questionbank[i]);
console.log(option0)
option1.innerText=questionbank[i].options[1]
option2.innerText=questionbank[i].options[2]
option3.innerText=questionbank[i].options[3]
stat.innerHTML=i+1+'/'+questionbank.length
}
function calcscore(e)
{
    console.log(i, 1);
    if(e.innerHTML===questionbank[i].answer &&score<questionbank.length){
    scores[i] = true;
    score=score+1;
    flag=1
    document.getElementById(e.id).style.background='limegreen';
    }else{
        scores[i] = false;
        flag=0
        document.getElementById(e.id).style.background='tomato';
    }
    console.log(scores);
    setTimeout(nextquestion,300)
}
function nextquestion(){
if(i<questionbank.length-1){
i++;
displayquestion();
console.log(i)
stat.innerHTML=i+1+'/'+questionbank.length

}
else{
    console.log(scores);
    let counter = 0;
    Object.keys(scores).forEach(value => {
        if(scores[value]) counter++;
    })
score1.innerHTML=counter+'/'+questionbank.length
quizcontainer.style.display='block'

}
}
function onequestionbackquetion(){
    scores[i] = false;
i--;
score1.innerHTML=''
displayquestion();



}
next.addEventListener('click',nextquestion)
function backtoquiz(){

location.reload();

}


back.addEventListener('click',onequestionbackquetion)
function checkanswers(){
    var answer=document.getElementById('answers');
  
    var answerbankss=document.getElementById('answerbank')
console.log(answer)
//answerbankss.style.display='block'    
scorecard.style.display='block'
  for(var a=0;a<questionbank.length;a++)
    {
        var list=document.createElement('li')
        list.innerHTML=questionbank[a].answer;
        answer.appendChild(list)

    }
    answer.classList.toggle("mystyle");
  }
  
displayquestion()