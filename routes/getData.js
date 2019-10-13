const db = require("../models");
const helper = {};

helper.getArmor = function(id) {
  return new Promise((resolve, reject) => {
    db.armor
      .findOne({ where: { id: id } })
      .then(armor => {
        armorObject = {
          id: armor.id,
          armorName: armor.armorName,
          AC: armor.AC,
          armorType: armor.armorType,
          armorName: armor.armorName
        };
        resolve(armorObject);
      })
      .catch(err => {
        reject(err);
      });
  });
};
helper.getWeapon = function(id) {
  return new Promise((resolve, reject) => {
    db.weapon
      .findOne({ where: { id: id } })
      .then(weapon => {
        weaponObject = {
          id: weapon.id,
          weaponName: weapon.weaponName,
          dmgDice: weapon.dmgDice,
          numberOfDice: weapon.numberOfDice,
          dmgType: weapon.dmgType
        };
        resolve(weaponObject);
      })
      .catch(err => {
        reject(err);
      });
  });
};
helper.getRace = function(id) {
  return new Promise((resolve, reject) => {
    db.race
      .findOne({ where: { id: id } })
      .then(race => {
        raceObject = {
          id: race.id,
          raceName: race.raceName,
          abilityOne: race.abilityOne,
          abilityTwo: race.abilityTwo,
          abilityModOne: race.abilityModOne,
          abilityModTwo: race.abilityModTwo,
          size: race.size,
          speed: race.speed,
          language: race.language,
          specialTraits: race.specialTraits
        };
        resolve(raceObject);
      })
      .catch(err => {
        reject(err);
      });
  });
};
helper.getClasses = function(id) {
  db.classes
    .findOne({ where: { id: id } })
    .then(classes => {
      classesObject = {
        id: classes.id,
        classesName: classes.className,
        hitdice: classes.hitdice,
        profBonus: classes.profBonus,
        primaryStatID: classes.primaryStatID,
        savingThrowProf1: classes.savingThrowProf1,
        savingThrowProf2: classes.savingThrowProf2,
        allowArmorType: classes.allowArmorType,
        allowWeaponsType: classes.allowWeaponsType,
        startingWealth: classes.startingWealth
      };
    })
    .then(classesName => {
      return classesName;
    });
};

module.exports = helper;
