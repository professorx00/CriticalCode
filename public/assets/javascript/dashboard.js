$(document).ready(function() {
  $(".addCharacterBtn").on("click", function(event) {
    event.preventDefault();
    const target = $(event.target);
    const user = target.attr("data-user");
    console.log("add Character Btn");
    document.location.href = `/add/${user}/`;
  });

  $(".characterBtn").on("click", function(event) {
    event.preventDefault();
    const target = $(event.target);
    const characterID = target.attr("data-id");
    const user = target.attr("data-user");
    document.location.href = `/log/${user}/${characterID}`;
  });

  $("#logout").on("click", () => {
    document.location.href = "/logout";
  });
});
