# Boss

- `Boss` have fixed level and does not level up per minute (unlike the `Player`).
- `Boss` do not have `Equipment`.

## Stats

## Weapons

- `Boss` starts with 5 random `Weapons`, and gains a 5 `Weapon` level per `Floor` level.
- `Weapon` level points are applied randomly.

## Active Abilities

- `Boss` starts with 10 random `Active Ability`, and gains a 5 `Active Ability` level per `Floor` level.
- `Active Ability` level points are applied randomly.

## Passive Abilities

- `Boss` starts with 10 random `Passive Ability`, and gains a 5 `Active Ability` level per `Floor` level.
- `Passive Ability` level points are applied randomly.

## Property

- Has the `Boss` property
- `Boss` has either
  - one random `Supreme Offensive Property` and two random `Defensive Property`.
  - two random `Offensive Property` and one random `Supreme Defensive Property`.

## Drops

- When getting killed, the following scenario happens:
  - at 64% chance (16 of 25), a `Boss` can drop a `Weapon` or `Equipment` of `Common` quality
  - otherwise at 32% chance (8 of 25), a `Boss` can drop two random `Weapon` or `Equipment` of `Common` quality.
  - otherwise at 16% chance (4 of 25), a `Boss` can drop a random `Weapon` or `Equipment` of `Uncommon` quality.
  - otherwise at 8% chance (2 of 25), a `Boss` can drop two random `Weapon` or `Equipment` of `Uncommon` quality.
  - otherwise at 4% chance (1 of 25), a `Boss` can drop a random `Weapon` or `Equipment` of `Rare` quality.
  - otherwise at 2% chance (1 of 50), a `Boss` can drop two random `Weapon` or `Equipment` of `Rare` quality.
  - otherwise at 1% chance (1 of 100), a `Boss` can drop a random `Weapon` or `Equipment` of `Legendary` quality and a `Rune`.
  - otherwise at 0.5% chance (1 of 200), a `Boss` can drop two random `Weapon` or `Equipment` of `Legendary` quality and a `Rune`.
  - otherwise at 0.25% chance (1 of 400), a `Boss` can drop a random `Weapon` or `Equipment` of `Mythical` quality and two `Rune`.
  - otherwise at 0.125% chance (1 of 800), a `Boss` can drop two random `Weapon` or `Equipment` of `Mythical` quality and two `Rune`.
  - otherwise at 0.0625% chance (1 of 1600), a `Boss` can drop a random `Supreme Equipment` of `Mythical` quality, a `Weapon` of `Mythical` quality and two `Rune`.
- The chance table shares the same instance of odds.
