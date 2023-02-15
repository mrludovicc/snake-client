const net = require('net');
const { connect } = require("./client");
const { setupInput } = require("./input");
// const con = require('./constants')

const conn = connect();
setupInput(conn);
console.log("Connecting ...");