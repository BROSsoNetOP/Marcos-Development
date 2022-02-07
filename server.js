const app = require('express')();

app.get('/', (req, res) => res.send('Marcos Clan Bot Is Up.'));

module.exports = () => {
  app.listen(3000);
}