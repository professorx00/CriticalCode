$(document).ready(function() {
  // const strength=$("#strength");
  // const dexterity=$("#dexterity");
  // const constitution = $("#constitution");
  // const intelligence = $("#intelligence");
  // const wisdom = $("#wisdom");
  // const charisma = $("#charisma");
  // const charClass = $("#class");
  // const background = $("#back");
  // const player = $("#player");
  // const faction = $("#faction");
  // const race = $("#race");
  // const alignment = $("#alignment");
  // const experience = $("#experience");
  // const dci = $("#dci");
  // const proficiencyBonus = $("#proficiencyBonus");
  // const armor = $("#armor");
  // const initiative = $("#initiative");
  // const speed = $("#speed");
  // const hitPoints = $("#hitPoints");
  // const hitDice = $("#hitDice")
  // const characterInfo = $("#character")
  $("#dashboard").on("click", event => {
    document.location.href = "/dashboard";
  });
  $("#logout").on("click", event => {
    document.location.href = "/users/logout";
  });

  console.log("Fun times");
});
