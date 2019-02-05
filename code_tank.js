//anti reduction de ressource si onglet non focus
//performance_trick();

var attack_mode = true;
var target_name = "crab";

//Gestion des groupes
load_code(96);

//Auto attack les monstres à portée
setInterval(function () {

  use_hp_or_mp();
  loot();

  if (!attack_mode || character.rip || is_moving(character)) return;

  var target = get_targeted_monster();
  if (!target) {
    target = get_nearest_monster({
      min_xp: 100,
      max_att: 120,
      type: target_name
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
    if (get_target_of(target)) {
      game_log(get_target_of(target).name);
    }
    set_message("Attacking");
    //Si taunt est dispo, attaque avec, sinon, faire l'auto attack
    if (can_use("taunt") && (character.mp >= 40) && get_target_of(target) && (get_target_of(target).name !== character.name)) {
      use("taunt", target);
      game_log("Doing TAUNT");
    } else {
      game_log("Doing Auto-Attack");
      attack(target);
    }
  }

}, 1000 / 4); // Loops every 1/4 seconds.