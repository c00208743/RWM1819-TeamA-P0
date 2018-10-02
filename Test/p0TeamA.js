/* global p0TeamA, describe, it, expect, should */

describe('p0TeamA()', function () {
  'use strict';

  it('exists', function () {
    expect(p0TeamA).to.be.a('function');

  });

  it('return modulo 2', function () {
    expect(modulo_first(2)).to.equal(2);
  });

  it('does something else', function () {
    expect(true).to.equal(false);
  });




  it('exists', function () {
  expect(decrement_if_less_than_first).to.be.a('function');
 });
it('Works with 1 value', function () {
  expect(decrement_if_less_than_first([4])).to.eql([4]);
});
 it('Works with small lists', function () {
  expect(decrement_if_less_than_first([4,2,8,3,9,4])).to.eql([4,1,8,2,9,4]);
});
 it('Works with big lists', function(){
  expect(decrement_if_less_than_first([4,2,8,3,9,4,10,5,11,6,1])).to.eql([4,1,8,2,9,4,10,5,11,6,0]);
})


  // Add more assertions here
});
