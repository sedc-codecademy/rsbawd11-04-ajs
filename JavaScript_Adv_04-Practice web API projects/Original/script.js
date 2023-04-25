$(document).ready(function () {
  let callBtn = document.getElementById("callBtn");
  let result = document.getElementById("result");
  callBtn.addEventListener("click", function () {
    $.ajax({
      url: "https://swapi.dev/api/people/1/",
      success: function (response) {
        console.log("Success!");
        let resultTitle = result.getElementsByTagName("h1")[0];
        let resultTable = result.getElementsByTagName("tbody")[0];
        resultTitle.innerText = response.name;
        resultTable.innerHTML = "";
        resultTable.innerHTML += `
                <tr>
                    <td> Height </td>
                    <td> ${response.height}cm </td>
                </tr>
                <tr>
                    <td> Weight </td>
                    <td> ${response.mass}kg </td>
                </tr>
                <tr>
                    <td> Eye Color </td>
                    <td> ${response.eye_color} </td>
                </tr>
                <tr>
                    <td> Hair Color </td>
                    <td> ${response.hair_color} </td>
                </tr>`;
      },
      error: function (error) {
        console.log(error);
      },
    });
  });
});
