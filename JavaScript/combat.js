function combat(health, damage) {
    return ((health-damage)>0) ? health - damage : 0
  }

  // Refactored

  function combat(health, damage) {
    return health < damage ? 0 : health - damage
  }

  // Refactored again

  const combat = (health, damage) => Math.max(0, health - damage);
