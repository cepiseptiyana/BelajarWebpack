// database
async function database() {
  return fetch("../database/login.json")
    .then((result) => result.json())
    .then((data) => data);
}

//! REGISTRASI
let registrasi = document.querySelector(".registrasi");
registrasi.addEventListener("click", async function () {
  const username = document.getElementById("regisEmail").value;
  const password = document.getElementById("regisPassword").value;
  const gagalLogin = document.querySelector(".gagal");
  const pRegis = document.querySelector(".p-regis");
  const acountSame = document.querySelector(".acount-same");
  // database
  const resultDatabase = await database();

  function findContact(nama, password) {
    const username = resultDatabase.find((data) => {
      return data.username === nama && data.password === password;
    });
    return username;
  }

  // ! PR masukan ke database
  let user = {
    username: username,
    password: password,
  };

  let arrayParseDatabase = resultDatabase;
  // !!

  if (password.length <= 5) {
    console.log("password minimal > 5");

    pRegis.style.display = "block";
    return;
  }
  if (findContact(username, password)) {
    console.log("akun sudah digunakan");

    pRegis.style.display = "none";
    alert("akun sudah digunakan");
    acountSame.style.display = "block";
    return;
  } else {
    console.log("berhasil login");
    console.log("password sudah > 5");

    acountSame.style.display = "none";
    gagalLogin.classList.add("gagal-login");
    setTimeout(function () {
      gagalLogin.classList.remove("gagal-login");
    }, 2000);
  }
});
