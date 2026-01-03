// Routes: replace the placeholder images in /assets/routes with your real route images.
// Filenames must stay the same (e.g., assets/routes/hippo.png).
const routes = {
  "hippo": { label: "Hippo Route", img: "assets/routes/hippo.png" },
  "bunny": { label: "Bunny Route", img: "assets/routes/bunny.png" },
  "iguana": { label: "Iguana Route", img: "assets/routes/iguana.png" },
  "beetle": { label: "Beetle Route", img: "assets/routes/beetle.png" },
  "croc": { label: "Croc Route", img: "assets/routes/croc.png" },
  "giraffe": { label: "Giraffe Route", img: "assets/routes/giraffe.png" },
  "bird": { label: "Bird Route", img: "assets/routes/bird.png" },
  "ladybug": { label: "Ladybug Route", img: "assets/routes/ladybug.png" },
  "tortoise": { label: "Tortoise Route", img: "assets/routes/tortoise.png" },
  "frog": { label: "Frog Route", img: "assets/routes/frog.png" },
  "mouse": { label: "Mouse Route", img: "assets/routes/mouse.png" },
  "fish": { label: "Fish Route", img: "assets/routes/fish.png" },
};

const mapScreen = document.getElementById("mapScreen");
const routeScreen = document.getElementById("routeScreen");
const routeTitle = document.getElementById("routeTitle");
const routeImg = document.getElementById("routeImg");
const backBtn = document.getElementById("backBtn");
const hint = document.getElementById("hint");

function showRoute(key) {
  const r = routes[key];
  if (!r) return;

  routeTitle.textContent = r.label;
  routeImg.src = r.img;
  routeImg.alt = r.label;

  mapScreen.style.display = "none";
  routeScreen.style.display = "block";
  backBtn.style.display = "inline-block";
  hint.textContent = "Follow the route image. Tap Back to return.";
  location.hash = key;
  window.scrollTo({ top: 0, behavior: "instant" });
}

function showMap() {
  mapScreen.style.display = "block";
  routeScreen.style.display = "none";
  backBtn.style.display = "none";
  hint.textContent = "Tap your animal on the map.";
  history.replaceState(null, "", window.location.pathname + window.location.search);
}

document.addEventListener("click", (e) => {
  const el = e.target.closest("[data-animal]");
  if (!el) return;
  showRoute(el.dataset.animal);
});

backBtn.addEventListener("click", showMap);

// Open directly to a route via #animal
const fromHash = location.hash.replace("#", "");
if (routes[fromHash]) showRoute(fromHash);

// Optional PWA service worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  });
}
