$(document).ready(function() {
  // see https://github.com/EliasIsaiah/aws-nodejs-sample for full working example

  console.log("scripts loaded!"); // debugging

  const input = document.querySelector("input"); // fill in with id/class identifying image input elem
  const inputLabel = document.getElementsByClassName("custom-file-label"); // bootstrap class identification

  console.log(inputLabel[0].textContent); //debugging

  let files; // object to put files in

  // feedback method for updating text inside of input elem with name of picture upon input
  update = () => {
    files = input.files;
    let fileName = files[0].name;

    // update the input default text with the filename of the selected picture
    inputLabel[0].textContent = fileName;
    // img elem with preview photo
    // You can use this to provide feedback to the user that their photo has been sucessfully selected in the browser
    // may or may not be feasible depending on form space resources
    $img.attr("src", window.URL.createObjectURL(files[0]));
    console.log("newURL", window.URL.createObjectURL(files[0])); //debugging
  };

  $("#imageUploadButton").on("click", event => {
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
      .then(data => console.log(data))
      .then() //do something with the data)
      .catch(err => {
        throw err;
      });
  });

  input.addEventListener("change", update); //event listener to listen for changes to input and then run update()
});
