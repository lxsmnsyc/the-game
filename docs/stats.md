# Stats

- Player is given 15 stat points initially.
- Player gains 3 stat points per level.

## Main Stats

Main Stats are the stats of the user that can be leveled up by choice.

### Strength

- Each point increases `Physical Damage` by 2
- Each point increases `Physical Defense` by 1

### Vitality

- Each point increases `Health` by 5
- Each point increases `Health Regen` by 0.1
- Each point increases `Recovery` by 1%

### Agility

- Each point increases `Movespeed` by 1 (capped at 500)
- Each point increases `Casting Time Reduction` by 1

### Intelligence

- Each point increases `Magical Damage` by 2
- Each point increases `Magical Defense` by 1

### Luck

- Each point increases `Critical Chance` by 1
- Each point increases `Debuff Resistance` by 1

> **NOTE**
> Percentage-scaling that is affected by stats follows the same formula:
> `80 * (1 - (2.718281828459 ** -(Stat / 60)))`

## Pseudo-Stats

Pseudo-Stats are stats whose values are mainly derived from Main Stats.

### Health

- Gains 5 `Health` per `Vitality`
- Starts with 100 `Health`

### Health Regen

- Gains 0.1 `Health Regen` per `Vitality`
- Only applied per second.
- Starts with 1 `Health Regen`

### Recovery

- Effectiveness of healing and `Health Regen`
- Gains 1 `Recovery` per `Vitality`
- Starts with 100% `Recovery`
- `Recovery` is a percentage-scaling pseudo stat.

### Physical Damage

- Gains 2 `Physical Damage` per `Strength`
- Starts with 10 `Physical Damage`

### Physical Defense

- Reduces incoming `Physical Damage`
- Gains 1 `Physical Defense` per `Strength`
- Starts with 0 `Physical Defense`
- `Physical Defense` is a percentage-scaling pseudo stat.

### Magical Damage

- Gains 2 `Magical Damage` per `Intelligence`
- Starts with 10 `Magical Damage`

### Magical Defense

- Reduces incoming `Magical Damage`
- Gains 1 `Magical Defense` per `Intelligence`
- Starts with 0 `Magical Defense`
- `Magical Defense` is a percentage-scaling pseudo stat.

### Movespeed

- Gains 1 `Movespeed` per `Agility` (capped undefined).
- Starts with 300 `Movespeed`
  
### Cooldown Reduction

- Decreases time between attacks.
- Starts with 0 `Cooldown Reduction`
- `Cooldown Reduction` is a percentage-scaling pseudo stat.

### Casting Time Reduction

- Reduces the time it takes for the attack to trigger.
- Gains 1 `Casting Time Reduction` per `Agility`
- Starts with 0 `Casting Time Reduction`
- `Casting Time Reduction` is a percentage-scaling pseudo stat.

### Debuff Resistance

- Reduces the duration of the received `Debuff`
- Gains 1 `Debuff Resistance` per `Luck`
- Starts with 0 `Debuff Resistance`
- `Debuff Resistance` is a percentage-scaling pseudo stat.

### Critical Chance

- Chance of dealing amplified `Physical Damage`
- Gains 1 `Critical Chance` per `Luck`
- Starts with 0 `Critical Chance`
- `Critical Chance` is a percentage-scaling pseudo stat.
  
### Critical Strike

- `Physical Damage` multiplier when `Critical Chance` occurs.
- Starts with 100% `Critical Strike`

### Area

- Improves the size of attacks and abilities
- Starts with 100% `Area`

### Cast Range

- Dictates how far a target has to be to initiate the attack.
- Starts with 100% `Cast Range`

### Duration

- Effectiveness of `Debuff`, `Weapon`, `Active Ability` and `Passive Ability` durations.
- Starts with 100% `Duration`

### Speed

- Improves projectile and rotation speed of certain attacks and abilities
- Starts with 100% `Speed`
