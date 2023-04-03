import { GasPlugin } from "npm:esbuild-gas-plugin";
import { denoPlugin } from "https://deno.land/x/esbuild_deno_loader@0.6.0/mod.ts";
import { build, stop } from "https://deno.land/x/esbuild@v0.17.3/mod.js";

const whisperBuildOptions = {
  entryPoints: ["src/whisper.ts"],
  minify: true,
  bundle: true,
  outfile: "dist/whisper.js",
  target: "es2020",
  plugins: [denoPlugin(), GasPlugin],
};

// Create an output folder
await Deno.mkdir("dist", { recursive: true });
// Copy appsscript.json
await Deno.copyFile("src/appsscript.json", "dist/appsscript.json");
// Build TypeScript files
await build(whisperBuildOptions).catch((err: Error) => {
  console.error(err);
});

// stop esbuild worker
stop();
