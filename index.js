const cohort1 = process.argv[2];
const user = process.env.USERDOMAIN;

if (cohort1 === "web-49") {
 console.log(`${cohort1} is the best forever!`);
} else {
 console.log(`booooh cohort ${cohort1}`);
}

console.log(`the user is ${user}`);

const express = require("express");
const app = express();
const port = 9000;

app.get("/hello", (req, res) => {
 res.json({ message: "hey there" });
});

app.listen(port, () => {
 console.log(`listing on port ${port}`);
});
