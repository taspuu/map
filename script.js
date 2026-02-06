// Initialize map at Barishal (Google Maps location)
var map = L.map('map').setView([22.7050974, 90.3520741], 18);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Custom marker icon
var ugvB2Icon = L.icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
  iconSize: [40,40],
  iconAnchor: [20,40],
  popupAnchor: [0,-35]
});

// Marker with popup
var ugvB2Marker = L.marker([22.7050974, 90.3520741], { icon: ugvB2Icon })
  .addTo(map)
  .bindPopup('<b>UGV B2 Campus</b><br><img src="2nd-floor.png" style="width:120px;border-radius:8px;">')
  .on('click', function() { openBuildingModal("UGV B2 Campus"); });

// Modal logic
var modal = document.getElementById("buildingModal");
var span = document.getElementsByClassName("close")[0];

function openBuildingModal(name){
  document.getElementById("buildingName").innerText = name;
  modal.style.display = "block";

  let buttons = document.querySelectorAll(".floor-btn");
  buttons.forEach(btn => {
    btn.style.opacity = "0";
    btn.style.animation = "none";
    void btn.offsetWidth;
    btn.style.animation = "";
  });
}

span.onclick = function(){ modal.style.display = "none"; }
window.onclick = function(event){ if(event.target == modal){ modal.style.display = "none"; } }

// Floor redirect
function openFloorPage(floorNumber){
  window.location.href = "floor" + floorNumber + ".html";
}
