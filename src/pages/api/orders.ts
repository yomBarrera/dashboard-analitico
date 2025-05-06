// pages/api/data.ts
import { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import fs from "fs";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const filePath = path.join(process.cwd(), "public", "data", "db.json");
  const fileData = fs.readFileSync(filePath, "utf8");
  const orders = JSON.parse(fileData);

  res.status(200).json(orders);
}
