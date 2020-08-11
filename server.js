var express = require('express');
var express_graphql = require('express-graphql');
var { buildschema } = require('graphql');

var schema = buildSchema(`
    type Query {
        message: String
    }
`);
