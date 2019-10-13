$(document).ready(function() {
  $(".addCharacterBtn").on("click", function(event) {
    event.preventDefault();
    const target = $(event.target);
    const user = target.attr("data-user");
    console.log("add Character Btn");
    document.location.href = `/addNewCharacter/${user}`;
  });

  $(".characterBtn").on("click", function(event) {
    event.preventDefault();
    const target = $(event.target);
    const characterID = target.attr("data-id");
    const user = target.attr("data-user");
    document.location.href = `/log/${user}/${characterID}`;
  });

  $("#logout").on("click", event => {
    document.location.href = "/logout";
  });
});
