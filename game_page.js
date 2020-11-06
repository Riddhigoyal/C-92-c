player1=localStorage.getItem("Player1In");
player2=localStorage.getItem("Player2In");

Player1Score=0;
player2Score=0;

document.getElementById("Player1Name").innerHTML=player1+":";
document.getElementById("Player2Name").innerHTML=player2+":";

document.getElementById("Player1Score").innerHTML=Player1Score;
document.getElementById("Player2Score").innerHTML=player2Score;

document.getElementById("Player_question").innerHTML="Question Turn-"+player1;
document.getElementById("Player_answer").innerHTML="Answer Turn-"+player2;

function send(){
    getWord=document.getElementById("word").value;
    word=getWord.toLowerCase();
    console.log (word);

    charAt1=word.charAt(1);
    console.log (charAt1);

    mid=Math.floor(word.length/2);
    charAt2=word.charAt(mid);
    console.log (charAt2);

    end=word.length-1;
    charAt3=word.charAt(end);
    console.log (charAt3);

    r_charAt1=word.replace(charAt1,"_");
    r_charAt2=r_charAt1.replace(charAt2,"_");
    r_charAt3=r_charAt2.replace(charAt3,"_");
    console.log (r_charAt3);

    questionWord="<h4 id='word_display'>Q. "+r_charAt3+"</h4>";
    inputbox="<br>Ans:<input type='text' id='inputCheckBox'> ";
    checkbutton="<br><br><button class='btn btn-info' onclick='check()'>check</button>";
    row=questionWord+inputbox+checkbutton;
    
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";
}

Question_turn="player1";
Answer_turn="player2";

function check(){
    get_ans=document.getElementById("inputCheckBox").value;
    answer=get_ans.toLowerCase();
    console.log ("answer in lower case "+answer);

    if(answer==word){
        if(Answer_turn=="player2"){
            player2Score=player2Score+1;
            document.getElementById("Player2Score").innerHTML=player2Score;
        }
        else{
            Player1Score=Player1Score+1;
            document.getElementById("Player1Score").innerHTML=Player1Score
        }
    }
    if(Question_turn=="player1"){
        Question_turn="player2";
        document.getElementById("Player_question").innerHTML="Question Turn- "+player2;
    }
    else{
        Question_turn="player1";
        document.getElementById("Player_question").innerHTML="Question Turn- "+player1;
    }

    if(Answer_turn=="player1"){
        Answer_turn="player2";
        document.getElementById("Player_answer").innerHTML="Answer Turn- "+player2;
    }
    else{
        Answer_turn="player1";
        document.getElementById("Player_answer").innerHTML="Answer Turn- "+player1;
    }
    document.getElementById("output").innerHTML="";
}