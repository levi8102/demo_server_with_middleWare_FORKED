import { app } from "./app.js";
import { PORT } from "./configs/server.config.js";
import { connectToDatabase } from "./configs/db.config.js";

async function startServer() {
    await connectToDatabase();
    app.listen(PORT, () => {
        console.log(`[server]: started at PORT: ${PORT}`);
    });
}

startServer();