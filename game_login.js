function login(){
    player = document.getElementById("player1").value;
    playera = document.getElementById("player2").value;
    localStorage.setItem("player1user", player);
    localStorage.setItem("player2user", playera);
    window.location = "game.html";
}