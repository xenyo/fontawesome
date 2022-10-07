import { fontawesomeSubset } from 'fontawesome-subset';

const subset = {
  regular: [
    'magnifying-glass',
    'question',
  ],
};

const outputDir = 'webfonts';

fontawesomeSubset(subset, outputDir, { package: 'pro' });
