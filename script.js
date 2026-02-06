// Initialize map at Barishal location (P942+2V6)
var map = L.map('map').setView([22.70519393776977, 90.3521329174623], 17);

// Add tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Custom blue pin icon for UGV B2
var ugvB2Icon = L.icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png', // pin image
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -35]
});

// Add pin marker
var ugvB2Marker = L.marker([22.7012, 90.3537], { icon: ugvB2Icon }).addTo(map)
  .bindPopup("<b>UGV B2</b><br>Click pin for floor details")
  .on('click', function() {
    openBuildingModal("UGV B2");
  });

// Modal logic
var modal = document.getElementById("buildingModal");
var span = document.getElementsByClassName("close")[0];

function openBuildingModal(name) {
  document.getElementById("buildingName").innerText = name;
  modal.style.display = "block";

  // Restart animation each time modal opens
  let buttons = document.querySelectorAll(".floor-btn");
  buttons.forEach(btn => {
    btn.style.opacity = "0";
    btn.style.animation = "none";
    void btn.offsetWidth; // trigger reflow
    btn.style.animation = "";
  });
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Open floor detail page
function openFloorPage(floorNumber) {
  // Redirect to a new page for each floor
  window.location.href = "floor" + floorNumber + ".html";
}
