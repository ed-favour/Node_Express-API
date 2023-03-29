const { v4: uuidv4 } = require('uuid');

let users = []

const getUsers = (req, res)=>{
    res.json(users)
}

const postUsers = (req, res ) => {
    const user = req.body

    users.push({...user, id: uuidv4() }) // this will upload the data from post request 
    res.send(`user with name ${user.firstName} added to the database`);
       
}

const getUser = (req, res)=>{
    const id = req.params.id
    const foundUser = users.find((user)=> user.id === id)
    res.send(foundUser)
}

const deleteUsers = (req, res)=>{
    const id = req.params.id

    users = users.filter((user) => user.id != id)

    res.send(`user with the id ${id} has been deleted from the database`)
}
const updateUsers =  (req, res)=>{
    const id = req.params.id
    const user = users.find((user)=>user.id === id)
    const {firstName, lastName, age} = req.body
    if (firstName)user.firstName = firstName
    if (lastName)user.lastName = lastName
    if (age)user.age = age

    res.send(`User with id ${id} has been updated `)
    
}
module.exports = {getUsers, postUsers,getUser, deleteUsers, updateUsers}



