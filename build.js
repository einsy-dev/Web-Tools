import fs from "fs";

const pack = new Object(JSON.parse(fs.readFileSync("package.json", "utf-8")));

delete pack.scripts;

fs.writeFileSync(
	"dist/package.json",
	JSON.stringify(pack, null, 2)
)
fs.copyFileSync("README.md", "dist/README.md");
fs.copyFileSync("LICENSE", "dist/LICENSE");
