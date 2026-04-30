const { execSync } = require('child_process');

try {
  console.log('Generating Prisma Client...');
  
  execSync('node ./node_modules/prisma/build/index.js generate', {
    stdio: 'inherit',
  });

  console.log('Prisma generated successfully!');
} catch (err) {
  console.error('Prisma generation failed:', err);
  process.exit(1);
}