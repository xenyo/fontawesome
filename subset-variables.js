// Import Node.js modules
import fs from 'fs';

// Import npm modules
import yaml from 'yaml';

// Parse subset yml
const subsetPath = 'fontawesome-subset.yml';
const subsetFile = fs.readFileSync(subsetPath, 'utf8');
const subset = yaml.parse(subsetFile);

// Convert subset to flattened object
const icons = Object
  .values(subset)
  .flat()
  .reduce((acc, curr) => ({ ...acc, [curr]: true }), {});

// Prune variables
const variablesPath = 'scss/_variables.scss';
const variables = fs
  .readFileSync(variablesPath, 'utf8')
  .split('\n')
  .map(line => {
    const name = line.match(/^  "(.+)":/);
    if (!name) return line;
    return icons[name[1]] ? line : '';
  })
  .filter(line => line.length)
  .join('\n');
fs.writeFileSync(variablesPath, variables);
