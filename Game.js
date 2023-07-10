
player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score ;
document.getElementById("player2_score").innerHTML = player2_score ;

document.getElementById("player_question").innerHTML = "Question Turn"+" "+" - "+" "+ player1_name ;
document.getElementById("player_answer").innerHTML = "Answer Turn"+" "+" - "+" "+ player2_name ;

function send()
{
    const myHeading = document.querySelector("h5");
myHeading.textContent = "";
number1 = parseInt(document.getElementById("number-1").value);
number2 = parseInt(document.getElementById("number-2").value);
sign = document.getElementById("function").value;

console.log("number 1 = " + number1);
console.log(sign);
console.log("number 2 = " + number2);

question_word = "<h4 id='word_display'> Q. "+number1 + " " + sign + " " + number2+"</h4>";
input_box = "<br>Answer : <input type='text' id='input_check_box'>";
check_button = "<br><br><button class='btn btn-info' onclick=check() id='btn_check'>Check</button>";
row =  question_word + input_box + check_button ; 
document.getElementById("output").innerHTML = row;
document.getElementById("number-1").value = "";
document.getElementById("number-2").value = "";
document.getElementById("function").value = "+";
}


question_turn = "player1";
answer_turn = "player2";


function check()
{
if(sign == "+")
{
    correct_answer = number1+number2;
}
if(sign == "x")
{
    correct_answer = number1 *number2;
}
if(sign == "-")
{
    correct_answer = number1 -number2;
}
if(sign == "÷")
{
    correct_answer = number1 /number2;
}
answer = document.getElementById("input_check_box").value;
console.log("Answer " + answer);
if(answer == correct_answer)	
{
    var audio2 = new Audio('winning sound.wav');
    audio2.loop = false;
    audio2.play(); 
    if(answer_turn == "player1")
    {
        player1_score = player1_score +1;
        document.getElementById("player1_score").innerHTML = player1_score;
    }
    else 
    {
        player2_score = player2_score +1;
        document.getElementById("player2_score").innerHTML = player2_score;
    }
}
else
{
    var audio = new Audio('losing sound.wav');
    audio.loop = false;
    audio.play(); 

    const myHeading = document.querySelector("h5");
    myHeading.textContent = "THE ANSWER WAS :- " + correct_answer;
}
if(question_turn == "player1")
{
    question_turn = "player2"
    document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name ;
}
else 
{
    question_turn = "player1"
    document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name ;
}

if(answer_turn == "player1")
{
    answer_turn = "player2"
    document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name ;
}
else 
{
    answer_turn = "player1"
    document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name ;
}

document.getElementById("output").innerHTML = "";
}
