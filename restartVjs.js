const fs = require("fs");
const { spawn } = require("child_process");
async function wacthFiles() {
  try {
    let childRefrence = spawn("node", ["intercepter.js"], { stdio: "inherit" });
    //wacth intercepter
    const wacthIntercepter = fs.watch(
      "./intercepter.js",
      { persistent: true },
      (event, filename) => {
        if (event === "change") {
          if (childRefrence) {
            childRefrence.kill(1);
            childRefrence = spawn("node", ["intercepter.js"], {
              stdio: "inherit",
            });
            process.stdout.write(`server restarting due to changes \n`);
          }
        }
      },
    );
    //wacth backend
    const wacthBackend = fs.watch(
      "./server/backend.js",
      { persistent: true },
      (event, filename) => {
        if (event === "change") {
          if (childRefrence) {
            childRefrence.kill(1);
            childRefrence = spawn("node", ["intercepter.js"], {
              stdio: "inherit",
            });
            process.stdout.write(`server restarting due to changes \n`);
          }
        }
      },
    );
    //wacth frontend
    const wacthFrontend = fs.watch(
      "./client/frontend.js",
      { persistent: true },
      (event, filename) => {
        if (event === "change") {
          if (childRefrence) {
            childRefrence.kill(1);
            childRefrence = spawn("node", ["intercepter.js"], {
              stdio: "inherit",
            });
            process.stdout.write(`server restarting due to changes \n`);
          }
        }
      },
    );
  } catch (error) {
    process.stderr.write(`vjs restart run into an error: ${error}\n`);
  }
}
wacthFiles();
