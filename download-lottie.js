import fs from 'fs';
import https from 'https';

const url = 'https://assets3.lottiefiles.com/packages/lf20_qp1q7mct.json';

https.get(url, (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    fs.writeFileSync('public/network-lottie.json', data);
    console.log('Downloaded Lottie JSON');
  });
}).on('error', (err) => {
  console.log('Error: ' + err.message);
});
