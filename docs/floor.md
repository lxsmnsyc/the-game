# Floor

## Description

- A `Floor` is where the game takes place.

## Mechanics

### Playing

- `Player` starts at Floor 1.
- A `Floor` game-time lasts until the `Boss` of the `Floor` level is killed.
- Once a `Floor` ends, the next `Floor` level is unlocked and the player is moved automatically.
- When the `Player` is moved to the next `Floor` level, game still continues.

### Waves

- Enemies spawn in waves.
- A new wave can only spawn once the previous wave has been cleared.
- Once a wave is cleared, the `Player` gains a level.
- A `Floor` has 10 waves.
- Wave `5` spawns the `Miniboss`
- Wave `10` spawns the `Boss`.
- Wave enemy count is defined as `5 * (((Floor Level - 1) * 10) + Floor Wave Count)`
  - At Floor 10, the first wave (Wave 91) spawns with `455` enemies.
  - At Floor 50, the first wave (Wave 491) spawns with `2455` enemies.
  - At Floor 100 the first wave (Wave 991), spawns with `4955` enemies.
- Despite the amount, the number of enemies that can spawn at a time is capped at `200`.
- Once an enemy dies, and there's still remaining enemies that needs to be spawned, one enemy spawns outside of the player's screen area. Repeats until the cap is reached or there's no more enemy to spawn.
- `Boss` and `Miniboss` is excluded from the cap.

### Resuming

- An unlocked `Floor` level can be resumed by the `Player` when starting the game.
- When starting with an unlocked `Floor` level, levels are adjusted automatically for both the `Player`, `Miniboss` and `Boss`.
- When starting a `Floor`, the `Player` must start the game manually first before the game-time starts ticking.
- Resuming a `Floor` level means starting on its first `Wave`
