const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

//connect to mlab database

mongoose.connection.once('open',() => {
    console.log('connected to db');
});

// bind express with graphql
app.use('/shelf', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('Listening on port 4000!');
});