export function getWeaponRarityStatMultiplier(rarity) {
  return 1.0 * (1.5 ** (rarity - 1));
}

export function getEquipmentRarityStatMultiplier(rarity) {
  return 1.0 * (1.5 ** (rarity - 1));
}

export function getBossRaritySpawnOdds(rarity) {
  return 4 ** (rarity - 1);
}

export function getBossRarityStatMultiplier(rarity) {
  return 1.0 + (1.0 * (1.5 ** (rarity - 1)));
}

export function getBossWeaponDropOdds(bossRarity, weaponRarity, amount) {
  return 1 / ((0.64 / (4 ** (weaponRarity - bossRarity - 1))) / amount);
}