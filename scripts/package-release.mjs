import { execFile } from "node:child_process";
import { promisify } from "node:util";
const exec = promisify(execFile);
await exec("zip", ["-rq", "printable-goal-trackers-v1.0.0.zip", "templates", "previews", "README.md", "CONTENT-LICENSE.md"]);
console.log("Created printable-goal-trackers-v1.0.0.zip");
