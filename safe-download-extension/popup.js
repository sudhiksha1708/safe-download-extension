let historyList = document.getElementById("history");
let historyBtn = document.getElementById("historyBtn");

historyBtn.addEventListener("click", () => {
  chrome.storage.local.get(["blockedDownloads"], (result) => {
    historyList.innerHTML = "";
    (result.blockedDownloads || []).forEach(item => {
      let li = document.createElement("li");
      li.textContent = item;
      historyList.appendChild(li);
    });
  });
});