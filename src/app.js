import app from './config/express';
import appConfig from './config/appConfig';

const pid = process.pid;

const initServer = () => app.listen(appConfig.port, () => {
  console.log(`Main Process - ${pid} listening on port ${appConfig.port}!`);
});

// Turn on Server.
initServer();
