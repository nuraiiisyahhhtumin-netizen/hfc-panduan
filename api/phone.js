import { neon } from "@neondatabase/serverless";

export default async function handler(req, res) {
  const sql = neon(process.env.DATABASE_URL);

  const result = await sql`
    SELECT phone FROM organization LIMIT 1
  `;

  res.status(200).json({
    phone: result[0].phone
  });
}
