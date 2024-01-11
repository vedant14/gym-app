import prisma from "../../utils/prisma";

function bigIntToString(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "bigint") {
      obj[key] = obj[key].toString();
    } else if (typeof obj[key] === "object" && obj[key] !== null) {
      bigIntToString(obj[key]);
    }
  }
}
// GET /api/users
export default async function handle(req, res) {
  if (req.method === "GET") {
    try {
      const users = await prisma.user.findMany();
      users.forEach((user) => bigIntToString(user));
      res.status(200).json(users);
    } catch (error) {
      console.error("Request error", error);
      res.status(500).json({ error: "Error fetching users" });
    }
  } else {
    // Handle any other HTTP method
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
}
