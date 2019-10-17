$(document).ready(function () {

  $("#newCharacterBtn").on("click", function (event) {
    event.preventDefault();
    console.log(event.target);
    const target = $(event.target);
    const user = target.attr("data-id");
    console.log(target.attr("data-id"));
    console.log("add Character Btn");
    document.location.href = `/add/${user}/`;
  });

  $(".characterBtn").on("click", function (event) {
    event.preventDefault();
    const target = $(event.target);
    const characterID = target.attr("data-charid");
    const user = target.attr("data-id");
    document.location.href = `/log/${user}/${characterID}`;
  });

  $(".updateCharacterBtn").on("click", function (event) {
    event.preventDefault();
    console.log("Updating Character");
    const target = $(event.target);
    const characterID = target.attr("data-charid");
    const user = target.attr("data-id");
    console.log("Update Button");
    document.location.href = `/update/${user}/${characterID}`;
  });

  $(".delete").on("click", function (event) {
    const target = $(event.target);
    const characterID = target.attr("data-charid");
    const user = target.attr("data-id");
    $("#remove")
      .attr("data-id", user)
      .attr("data-charid", characterID);
    $("#deleteModal").modal();
    $("#deleteModal").modal("show");
  });

  $("#remove").on("click", function (event) {
    console.log("removal Button Click");
    const target = $(event.target);
    console.log(target)
    const char = target.attr("data-charid");
    const user = target.attr("data-id");
    console.log(user, char);
    $.get(`/delete/${user}/${char}`, (data, status) => {
      console.log("Deleted!");
      $("#deleteModal").modal("hide");
      if (status === 200) {
        document.location.href("/dashboard");
        console.log("success");
      }
    });
  });

  $("#logout").on("click", () => {
    document.location.href = "/users/logout";
  });
});