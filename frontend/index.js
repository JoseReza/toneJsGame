let buttonPlay = document.getElementById("buttonPlay");

async function start() {
  var codeEditor = ace.edit("codeEditor");
  codeEditor.setTheme("ace/theme/monokai");
  codeEditor.session.setMode("ace/mode/javascript");
  codeEditor.setOptions({
    fontSize: "12pt",
    enableBasicAutocompletion: true,
    enableLiveAutocompletion: true,
  });

  let initialContent = `
async function play(){
    const synth = new Tone.Synth().toDestination();
    const now = Tone.now()
    synth.triggerAttackRelease("C4", "8n", now);
    synth.triggerAttackRelease("E4", "8n", now + 0.5);
    synth.triggerAttackRelease("G4", "8n", now + 1);
    console.log("-->Executed");
}
  `;

  codeEditor.setValue(initialContent);

  buttonPlay.addEventListener("click", async function () {
    let instructions = codeEditor.getValue();
    eval(instructions);
    play();
    await Tone.start();
  });
}
start();
