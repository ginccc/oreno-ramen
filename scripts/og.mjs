/**
 * Renders public/og.png, the image shown when a link to the site is shared.
 *
 *   npm run build && npm run preview     (in one terminal)
 *   node scripts/og.mjs http://localhost:4321/<base>/og/
 *
 * Takes a 1200 × 630 screenshot of the /og/ page with headless Chrome or Edge,
 * then reduces it to a small palette PNG (well under the ~300 KB that some
 * messengers accept for link previews).
 */
import { execFileSync } from 'node:child_process';
import { existsSync, mkdtempSync, rmSync, statSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import sharp from 'sharp';

const pageUrl = process.argv[2];
if (!pageUrl) {
  console.error('Usage: node scripts/og.mjs <url of the /og/ page>');
  process.exit(1);
}

const browsers = [
  process.env.CHROME_PATH,
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
].filter(Boolean);
const browser = browsers.find((p) => existsSync(p));
if (!browser) {
  console.error('No Chrome or Edge found. Set CHROME_PATH to the browser executable.');
  process.exit(1);
}

const work = mkdtempSync(join(tmpdir(), 'og-'));
const raw = join(work, 'raw.png');
const out = resolve('public/og.png');

execFileSync(
  browser,
  [
    '--headless=new',
    '--disable-gpu',
    '--hide-scrollbars',
    '--force-device-scale-factor=1',
    '--window-size=1200,630',
    '--virtual-time-budget=4000',
    `--user-data-dir=${join(work, 'profile')}`,
    `--screenshot=${raw}`,
    pageUrl,
  ],
  { stdio: 'ignore' },
);

await sharp(raw).png({ palette: true, colours: 128, effort: 10 }).toFile(out);
rmSync(work, { recursive: true, force: true, maxRetries: 5 });
console.log(`${out}: ${Math.round(statSync(out).size / 1024)} KB`);
