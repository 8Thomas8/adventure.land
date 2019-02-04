list_characters = ["Shopda", "Healda", "Tankda"];

//Send connexion
list_characters.forEach(function (selected_character) {
  if (selected_character === "Shopda") {
    start_character(selected_character, null);
  }
  else {
    start_character(selected_character, (list_characters.indexOf(selected_character)) + 1);
  }
});