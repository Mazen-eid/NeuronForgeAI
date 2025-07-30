function showMessage(type, msg) {
  let el = document.getElementById("notifier");
  if (!el) {
    el = document.createElement("div");
    el.id = "notifier";
    el.style.position = "fixed";
    el.style.top = "20px";
    el.style.left = "50%";
    el.style.transform = "translateX(-50%)";
    el.style.padding = "15px 30px";
    el.style.borderRadius = "10px";
    el.style.zIndex = "1000";
    el.style.fontWeight = "bold";
    el.style.fontSize = "1.12em";
    el.style.boxShadow = "0 4px 12px #00fff733";
    document.body.appendChild(el);
  }
  el.textContent = msg;
  el.style.background = type === "success" ? "#00fff7" : type === "error" ? "#ff0055" : "#222a36";
  el.style.color = "#222a36";
  el.style.display = "block";
  setTimeout(() => { el.style.display = "none"; }, 3400);
}