
function profile()
{
  window.location = "Profile.html"
}
function home()
{
  window.location = "index.html"
} 
player1 = document.getElementById('player1_name').value
player2 = document.getElementById('player2_name').value
function addUser()
{
  player1_name = document.getElementById("player1_name_input").value;
  player2_name = document.getElementById("player2_name_input").value;
  localStorage.setItem("player1_name", player1_name);
  localStorage.setItem("player2_name", player2_name);
  window.location = "Game.html"
}