const parent = document.getElementById("parent");
const child = document.getElementById("child");
const btn = document.getElementById("btn");

// event capturing
parent.addEventListener(
  "click",
  function () {
    console.log("Capturing: parent clicked");
  },
  true
);

child.addEventListener(
  "click",
  function () {
    console.log("Capturing: child clicked");
  },
  true
);

btn.addEventListener(
  "click",
  function () {
    console.log("Capturing: button clicked");
  },
  true
);

// event bubbling
parent.addEventListener("click", function () {
  console.log("Bubbling: parent clicked");
});

child.addEventListener("click", function () {
  console.log("Bubbling: child clicked");
});

btn.addEventListener("click", function () {
  console.log("Bubbling: button clicked");
});
