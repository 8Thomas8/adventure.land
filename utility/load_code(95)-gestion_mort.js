//Verif mort et respawn 15sec après
setInterval(function () {
  if (character.rip) {
    setTimeout(function () {
      respawn();
    }, 15000); //Respawn après 15 sec
    setTimeout(function () {
      smart_move(199, 1432);
    }, 15000); //bouge après 15 sec
  }
}, 1000 * 15); // Loops every 10 min.