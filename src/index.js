import { database } from "../database/data.js";
// import css supaya aplikasi ini menggunakan scss dan bootstrap
import css from "./public/css/style.scss";
import * as bootstrap from "bootstrap";

alert("hailoo");

console.log(database);

//! LOGIN
let login = document.getElementsByClassName("login")[0];
login.addEventListener("click", function () {
  // property
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const gagalLogin = document.querySelector(".gagal");

  function findContact(nama, password) {
    // const username = resultDatabase.find((data) => {
    //   return (
    //     data.username.toLowerCase() === nama.toLowerCase() &&
    //     data.password.toLowerCase() === password.toLowerCase()
    //   );
    // });
    // return username;
  }

  if (1 + 1 == 3) {
    window.location.href = "home.html";
    alert("anda login");
    console.log("ok");
  } else {
    gagalLogin.classList.add("gagal-login");
    setTimeout(function () {
      gagalLogin.classList.remove("gagal-login");
    }, 2000);
    console.log("data gada");
  }
});
