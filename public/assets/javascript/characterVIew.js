// let helper = require("../../../routes/calculator");
$(document).ready(function() {
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
    let dexterity = abiltyMod(dex);
    let consitution = abiltyMod(con);
    let intelligence = abiltyMod(int);
    let wisdom = abiltyMod(wis);
    let charisma = abiltyMod(chr);
    return [strength, dexterity, consitution, intelligence, wisdom, charisma];
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
  const charName = $("#characterName");;
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
  const hitDice = $("#hitDice")
  const characterInfo = $("#character");

  const user = characterInfo.attr("data-user");
  const char = characterInfo.attr("data-char");
  console.log(user, char);
  $.ajax(`/api/user/${user}/${char}`).then(data => {
    let character = data[0];
    console.log(character);;
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
          $("#StrengthSavThrow").append(character.class.profBonus);
          $("#strSavThrowPro").attr(
            "src",
            "/assets/images/checkboxCheck.png"
          );
        }
        break;
      case 1:
        if ("dex" === character.class.savingThrowProf1) {
          $("#DexeritySavThrow").append(character.class.profBonus);
          $("#dexSavThrowPro").attr(
            "src",
            "/assets/images/checkboxCheck.png"
          );
        }
        break;
      case 2:
        if ("con" === character.class.savingThrowProf1) {
          $("#ConstitutionSavThrow").append(character.class.profBonus);
          $("#conSavThrowPro").attr(
            "src",
            "/assets/images/checkboxCheck.png"
          );
        }
        break;
      case 3:
        if ("int" === character.class.savingThrowProf1) {
          $("#IntelligenceSavThrow").append(character.class.profBonus);
          $("#intSavThrowPro").attr(
            "src",
            "/assets/images/checkboxCheck.png"
          );
        }
        break;
      case 4:
        if ("wis" === character.class.savingThrowProf1) {
          $("#WisdomSavThrow").append(character.class.profBonus);
          $("#wisSavThrowPro").attr(
            "src",
            "/assets/images/checkboxCheck.png"
          );
        }
        break;
      case 5:
        if ("char" === character.class.savingThrowProf1) {
          $("#CharismaSavThrow").append(character.class.profBonus);
          $("#charSavThrowPro").attr(
            "src",
            "/assets/images/checkboxCheck.png"
          );
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
          $("#StrengthSavThrow").append(character.class.profBonus);
          $("#strSavThrowPro").attr(
            "src",
            "/assets/images/checkboxCheck.png"
          );
        }
        break;
      case 1:
        if ("dex" === character.class.savingThrowProf2) {
          $("#DexeritySavThrow").append(character.class.profBonus);
          $("#dexSavThrowPro").attr(
            "src",
            "/assets/images/checkboxCheck.png"
          );
        }
        break;
      case 2:
        if ("con" === character.class.savingThrowProf2) {
          $("#ConstitutionSavThrow").append(character.class.profBonus);
          $("#conSavThrowPro").attr(
            "src",
            "/assets/images/checkboxCheck.png"
          );
        }
        break;
      case 3:
        if ("int" === character.class.savingThrowProf2) {
          $("#IntelligenceSavThrow").append(character.class.profBonus);
          $("#intSavThrowPro").attr(
            "src",
            "/assets/images/checkboxCheck.png"
          );
        }
        break;
      case 4:
        if ("wis" === character.class.savingThrowProf2) {
          $("#WisdomSavThrow").append(character.class.profBonus);
          $("#wisSavThrowPro").attr(
            "src",
            "/assets/images/checkboxCheck.png"
          );
        }
        break;
      case 5:
        if ("char" === character.class.savingThrowProf2) {
          $("#CharismaSavThrow").append(character.class.profBonus);
          $("#charSavThrowPro").attr(
            "src",
            "/assets/images/checkboxCheck.png"
          );
        }
        break;
      default:
        console.log(error);
      }
    }
    armor.append(character.armor.AC);
    initiative.append(abilityMods[1]+10);
    speed.append(character.race.speed)
    race.append(character.race.raceName)
    hitPoints.append(character.class.hitdice)
    hitDice.append(character.class.hitdice)
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
