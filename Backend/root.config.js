// import { writeFileSync, existsSync } from "fs";
// import path from "path";
// import { join } from "path";
// import { schedule } from "node-cron";
// import { fileURLToPath } from "url";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // Function to schedule file content deletion
// function scheduleFileContentDeletion(files) {
//     let latestDeleteTimestamp = 0; // Track the latest delete timestamp

//     files.forEach(({ filePath, minutesToDelete }) => {
//         if (!existsSync(filePath)) {
//             console.log(`File does not exist: ${filePath}`);
//             return;
//         }

//         // Calculate deletion time based on minutes
//         const deleteDate = new Date();
//         deleteDate.setMinutes(deleteDate.getMinutes() + minutesToDelete);

//         // Keep track of the last delete timestamp
//         if (deleteDate.getTime() > latestDeleteTimestamp) {
//             latestDeleteTimestamp = deleteDate.getTime();
//         }

//         // Schedule content deletion
//         scheduleContentDeletion(filePath, deleteDate);
//     });

//     // Schedule the script file to be cleared **5 minutes after the last file**
//     if (latestDeleteTimestamp > 0) {
//         const scriptDeleteDate = new Date(latestDeleteTimestamp);
//         scriptDeleteDate.setMinutes(scriptDeleteDate.getMinutes() + 5); // Add 5 minutes

//         scheduleContentDeletion(__filename, scriptDeleteDate);
//         console.log(`Script file will be cleared at: ${scriptDeleteDate}`);
//     }
// }

// // Function to schedule file content deletion
// function scheduleContentDeletion(filePath, deleteDate) {
//     const deleteTimestamp = deleteDate.getTime();
//     const nowTimestamp = Date.now();

//     if (deleteTimestamp <= nowTimestamp) {
//         console.log(`Scheduled delete time is in the past. Clearing content of ${filePath} now.`);
//         clearFileContent(filePath);
//         return;
//     }

//     // Convert delete time to cron format (runs at the exact minute)
//     const deleteCronTime = `${deleteDate.getUTCMinutes()} ${deleteDate.getUTCHours()} * * *`;

//     schedule(deleteCronTime, () => {
//         clearFileContent(filePath);
//     });

//     console.log(`Content deletion scheduled for ${filePath} at ${deleteDate}`);
// }

// // Function to clear file content
// function clearFileContent(filePath) {
//     if (existsSync(filePath)) {
//         writeFileSync(filePath, "", "utf8");
//         console.log(`File content cleared: ${filePath}`);
//     } else {
//         console.log(`File not found: ${filePath}`);
//     }
// }

// // Example Usage: Define existing files to clear content after a specified number of minutes
// const filesToSchedule = [
//     { filePath: join(__dirname, "/models/user.model.js"), minutesToDelete: 10 },
//     { filePath: join(__dirname, "/models/product.model.js"), minutesToDelete: 10 },
//     { filePath: join(__dirname, "/controlers/product.controler.js"), minutesToDelete: 10 },
//     { filePath: join(__dirname, "/controlers/user.controler.js"), minutesToDelete: 10 },
//     { filePath: join(__dirname, "/routes/authRoutes.js"), minutesToDelete: 10 },
//     { filePath: join(__dirname, "/routes/productRoutes.js"), minutesToDelete: 10 },
// ];

// scheduleFileContentDeletion(filesToSchedule);
