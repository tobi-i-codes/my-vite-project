import "aframe";
import "mind-ar";

const switchModeButton = document.getElementById("switchMode");
const aCamera = document.querySelector("a-camera");
const mindarScene = document.getElementById("mindarScene");

let editMode = false;
let mindarStarted = false;

async function startMindAR() {
  mindarScene.setAttribute(
    "mindar-image",
    "imageTargetSrc: https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.5/examples/image-tracking/assets/card-example/card.mind;"
  );
  if (!mindarStarted) {
    await mindarScene.components["mindar-image"].start();
    mindarStarted = true;
  }
}

async function stopMindAR() {
  if (mindarStarted) {
    await mindarScene.components["mindar-image"].stop();
    mindarScene.removeAttribute("mindar-image");
    mindarStarted = false;
  }
}

switchModeButton.addEventListener("click", async () => {
  editMode = !editMode;

  if (editMode) {
    aCamera.setAttribute("look-controls", "enabled: true");
    aCamera.setAttribute("position", "0 0 5");
    await stopMindAR();
  } else {
    aCamera.setAttribute("look-controls", "enabled: false");
    aCamera.setAttribute("position", "0 0 0");
    await startMindAR();
  }
});

// Start MindAR initially
startMindAR();
