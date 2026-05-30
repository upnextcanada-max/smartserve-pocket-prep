const CACHE_NAME = "smartserve-pocket-prep-v19";
const ASSETS = [
  "./",
  "./index.html",
  "./styles.css",
  "./app-data.js",
  "./course-extra.js",
  "./official-exam-prep.js",
  "./2026-05-13-course-deep-dive.js",
  "./2026-05-13-id-license-masterclass.js",
  "./2026-05-20-consolidated-final-test.js",
  "./2026-05-20-missed-final-drill.js",
  "./2026-05-21-notebooklm-official-repair.js",
  "./app.js",
  "./manifest.webmanifest",
  "./assets/icon.svg",
  "./assets/icon-192.png",
  "./assets/icon-512.png",
  "./assets/2026-05-20_SmartServe_answer-key_voice-study.mp3"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(
      keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
    ))
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  const rangeHeader = event.request.headers.get("range");
  if (rangeHeader) {
    event.respondWith(handleRangeRequest(event.request, rangeHeader));
    return;
  }

  if (event.request.mode === "navigate") {
    event.respondWith(
      fetch(event.request).catch(() => caches.match("./index.html"))
    );
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        if (response.ok && new URL(event.request.url).origin === self.location.origin) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        }
        return response;
      })
      .catch(() => caches.match(event.request, { ignoreSearch: true }))
  );
});

async function handleRangeRequest(request, rangeHeader) {
  const cached = await caches.match(request, { ignoreSearch: true });
  if (!cached) return fetch(request);

  const blob = await cached.blob();
  const size = blob.size;
  const match = /^bytes=(\d*)-(\d*)$/.exec(rangeHeader);
  if (!match) return cached;

  let start = match[1] ? Number(match[1]) : 0;
  let end = match[2] ? Number(match[2]) : size - 1;

  if (!match[1] && match[2]) {
    const suffixLength = Number(match[2]);
    start = Math.max(size - suffixLength, 0);
    end = size - 1;
  }

  if (Number.isNaN(start) || Number.isNaN(end) || start > end || start >= size) {
    return new Response(null, {
      status: 416,
      headers: { "Content-Range": `bytes */${size}` }
    });
  }

  end = Math.min(end, size - 1);
  const chunk = blob.slice(start, end + 1, blob.type || "audio/mpeg");
  return new Response(chunk, {
    status: 206,
    statusText: "Partial Content",
    headers: {
      "Accept-Ranges": "bytes",
      "Content-Length": String(chunk.size),
      "Content-Range": `bytes ${start}-${end}/${size}`,
      "Content-Type": blob.type || "audio/mpeg"
    }
  });
}
