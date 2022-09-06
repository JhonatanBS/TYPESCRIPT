import mongoose from "mongoose";
import config from "config";

/* Logger */
import Logger from "./logger";

async function connect() {
  const dbUri = config.get<string>("dbUri");
  
  try {
    await mongoose.connect(dbUri);
    Logger.info("Conectou ao Banco de dados");
  } catch (error) {
    Logger.error("Não foi possível conectar!");
    Logger.error(`Erro: ${error}`);
    process.exit(1);
  }
}

export default connect;