const fs = require('fs');
const cheerio = require('cheerio');

// Read HTML and CSS files from lab directory
const html = fs.readFileSync('lab/index.html', 'utf8');
const css = fs.readFileSync('lab/styles.css', 'utf8');
const $ = cheerio.load(html); // Load HTML with Cheerio

// Helper function to check for the presence of a CSS property with any non-empty value
function hasCssProperty(selector, property) {
  const pattern = new RegExp(`${selector}\\s*{[^}]*${property}\\s*:\\s*[^;]+;?[^}]*}`, 'i');
  return pattern.test(css);
}

// Helper function to check if a property has a non-zero value
function hasNonZeroCssValue(selector, property) {
  // Checks for the property followed by any value that isn't '0' or '0px' etc.
  const pattern = new RegExp(`${selector}\\s*{[^}]*${property}\\s*:\\s*(?!0(?![^\\d]))[^;]+;?[^}]*}`, 'i');
  return pattern.test(css);
}

console.log('🧪 CSS Box Model Lab - Automated Tests');
console.log('═══════════════════════════════════════════');
console.log('This will check if your implementation meets the basic requirements.\n');

let passedTests = 0;
let totalTests = 0;

function runTest(description, assertion, helpText = '') {
  totalTests++;
  try {
    console.assert(assertion, `❌ ${description}`);
    if (assertion) {
      console.log(`✅ ${description}`);
      passedTests++;
    } else if (helpText) {
      console.log(`   💡 Hint: ${helpText}`);
    }
  } catch (error) {
    console.log(`❌ ${description}`);
    if (helpText) {
      console.log(`   💡 Hint: ${helpText}`);
    }
  }
}

console.log('📋 Testing HTML Structure...');
console.log('─────────────────────────────────');

// Identify the main card container: look for a div that directly contains the profile content
const mainCard = $('div:has(img, h2, p)').first();

runTest(
  'HTML: Main container with profile content exists', 
  mainCard.length > 0,
  'Create a <div> that directly contains an <img>, <h2>, and <p> for the profile content'
);

// Check for required content within the identified main card
runTest(
  'HTML: Profile image exists',
  mainCard.find('img').length > 0,
  'Add an <img> element for the profile picture inside your main card'
);

runTest(
  'HTML: User name heading exists', 
  mainCard.find('h2').length > 0,
  'Add an <h2> element for the user name inside your main card'
);

runTest(
  'HTML: Bio paragraph exists',
  mainCard.find('p').length > 0,
  'Add a <p> element for the short bio inside your main card'
);

console.log('\n🎨 Testing CSS Properties...');
console.log('─────────────────────────────────');

// Universal Box-sizing check
runTest(
  'CSS: Universal box-sizing set to border-box',
  /\*\s*{[^}]*box-sizing\s*:\s*border-box[^;]*;?[^}]*}/i.test(css),
  'Add "* { box-sizing: border-box; }" to the top of your CSS file'
);

// Body centering (simple check for display: flex on body)
runTest(
  'CSS: Body uses flexbox for centering',
  /body\s*{[^}]*display\s*:\s*flex[^;]*;?[^}]*}/i.test(css),
  'Add "display: flex;" to your body element for centering'
);

// Check if the main card element has the Box Model properties
const mainCardSelector = mainCard.attr('class') ? '.' + mainCard.attr('class').split(' ')[0] : 'div';

runTest(
  `CSS: Main card (${mainCardSelector}) has visible margin`,
  hasNonZeroCssValue(mainCardSelector, 'margin'),
  'Add a margin property with a non-zero value to your main card element'
);

runTest(
  `CSS: Main card (${mainCardSelector}) has border`,
  hasCssProperty(mainCardSelector, 'border'),
  'Add a border property to your main card element'
);

runTest(
  `CSS: Main card (${mainCardSelector}) has visible padding`,
  hasNonZeroCssValue(mainCardSelector, 'padding'),
  'Add a padding property with a non-zero value to your main card element'
);

runTest(
  `CSS: Main card (${mainCardSelector}) has background color`,
  hasCssProperty(mainCardSelector, 'background-color'),
  'Add a background-color property to your main card element'
);

runTest(
  `CSS: Main card (${mainCardSelector}) has max-width`,
  hasCssProperty(mainCardSelector, 'max-width'),
  'Add a max-width property to your main card element (e.g., 350px)'
);

// Basic check for content styling (presence of common properties)
runTest(
  `CSS: Profile image has width styling`,
  hasCssProperty(`${mainCardSelector} img`, 'width') || hasCssProperty(`${mainCardSelector} img`, 'max-width'),
  'Add width or max-width styling to the image inside your main card'
);

console.log('\n📊 Test Results Summary');
console.log('═══════════════════════');
console.log(`✅ Passed: ${passedTests}/${totalTests} tests`);

if (passedTests === totalTests) {
  console.log('\n🎉 Congratulations! All basic tests passed!');
  console.log('🔍 Next steps:');
  console.log('   • Open index.html in your browser to see the visual result');
  console.log('   • Compare with the preview image in the README');
  console.log('   • Check that colors match: orange margin, yellow border, green padding, blue content');
  console.log('   • Test responsive design on different screen sizes');
  console.log('   • Ensure all labels are visible and properly positioned');
} else {
  console.log(`\n⚠️  ${totalTests - passedTests} test(s) still need attention.`);
  console.log('💡 Debugging tips:');
  console.log('   • Read the hints above for failed tests');
  console.log('   • Check your HTML structure and CSS selectors');
  console.log('   • Make sure your CSS file is linked correctly in HTML');
  console.log('   • Use browser Dev Tools to inspect your elements');
  console.log('   • Review the requirements checklist in the README');
}

console.log('\n🔧 Remember: These tests check basic requirements only.');
console.log('   Visual design, colors, and layout quality are up to you!');
console.log('   Use browser Dev Tools to perfect your Box Model demo.');
console.log('\n📚 Need help? Check the solution branch or ask your instructor!');