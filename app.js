// let login = document.getElementsByClassName("login")[0];
// login.addEventListener("click", async function () {
//   // property
//   const username = document.getElementById("username").value;
//   const password = document.getElementById("password").value;
//   const resultDatabase = await database();

//   // find
//   function findContact(nama, password) {
//     const username = resultDatabase.find((data) => {
//       return (
//         data.username.toLowerCase() === nama.toLowerCase() &&
//         data.password.toLowerCase() === password.toLowerCase()
//       );
//     });
//     return username;
//   }

//   async function database() {
//     return fetch("database.json")
//       .then((result) => result.json())
//       .then((data) => data);
//   }

//   if (findContact(username, password)) {
//     window.location.href = "home.html";
//     console.log("ok");
//   } else {
//     window.location.href = "app.html";
//     alert(`data gada`);
//     console.log("data gada");
//   }
// });
