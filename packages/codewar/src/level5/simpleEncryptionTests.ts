import { assert } from 'chai';
import { decrypt, encrypt } from './simpleEncryption';

describe('solution', function() {
  it('EncryptExampleTests', function() {
    assert.equal(encrypt('A', 111), 'S');
    assert.equal(encrypt('Abc', 212), 'Smb');
    assert.equal(encrypt('Wave', 0), 'Wave'); // -> 000
    assert.equal(encrypt('Wave', 345), 'Tg.y');
    assert.equal(encrypt('Ball', 134), '>fdd');
    assert.equal(encrypt('Ball', 444), '>gff');

    assert.equal(encrypt('This is a test.', 348), 'Iaqh qh g iyhi,');
    assert.equal(
      encrypt(
        'Do the kata Kobayashi Maru Test. Endless fun and excitement when finding a solution.',
        583
      ),
      'Sr pgi jlpl Jr,lqlage Zlow Piapc I.skiaa dw. l.s ibnepizi.p ugi. de.se.f l arkwper.c'
    );
  });

  it('DecryptExampleTests', function() {
    assert.equal(decrypt('S', 111), 'A');
    assert.equal(decrypt('Smb', 212), 'Abc');
    assert.equal(decrypt('Wave', 0), 'Wave'); // -> 000
    assert.equal(decrypt('Tg.y', 345), 'Wave');
    assert.equal(decrypt('>fdd', 134), 'Ball');
    assert.equal(decrypt('>gff', 444), 'Ball');

    assert.equal(decrypt('Iaqh qh g iyhi,', 348), 'This is a test.');
    assert.equal(
      decrypt(
        'Sr pgi jlpl Jr,lqlage Zlow Piapc I.skiaa dw. l.s ibnepizi.p ugi. de.se.f l arkwper.c',
        583
      ),
      'Do the kata Kobayashi Maru Test. Endless fun and excitement when finding a solution.'
    );
  });
});
