//Verif mort et respawn 15sec après
setInterval(function () {

  if (character.rip) {
    setTimeout(function () {
      respawn();
    }, 15000); //Respawn après 15 sec
  }

}, 166000); // Loops every 10 min.