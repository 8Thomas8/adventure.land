//anti reduction de ressource si onglet non focus
//performance_trick();

var attack_mode = true

//Autoaccept les invitations
load_code(99);

//Auto attack les monstres
setInterval(function () {

  use_hp_or_mp();
  loot();

  if (!attack_mode || character.rip || is_moving(character)) return;

  var target = get_targeted_monster();
  if (!target) {
    target = get_nearest_monster({
      min_xp: 100,
      max_att: 120
    });
    if (target) change_target(target);
    else {
      set_message("No Monsters");
      return;
    }
  }

  if (!in_attack_range(target)) {
    move(
      character.x + (target.x - character.x) / 2,
      character.y + (target.y - character.y) / 2
    );
    // Walk half the distance
  } else if (can_attack(target)) {
    set_message("Attacking");
	  
	 //Si supershot est dispo, attaque avec, sinon, faire l'auto attack
    if (can_use("supershot") && (character.mp >= 400)) {
      use("supershot", target);
    } else {
      attack(target);
    }
  }

}, 1000 / 4); // Loops every 1/4 seconds.
