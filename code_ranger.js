//anti reduction de ressource si onglet non focus
performance_trick();

var attack_mode = true;
var set_tank = "Tankda";
var target_name = "crab";

//Connecter les autres perso
load_code(97);
//Gérer les groupes
load_code(96);
//Gestion rip/respawn
load_code(95);

//Auto attack les monstres
setInterval(function () {

  use_hp_or_mp();
  loot();

  if (!attack_mode || character.rip || is_moving(character)) return;

  var target = get_targeted_monster();

  if (!target) {
    //if (get_target_of(get_player(set_tank))) {
    // target = get_target_of(get_player(set_tank));
    //} else 
    {
      target = get_nearest_monster({
        min_xp: 100,
        max_att: 120,
        type: target_name
      });
    }

    if (target) change_target(target);
    else {
      set_message("No Monsters");
      return;
    }
  }

  if (!in_attack_range(target)) {
    // Walk to max distance / 2
    move(
      character.x + (target.x - character.x) / 2,
      character.y + (target.y - character.y) / 2
    );
  } else

  if (can_attack(target)) {
    set_message("Attacking");

    //Si supershot est dispo, attaque avec, sinon, faire l'auto attack
    if (can_use("supershot") && (character.mp >= 400) && (target.hp >= 300)) {
      use("supershot", target);
    } else {
      attack(target);
    }
  }

}, 1000 / 4); // Loops every 1/4 seconds.