lead_character = "Lokda";
list_characters = ["Tankda", "Healda"];


//Fonction de gestion des invitations
function on_party_invite(name) {
  accept_party_invite(name);
}

//Fonction de check si un perso est en groupe
function is_on_party(name) {
  let is_on_party = parent.get_player(name).party;
  return is_on_party;
}

//Send invite at start
setTimeout(function () {
  if (character.name === lead_character) {
    list_characters.forEach(function (selected_character) {
      send_party_invite(selected_character);
    });
  }
}, 1000 * 15); //Après 20 secondes.

//Check if my characters are in party, & invite
setInterval(function () {
  if (character.name === lead_character) {
    list_characters.forEach(function (selected_character) {
      if (!is_on_party(selected_character)) {
        send_party_invite(selected_character);
      }
    });
  }
}, 1000 * 300); //Après 5 minutes.

//Accept invite
if (character.name !== lead_character) {
  on_party_invite(lead_character);
}