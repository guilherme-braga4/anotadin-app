const express = require('express');
const path = require('path');

const app = express();

//Estáticos -> Roteamento dos Componentes
 app.use(express.static(path.join(__dirname, 'build')));

 app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/client/build/index.html'))
})

app.listen(process.env.PORT || 3000, (err) => {
  err ? console.log("err", err) : console.log("Tudo Funcionando!")
});
