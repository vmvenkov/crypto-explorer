// --------- DATA ---------

const funFacts = [
    "The first real-world Bitcoin transaction was for two pizzas — costing 10,000 BTC!",
    "Satoshi Nakamoto, the creator of Bitcoin, has never been identified to this day.",
    "Over 20% of all Bitcoin is estimated to be lost forever due to forgotten passwords.",
    "Ethereum was crowdfunded in 2014 and raised over $18 million in Bitcoin.",
    "The maximum number of Bitcoin that can ever exist is exactly 21 million.",
    "El Salvador became the first country to accept Bitcoin as legal tender in 2021.",
    "The term 'HODL' originated from a typo in a Bitcoin forum post in 2013.",
    "There are now over 20,000 different cryptocurrencies around the world!"
  ];
  
  const quotes = [
    "“Bitcoin is a technological tour de force.” — Bill Gates",
    "“Blockchain is the tech. Bitcoin is merely the first mainstream manifestation of its potential.” — Marc Kenigsberg",
    "“You can’t stop things like Bitcoin. It will be everywhere and the world will have to readjust.” — John McAfee",
    "“In crypto, the only guarantee is volatility. Embrace it.” — Unknown",
    "“The future of money is digital currency.” — Bill Gates",
    "“Decentralization is the soul of blockchain.” — Vitalik Buterin",
    "“First they ignore you, then they laugh at you, then they fight you, then you win.” — Often quoted in crypto communities",
    "“If you don’t believe it or don’t get it, I don’t have the time to try to convince you, sorry.” — Satoshi Nakamoto"
  ];
  
  const learningTips = [
    "Use a hardware wallet to secure your crypto.",
    "Never share your private keys.",
    "Always verify wallet addresses before sending."
  ];
  
  const newsArticles = [
    {
      title: "Bitcoin: The New Age of Digital Gold",
      summary: "Since its creation in 2009 by the mysterious Satoshi Nakamoto, Bitcoin has evolved far beyond a digital experiment. Today, Bitcoin is increasingly referred to as 'digital gold', offering a store of value outside traditional financial systems. Unlike fiat currencies, Bitcoin's supply is capped at 21 million coins, making it inherently resistant to inflation. Major corporations, investment funds, and even national governments are starting to recognize Bitcoin's role as a hedge against economic uncertainty. As blockchain technology matures, Bitcoin continues to pave the way for a decentralized financial future.",
      date: "2025-05-01"
    },
    {
      title: "Ethereum: Building the Foundation for Web3",
      summary: "Ethereum, launched in 2015 by Vitalik Buterin and others, introduced a revolutionary concept to the blockchain world: smart contracts. Unlike Bitcoin, which focuses primarily on transferring value, Ethereum's blockchain can execute code automatically when conditions are met, enabling decentralized applications (dApps). This innovation sparked the DeFi (Decentralized Finance) movement, NFT marketplaces, and decentralized autonomous organizations (DAOs). Ethereum’s upcoming upgrades, including the shift to a proof-of-stake consensus model, aim to make it faster, greener, and even more scalable — fueling the vision for a fully decentralized internet known as Web3.",
      date: "2025-04-28"
    },
    {
      title: "Global Crypto Adoption: A Financial Revolution in Motion",
      summary: "From Lagos to São Paulo, cryptocurrencies are becoming a vital part of everyday life. Countries facing unstable currencies and limited banking infrastructure are increasingly turning to Bitcoin, stablecoins, and digital wallets. In 2021, El Salvador made headlines as the first nation to declare Bitcoin legal tender, inspiring discussions across Latin America, Africa, and Southeast Asia. Meanwhile, tech-savvy populations in countries like India, Nigeria, and Vietnam are embracing decentralized finance at record speeds. As blockchain technology becomes more accessible, global crypto adoption is transforming financial inclusion and redefining what it means to have economic freedom.",
      date: "2025-04-25"
    }
  ];
  
  const historicalData = {
    BTC: {
      years: ["2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"],
      values: [4.72, 13.51, 771.40, 314.25, 434.33, 998.33, 13657.20, 3843.52, 7200.17, 29370.85, 47620.42, 16625.52, 43835.62, 94419.76]
    },
    ETH: {
      years: ["2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"],
      values: [0.02439, 0.948, 8.1726, 772.64, 140.82, 180.16, 1314.99, 2688.28, 1586.54, 2282.54, 3298.26]
    },
    USDT: {
      years: ["2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"],
      values: [1.0000, 1.0000, 1.0073, 1.0183, 0.9998, 1.0019, 1.0005, 0.9997, 1.0004, 0.9978]
    },
    XRP: {
      years: ["2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"],
      values: [0.005955, 0.006368, 2.3910, 0.3648, 0.1927, 0.2374, 0.8495, 0.3388, 0.6301, 2.3223]
    },
    BNB: {
      years: ["2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"],
      values: [8.4146, 6.0753, 13.69, 37.91, 527.35, 244.14, 314.41, 706.51]
    },
    SOL: {
      years: ["2021", "2022", "2023", "2024", "2025"],
      values: [1.8421, 178.52, 9.9822, 109.51, 193.87]
    },
    USDC: {
      years: ["2019", "2020", "2021", "2022", "2023", "2024", "2025"],
      values: [1.0133, 1.0041, 0.9998, 1.0001, 0.9999, 1.0001, 0.9999]
    },
    DOGE: {
      years: ["2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"],
      values: [0.0001829, 0.0001544, 0.0002278, 0.008909, 0.002392, 0.002033, 0.005685, 0.173, 0.07022, 0.09202, 0.3243]
    },
    ADA: {
      years: ["2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"],
      values: [0.7287, 0.04255, 0.03346, 0.1753, 1.3770, 0.2498, 0.6231, 0.9176]
    },
    TRX: {
      years: ["2019", "2020", "2021", "2022", "2023", "2024", "2025"],
      values: [0.01956, 0.01325, 0.02694, 0.07661, 0.05482, 0.1078, 0.25]
    }
  };

  const currencyIcons = {
    BTC: "images/BTC.png",
    ETH: "images/ETH.png",
    USDT: "images/USDT.png",
    XRP: "images/XRP.png",
    BNB: "images/BNB.png",
    SOL: "images/SOL.png",
    USDC: "images/USDC.png",
    DOGE: "images/DOGE.png",
    ADA: "images/ADA.png",
    TRX: "images/TRX.png"
  };
  
  const currencyColors = {
    BTC: "#f7931a",
    ETH: "#627eea",
    USDT: "#26a17b",
    XRP: "#25aae1",
    BNB: "#f3ba2f",
    SOL: "#66f9a1",
    USDC: "#2775ca",
    DOGE: "#c2a633",
    ADA: "#0033ad",
    TRX: "#ec1f27"
  };  
  
  // --------- SMOOTH TEXT TRANSITION ---------
  
  let lastFact = "";
  let lastQuote = "";
  
  function smoothTextChange(element, newText) {
    element.style.opacity = 0;
    setTimeout(() => {
      element.textContent = newText;
      element.style.opacity = 1;
    }, 300);
  }
  
  function getRandomDifferentItem(array, lastItem) {
    let newItem;
    do {
      newItem = array[Math.floor(Math.random() * array.length)];
    } while (newItem === lastItem && array.length > 1);
    return newItem;
  }
  
  function updateFunFact() {
    const box = document.getElementById("fun-fact-box");
    const fact = getRandomDifferentItem(funFacts, lastFact);
    lastFact = fact;
    smoothTextChange(box, `💡 ${fact}`);
  }
  
  function updateQuote() {
    const box = document.getElementById("quote-box");
    const quote = getRandomDifferentItem(quotes, lastQuote);
    lastQuote = quote;
    smoothTextChange(box, `🧠 ${quote}`);
  }
  
  setInterval(updateFunFact, 8000);
  setInterval(updateQuote, 12000);

 
  
  // --------- AUTO REFRESH ---------
  
  setInterval(updateFunFact, 8000); // every 8 seconds
  setInterval(updateQuote, 12000); // every 12 seconds
  
  // --------- DARK MODE TOGGLE ---------
  
  document.getElementById("dark-mode-slider").addEventListener("change", function () {
    document.body.classList.toggle("dark-mode");
    document.getElementById("mode-label").textContent = this.checked ? "Dark Mode" : "Light Mode";
  });
  
  // --------- STICKY NAV + SCROLL HIGHLIGHT ---------
  
  const navLinks = document.querySelectorAll("nav a");
  window.addEventListener("scroll", () => {
    let fromTop = window.scrollY;
    navLinks.forEach(link => {
      const section = document.querySelector(link.getAttribute("href"));
      if (
        section.offsetTop <= fromTop + 60 &&
        section.offsetTop + section.offsetHeight > fromTop + 60
      ) {
        navLinks.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
      }
    });
  });
  
  // --------- INITIALIZE ON LOAD ---------
  
  document.addEventListener("DOMContentLoaded", () => {
    updateFunFact();
    updateQuote();
    loadNews();
    loadTips();
    initMap();
    initChart();
  });
  
  // --------- LOAD NEWS + TIPS ---------
  
  function loadNews() {
    const container = document.getElementById("news-container");
    newsArticles.forEach(article => {
      const div = document.createElement("div");
      div.className = "info-box";
      div.innerHTML = `<h4>${article.title}</h4><p>${article.summary}</p><small>${article.date}</small>`;
      container.appendChild(div);
    });
  }
  
  function loadTips() {
    const container = document.getElementById("tips-container");
    learningTips.forEach(tip => {
      const div = document.createElement("div");
      div.className = "info-box";
      div.innerHTML = `<p>📘 ${tip}</p>`;
      container.appendChild(div);
    });
  }
  
  // --------- MAP SETUP ---------
  
let map;
let geojsonLayer;
let metric = "bitcoinAdoption"; // default metric
const drawnItems = new L.FeatureGroup();

let tableFeatures = [];

function loadGeoJSON(geojson) {
  if (geojsonLayer) map.removeLayer(geojsonLayer);

  geojsonLayer = L.geoJSON(geojson, {
    onEachFeature: function (feature, layer) {
      tableFeatures.push({ feature, layer });
    }
  }).addTo(map);
}


const purpleClasses = [0, 100000, 200000, 500000, 1000000];
const pinkClasses = [1.0, 1.5, 2.0, 3.0, 5.0];

function getColor(value, classes, scheme) {
  if (value == null || isNaN(value)) return "#ccc";

  const colorSchemes = {
    purple: ["#f2f0f7", "#cbc9e2", "#9e9ac8", "#756bb1", "#54278f", "#3f007d"],
    pink: ["#fde0dd", "#fa9fb5", "#f768a1", "#dd3497", "#ae017e", "#7a0177"]
  };

  const colors = colorSchemes[scheme];

  if (value <= classes[0]) return colors[0];
  if (value <= classes[1]) return colors[1];
  if (value <= classes[2]) return colors[2];
  if (value <= classes[3]) return colors[3];
  if (value <= classes[4]) return colors[4];
  return colors[5];
}

function styleFeature(feature) {
  const value = feature.properties[metric];

  const scheme = metric === "bitcoinAdoption" ? "purple" : "pink";
  const classes = metric === "bitcoinAdoption" ? purpleClasses : pinkClasses;

  return {
    fillColor: getColor(value, classes, scheme),
    weight: 1,
    opacity: 1,
    color: "#666",
    fillOpacity: 0.7
  };
}

function initMap() {
  map = L.map("map-container").setView([51, 10], 4);

  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://carto.com/">CartoDB</a>',
    subdomains: 'abcd',
    maxZoom: 19
  }).addTo(map);

  // Legend setup
  const legendControl = L.control({ position: 'bottomleft' });

  legendControl.onAdd = function () {
    const div = L.DomUtil.create('div', 'legend');
    div.innerHTML = '';
    return div;
  };

  legendControl.addTo(map);

function updateLegend() {
  const legendDiv = document.querySelector('.legend');
  const isPeople = metric === 'bitcoinAdoption';
  const classes = isPeople ? purpleClasses : pinkClasses;
  const scheme = isPeople ? 'purple' : 'pink';
  const colors = {
    purple: ["#f2f0f7", "#cbc9e2", "#9e9ac8", "#756bb1", "#54278f", "#3f007d"],
    pink: ["#fde0dd", "#fa9fb5", "#f768a1", "#dd3497", "#ae017e", "#7a0177"]
  }[scheme];

  let html = `<strong>${isPeople ? "Crypto Ownership (People)" : "Crypto Owneship (%)"}</strong><br>`;
  for (let i = 0; i < classes.length; i++) {
    const from = classes[i];
    const to = classes[i + 1];
    const label = isPeople
      ? `${from.toLocaleString("en-US").replace(/,/g, " ")}${to ? ` – ${to.toLocaleString("en-US").replace(/,/g, " ")}` : '+'}`
      : `${from}${to ? ` – ${to}` : '+'}%`;
    html += `<i style="background:${colors[i]}; width: 12px; height: 12px; display:inline-block; margin-right: 6px;"></i> ${label}<br>`;
  }

  legendDiv.innerHTML = html;
}

fetch("map.geo.json")
  .then(response => response.json())
  .then(data => {
    loadGeoJSON(data); // <== This populates tableFeatures

    geojsonLayer.eachLayer(layer => {
      const props = layer.feature.properties;
      const popup = `
        <strong>${props.name}</strong><br/>
        Crypto Adoption: ${props.bitcoinAdoption?.toLocaleString("en-US").replace(/,/g, " ") || "N/A"} people<br/>
        Crypto Adoption Percentage: ${props.bitcoinAdoptionPercentage || "N/A"}%
      `;
      layer.bindPopup(popup);
      layer.setStyle(styleFeature(layer.feature));
    });

    updateLegend(); // call legend
    document.getElementById("metric-select").addEventListener("change", e => {
      metric = e.target.value;
      updateMapColors();
      updateLegend();
    });
  });

  function updateMapColors() {
    geojsonLayer.eachLayer(layer => {
      layer.setStyle(styleFeature(layer.feature));
    });
  }

map.addLayer(drawnItems);

const drawControl = new L.Control.Draw({
  draw: {
    polygon: true,
    marker: true,
    circle: false,
    circlemarker: false,
    rectangle: false,
    polyline: false
  },
  edit: {
    featureGroup: drawnItems
  }
});

function populateTable() {
  const tbody = document.querySelector("#attribute-table tbody");
  tbody.innerHTML = "";

  tableFeatures.forEach(({ feature, layer }, index) => {
    const tr = document.createElement("tr");

    const people = feature.properties.bitcoinAdoption;
    const percent = feature.properties.bitcoinAdoptionPercentage;

    tr.innerHTML = `
      <td>${feature.properties.name}</td>
      <td>${people != null ? people.toLocaleString("en-US").replace(/,/g, " ") : "N/A"}</td>
      <td>${percent != null ? percent + "%" : "N/A"}</td>
      <td>
        <button class="zoom-btn" data-idx="${index}">Zoom</button>
        <button class="edit-btn" data-idx="${index}">Edit</button>
        <button class="delete-btn" data-idx="${index}">Delete</button>
      </td>
    `;


    tbody.appendChild(tr);
  });
}

document.querySelector("#attribute-table").addEventListener("click", function (e) {
  const idx = e.target.dataset.idx;
  if (!idx) return;

  const { layer, feature } = tableFeatures[idx];

  if (e.target.classList.contains("zoom-btn")) {
    map.fitBounds(layer.getBounds());
  } else if (e.target.classList.contains("delete-btn")) {
    map.removeLayer(layer);
    tableFeatures.splice(idx, 1);
    populateTable();
  } else if (e.target.classList.contains("edit-btn")) {
    const newName = prompt("New country name:", feature.properties.name);
    const newVal = prompt("New value:", feature.properties.value);
    if (newName !== null) feature.properties.name = newName;
    if (newVal !== null) feature.properties.value = newVal;
    populateTable();
  }
});

document.getElementById("search-input").addEventListener("input", function () {
  const filterText = this.value.toLowerCase();
  document.querySelectorAll("#attribute-table tbody tr").forEach(tr => {
    const name = tr.querySelector("td").textContent.toLowerCase();
    tr.style.display = name.includes(filterText) ? "" : "none";
  });
});

document.getElementById("load-attributes-btn").addEventListener("click", () => {
  populateTable();
});



map.addControl(drawControl);
map.on(L.Draw.Event.CREATED, function (e) {
  const layer = e.layer;

  if (e.layerType === 'marker') {
    layer.bindPopup("New Point").openPopup();
  } else if (e.layerType === 'polygon') {
    layer.bindPopup("New Polygon").openPopup();
  }

  drawnItems.addLayer(layer);  // <== Add to feature group, not directly to map
});

function createBuffer(latlng, radiusMeters = 500) {
  const circle = L.circle(latlng, {
    radius: radiusMeters,
    color: "red",
    fillColor: "#f03",
    fillOpacity: 0.5
  }).addTo(map);

  circle.bindPopup(`Buffer (${radiusMeters} m)`).openPopup();
}
document.getElementById("add-buffer").addEventListener("click", () => {
  map.once("click", (e) => {
    createBuffer(e.latlng, 1000);
  });
});

}

document.addEventListener("DOMContentLoaded", initMap);

  
  // --------- CHART ---------

let chart;

function initChart() {
  const ctx = document.getElementById("lineChart").getContext("2d");

  // Create the chart instance
  chart = new Chart(ctx, {
    type: "line",
    data: {
      labels: historicalData["BTC"].years,
      datasets: [{
        label: "BTC",
        data: historicalData["BTC"].values,
        borderColor: "#f7931a",
        backgroundColor: "rgba(247, 147, 26, 0.2)",
        tension: 0
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "top"
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: "Year"
          }
        },
        y: {
          beginAtZero: false,
          title: {
            display: true,
            text: "Value (USD)"
          }
        }
      }
    }
  });

  // Setup dropdown options dynamically
  const select = document.getElementById("currency-select");
  select.innerHTML = ""; // clear existing
  Object.keys(historicalData).forEach(currency => {
    const option = document.createElement("option");
    option.value = currency;
    option.textContent = currency;
    select.appendChild(option);
  });

  // Add event listener to update on dropdown change
  select.addEventListener("change", function () {
    const selected = this.value;

    // Update chart data
    chart.data.labels = historicalData[selected].years;
    chart.data.datasets[0].label = selected;
    chart.data.datasets[0].data = historicalData[selected].values;
    chart.data.datasets[0].borderColor = currencyColors[selected];
    chart.data.datasets[0].backgroundColor = Chart.helpers.color(currencyColors[selected]).alpha(0.2).rgbString();
    chart.update();

    // Update icon and label
    const iconEl = document.getElementById("currency-icon");
    const nameEl = document.getElementById("currency-name");

    iconEl.src = currencyIcons[selected];
    iconEl.style.display = "inline-block";
    nameEl.textContent = `${selected} (${selected})`; // Optionally use full name
  });

  // ✅ Default selection on load
  const defaultCurrency = "BTC";
  select.value = defaultCurrency;

  chart.data.datasets[0].label = defaultCurrency;
  chart.data.datasets[0].data = historicalData[defaultCurrency].values;
  chart.data.datasets[0].borderColor = currencyColors[defaultCurrency];
  chart.data.datasets[0].backgroundColor = Chart.helpers.color(currencyColors[defaultCurrency]).alpha(0.2).rgbString();
  chart.update();

  const iconEl = document.getElementById("currency-icon");
  const nameEl = document.getElementById("currency-name");

  iconEl.src = currencyIcons[defaultCurrency];
  iconEl.style.display = "inline-block";
  nameEl.textContent = `${defaultCurrency} (${defaultCurrency})`;
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
  initChart();
  updateAttributeTable(); // Auto-load table on startup
});



// ---------------------------------------------
// 🔹 Добавяне на нови обекти чрез клик върху картата
// ---------------------------------------------

map.on('click', function (e) {
  const latlng = e.latlng;

  const name = prompt("Въведи име на обекта:");
  const type = prompt("Въведи тип на обекта (напр. сграда, път и т.н.):");

  if (!name || !type) return;

  // Създай GeoJSON обект
  const newFeature = {
    type: "Feature",
    properties: {
      name: name,
      type: type
    },
    geometry: {
      type: "Point",
      coordinates: [latlng.lng, latlng.lat]
    }
  };

  // Добави към слоя
  L.geoJSON(newFeature, {
    onEachFeature: onEachFeature // Важно: трябва да имаш дефинирана тази функция!
  }).addTo(map);

  // Добави в таблицата
  addToAttributeTable(newFeature);
});

function addToAttributeTable(feature) {
  const table = document.getElementById('attribute-table').getElementsByTagName('tbody')[0];
  const row = table.insertRow();

  const nameCell = row.insertCell(0);
  const typeCell = row.insertCell(1);
  const latCell = row.insertCell(2);
  const lonCell = row.insertCell(3);
  const actionCell = row.insertCell(4);

  nameCell.textContent = feature.properties.name;
  typeCell.textContent = feature.properties.type;
  latCell.textContent = feature.geometry.coordinates[1].toFixed(5);
  lonCell.textContent = feature.geometry.coordinates[0].toFixed(5);

  // Бутон за изтриване
  const deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = '🗑️';
  deleteBtn.onclick = function () {
    map.eachLayer(function (layer) {
      if (layer.feature && layer.feature.properties.name === feature.properties.name) {
        map.removeLayer(layer);
      }
    });
    row.remove();
  };
  actionCell.appendChild(deleteBtn);
}

function onEachFeature(feature, layer) {
  const props = feature.properties;
  layer.bindPopup(`
    <b>${props.name}</b><br/>
    Тип: ${props.type}
  `);
}

function onEachFeature(feature, layer) {
  const props = feature.properties;

  // Popup с бутон за редакция
  const popupContent = `
    <b>${props.name}</b><br/>
    Тип: ${props.type}<br/>
    <button onclick="editFeature('${props.name}')">✏️ Редактирай</button>
  `;

  layer.bindPopup(popupContent);
}

function editFeature(name) {
  // Намери слоя с това име
  let targetLayer = null;

  map.eachLayer(layer => {
    if (layer.feature && layer.feature.properties.name === name) {
      targetLayer = layer;
    }
  });

  if (!targetLayer) return alert("Обектът не е намерен.");

  const newName = prompt("Ново име:", targetLayer.feature.properties.name);
  const newType = prompt("Нов тип:", targetLayer.feature.properties.type);

  if (!newName || !newType) return;

  // Обнови свойствата
  targetLayer.feature.properties.name = newName;
  targetLayer.feature.properties.type = newType;

  // Обнови popup
  targetLayer.bindPopup(`
    <b>${newName}</b><br/>
    Тип: ${newType}<br/>
    <button onclick="editFeature('${newName}')">✏️ Редактирай</button>
  `);

  // Презареди таблицата
  updateAttributeTable();
}

function updateAttributeTable() {
  const tbody = document.getElementById('attribute-table').getElementsByTagName('tbody')[0];
  tbody.innerHTML = ''; // Изчисти

  map.eachLayer(layer => {
    if (layer.feature) {
      addToAttributeTable(layer.feature); // Използваш съществуващата функция
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const loadBtn = document.getElementById("load-attributes-btn");
  if (loadBtn) {
    loadBtn.addEventListener("click", updateAttributeTable);
  }
});


deleteBtn.onclick = function () {
  deleteFeatureByName(feature.properties.name);
};

function deleteFeatureByName(name) {
  // Премахни слоя
  map.eachLayer(layer => {
    if (layer.feature && layer.feature.properties.name === name) {
      map.removeLayer(layer);
    }
  });

  // Премахни реда от таблицата
  const tbody = document.getElementById('attribute-table').getElementsByTagName('tbody')[0];
  for (let i = 0; i < tbody.rows.length; i++) {
    if (tbody.rows[i].cells[0].textContent === name) {
      tbody.deleteRow(i);
      break;
    }
  }
}

function bufferAllPoints(distanceInKm) {
  const features = [];

  map.eachLayer(layer => {
    if (layer.feature && layer.feature.geometry.type === 'Point') {
      features.push(layer.feature);
    }
  });

  const buffered = features.map(f => turf.buffer(f, distanceInKm, { units: 'kilometers' }));

  // Обедини всички буфери в една геометрия
  const union = turf.union(...buffered);

  // Добави на картата
  L.geoJSON(union, {
    style: {
      color: 'blue',
      fillColor: 'lightblue',
      fillOpacity: 0.4
    }
  }).addTo(map);
}
