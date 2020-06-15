'use stritc';
const events = require('../events');
let logger = require('../caps');
let pickup = require('../driver');
let thanks = require('../vendor');
let consoleSpy = jest.spyOn(console, 'log').mockImplementation();
describe('Event handlers tests', ()=> {
  let payload = {
    storeName: 'reham',
    orderId: 2751996,
    customer: 'Dimitri White',
    address: 'Lake Melody',
  };
 
  it('it call pickup', () => {
    events.emit('pickup', payload);
    expect(consoleSpy).toHaveBeenCalled();
  });
  it('it call in-transit', () => {
    events.emit('in-transit', payload);
    expect(consoleSpy).toHaveBeenCalled();
  });
 
  it('log using logger function in caps', ()=> {
    logger(payload);
    expect(consoleSpy).toHaveBeenCalled();
  });

  it('log using thanks function in vendor', ()=> {
    thanks();
    expect(consoleSpy).toHaveBeenCalled();
  });

  it('it call delivered', () => {
    events.emit('delivered', payload);
    expect(consoleSpy).toHaveBeenCalled();
  });

  
  
});