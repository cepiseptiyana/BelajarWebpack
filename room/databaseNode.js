const fs = require("node:fs");

// ! FUNCTION FILE JSON
function laodContact() {
  let file = fs.readFileSync("../database/login.json", "utf-8");
  const contacts = JSON.parse(file);
  return contacts;
}

function findContact(nama, password) {
  let resultDatabase = laodContact();
  const username = resultDatabase.find((data) => {
    return (
      data.username.toLowerCase() === nama.toLowerCase() &&
      data.password.toLowerCase() === password.toLowerCase()
    );
  });
  return username;
}

module.exports = { laodContact, findContact };
