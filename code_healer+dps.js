//anti reduction de ressource si onglet non focus
//performance_trick();

var attack_mode = true
var heal_mode = true
var heal_targets = ["Lokda", "Tankda", "Healda"]
var set_tank = "Tankda"
var target_name = "crab"

//Gestion des groupes
load_code(96);
//Gestion rip/respawn
load_code(95);

//Autoattack les monstres et auto soigne les heal_targets
setInterval(function () {

  use_hp_or_mp();
  loot();

  if (attack_mode == true) {
    if (character.rip || is_moving(character)) return;

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
      move(
        character.x + (target.x - character.x) / 2,
        character.y + (target.y - character.y) / 2
      );
      // Walk half the distance
    } else if (can_attack(target)) {
      set_message("Attacking");
      attack(target);
    }
  }

  if (heal_mode == true) {
    if (character.rip || is_moving(character)) return;
    heal_targets.forEach(function (selected_target) {
      let target = get_player(selected_target);

      if (!target || target == null) {
        // game_log("Pas de cible pour " + selected_target);
        return;
      }

      if (target.hp > (target.max_hp * 0.9)) {
        //game_log(target.name + " a assez de vie ! " + target.hp + "hp/" + target.max_hp + "hp");
        return;
      }

      if (!in_attack_range(target)) {
        move(
          character.x + (target.x - character.x) / 2,
          character.y + (target.y - character.y) / 2
        );
        // Walk half the distance
      } else if (can_heal(target)) {
        game_log("Soin de " + target.name + " !");
        heal(target);
      }

    });
  }

}, 1000 / 4); // Loops every 1/4 seconds.