import express from 'express';
const PORT = 80;
const HOST = '0.0.0.0';
const app = express();
app.get('/', (req, res) => {
  res.send('Deployed K8S APP on EKS - Version 2')
});
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
