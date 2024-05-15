import app from "./app";
import { PORT } from "./conf/config";
import Logger from "./libs/logger";

app.listen(app.get("port"), () => {
  Logger.info(`Server running on port ${PORT}`);
});

app.listen();
