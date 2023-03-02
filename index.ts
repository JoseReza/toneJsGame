console.log("-->Starting Software");
console.log("-->Tone js game server");

import express from "express";
import * as childProcess from "child_process";

const port = 3000;
const app = express();

app.use("/", express.static(__dirname + "/frontend"));

app.listen(port, function () {
  console.log(`-->App listening on port ${port}`);
  childProcess.exec(`start msedge --kiosk http://localhost:${port}`);
});
