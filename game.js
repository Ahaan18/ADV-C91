name1 = localStorage.getItem("player1user");
name2 = localStorage.getItem("player2user");
player1score= 0;
player2score = 0;
function load(){
    document.getElementById("player1_name").innerHTML = name1+": ";
    document.getElementById("player2_name").innerHTML = name2+": ";
    document.getElementById("plyr1score").innerHTML = player1score;
    document.getElementById("plyr2score").innerHTML = player2score;
    document.getElementById("plyrqs").innerHTML = "Question turn - "+name1;
    document.getElementById("plyrans").innerHTML = "Answer turn - "+name2;
}
function send(){
    gameword = document.getElementById("word").value;
    gameword1 = gameword.toLowerCase();
    console.log("Word in lowercase: "+gameword1);
    charat1 = gameword1.charAt(1);
    console.log("First dash: "+charat1);
    length1 = Math.floor(gameword1.length/2);
    charat2 = gameword1.charAt(length1);
    console.log("Second dash: "+charat2);
    minus1 = gameword1.length - 1;
    charat3 = gameword1.charAt(minus1);
    console.log("Third dash: "+charat3);
    finalcharat = gameword1.replace(charat1,"_");
    finalcharat1 = finalcharat.replace(charat2,"_");
    finalcharat2 = finalcharat1.replace(charat3,"_");
    console.log("Final puzzle: "+finalcharat2);
    h4code = "<h4 id='word_display'> Q. "+finalcharat2+"</h4>";
    inputcode = "<br> Ans: <input id='input123' type='text'>";
    buttoncode = "<br><br><button class='btn btn-info' onclick='check()'>Click to check!</button>";
    allcode = h4code+inputcode+buttoncode;
    document.getElementById("output").innerHTML = allcode
    document.getElementById("word").value = "";
}
qsturn = "Player1"
ansturn = "Player2"
function check(){
    inputdata = document.getElementById("input123").value;
    datalowercase = inputdata.toLowerCase();
    console.log(datalowercase);
    if(gameword1 == datalowercase){
        if(ansturn == "Player1"){
            player1score = player1score + 1;
            document.getElementById("plyr1score").innerHTML = player1score;
        }
        else{
            player2score = player2score + 1;
            document.getElementById("plyr2score").innerHTML = player2score;
        }
    }
    if(gameword1 != datalowercase){
window.alert("INCORRECT ANSWER!");
    }
    if(qsturn == "Player1"){
        qsturn == "Player2";
        document.getElementById("plyrqs").innerHTML = "Question turn - "+name2;
    }
    else{
        qsturn == "Player1";
        document.getElementById("plyrqs").innerHTML = "Question turn - "+name1;  
    }
    if(ansturn == "Player1"){
        ansturn == "Player2";
        document.getElementById("plyrans").innerHTML = "Answer turn - "+name2;
    }
    else{
        ansturn == "Player1";
        document.getElementById("plyrans").innerHTML = "Answer turn - "+name1;  
    }
    document.getElementById("output").innerHTML = "";
}