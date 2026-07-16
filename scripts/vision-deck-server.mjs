import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, join, normalize, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { exec } from "node:child_process";

const projectRoot = resolve(fileURLToPath(new URL("..", import.meta.url)));
const publicRoot = join(projectRoot, "public");
const host = "127.0.0.1";
const port = 43173;
const deckUrl = `http://${host}:${port}/VisionDeck/`;
const shouldOpen = process.argv.includes("--open");

const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".mp4": "video/mp4",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".webp": "image/webp"
};

function openDeck() {
  exec(`start "" "${deckUrl}"`, { windowsHide: true });
}

const server = createServer(async (request, response) => {
  try {
    const requestUrl = new URL(request.url || "/", deckUrl);
    let pathname = decodeURIComponent(requestUrl.pathname);
    if (pathname === "/") pathname = "/VisionDeck/";
    if (pathname.endsWith("/")) pathname += "index.html";

    const filePath = normalize(join(publicRoot, pathname));
    if (!filePath.startsWith(publicRoot)) {
      response.writeHead(403).end("Forbidden");
      return;
    }

    const fileStat = await stat(filePath);
    if (!fileStat.isFile()) throw new Error("Not a file");

    const content = await readFile(filePath);
    response.writeHead(200, {
      "Content-Type": mimeTypes[extname(filePath).toLowerCase()] || "application/octet-stream",
      "Cache-Control": "no-store",
      "Referrer-Policy": "strict-origin-when-cross-origin",
      "X-Content-Type-Options": "nosniff"
    });
    response.end(content);
  } catch {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Not found");
  }
});

server.on("error", (error) => {
  if (error.code === "EADDRINUSE" && shouldOpen) {
    openDeck();
    process.exit(0);
  }
  throw error;
});

server.listen(port, host, () => {
  console.log(`WINDUP Vision Deck: ${deckUrl}`);
  if (shouldOpen) openDeck();
});
