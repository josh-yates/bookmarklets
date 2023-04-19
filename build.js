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
<br />
<table>
  <tbody>
    <tr>
        <th>Company</th>
        <th>Contact</th>
        <th>Country</th>
    </tr>
    <tr>
        <td>Alfreds Futterkiste</td>
        <td>Maria Anders</td>
        <td>Germany</td>
    </tr>
    <tr>
        <td>Centro comercial Moctezuma</td>
        <td>Francisco Chang</td>
        <td>Mexico</td>
    </tr>
    <tr>
        <td>Ernst Handel</td>
        <td>Roland Mendel</td>
        <td>Austria</td>
    </tr>
    <tr>
        <td>Island Trading</td>
        <td>Helen Bennett</td>
        <td>UK</td>
    </tr>
    <tr>
        <td>Laughing Bacchus Winecellars</td>
        <td>Yoshi Tannamuri</td>
        <td>Canada</td>
    </tr>
    <tr>
        <td>Magazzini Alimentari Riuniti</td>
        <td>Giovanni Rovelli</td>
        <td>Italy</td>
    </tr>
</tbody>
</table>
<br />
<table>
<tr>
  <th>Person 1</th>
  <th>Person 2</th>
  <th>Person 3</th>
</tr>
<tr>
  <td>Emil</td>
  <td>Tobias</td>
  <td>Linus</td>
</tr>
<tr>
  <td>16</td>
  <td>14</td>
  <td>10</td>
</tr>
</table> 
</body>
</html>
`);