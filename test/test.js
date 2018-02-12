const fs = require('fs');
const recognizer = require('../src');
const assert = require('chai').assert;

describe('recognize valid keyfiles', () => {
    const json = JSON.parse(fs.readFileSync('test/keyfiles-valid-instances.json'));

    it('type: wisesale', () => {
        assert.deepEqual(['wisesale', undefined], recognizer(json['wisesale']))
    });
    it('type: web3 v3 gwsh', () => {
        assert.deepEqual(['web3', 3], recognizer(json['web3-v3-gwsh']))
    });
    it('type: web3 v3 wsh', () => {
        assert.deepEqual(['web3', 3], recognizer(json['web3-v3-wsh']))
    });
    it('type: web3 v3 parity', () => {
        assert.deepEqual(['web3', 3], recognizer(json['web3-v3-parity']))
    });
    it('type: web3 v3 mywiseplatwallet', () => {
        assert.deepEqual(['web3', 3], recognizer(json['web3-v3-mywiseplatwallet']))
    });
});

describe('recognize invalid keyfiles', () => {
    const json = JSON.parse(fs.readFileSync('test/keyfiles-invalid-instances.json'));

    it('missing key-value pair', () => {
        assert.notDeepEqual(['web3', 3], recognizer(json['missing-key']))
    });
    it('invalid key', () => {
        assert.notDeepEqual(['web3', 3], recognizer(json['invalid-key']))
    });
    it('invalid value-type', () => {
        assert.notDeepEqual(['web3', 3], recognizer(json['invalid-value-type']))
    });
});
