async function showInfo() {
  console.log("Tone js game", "----------------------------------------");
  console.extraInfo("Available functions:");
  JSON.stringify(Tone, function (key, val) {
    if (typeof val === "function") {
      console.extraInfo(`--> Tone.${key}() : function`);
    }
    return val;
  });
  console.log("----------------------------------------");
  let configuration = await utils.getConfiguration();
  console.extraInfo("Available devices:");
  for (let device of configuration.devices) {
    console.extraInfo(JSON.stringify(device));
  }
}
showInfo();
