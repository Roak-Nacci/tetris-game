const api = require('/usr/lib/node_modules/openclaw/dist/extensions/feishu/api.js');

async function main() {
  // Set up runtime
  api.setFeishuRuntime({
    appId: process.env.FEISHU_APP_ID || 'cli_xxx',
    appSecret: process.env.FEISHU_APP_SECRET || 'xxx'
  });
  
  // Send image to user
  const result = await api.sendImageFeishu(
    'ou_087a23124893fa47323cc3bafe2f3577', // user ID
    '/root/.openclaw/workspace/tetris-screenshot.png'
  );
  
  console.log('Result:', JSON.stringify(result, null, 2));
}

main().catch(console.error);
