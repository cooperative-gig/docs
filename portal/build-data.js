/* Run with: node build-data.js. Regenerates data.js from the source Markdown files. */
const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..');
const read = name => fs.readFileSync(path.join(root, name), 'utf8');

function clean(value) { return value.trim().replace(/`/g, ''); }
function requirementSections(markdown) {
  let section = 'Introduction';
  const sections = [];
  for (const line of markdown.split(/\r?\n/)) {
    const heading = line.match(/^###?\s+\d+(?:\.\d+)?\s+(.+)/);
    if (heading) { section = heading[1].trim(); continue; }
    const req = line.match(/^- \*\*((?:FR|NFR|BR)(?:-[A-Z]+)?-\d{3}):\*\*\s*(.+)$/);
    if (req) sections.push({ id: req[1], text: req[2], section });
  }
  return sections;
}
function tableRows(markdown) {
  return markdown.split(/\r?\n/).filter(line => /^\|\s*[A-Z]+-\d{2}\s*\|/.test(line)).map(line => line.split('|').slice(1, -1).map(clean));
}
function featureRows(markdown) {
  return tableRows(markdown).filter(row => row.length === 6).map(row => ({
    id: row[0], name: row[1], srs: row[2], dependencies: row[3], priority: row[4], acceptance: row[5]
  }));
}
function mvpRows(markdown) {
  const result = {};
  for (const row of tableRows(markdown)) {
    if (row.length === 7 && /^(Must|Should|Later|Conditional)$/.test(row[2])) result[row[0]] = { classification: row[2], scope: row[3], acceptance: row[6] };
    if (row.length === 4 && /^(Later|Conditional)$/.test(row[2])) result[row[0]] = { classification: row[2], scope: row[3], acceptance: '' };
  }
  return result;
}
const scope = read('project-scope.md');
const srs = read('SRS.md');
const inventory = read('feature-inventory.md');
const proposed = read('proposed-mvp.md');
const data = {
  overview: {
    problem: 'Cooperative GIG helps labour cooperatives connect skilled workers with household and community service requests while making workforce coordination, fair work allocation and accountability easier.',
    mvp: 'The web-first MVP supports individual customers from service discovery through request, fair allocation, assignment, completion and payment-status recording. Institutional customers are outside MVP.',
    sourceFiles: ['project-scope.md', 'SRS.md', 'feature-inventory.md', 'proposed-mvp.md']
  },
  requirements: requirementSections(srs),
  features: featureRows(inventory),
  mvp: mvpRows(proposed),
  sourceText: { scope, srs, proposed },
  team: [
    ['Pradum Kumar', 'Cloud and Android Development'],
    ['Alok Kumar', 'Full-Stack Development and DevOps'],
    ['Gurbaksh Kaur', 'Full-Stack Development and DevOps'],
    ['Sandeep Kaur', 'Cybersecurity'],
    ['Mridulika', 'Cloud and DevOps'],
    ['Pratyush Raj', 'Cloud and Game Development']
  ]
};
fs.writeFileSync(path.join(__dirname, 'data.js'), `window.PORTAL_DATA = ${JSON.stringify(data)};\n`);
console.log(`Generated ${data.requirements.length} requirements and ${data.features.length} features.`);
