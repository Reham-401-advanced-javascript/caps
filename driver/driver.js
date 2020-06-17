'use strict';
// const events = require('../events.js');
const net = require('net');
const client = new net.Socket();
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;


// events.on('pickup', pickup);
client.connect(PORT, HOST, () => {
  console.log('driver connected'); 
  client.on('data', (data) => {
    const event = JSON.parse(data);
    if (event.event === 'pickup') {
      pickup(event.payload);
    }
  });
});

function pickup(payload){
  setTimeout(()=> {
    console.log(`DRIVER: picked up ${payload.orderId}`);
    const message = JSON.stringify({
      event:'in-transit',
      payload:payload,
    });
    client.write(message);
    // events.emit('in-transit', payload);
    setTimeout(()=>{
      const message = JSON.stringify({
        event:'delivered',
        payload:payload,
      });
      client.write(message);
    }, 3000);
  }, 1000);
}
client.on('error', (err) => console.log('Client Error ', err.message));
module.exports = pickup;