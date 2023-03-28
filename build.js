const bookmarkleter = require('bookmarkleter');
const ts = require('typescript');
const fs = require('fs');

fs.writeFileSync('dist/index.html', `
<!doctype html>
<html>
<head>
<title>Bookmarklets</title>
</head>
<body>
<ul>
${fs.readdirSync('src').map(fileName => `<li><a href="${bookmarkleter(ts.transpile(fs.readFileSync(`src/${fileName}`, { encoding: 'utf8' })))}">${fileName.replace('.ts', '')}</a></li>`)}
</ul>
</body>
</html>
`);