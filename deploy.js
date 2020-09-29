/* eslint-disable no-console */
const execa = require("execa");
const fs = require("fs");
const rimraf = require("rimraf");

(async () => {
  try {
    await cleanUpBranch();
    await execa("git", ["checkout", "--orphan", "gh-pages"]);
    // eslint-disable-next-line no-console
    console.log("Building started...");
    await execa("npm", ["run", "build"]);
    // Understand if it's dist or build folder
    const folderName = fs.existsSync("dist") ? "dist" : "build";
    await execa("git", ["--work-tree", folderName, "add", "--all"]);
    await execa("git", ["--work-tree", folderName, "commit", "-m", "gh-pages"]);
    console.log("Pushing to gh-pages...");
    await execa("git", ["push", "origin", "HEAD:gh-pages", "--force"]);
    rimraf.sync(folderName);
    await cleanUpBranch();
    console.log("Successfully deployed, check your settings");
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e.message);
    process.exit(1);
  }
})();

async function cleanUpBranch() {
  console.log('Clean up gh-pages branch...');
  await execa("git", ["checkout", "-f", "master"]);
  await execa("git", ["branch", "-D", "gh-pages"]);
}
