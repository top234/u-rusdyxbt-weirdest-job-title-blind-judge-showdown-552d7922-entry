// Entri: Weirdest Job Title — Blind Judge Showdown.
// Menulis satu judul pekerjaan ke entry.txt di direktori output.
// Judul ditulis tanpa newline di akhir, persis seperti yang dinilai juri.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TITLE = "Taste Tester for Gas Station Sushi";
const FILENAME = "entry.txt";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, FILENAME), TITLE, "utf8");
