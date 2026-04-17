import fs from 'fs';
import path from 'path';

export default {
  server: {
    https: {
      key: fs.readFileSync(path.resolve(__dirname, 'mkcert/localhost-key.pem')),
      cert: fs.readFileSync(path.resolve(__dirname, 'mkcert/localhost.pem')),
    },
  },
};