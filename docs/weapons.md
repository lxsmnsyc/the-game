# Weapon

- Each `Weapon` has a maximum level of 10.
- Once the `Player`, `Boss` or `Mini-boss` reached the `Weapon` level cap on all available `Weapon`, the level cap for all `Weapon` is increased by 10. This process repeats.
- Has two kinds: `Physical` and `Magical`

## Player

- `Player` can choose up to 2 `Weapon` at the start of the game. This cannot be changed throughout the entire gameplay.
- `Player` gains 1 `Weapon` level per `Player` level.

## Boss

- `Boss` are given 5 random `Weapon` and gains 5 `Weapon` level per `Floor` level.
- `Weapon` level points are applied randomly.

## Miniboss

- `Miniboss` are given 1 random `Weapon` and gains 5 `Weapon` level per `Floor` level.
- `Weapon` level points are applied randomly.

## Forging

- Outside of gameplay, a player can increase the `Weapon` quality by `Forging`.
- `Weapon` has a max `Quality` of 10.
- `Forging` has chance of success of increasing quality. Starts at 100%, it decreases by 10% per successive `Forging`, otherwise it destroys the weapon.