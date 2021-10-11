const express = require('express');

const app = express();

const LOCAL_PORT = 3000;
const PORT = process.env.PORT || LOCAL_PORT;

app.listen(PORT, () => {
  console.log(`Aplicação ouvindo na porta ${PORT}`);
});
