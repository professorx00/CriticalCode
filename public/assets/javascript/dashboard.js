$(document).ready(function() {
  $(".addCharacterBtn").on("click", function(event) {
    event.preventDefault();
    console.log("add Character Btn");
  });

  $(".characterBtn").on("click", function(event) {
    event.preventDefault();
    const target = $(event.target);
    const characterID = target.attr("data-id");
    // const user = target.attr("data-user");
    console.log("Character Btn ");
    console.log(target.attr("data-id"));
    $.get(`/${characterID}`)
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
  });
});
