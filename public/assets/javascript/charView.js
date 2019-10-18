/* eslint-disable prettier/prettier */
// let helper = require("../../../routes/calculator");
$(document).ready(function () {
  abiltyMod = function (num) {
    if (num === 1 || num === 0) {
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
  calculateStatBlock = function (str, dex, con, int, wis, chr) {
    let strength = abiltyMod(str);
    let dexterity = abiltyMod(dex);
    let consitution = abiltyMod(con);
    let intelligence = abiltyMod(int);
    let wisdom = abiltyMod(wis);
    let charisma = abiltyMod(chr);
    return [strength, dexterity, consitution, intelligence, wisdom, charisma];
  };

  const addArmor = function (armor) {
    let armorSpan = $("<span>").attr("id", "armorSpan");
    armor.forEach(element => {
      armorSpan.append(element);
      armorSpan.append(", ");
    });
    $("#armorPro").append(armorSpan);
  };
  const addWeapon = function (weapon) {
    let weaponSpan = $("<span>").attr("id", "weaponSpan");
    weapon.forEach(element => {
      weaponSpan.append(element);
      weaponSpan.append(", ");
    });
    $("#weaponPro").append(weaponSpan);
  };
  const addLanguages = function (lang) {
    console.log("length of lang " + lang.length);
    if (lang) {
      for (let i = 0; i < lang.length; i++) {
        if (i < lang.length - 1) {
          console.log(lang[i]);
          $("#language").text(lang[i] + ",");
        }
        else {
          $("#language").text(lang[i]);
        }
      }
    }
    else {
      $("#language").append("None");
    }
  };
  const addEquipment = function (equip) {
    console.log(equip);
    if (equip) {
      for (let i = 0; i < equip.length; i++) {
        if (i < equip.length - 1) {
          $("#equipment").text(equip[i] + ",");
        }
        else {
          $("#equipment").text(equip[i]);
        }
      }
    }
    else {
      $("#equipment").append("None");
    }
  };
  const addSpells = function (spells) {
    console.log(spells);
    if (spells) {
      for (let i = 0; i < spells.length; i++) {
        if (i < spells.length - 1) {
          $("#spells").append(spells[i]).append(",");
        }
        else {
          $("#spells").append(spells[i]);
        }
      }
    }
    else {
      $("#spells").append("None");
    }
  };
  const addSkills = function (skills, character) {
    skills.forEach(element => {
      $(`#${element}`).text(character[element]).addClass("sm-low-div");
      $(`#${element}Check`).prop("checked", true).prop("disabled", false);
      $(`#${element}Title`).addClass("sm-low-div");
    });
  };
  const addExp = function (exp) {
    $("#experience").text(exp);
    exp = parseInt(exp);
    console.log(exp);
    switch (true) {
    case (exp < 300):
      $("#level").text(1);
      $("#proficiencyBonus").text("2");
      break;
    case (exp < 900):
      $("#level").text(2);
      $("#proficiencyBonus").text("2");
      break;
    case (exp < 2700):
      $("#level").text(3);
      $("#proficiencyBonus").text("2");
      break;
    case (exp < 6500):
      $("#level").text(4);
      $("#proficiencyBonus").text("2");
      break;
    case (exp < 14000):
      $("#level").text(5);
      $("#proficiencyBonus").text("3");
      break;
    case (exp < 23000):
      $("#level").text(6);
      $("#proficiencyBonus").text("3");
      break;
    case (exp < 34000):
      $("#level").text(7);
      $("#proficiencyBonus").text("3");
      break;
    case (exp < 48000):
      $("#level").text(8);
      $("#proficiencyBonus").text("3");
      break;
    case (exp < 64000):
      $("#level").text(9);
      $("#proficiencyBonus").text("4");
      break;
    case (exp < 85000):
      $("#level").text(10);
      $("#proficiencyBonus").text("4");
      break;
    case (exp < 100000):
      $("#level").text(11);
      $("#proficiencyBonus").text("4");
      break;
    case (exp < 120000):
      $("#level").text(12);
      $("#proficiencyBonus").text("4");
      break;
    case (exp < 140000):
      $("#level").text(13);
      $("#proficiencyBonus").text("5");
      break;
    case (exp < 165000):
      $("#level").text(14);
      $("#proficiencyBonus").text("5");
      break;
    case (exp < 195000):
      $("#level").text(15);
      $("#proficiencyBonus").text("5");
      break;
    case (exp < 225000):
      $("#level").text(16);
      $("#proficiencyBonus").text("5");
      break;
    case (exp < 265000):
      $("#level").text(17);
      $("#proficiencyBonus").text("6");
      break;
    case (exp < 305000):
      $("#level").text(18);
      $("#proficiencyBonus").text("6");
      break;
    case (exp < 355000):
      $("#level").text(19);
      $("#proficiencyBonus").text("6");
      break;
    default:
      $("#level").text(20);
      $("#proficiencyBonus").text("6");
      break;
    }
  };


  const strength = $("#strength");
  const dexterity = $("#dexterity");
  const constitution = $("#constitution");
  const intelligence = $("#intelligence");
  const wisdom = $("#wisdom");
  const charisma = $("#charisma");
  const charClass = $("#className");
  // const background = $("#back");
  const player = $("#player");
  const charName = $("#characterName");
  // const faction = $("#faction");
  const race = $("#race");
  // const alignment = $("#alignment");
  // const experience = $("#experience");
  // const dci = $("#dci");
  const proficiencyBonus = $("#proficiencyBonus");
  const armor = $("#armor");
  const initiative = $("#initiative");
  const speed = $("#speed");
  const hitPoints = $("#hitPoints");
  const hitDice = $("#hitDice");
  const characterInfo = $("#characterInfo");

  const user = characterInfo.attr("data-user");
  const char = characterInfo.attr("data-char");
  console.log(user, char);
  $.ajax(`/api/user/${user}/${char}`).then(data => {
    let character = data[0];
    console.log(character);
    $("#profilePic").attr("src",character.imgURL);
    // eslint-disable-next-line prettier/prettier
    let abilityMods = calculateStatBlock(character.str, character.dex, character.con, character.int, character.wis, character.char);
    strength.append(character.str);
    dexterity.append(character.dex);
    constitution.append(character.con);
    intelligence.append(character.int);
    wisdom.append(character.wis);
    charisma.append(character.char);
    $("#strAblMod").append(abilityMods[0]);
    $("#dexAblMod").append(abilityMods[1]);
    $("#conAblMod").append(abilityMods[2]);
    $("#intAblMod").append(abilityMods[3]);
    $("#wisAblMod").append(abilityMods[4]);
    $("#charAblMod").append(abilityMods[5]);
    console.log(character.class.className);
    charClass.append(character.class.className);
    player.append(character.user.name);
    charName.append(character.characterName);
    proficiencyBonus.append(character.class.profBonus);
    //assigns the proficence
    for (let x = 0; x < 6; x++) {
      switch (x) {
      case 0:
        if ("str" === character.class.savingThrowProf1) {
          $("#StrengthSavThrow").prepend(character.class.profBonus);
          $("#strSavThrowPro").prop("checked", true);
        }
        break;
      case 1:
        if ("dex" === character.class.savingThrowProf1) {
          $("#DexeritySavThrow").prepend(character.class.profBonus);
          $("#dexSavThrowPro").prop("checked", true);
        }
        break;
      case 2:
        if ("con" === character.class.savingThrowProf1) {
          $("#ConstitutionSavThrow").prepend(character.class.profBonus);
          $("#conSavThrowPro").prop("checked", true);
        }
        break;
      case 3:
        if ("int" === character.class.savingThrowProf1) {
          $("#IntelligenceSavThrow").prepend(character.class.profBonus);
          $("#intSavThrowPro").prop("checked", true);
        }
        break;
      case 4:
        if ("wis" === character.class.savingThrowProf1) {
          $("#WisdomSavThrow").prepend(character.class.profBonus);
          $("#wisSavThrowPro").prop("checked", true);
        }
        break;
      case 5:
        if ("char" === character.class.savingThrowProf1) {
          $("#CharismaSavThrow").prepend(character.class.profBonus);
          $("#charSavThrowPro").prop("checked", true);
        }
        break;
      default:
        console.log(error);
      }
    }

    for (let x = 0; x < 6; x++) {
      switch (x) {
      case 0:
        if ("str" === character.class.savingThrowProf2) {
          $("#StrengthSavThrow").prepend(character.class.profBonus);
          $("#strSavThrowPro").prop("checked", true);
        }
        break;
      case 1:
        if ("dex" === character.class.savingThrowProf2) {
          $("#DexeritySavThrow").prepend(character.class.profBonus);
          $("#dexSavThrowPro").prop("checked", true);
        }
        break;
      case 2:
        if ("con" === character.class.savingThrowProf2) {
          $("#ConstitutionSavThrow").prepend(character.class.profBonus);
          $("#conSavThrowPro").prop("checked", true);
        }
        break;
      case 3:
        if ("int" === character.class.savingThrowProf2) {
          $("#IntelligenceSavThrow").prepend(character.class.profBonus);
          $("#intSavThrowPro").prop("checked", true);
        }
        break;
      case 4:
        if ("wis" === character.class.savingThrowProf2) {
          $("#WisdomSavThrow").prepend(character.class.profBonus);
          $("#wisSavThrowPro").prop("checked", true);
        }
        break;
      case 5:
        if ("char" === character.class.savingThrowProf2) {
          $("#charSavThrowPro").prop("checked", true);
          $("#CharismaSavThrow").prepend(character.class.profBonus);
        }
        break;
      default:
        console.log(error);
      }
    }
    armor.append(character.armor.AC);
    initiative.append(abilityMods[1] + 10);
    speed.append(character.race.speed);
    race.append(character.race.raceName);
    hitPoints.append(character.class.hitdice);
    hitDice.append(character.class.hitdice);
    addArmor(character.class.allowArmorType.armor);
    addWeapon(character.class.allowWeaponsType.weapon);
    addLanguages(character.bonusLanguage.language);
    $("#inspiration").text(character.inspiration);
    $("#experience").text(character.experiencce);
    $("#alignment").append("Lawful Good");
    $("#background").append("Rich Prince");
    $("#wealth").append("250");
    addEquipment(character.equipment.equipment);
    addSpells(character.spells.spells);
    $("#backstory").text(character.background);
    addSkills(character.skill, character);
    $("#gold").text(character.gold);
    $("#copper").text(character.copper);
    $("#electrum").text(character.electrum);
    $("#silver").text(character.silver);
    $("#platinum").text(character.platinum);
    addExp(character.experience);
    $("#faction").text(character.faction);

  });

  //EventListeners
  $("#dashboard").on("click", () => {
    document.location.href = "/dashboard";
  });
  $("#logout").on("click", () => {
    document.location.href = "/users/logout";
  });

  console.log("Fun times");
});
