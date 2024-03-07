# Debuffs

## Stacking

### Poisoned

- Deals `Physical Damage` based on the amount of stacks per second and consumes 25% of the stack with a minimum of 10 stacks.
- The damage dealt cannot trigger `Critical Chance`.
- The damage dealt is non-lethal.

### Bleeding

- Deals `Physical Damage` based on the amount of stacks per second and consumes 25% of the stack with a minimum of 10 stacks.
- The damage dealt cannot trigger `Critical Chance`.
- The damage dealt is lethal.

### Burning

- Deals `Magical Damage` based on the amount of stacks per second and consumes 25% of the stack with a minimum of 10 stacks.
- The damage dealt is non-lethal.

### Doomed

- Deals `Magical Damage` based on the amount of stacks per second and consumes 25% of the stack with a minimum of 10 stacks.
- The damage dealt is lethal.

### Injured

- Deals `Physical Damage` based on the amount of stacks for the next instance of `Physical Damage` received and consumes 25% of the stack with a minimum of 10 stacks.

### Cursed

- Deals `Magical Damage` based on the amount of stacks for the next instance of `Magical Damage` received and consumes 25% of the stack with a minimum of 10 stacks.

## Non-stacking

### Stunned

- Unit is unable to move, attack or cast abilities while affected by `Stun`.
- Duration lasts for `(1 * Debuff Level * Duration) * (1 - (Debuff Resistance / 100))` seconds.

## Ensnared

- Disables movement.
- Duration lasts for `(1 * Debuff Level * Duration) * (1 - (Debuff Resistance / 100))` seconds.

## Disarmed

- Disables `Physical Weapon`
- Duration lasts for `(1 * Debuff Level * Duration) * (1 - (Debuff Resistance / 100))` seconds.

## Silenced

- Disables `Magical Weapon`.
- Duration lasts for `(1 * Debuff Level * Duration) * (1 - (Debuff Resistance / 100))` seconds.

## Plagued

- Disables `Health Regen`
- Duration lasts for `(3 * Debuff Level * Duration) * (1 - (Debuff Resistance / 100))` seconds.

## Broken

- Reduces `Physical Defense` by `5% * Debuff Level`
- Duration lasts for `(3 * Debuff Level * Duration) * (1 - (Debuff Resistance / 100))` seconds.

## Jinxed

- Reduces `Magical Defense` by `5% * Debuff Level`
- Duration lasts for `(3 * Debuff Level * Duration) * (1 - (Debuff Resistance / 100))` seconds.

## Weakened

- Reduces `Physical Damage` by `5% * Debuff Level`
- Duration lasts for `(3 * Debuff Level * Duration) * (1 - (Debuff Resistance / 100))` seconds.

## Nullified

- Reduces `Magical Damage` by `5% * Debuff Level`
- Duration lasts for `(3 * Debuff Level * Duration) * (1 - (Debuff Resistance / 100))` seconds.

## Frozen

- Reduces Cooldown Reduction by `5% * Debuff Level`
- Duration lasts for `(3 * Debuff Level * Duration) * (1 - (Debuff Resistance / 100))` seconds.

## Crippled

- Reduces Movespeed by `5% * Debuff Level`
- Duration lasts for `(3 * Debuff Level * Duration) * (1 - (Debuff Resistance / 100))` seconds.

## Charmed

- Forced movement towards the source, cannot attack.
- Duration lasts for `(3 * Debuff Level * Duration) * (1 - (Debuff Resistance / 100))` seconds.

## Taunted

- Forced movement towards the source, can attack.
- Duration lasts for `(3 * Debuff Level * Duration) * (1 - (Debuff Resistance / 100))` seconds.

## Feared

- Forced movement away from the source, cannot attack.
- Duration lasts for `(3 * Debuff Level * Duration) * (1 - (Debuff Resistance / 100))` seconds.

## Confused

- Forced movement in random direction, cannot attack.
- Duration lasts for `(3 * Debuff Level * Duration) * (1 - (Debuff Resistance / 100))` seconds.
