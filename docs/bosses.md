# Boss

- `Boss` have fixed level and does not level up per minute (unlike the `Player`).
- `Boss` do not have `Equipment`.

## Stats

- `Boss` enemies are given 15 stat points and 30 stat points per `Floor` level.
- All points are applied randomly.

## Leveling

- `Boss` starts with 5 random `Weapons`.
- `Boss` starts with 10 random `Active Ability`.
- `Boss` starts with 10 random `Passive Ability`.
- `Boss` gains 10 level points per `Floor` level.
- Each level point is applied randomly.

## Property

- Has the `Boss` property
- `Boss` enemies have 4 random `Offensive Property` and 4 random `Defensive` Property`
- `Boss` gains 4 `Property` level per `Floor` level, and is distributed randomly.

## Drops

- When getting killed, the following scenario happens:
  - at 64% chance (16 of 25)
    - 1 random `Weapon` or `Equipment` of `Common` quality.
    - 1 random `Rune` of `Offensive` or `Defensive` property of `Common` quality.
  - otherwise at 32% chance (8 of 25)
    - 2 random `Weapon` or `Equipment` of `Common` quality.
    - 1 random `Rune` of `Offensive` or `Defensive` property of `Common` quality.
  - otherwise at 16% chance (4 of 25)
    - 1 random `Weapon` or `Equipment` of `Uncommon` quality.
    - 1 random `Rune` of `Offensive` or `Defensive` property of `Uncommon` quality.
  - otherwise at 8% chance (2 of 25)
    - 2 random `Weapon` or `Equipment` of `Uncommon` quality.
    - 1 random `Rune` of `Offensive` or `Defensive` property of `Uncommon` quality.
  - otherwise at 4% chance (1 of 25)
    - 1 random `Weapon` or `Equipment` of `Rare` quality.
    - 1 random `Rune` of `Offensive` or `Defensive` property of `Rare` quality.
  - otherwise at 2% chance (1 of 50)
    - 2 random `Weapon` or `Equipment` of `Rare` quality.
    - 1 random `Rune` of `Offensive` or `Defensive` property of `Rare` quality.
  - otherwise at 1% chance (1 of 100)
    - 1 random `Weapon` or `Equipment` of `Legendary` quality.
    - 1 random `Rune` of `Offensive` or `Defensive` property of `Legendary` quality.
  - otherwise at 0.5% chance (1 of 200)
    - 2 random `Weapon` or `Equipment` of `Legendary` quality.
    - 1 random `Rune` of `Offensive` or `Defensive` property of `Legendary` quality.
  - otherwise at 0.25% chance (1 of 400)
    - 1 random `Weapon` or `Equipment` of `Mythical` quality.
    - 1 random `Rune` of `Offensive` or `Defensive` property of `Mythical` quality.
  - otherwise at 0.125% chance (1 of 800)
    - 2 random `Weapon` or `Equipment` of `Mythical` quality.
    - 1 random `Rune` of `Offensive` or `Defensive` property of `Mythical` quality.
  - otherwise at 0.0625% chance (1 of 1600)
    - 1 random `Weapon` or `Equipment` of `Epic` quality.
    - 1 random `Rune` of `Offensive` or `Defensive` property of `Epic` quality.
  - otherwise at 0.03125% chance (1 of 3200)
    - 2 random `Weapon` or `Equipment` of `Epic` quality.
    - 1 random `Rune` of `Offensive` or `Defensive` property of `Epic` quality.
  - otherwise at 0.015625% chance (1 of 6400)
    - 1 random `Weapon` or `Equipment` of `Primordial` quality.
    - 1 random `Rune` of `Offensive` or `Defensive` property of `Primordial` quality.
- The chance table shares the same instance of odds.
