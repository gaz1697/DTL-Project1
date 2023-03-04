import client from "../database";
import bcrypt from "bcrypt";

export type User = {
  id?: number;
  username: string;
  password_digest: string;
};

export class UserStore {
  index = async (): Promise<User[]> => {
    const sql = "SELECT * FROM users";
    const conn = await client.connect();
    const result = await conn.query(sql);
    conn.release();
    return result.rows;
  };
}
