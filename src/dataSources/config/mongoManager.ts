import { Collection, MongoClient } from "mongodb";

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

  public getCollection(name: string): Collection {
    if (!this.client) throw new Error("MongoClient is not connect");
    return this.client?.db().collection(name);
  }
}
