import fs from 'fs';
import path from 'path';
import { JSDOM } from 'jsdom';

const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
const css = fs.readFileSync(path.resolve(__dirname, '../styles.css'), 'utf8');

let dom;
let document;

beforeEach(() => {
  dom = new JSDOM(html, { resources: 'usable' });
  document = dom.window.document;
});

describe('Box Model Structure', () => {
  test('contains a margin div', () => {
    const marginBox = document.querySelector('.margin');
    expect(marginBox).not.toBeNull();
    expect(marginBox.textContent.toLowerCase()).toContain('margin');
  });

  test('contains a border div inside margin', () => {
    const borderBox = document.querySelector('.margin .border');
    expect(borderBox).not.toBeNull();
    expect(borderBox.textContent.toLowerCase()).toContain('border');
  });

  test('contains a padding div inside border', () => {
    const paddingBox = document.querySelector('.margin .border .padding');
    expect(paddingBox).not.toBeNull();
    expect(paddingBox.textContent.toLowerCase()).toContain('padding');
  });

  test('contains a content div inside padding', () => {
    const contentBox = document.querySelector('.margin .border .padding .content');
    expect(contentBox).not.toBeNull();
    expect(contentBox.textContent.toLowerCase()).toContain('content');
  });
});

describe('Box Model Styling', () => {
  test('each box has a background color', () => {
    ['margin', 'border', 'padding', 'content'].forEach(className => {
      const regex = new RegExp(`\\.${className}[^}]*background[^:]*:[^;]+;`, 'i');
      expect(css).toMatch(regex);
    });
  });

  test('padding and margin styles are defined', () => {
    expect(css).toMatch(/padding\s*:\s*\d+(px|rem|em)?;/i);
    expect(css).toMatch(/margin\s*:\s*\d+(px|rem|em)?;/i);
  });

  test('border is styled', () => {
    expect(css).toMatch(/border\s*:\s*\d+px\s+\w+\s+#[0-9a-fA-F]+;/);
  });

  test('box-sizing is set to border-box', () => {
    expect(css).toMatch(/box-sizing\s*:\s*border-box;/i);
  });
});
