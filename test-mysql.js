// test-mysql.js
const mysql = require('mysql2/promise');

async function test() {
  try {
    const conn = await mysql.createConnection({
      host: 'giang.mysql.database.azure.com',
      user: 'adminuser',
      password: 'Giang1172004',
      database: 'fashion_shop',
      ssl: {
        rejectUnauthorized: true
      }
    });

    console.log("✅ CONNECT OK");
    await conn.end();
  } catch (err) {
    console.error("❌ ERROR:", err);
  }
}

test();