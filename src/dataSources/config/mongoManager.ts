import { MongoClient } from "mongodb";

export class MongoManager {
  public static instace: MongoManager;
  private client: MongoClient | null = null;
  private constructor() {}

  public static getInstace(): MongoManager {
    if (!MongoManager.instace) {
      MongoManager.instace = new MongoManager();
    }
    return MongoManager.instace;
  }

  public async connect(url: string) {
    if (!this.client) {
      this.client = await MongoClient.connect(url);
    }
  }
}
