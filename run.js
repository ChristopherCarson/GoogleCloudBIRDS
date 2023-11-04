const { exec } = require('child_process');

const run = async () => {
    // Define the command to run
    const command = `npx playwright test ./tests --reporter=list`;

    // Execute the command
    exec(command, (error, stdout, stderr) => {
      if (error) {
        // Send a response with the error
        console.log(`exec error: ${error} ${stderr}`)
        return;
      }
  
      // Send a response with the command's output
      console.log(`success! ${stdout}`)
    });
  };

run()