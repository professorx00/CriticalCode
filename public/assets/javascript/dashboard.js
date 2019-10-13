$(document).ready(function() {
  $(".addCharacterBtn").on("click", function(event) {
    event.preventDefault();
    console.log("add Character Btn");
  });

  $(".characterBtn").on("click", function(event) {
    
    event.preventDefault();
    const target = $(event.target);
    const characterID = target.attr("data-id");
    const user = target.attr("data-user");
    $.get(`/log/${user}/${characterID}`)
      .then(data => {
        console.log("Successful Character ")
      })
      .catch(err => {
        console.log(err);
      });
  });
});
