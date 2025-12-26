const fs = require('fs');
const path = require('path');

const buildDir = path.join(__dirname, '..', '.next');
const scriptPath = path.join(__dirname, '..', 'public', 'dashboard-console-capture.js');

function injectScript(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  if (content.includes('dashboard-console-capture.js')) {
    return;
  }
  
  const scriptTag = '<script src="/dashboard-console-capture.js"></script>';
  
  if (content.includes('</head>')) {
    content = content.replace('</head>', `${scriptTag}</head>`);
  } else if (content.includes('<body>')) {
    content = content.replace('<body>', `<body>${scriptTag}`);
  }
  
  fs.writeFileSync(filePath, content);
  console.log(`Injected console capture script into ${filePath}`);
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      walkDir(filePath);
    } else if (path.extname(file) === '.html') {
      injectScript(filePath);
    }
  });
}

if (fs.existsSync(buildDir)) {
  walkDir(buildDir);
  console.log('Console capture script injection complete');
} else {
  console.log('Build directory not found. Run build first.');
}