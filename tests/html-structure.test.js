/**
 * HTML Structure Tests for Box Model Lab
 * 
 * Core tests that validate the HTML structure and required elements
 * as specified in the lab README instructions.
 */

const fs = require('fs');
const path = require('path');

describe('Box Model Lab - HTML Structure Tests', () => {
  let htmlContent;

  beforeAll(() => {
    const htmlPath = path.join(__dirname, '..', 'lab', 'index.html');
    htmlContent = fs.readFileSync(htmlPath, 'utf8');
    document.documentElement.innerHTML = htmlContent;
  });

  // ------------------------
  // Stylesheet
  // ------------------------
  describe('Stylesheet', () => {
    test('should link to styles.css', () => {
      const linkElement = document.querySelector('link[rel="stylesheet"]');
      expect(linkElement).toBeTruthy();
      expect(linkElement.href).toMatch(/styles\.css/);
    });
  });

  // ------------------------
  // Main Structure
  // ------------------------
  describe('Main HTML Structure', () => {
    test('should have header, main, and footer elements', () => {
      expect(document.querySelector('header')).toBeTruthy();
      expect(document.querySelector('main')).toBeTruthy();
      expect(document.querySelector('footer')).toBeTruthy();
    });
  });

  // ------------------------
  // Lab 1: Custom Box
  // ------------------------
  describe('Lab 1: Custom Box', () => {
    test('should have at least one .custom-box', () => {
      const boxes = document.querySelectorAll('.custom-box');
      expect(boxes.length).toBeGreaterThan(0);
    });
  });

  // ------------------------
  // Lab 2: Multiple Boxes
  // ------------------------
  describe('Lab 2: Multiple Boxes', () => {
    test('should have at least three .custom-box elements', () => {
      const boxes = document.querySelectorAll('.custom-box');
      expect(boxes.length).toBeGreaterThanOrEqual(3);
    });
  });

  // ------------------------
  // Lab 3: Nested Box
  // ------------------------
  describe('Lab 3: Nested Box', () => {
    test('should have a .container with a nested .custom-box', () => {
      const container = document.querySelector('.container');
      expect(container).toBeTruthy();
      const nestedBox = container.querySelector('.custom-box');
      expect(nestedBox).toBeTruthy();
    });
  });

  // ------------------------
  // Challenge 1: Card Layout
  // ------------------------
  describe('Challenge 1: Card Layout', () => {
    test('should have a .card with h3 and p', () => {
      const card = document.querySelector('.card');
      expect(card).toBeTruthy();
      expect(card.querySelector('h3')).toBeTruthy();
      expect(card.querySelector('p')).toBeTruthy();
    });
  });

  // ------------------------
  // Challenge 2: Box-Sizing
  // ------------------------
  describe('Challenge 2: Box-Sizing', () => {
    test('should have .box-content and .box-border elements', () => {
      const contentBox = document.querySelector('.box-content');
      const borderBox = document.querySelector('.box-border');
      expect(contentBox).toBeTruthy();
      expect(borderBox).toBeTruthy();
    });
  });

  // ------------------------
  // Challenge 3: Responsive Box
  // ------------------------
  describe('Challenge 3: Responsive Box', () => {
    test('should have a .responsive-box element', () => {
      const responsiveBox = document.querySelector('.responsive-box');
      expect(responsiveBox).toBeTruthy();
    });
  });
});
