const express = require('express'); 
const app = express();

app.use(express.static('public'));

app.use((request, response) => {
  response.status(404).send("That page wasn't found");
});

// const port = config.get("server").get("port");
app.get('/', (request, response) => {
  response.render(__dirname + '/index.html')
})

const port = process.env.PORT || 3000
app.listen(port, console.log(`I'm listening on port ${port}`));
