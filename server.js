'use strict';

const express = require('express');

const pokeData = require('./assets/poke.json')

const server = express();

const PORT = 3001;



//localhost:3001/
server.get('/',(req,res)=>{
    res.send('home route')
})

//localhost:3001/test
server.get('/test',(request,response)=>{
    response.send('your server is working')
})

// localhost:3001/getShoppingData
server.get('/getShoppingData',(req,res)=>{
    let shoppingArray = ['shoes','bag','toys'];
    res.status(200).send(shoppingArray);
})


//localhost:3001/getDataFromPoke?pokeName=bulbasur
server.get('/getDataFromPoke',(req,res)=>{
    console.log(req.query);
    let pokemonName = req.query.pokeName;
    // res.send(pokeData)
    let pokeInfo = pokeData.results.find(pokemon=>{
        if(pokemon.name.toLowerCase()===pokemonName) {
            return pokemon;
        }
    })
    res.send(pokeInfo);
})

server.get('*',(req,res)=>{
    res.status(404).send('not found')
})



server.listen(PORT,()=>{
    console.log(`Listning on PORT ${PORT}`)
})