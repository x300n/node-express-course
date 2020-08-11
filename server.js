const express = require('express');
const app = express();

const mockUserData = [
{name: 'John Doe'},
{name: 'Sara Jane'}
]

app.get('/', (req, res) => {

  res.send("Great!!");

})

app.get('/users', (req, res) => {
  res.json({
    success: true,
    message: 'Successfully got users!',
    users: mockUserData
  })
})

app.listen(8000, () => {

  console.log("Server is running on local port 8000");

})