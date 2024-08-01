document.getElementById("switchPage").addEventListener("click", () => {
  window.location.href = "/";
});

document.getElementById("saveChanges").addEventListener("click", () => {
  const cardUrl = document.getElementById("cardUrl").value;
  const modelUrl = document.getElementById("modelUrl").value;

  localStorage.setItem("cardUrl", cardUrl);
  localStorage.setItem("modelUrl", modelUrl);
});

window.addEventListener("load", () => {
  const cardUrl =
    localStorage.getItem("cardUrl") ||
    "https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.5/examples/image-tracking/assets/card-example/card.png";
  const modelUrl =
    localStorage.getItem("modelUrl") ||
    "https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.5/examples/image-tracking/assets/card-example/softmind/scene.gltf";

  document.getElementById("cardUrl").value = cardUrl;
  document.getElementById("modelUrl").value = modelUrl;
});
