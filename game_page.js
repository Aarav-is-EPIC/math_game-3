player1_name = localStorage.getItem("player1key");
player2_name = localStorage.getItem("player2key");

player1_score = 0;
player2_score = 0;

document.getElementById("player1name").innerHTML = player1_name + ": ";
document.getElementById("player2name").innerHTML = player2_name + ": ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("playerquestion").innerHTML = "question turn - " + player1_name;
document.getElementById("playeranswer").innerHTML = " answer turn - " + player2_name;

function send(){
    get_word = document.getElementById("word").value;

    low_word = get_word.toLowerCase();

    console.log("word lowercased is = " + low_word);
}