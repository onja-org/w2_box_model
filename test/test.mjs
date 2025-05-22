// test/test.mjs
import { readFile } from 'fs/promises';
import { JSDOM } from 'jsdom';
import { strict as assert } from 'assert';

const html = await readFile('./index.html', 'utf8');
const dom = new JSDOM(html);
const document = dom.window.document;

describe('Box Model Lab', () => {
  it('should include a .custom-box element', () => {
    const box = document.querySelector('.custom-box');
    assert.ok(box, 'Expected .custom-box to exist');
    assert.match(box.textContent, /My Custom Box/i);
  });
});
