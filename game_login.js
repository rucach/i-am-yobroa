// Create function addUser()
function addUser() {
  // Get value of user by id player1_name_input and player2_name_input
  player1_name = document.getElementById("player1_name_input").value;
  player2_name = document.getElementById("player2_name_input").value;
  // Store these values locally
  localStorage.setItem(player1_name, "p1");
  localStorage.setItem(player2_name, "p2");
  //Assign "game_page.html" to window.location
  window.location = "index.html";
}

