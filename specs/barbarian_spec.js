var barbarian = require('../barbarian');
var assert = require('assert');

describe('Barbarian', function() {
  it('should have a name', function(){
    assert.equal("Gary", barbarian.name);
  });
  it('health should increase when drinking favourite beer', function(){
    barbarian.drink("Barbarian Beer");
    assert.equal(30, barbarian.health);
  });
  it('anger level should increase when drinking other beer', function(){
    barbarian.drink("other beer");
    assert.equal(20, barbarian.angerLevel);
  });
});