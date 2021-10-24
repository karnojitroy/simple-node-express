const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json());

const port = 5000;
const users = [
    { id: 0, name: "Karnojit Roy", salary: "1000000", age: 25 },
    { id: 1, name: "Himaloy Roy", salary: "1000000", age: 25 },
    { id: 2, name: "Subarata Roy", salary: "1000000", age: 25 },
    { id: 3, name: "Rimi Roy", salary: "1000000", age: 25 },
    { id: 4, name: "Jogomohon Roy", salary: "1000000", age: 25 },
    { id: 5, name: "Anjoli Roy", salary: "1000000", age: 25 }
]

app.get('/users', (req, res) => {
    const search = req.query.search;
    console.log(search);
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    } else {
        res.send(users)
    }
})
app.post('/users', (req, res) => {
    console.log(req.body);
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body);
    // res.send(JSON.stringify(newUser)) // short cut
    res.json(newUser)
})
app.get('/', (req, res) => {
    res.send('second node aa')
});
app.listen(port, () => {
    console.log('Listening to port', port);
})