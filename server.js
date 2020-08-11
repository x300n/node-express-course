const express = require('express');
const app = express();

const bodyPraser = require('body-parser');
app.use(bodyPraser.json());



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


app.get('/users/:id', (req, res) => {
  console.log(req.params.id);

  res.json({
    success: true,
    message: 'Got one user',
    user: req.params.id
  })
})


app.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const mockUsername = "demoUsername";
  const mockPassword = "demoPassword";

  if(username === mockUsername && password === mockPassword) {

    res.json({
      success: true,
      message: "Username and Password match",
      token: 'Encrypted token goes here'
    })
  } else {
  
    res.json({
      success: false,
      message: "Username and Password do not match!"
    })
  
  }

})

app.listen(8000, () => {

  console.log("Server is running on local port 8000");

})