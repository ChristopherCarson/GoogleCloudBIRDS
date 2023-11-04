const { exec } = require('child_process');

exports.runScript = async (req, res) => {
    // Define the command to run
    const command = `npx cross-env PLAYWRIGHT_BROWSERS_PATH=0 SCRIPT=${req.body.script} MY_PASS=${req.body.password} npx playwright test ./tests --reporter=list`;
    // const command = 'date'

    // Execute the command
    exec(command, (error, stdout, stderr) => {
      if (error) {
        // Send a response with the error
        // console.log(`exec error: ${error} ${stderr}`)
        res.status(500).send({ error: `exec error: ${error} ${stderr}` });
        return;
      }
  
      // Send a response with the command's output
      res.status(200).send({ stdout });
    });
  };

//   const req = {
//     body: {
//         script: 'salesreps',
//         password: 'cxb*hna!jur4ntf9ZER'
//     }
//   }

//   exports.runScript(req, {})