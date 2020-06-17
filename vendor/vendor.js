'use strict';
require('dotenv').config();
// const events = require('../events.js');
const net = require('net');

const faker = require('faker');
const storeName= process.env.storeName || 'Reham';
const client = new net.Socket();
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;

client.connect(PORT, HOST, () => {
  console.log('vendor Connected');
  orderGenerator();
  // let name = '';
  // const messages = []; //optional

  client.on('data', (data) => {
    // console.log('What we got from the server', data, JSON.parse(data));
    const event = JSON.parse(data);
    if (event.event === 'delivered') {
      thanks();
      // messages.push(event.payload);

      // // console.log(event.payload);
      // console.clear();
      // messages.forEach((message) => {
      //   // message.sender === name
      //   //   ? console.log('\x1b[34m', message.message)
      //   //   : console.log('\x1b[31m', message.message);
      //   console.log(message);
      // });
      console.log(''); //this will add empty line after the message
    }
  });
});

function orderGenerator(){
  console.log('');
  setTimeout(()=>{
    const order = {
      storeName: storeName,
      orderId: faker.random.number(),
      customer: faker.name.findName(),
      address: ` ${faker.address.city()}`,
    };
    const message = JSON.stringify({
      event:'pickup',
      payload:order
    });
    client.write(message);
    orderGenerator();

  },5000);
       
}
// events.on('delivered', (payload)=>thanks(payload));

function thanks(){
  console.log('Thank you!');
}
client.on('error', (err) => console.log('Client Error ', err.message));

module.exports = thanks;
module.exports = orderGenerator;

  