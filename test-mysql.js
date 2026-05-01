const mysql = require('mysql2/promise');

(async () => {
  try {
    const conn = await mysql.createConnection({
      host: 'giang.mysql.database.azure.com',
      user: 'adminuser',
      password: 'Giang1172004',
      database: 'fashion_shop',
      ssl: {
        ca: require('fs').readFileSync('MysqlflexGlobalRootCA.crt.pem')
      }
    });

    console.log("✅ OK");
  } catch (e) {
    console.error("❌ REAL ERROR:", e);
  }
})();