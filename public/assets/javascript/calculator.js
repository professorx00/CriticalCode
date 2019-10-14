abiltyMod = function(num) {
  if (num === 1) {
    return -5;
  } else if (num === 2 || num === 3) {
    return -4;
  } else if (num === 4 || num === 5) {
    return -3;
  } else if (num === 6 || num === 7) {
    return -2;
  } else if (num === 8 || num === 9) {
    return -1;
  } else if (num === 10 || num === 11) {
    return 0;
  } else if (num === 12 || num === 13) {
    return 1;
  } else if (num === 14 || num === 15) {
    return 2;
  } else if (num === 16 || num === 17) {
    return 3;
  } else if (num === 18 || num === 19) {
    return 4;
  } else if (num === 20 || num === 21) {
    return 5;
  } else if (num === 22 || num === 23) {
    return 6;
  } else if (num === 24 || num === 25) {
    return 7;
  } else if (num === 26 || num === 27) {
    return 8;
  } else if (num === 28 || num === 29) {
    return 9;
  } else if (num === 30) {
    return 10;
  } else {
    return 666;
  }
};
calculateStatBlock = function(str, dex, con, int, wis, chr) {
  let strength = abiltyMod(str);
  let dexterity = abilityMod(dex);
  let consitution = abiltyMod(con);
  let intelligence = abilityMod(int);
  let wisdom = abilityMod(wis);
  let charisma = abilityMod(chr);

  return [strength, dexterity, consitution, intelligence, wisdom, charisma];
};
