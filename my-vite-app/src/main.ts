import './style.css'

fetch("https://1393998996585844816.discordsays.com/.proxy/api/user/849827666064048178", {
  method: "GET"
})
  .then(response => response.text())
  .then(data => console.log(data))
  .catch(error => console.error("Fetch error:", error));