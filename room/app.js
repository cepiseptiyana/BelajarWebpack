const fs = require("node:fs");
const { laodContact } = require("./databaseNode.js");

const express = require("express");
const app = express();
const port = 3000;

// static public = menyimpan file gambar,video dll
// telusuri folder publicnya
app.use(express.static("../public")); // built-in midleware
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get("/login", (req, res) => {
  res.sendFile("./halaman/app.html", { root: __dirname });
});

// request post beda dengan get
app.post("/home", (req, res) => {
  console.log(req.body);

  function checkAcount(acount) {
    const contacts = laodContact();
    return contacts.find(
      (contact) =>
        contact.username === acount.username &&
        contact.password === acount.password
    );
  }

  if (checkAcount(req.body)) {
    res.send("login");
    return;
  } else {
    res.send("gagal login");
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
