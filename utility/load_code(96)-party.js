lead_character = "Lokda";
list_characters = ["Tankda", "Healda", "Shopda"];

//Fonction de gestion des invitations
function on_party_invite(name) {
  accept_party_invite(name);
}

//Send invite
setTimeout(function () {
  if ((character.name === lead_character) || (selected_character !== "Shopda")) {
    list_characters.forEach(function (selected_character) {
      send_party_invite(selected_character);
    });
  }
}, 15000); //Après 20 secondes.

setTimeout(function () {
  //Accept invite
  if ((character.name !== lead_character) || (character.name !== "Shopda")) {
    on_party_invite(lead_character);
  }
}, 20000); //Après 20 secondes.