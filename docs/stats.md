# Stats

- Player is given 15 stat points initially.
- Player gains 3 stat points per level.

## Main Stats

Main Stats are the stats of the user that can be leveled up by choice.

### Strength

- Each point increases `Physical Damage` by 2
- Each point increases `Armor` by 0.75% (capped at 95%)

### Vitality

- Each point increases `Health` by 5
- Each point increases `Health Regen` by 0.1
- Each point increases `Recovery` by 1%

### Agility

- Each point increases `Movespeed` by 1 (capped at 500)
- Each point increases `Cooldown Reduction` by 0.75% (capped at 95%)

### Intelligence

- Each point increases `Magical Damage` by 2
- Each point increases `Magical Armor` by 0.75% (capped at 95%)

### Luck

- Each point increases `Critical Chance` by 0.75% (capped at 100%)
- Each point increases `Status Resistance` by 0.75% (capped at 95%)

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
- Gains 1% `Recovery` per `Vitality`
- Starts with 100% `Recovery`

### Physical Damage

- Gains 2 `Physical Damage` per `Strength`

### Physical Armor

- Reduces incoming `Physical Damage`
- Gains 0.75% `Physical Armor` per `Strength`, capped at 95%.
- Starts with 0 `Physical Armor`

### Magical Damage

- Gains 2 `Magical Damage` per `Intelligence`

### Magical Armor

- Gains 0.75% `Magical Armor` per `Intelligence`, capped at 95%.
- Starts with 0 `Magical Armor`

### Movespeed

- Gains 1 `Movespeed` per `Agility` (capped undefined).
- Starts with 300 `Movespeed`
  
### Cooldown Reduction

- Decreases time between attacks.
- Gains 0.75% `Cooldown Reduction` per `Agility` (capped at 95%)
- Starts with 0% `Cooldown Reduction`

### Status Resistance

- Reduces the duration of the received `Debuff`.
- Gains 0.75% `Status Resistance` per `Luck` (capped at 95%)
- Starts with 0% `Status Resistance`

### Critical Chance

- Chance of dealing amplified `Physical Damage`.
- Gains 0.75% `Critical Chance` per `Luck` (capped at 100%)
- Starts with 0% `Critical Chance`
  
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

- Effectiveness of `Debuff`, `Weapon` and `Active Ability` durations.
- Starts with 100% `Duration`

### Speed

- Improves projectile and rotation speed of certain attacks and abilities
- Starts with 100% `Speed`
