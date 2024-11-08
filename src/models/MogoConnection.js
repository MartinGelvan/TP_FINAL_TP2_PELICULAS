/*
import { MongoClient } from "mongodb";
import config from "../server.js";


class MongoConnection{
   

    static client = new MongoClient(config.STRC)
    static db = this.client.db(config.NAMEBASE)

    static connect=async () => {
        await this.client.connect()
    }

}

export default MongoConnection

*/

import { MongoClient } from "mongodb";
import config from "../server.js";

class MongoConnection {
  static client = null;
  static db = null;

  static connect = async () => {
    try {
      this.client = new MongoClient(config.STRC, {
        tls: true,
        tlsInsecure: true
      });
      await this.client.connect();
      this.db = this.client.db(config.NAMEBASE);
      console.log("Connected to MongoDB successfully.");
    } catch (error) {
      console.error("Failed to connect to MongoDB:", error);
    }
  };
}

export default MongoConnection;
