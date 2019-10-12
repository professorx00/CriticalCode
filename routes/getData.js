module.exports = function() {
  getArmor = function(id) {
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
  },
  getWeapon = function(id){
    return new Promise((resolve, reject)=>{
      db.weapon.findOne({where: {id:id}}).then((weapon)=>{
        weaponObject={
          id:weapon.id,
          weaponName:weapon.weaponName,
          dmgDice: weapon.dmgDice,
          numberOfDice: weapon.numberOfDice,
          dmgType:weapon.dmgType
        }
        resolve(weaponObject)
      }).catch((err)=>{reject(err)})
    }),
    getRace = function(id){
      return new Promise((resolve, reject)=>{
        db.race.findOne({where: {id:id}}).then((race)=>{
          raceObject={
            id:race.id,
            raceName:race.raceName,
            abilityOne: race.abilityOne,
            abilityTwo: race.abilityTwo,
            abilityModOne:race.abilityModOne,
            abilityModTwo: race.abilityModTwo,
            size: race.size,
            speed:race.speed,
            language: race.language,
            specialTraits:race.specialTraits
          }
          resolve(raceObject)
        }).catch((err)=>{reject(err)})
      }),
      getClasses = function(id){
        return new Promise((resolve, reject)=>{
          db.classes.findOne({where: {id:id}}).then((classes)=>{
            classesObject={
              id:classes.id,
              classesName:classes.classesName,
              hitdice: classes.hitdice,
              primaryStatID: classes.primaryStatID,
              primarySaveID:classes.primarySaveID,
              secondarySaveID: classes.secondarySaveID,
              primarySaveID: classes.primarySaveID,
              allowArmorType:classes.allowArmorType,
              allowWeaponsType: classes.allowWeaponsType,
              specialTraits:classes.specialTraits
            }
            resolve(classesObject)
          }).catch((err)=>{reject(err)})
        }),
    
};
