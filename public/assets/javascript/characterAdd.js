$(document).ready(function () {
  // see https://github.com/EliasIsaiah/aws-nodejs-sample for full working example

  //DataInfo:
  function getEquipment(equip) {
    console.log(equip.val());
    let equipArray = equip.val().split(",");
    let equipObj = { equipment: equipArray };
    return equipObj;
  }
  function getSpells(spells) {
    let spellsArray = spells.val().split(",");
    let spellsObj = { spells: spellsArray };
    return spellsObj;
  }
  function getLanguages(lang) {
    let langArray = lang.val().split(",");
    let langObj = { language: langArray };
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
    return errorCheck;
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
      str: parseInt($("#strAbility").val()),
      dex: parseInt($("#dexAbility").val()),
      con: parseInt($("#conAbility").val()),
      int: parseInt($("#intAbility").val()),
      wis: parseInt($("#wisAbility").val()),
      char: parseInt($("#charAbility").val()),
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
      strAdditional: parseInt($("#strRollmod").val()),
      dexAdditional: parseInt($("#dexRollmod").val()),
      conAdditional: parseInt($("#conRollmod").val()),
      intAdditional: parseInt($("#intRollmod").val()),
      wisAdditional: parseInt($("#wisRollmod").val()),
      charAdditional: parseInt($("#charRollmod").val()),
      inspiration: parseInt($("inspirationInput").val()),
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
    console.log("user: " + parseInt($("#userInfo").attr("data-user")));
    console.log("armor: " + parseInt($("#armorSelect").val()));
    console.log("weapon: " + parseInt($("#weaponSelect").val()));
    console.log("race: " + parseInt($("#armorSelect").val()));
    console.log("class: " + parseInt($("#armorSelect").val()));
    console.log(character);
    return character;
  }

  //Form Variables
  const user = $("#userInfo").attr("data-user");
  console.log("User ID: " + user);

  console.log("scripts loaded!"); // debugging

  const input = document.querySelector("input"); // fill in with id/class identifying image input elem
  const inputLabel = document.getElementsByClassName("custom-file-label"); // bootstrap class identification

  // console.log(inputLabel[0].textContent); //debugging

  let files; // object to put files in
  let $imgDiv = $("div.imgLogo");
  let profileImgURL;

  // feedback method for updating text inside of input elem with name of picture upon input
  update = () => {
    files = input.files;
    let fileName = files[0].name;

    // update the input default text with the filename of the selected picture
    inputLabel[0].textContent = fileName;
    // img elem with preview photo
    // You can use this to provide feedback to the user that their photo has been sucessfully selected in the browser
    // may or may not be feasible depending on form space resources
    // newURL = window.URL.createObjectURL(files[0]);
  };

  $("#imageUploadButton").on("click", event => {
    console.log("Clicked");
    event.preventDefault();
    // const formData = new FormData();
    console.log("input.files", input.files);
    const pictureData = new FormData();

    pictureData.set("userPic", files[0]);

    console.log("pictureData", pictureData);
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
      $.post("/api/addCharacter", charData, function(data, status, xhr) {
        console.log(status);
        document.location.href("/dashboard");
      });
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
});
