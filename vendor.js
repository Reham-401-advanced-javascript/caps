'use strict';
require('dotenv').config();
const events = require('./events.js');
const faker = require('faker');
const storeName= process.env.storeName || 'Reham';
orderGenerator();


function orderGenerator(){
  setTimeout(()=>{
    const order = {
      storeName: storeName,
      orderId: faker.random.number(),
      customer: faker.name.findName(),
      address: ` ${faker.address.city()}`,
    };
    events.emit('pickup', order);

  },5000);
       
}
events.on('delivered', (payload)=>thanks(payload));

function thanks(){
  console.log('Thank you!');
}

module.exports = thanks;
  