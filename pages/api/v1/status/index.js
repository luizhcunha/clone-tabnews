import database from "infra/database.js";

async function status(request, response) {
  const query = await database.query("SELECT 1 + 1 AS sum;");
  console.log(query.rows);
  console.log("Teste")
  response.status(200).json({ chave: "valor" });
}

export default status;
