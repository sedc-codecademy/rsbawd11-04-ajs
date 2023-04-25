// //JSON Example

// let myJson = `{
//     "trainer": "Jelena",
//     "assistant": "Milan",
//     "students": [
//         "Biljana",
//         "Atilla",
//         "Miroslav",
//         "Marko",
//         "Igor",
//         "Milan",
//         "Vito"
//     ],
//     "academy": "JS"
// }`;
// //parse the json into a program class
// let jsObject = JSON.parse(myJson);
// console.log(jsObject.students[0]);
// //of what type
// console.log(typeof myJson);
// console.log(jsObject.assistant);

// Plain JS request

// document.getElementById("sendRequest").addEventListener("click", function () {
//   let xhr = new XMLHttpRequest();
//   xhr.onload = function () {
//     console.log("Request is sent!");
//     //if we have a successful call
//     if (xhr.status >= 200 && xhr.status < 300) {
//       console.log("Request successful");
//       let objectResponse = JSON.parse(xhr.response);
//       console.log(objectResponse);
//     } else {
//       console.log(this.responseText);
//     }
//   };
//   xhr.open(
//     "GET",
//     "https://raw.githubusercontent.com/sedc-codecademy/rsbawd11-04-ajs/main/JavaScript_Adv_01-Intro%20and%20Workshop/Object%20example/trainer.json"
//   );
//   xhr.send();
// });

// jQuery request

// $(document).ready(function () {
//   document.getElementById("sendRequest").addEventListener("click", function () {
//     $.ajax({
//       //we have three important parts in the ajax call
//       //first we write the api we want to hit in the url
//       url: "https://raw.githubusercontent.com/sedc-codecademy/rsbawd11-04-ajs/main/JavaScript_Adv_01-Intro%20and%20Workshop/Object%20example/trainer.json",
//       success: function (response) {
//         console.log("Request successful");
//         let responseObject = JSON.parse(response);
//         console.log(responseObject);
//       },
//       error: function (response) {
//         console.log("The request has failed: " + response.status);
//         console.log(response.responseText);
//       },
//     });
//   });
// });

// classic fetch

// document.getElementById("sendRequest").addEventListener("click", function () {
//   fetch(
//     "https://raw.githubusercontent.com/sedc-codecademy/rsbawd11-04-ajs/main/JavaScript_Adv_01-Intro%20and%20Workshop/Object%20example/trainer.json"
//   )
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("The request has failed: " + response.status);
//       }
//       return response.json();
//     })
//     .then((responseObject) => {
//       console.log("Request successful");
//       console.log(responseObject);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// });

// // Astronauts example

// $(document).ready(function () {
//   document.getElementById("sendRequest").addEventListener("click", function () {
//     $.ajax({
//       url: "http://api.open-notify.org/astros.json",
//       success: function (response) {
//         console.log("Request successful");
//         console.log(response);
//         let element = document.getElementById("astros");
//         element.innerHTML = "";
//         for (let i = 0; i < response.people.length; i++) {
//           element.innerHTML += `<li> ${response.people[i].name} </li>`;
//         }
//       },
//       error: function (response) {
//         console.log("The request has failed: " + response.status);
//         console.log(response.responseText);
//       },
//     });
//   });
// });
