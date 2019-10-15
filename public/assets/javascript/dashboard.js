$(document).ready(function() {
  $("#newCharacterBtn").on("click", function(event) {
    event.preventDefault();
    console.log(event.target)
    const target = $(event.target);
    const user = target.attr("data-id");
    console.log(target.attr("data-id"))
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

  $(".updateCracterBtn").on("clicl", function(event){
    event.preventDefault();
    const target = $(event.target);
    const characterID = target.attr("data-id");
    const user = target.attr("data-user");
    console.log("Update Button");
    document.location.href = `/update/${user}/${characterID}`;
  });

  $("#logout").on("click", () => {
    document.location.href = "/users/logout";
  });
});
