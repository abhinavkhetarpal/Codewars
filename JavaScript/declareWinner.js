/* Instructions

Create a function that returns the name of the winner in a fight between two fighters.

Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.

Your function also receives a third argument, a string, with the name of the fighter that attacks first.

Example:
  declare_winner(Fighter("Lew", 10, 2), Fighter("Harry", 5, 4), "Lew") => "Lew"
  
  Lew attacks Harry; Harry now has 3 health.
  Harry attacks Lew; Lew now has 6 health.
  Lew attacks Harry; Harry now has 1 health.
  Harry attacks Lew; Lew now has 2 health.
  Lew attacks Harry: Harry now has -1 health and is dead. Lew wins.
function Fighter(name, health, damagePerAttack) {
        this.name = name;
        this.health = health;
        this.damagePerAttack = damagePerAttack;
        this.toString = function() { return this.name; }
}
*/


function declareWinner(fighter1, fighter2, firstAttacker) {
    let turn = fighter1.name == firstAttacker? 1 : 2
    
   while (fighter1.health > 0 && fighter2.health > 0){
        while (turn == 1){
            fighter2.health -= fighter1.damagePerAttack
            if (fighter2.health <= 0) return fighter1.name
            turn = 2
        }
        while (turn == 2){
            fighter1.health -= fighter2.damagePerAttack
            if (fighter1.health <= 0) return fighter2.name
            turn = 1
        }
   }
}

// Refactored

function declareWinner(fighter1,fighter2,firstAttacker){
    const f1Survivability = Math.ceil(fighter1.health/fighter2.damagePerAttack) // Math.ceil() to round up as each attacker takes a turn to attack, (e.g. 2.5 -> 3 as it will take 3 turns to kill this player [there's no such thing as 2.5 turns])
    const f2Survivability = Math.ceil(fighter2.health/fighter1.damagePerAttack)

    if (f1Survivability > f2Survivability){
        return fighter1.name
    }
    else if (f2Survivability > f1Survivability){
        return fighter2.name
    }
    else return firstAttacker // if their survivability is the same, the first attacker wins as they will strike first and land the killing blow
}