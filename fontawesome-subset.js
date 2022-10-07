// Import Node.js modules
import fs from 'fs';

// Import npm modules
import { fontawesomeSubset } from 'fontawesome-subset';
import yaml from 'yaml';

// Parse subset yml
const file = fs.readFileSync('fontawesome-subset.yml', 'utf8');
const subset = yaml.parse(file);

// Run subsetter
fontawesomeSubset(subset, 'webfonts', { package: 'pro' });
