//Auto accept les invitations de groupe des personnages dans my_characters

var my_characters = ["Lokda", "Tankda", "Healda"]



setInterval(function () {

    //Si le perso n'est pas dans un groupe

    if (!character.party) {

        my_characters.forEach(function (selected_character) {

         accept_party_invite(selected_character);

        });

    }

}, 15000); // Loops every 15 seconds

