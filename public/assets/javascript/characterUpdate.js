$(document).ready(function() {
  //enables the popovers
  $("#randomNameBtn").popover(options);
  $(".statRoll").popover(options);
  //DataInfo:

  function getEquipment(equip) {
    console.log(equip.val());
    let equipArray = equip.val().split(",");
    let equipObj = {
      equipment: equipArray
    };
    return equipObj;
  }

  function getSpells(spells) {
    let spellsArray = spells.val().split(",");
    let spellsObj = {
      spells: spellsArray
    };
    return spellsObj;
  }

  function getLanguages(lang) {
    let langArray = lang.val().split(",");
    let langObj = {
      language: langArray
    };
    return langObj;
  }

  function getAlignment(align) {
    return align.replace(/-/g, " ");
  }

  function getskills() {
    let skills = [];
    if ($("#acrobaticsCheck").is(":checked")) {
      skills.push("acrobatics");
    }
    if ($("#animalHandlingCheck").is(":checked")) {
      skills.push("animalHandling");
    }
    if ($("#arcanaCheck").is(":checked")) {
      skills.push("arcana");
    }
    if ($("#athleticsCheck").is(":checked")) {
      skills.push("athletics");
    }
    if ($("#deceptionCheck").is(":checked")) {
      skills.push("deception");
    }
    if ($("#historyCheck").is(":checked")) {
      skills.push("history");
    }
    if ($("#insightCheck").is(":checked")) {
      skills.push("insight");
    }
    if ($("#intimidationCheck").is(":checked")) {
      skills.push("intimidation");
    }
    if ($("#investigationCheck").is(":checked")) {
      skills.push("investigation");
    }
    if ($("#medicineCheck").is(":checked")) {
      skills.push("medicine");
    }
    if ($("#natureCheck").is(":checked")) {
      skills.push("nature");
    }
    if ($("#perceptionCheck").is(":checked")) {
      skills.push("perception");
    }
    if ($("#performanceCheck").is(":checked")) {
      skills.push("performance");
    }
    if ($("#religionCheck").is(":checked")) {
      skills.push("religion");
    }
    if ($("#sleightOfHandCheck").is(":checked")) {
      skills.push("sleightOfHand");
    }
    if ($("#stealthCheck").is(":checked")) {
      skills.push("stealth");
    }
    if ($("#survivalCheck").is(":checked")) {
      skills.push("survivalCheck");
    }
    console.log(skills);
    return skills;
  }

  function checkskills() {
    let skillErrors = [];
    if (!$("#acrobaticsCheck").is(":checked")) {
      skillErrors.push("acrobatics");
    }
    if (!$("#animalHandlingCheck").is(":checked")) {
      skillErrors.push("animalHandling");
    }
    if (!$("#arcanaCheck").is(":checked")) {
      skillErrors.push("arcana");
    }
    if (!$("#athleticsCheck").is(":checked")) {
      skillErrors.push("athletics");
    }
    if (!$("#deceptionCheck").is(":checked")) {
      skillErrors.push("deception");
    }
    if (!$("#historyCheck").is(":checked")) {
      skillErrors.push("history");
    }
    if (!$("#insightCheck").is(":checked")) {
      skillErrors.push("insight");
    }
    if (!$("#intimidationCheck").is(":checked")) {
      skillErrors.push("intimidation");
    }
    if (!$("#investigationCheck").is(":checked")) {
      skillErrors.push("investigation");
    }
    if (!$("#medicineCheck").is(":checked")) {
      skillErrors.push("medicine");
    }
    if (!$("#natureCheck").is(":checked")) {
      skillErrors.push("nature");
    }
    if (!$("#perceptionCheck").is(":checked")) {
      skillErrors.push("perception");
    }
    if (!$("#performanceCheck").is(":checked")) {
      skillErrors.push("performance");
    }
    if (!$("#religionCheck").is(":checked")) {
      skillErrors.push("religion");
    }
    if (!$("#sleightOfHandCheck").is(":checked")) {
      skillErrors.push("sleightOfHand");
    }
    if (!$("#stealthCheck").is(":checked")) {
      skillErrors.push("stealth");
    }
    if (!$("#survivalCheck").is(":checked")) {
      skillErrors.push("survivalCheck");
    }
    if (skillErrors.length > 16) {
      console.log(skillErrors);
      return skillErrors;
    } else {
      return [];
    }
  }

  function skillCheck(skill) {
    if (skill === NaN) {
      return 0;
    } else {
      return skill;
    }
  }

  function checkStats() {
    let errorCheck = [];
    if (!$("#strAbility").val()) {
      errorCheck.push("strAbility");
    }
    if (!$("#dexAbility").val()) {
      errorCheck.push("dexAbility");
    }
    if (!$("#conAbility").val()) {
      errorCheck.push("conAbility");
    }
    if (!$("#intAbility").val()) {
      errorCheck.push("intAbility");
    }
    if (!$("#wisAbility").val()) {
      errorCheck.push("wisAbility");
    }
    if (!$("#charAbility").val()) {
      errorCheck.push("charAbility");
    }
    return [];
  }

  function fileCheck(fileUrl) {
    if (!fileUrl) {
      fileUrl = "/assets/images/default.png";
    }
    return fileUrl;
  }

  function checkFormRequirements() {
    let error = [];
    let skillCheck;
    let statCheck;
    console.log(typeof $("#raceSelect").val());
    if (
      $("#characterNameInput").val() === "" ||
      $("#characterNameInput").val() === "Mighty Moose"
    ) {
      error.push("characterLabel");
    }
    if ($("#raceSelect").val() === "99") {
      error.push("race");
    }
    if ($("#armorSelect").val() === "99") {
      error.push("armor");
    }
    if ($("#weaponSelect").val() === "99") {
      error.push("weapon");
    }
    if ($("#classSelect").val() === "99") {
      error.push("className");
    }
    if ($("#alignmentSelect").val() === "null") {
      error.push("alignment");
    }
    skillCheck = checkskills();
    if (skillCheck.length > 0) {
      skillCheck.forEach(element => {
        error.push(element);
      });
    }
    statCheck = checkStats();
    if (statCheck.length > 0) {
      statCheck.forEach(element => {
        error.push(element);
      });
    }
    return error;
  }

  function getData() {
    character = {
      characterName: $("#characterNameInput")
        .val()
        .trim(),
      str: parseInt($("#strengthAbil").val()),
      dex: parseInt($("#dexterityAbil").val()),
      con: parseInt($("#constitutionAbil").val()),
      int: parseInt($("#intelligenceAbil").val()),
      wis: parseInt($("#wisdomAbil").val()),
      char: parseInt($("#charismaAbil").val()),
      equipment: getEquipment($("#equipmentInput")),
      skill: getskills(),
      spells: getSpells($("#spellsInput")),
      gold: parseInt($("#goldInput").val()),
      copper: parseInt($("#copperInput").val()),
      electrum: parseInt($("#electrumInput").val()),
      silver: parseInt($("#silverInput").val()),
      platinum: parseInt($("#platinumInput").val()),
      experience: parseInt($("#experienceInput").val()),
      faction: $("#factionInput").val(),
      alignment: getAlignment($("#alignmentSelect").val()),
      bonusLanguage: getLanguages($("#languagesInput")),
      background: $("#backstoryInput").val(),
      strAdditional: parseInt($("#strengthMod").val()),
      dexAdditional: parseInt($("#dexterityMod").val()),
      conAdditional: parseInt($("#constitutionMod").val()),
      intAdditional: parseInt($("#intelligenceMod").val()),
      wisAdditional: parseInt($("#wisdomMod").val()),
      charAdditional: parseInt($("#charismaMod").val()),
      inspiration: parseInt($("#inspirationInput").val()),
      acrobatics: skillCheck(parseInt($("#acrobaticsInput").val())),
      animalHandling: skillCheck(parseInt($("#animalHandlingInput").val())),
      arcana: skillCheck(parseInt($("#arcanasInput").val())),
      athletics: skillCheck(parseInt($("#athleticsInput").val())),
      deception: skillCheck(parseInt($("#deceptionInput").val())),
      history: skillCheck(parseInt($("#historyInput").val())),
      insight: skillCheck(parseInt($("#insightInput").val())),
      intimidation: skillCheck(parseInt($("#intimidationInput").val())),
      investigation: skillCheck(parseInt($("#investigationInput").val())),
      medicine: skillCheck(parseInt($("#medicineInput").val())),
      nature: skillCheck(parseInt($("#natureInput").val())),
      perception: skillCheck(parseInt($("#perceptionInput").val())),
      performance: skillCheck(parseInt($("#performanceInput").val())),
      religion: skillCheck(parseInt($("#religionInput").val())),
      sleightofHand: skillCheck(parseInt($("#sleightofHandInput").val())),
      stealth: skillCheck(parseInt($("#stealthInput").val())),
      survival: skillCheck(parseInt($("#survivalInput").val())),
      imgURL: fileCheck(profileImgURL),
      armorId: parseInt($("#armorSelect").val()),
      userId: parseInt($("#userInfo").attr("data-user")),
      weaponId: parseInt($("#weaponSelect").val()),
      raceId: parseInt($("#raceSelect").val()),
      classId: parseInt($("#classSelect").val())
    };
    console.log("user: " + $("#userInfo").attr("data-user"));
    console.log("armor: " + $("#armorSelect").val());
    console.log("weapon: " + $("#weaponSelect").val());
    console.log("race: " + $("#raceSelect").val());
    console.log("class: " + $("#classSelect").val());
    console.log(character);
    return character;
  }

  //Form Variables
  const user = $("#userInfo").attr("data-user");
  const char = $("#userInfo").attr("data-char");
  let skills;
  let equipment;
  let spells;
  let language;
  let background;

  //get skills for character and set them in the DOM

  $.ajax(`/api/user/${user}/${char}`).then(data => {
    let character = data[0];
    skills = character.skill;
    skills.map(skill => {
      $(`#${skill}Check`).attr("checked", "true");
      $(`#${skill}Input`).attr("value", character[skill]);
    });

    equipment = character.equipment.equipment; //array
    console.log("equipment", equipment);
    spells = character.spells.spells; //array
    language = character.bonusLanguage.language; //array
    background = character.background; //string

    $("#spellsInput").text(spells.join());
    $("#languagesInput").text(language.join());
    $("#equipmentInput").text(equipment.join());
    $("#backstoryInput").text(background);
  });

  console.log("User ID: " + user);

  console.log("scripts loaded!"); // debugging

  const input = document.getElementById("inputGroupFile04"); // fill in with id/class identifying image input elem
  const inputLabel = document.getElementsByClassName("custom-file-label");

  let files; // object to put files in
  let $imgDiv = $("div.imgLogo");
  let profileImgURL = $("#userInfo").attr("data-picture"); //gets the picture that was already there

  // Update the text inside of input elem with name of picture upon input
  update = () => {
    files = input.files;
    let fileName = files[0].name;

    // update the input default text with the filename of the selected picture
    inputLabel[0].textContent = fileName;
  };

  $("#imageUploadButton").on("click", event => {
    event.preventDefault();
    // const formData = new FormData();
    console.log("input.files", input.files);
    const pictureData = new FormData();

    pictureData.set("userPic", files[0]);
    //loading animation
    $imgDiv.css({
      background: "center no-repeat url('/assets/images/loading.gif')"
    });

    $.ajax({
      enctype: "multipart/form-data",
      method: "POST",
      processData: false,
      contentType: false,
      cache: false,
      timeout: 600000,
      url: "/photoUpload",
      data: pictureData
    })
      .then(data => {
        console.log("returned data object", data); // debugging
        profileImgURL = data.Location;
        $imgDiv.css({
          background: `center / cover no-repeat url("${profileImgURL}")`
        });
        fileInfoSubmit = data;
      })
      .catch(err => {
        throw err;
      });
  });

  $("#formSubmit").on("click", event => {
    event.preventDefault();
    console.log(checkFormRequirements());
    let errors = checkFormRequirements();
    if (errors.length === 0) {
      console.log("Form Submit Button Clicked");
      let charData = getData();
      console.log("Sending");
      $.post(`/api/updateCharacter/${user}/${char}`, charData, function(
        status
      ) {
        console.log(status);
      }).then(() =>
        window.location.assign("/dashboard").catch(err => {
          console.log(err);
          throw err;
        })
      );
    } else {
      errors.forEach(element => {
        $(`#${element}`).addClass("error");
      });
      $("#error")
        .append("Please check your answers")
        .addClass("error");
    }
  });

  $("#dashboard").on("click", event => {
    event.preventDefault();
    document.location.href = "/dashboard";
  });
  input.addEventListener("change", update); //event listener to listen for changes to input and then run update()

  //Dice roll for stats
  $(".statRoll").on("click", function() {
    let rollSum = [];
    let exportRolls;
    if (
      this.value === "strength" ||
      "dexterity" ||
      "constitution" ||
      "intelligence" ||
      "wisdom" ||
      "charisma"
    ) {
      for (i = 0; i < 4; i++) {
        let roll = Math.floor(Math.random() * 6 + 1);
        rollSum.push(roll);
      }
      rollSum.sort();
      exportRolls = rollSum[1] + rollSum[2] + rollSum[3];
      rollSum = [];
      $(`#${this.value}Abil`).val(exportRolls);
      let modValue = $(`#${this.value}Mod`).val();
      let total = parseInt(exportRolls) + parseInt(modValue);
      $(`#${this.value}Total`).val(total);
      $(this).attr("value", "disabled");
    }
  });

  //Name Generator
  $("#randomNameBtn").on("click", event => {
    console.log("Random Button");
    event.preventDefault();
    $("#randomModal").modal();
    $("#randomModal").modal("show");
  });

  $("#chooseName").on("click", event => {
    event.preventDefault();
    let radio = $("[name = 'genderOptions']");
    for (let x = 0; x < radio.length; x++) {
      if (radio[x].checked) {
        let value = $(radio[x]).attr("value");
        $.get(`/randomName/${value}`).then(data => {
          console.log(data);
          Object.keys(data).forEach(key => {
            if (key !== "offset") {
              let option = $("<option>")
                .attr("value", data[key])
                .text(data[key]);
              $("#nameSelect")
                .append(option)
                .removeClass("hide");
            }
          });
          $("#chooseName").addClass("hide");
          $("#options").addClass("hide");
          $("#keepName").removeClass("hide");
        });
      }
    }
  });

  $("#keepName").on("click", event => {
    event.preventDefault();
    $("#characterNameInput").text($("#nameSelect").val());
    $("#randomModal").modal("hide");
    $("#chooseName").removeClass("hide");
    $("#options").removeClass("hide");
    $("#keepName").addClass("hide");
    $("#nameSelect").addClass("hide");
  });

  $(".statCal").on("change", event => {
    let target = event.target;
    let targetLoc;
    let targetStat = $(target).attr("id");
    targetLoc = targetStat.slice(0, targetStat.length - 4);
    let aVal = parseInt($(target).val());
    let bVal = parseInt($(`#${targetLoc}Mod`).val());
    let value = aVal + bVal;
    $(`#${targetLoc}Total`).val(value)

  });
  $(".statCalMod").on("change", event => {
    let target = event.target;
    let targetLoc;
    let targetStat = $(target).attr("id");
    targetLoc = targetStat.slice(0, targetStat.length - 3);
    let aVal = parseInt($(target).val());
    let bVal = parseInt($(`#${targetLoc}Abil`).val());
    let value = aVal + bVal;
    $(`#${targetLoc}Total`).val(value)
  });
});
