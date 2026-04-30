const { execSync } = require('child_process');

try {
  execSync('node node_modules/prisma/build/index.js generate', {
    stdio: 'inherit',
  });
} catch (e) {
  console.error('Prisma generate failed:', e);
  process.exit(1);
}