const potrace = require('potrace');
const fs = require('fs');
const path = require('path');

const imagePath = path.join(__dirname, 'src', 'app', 'icon.png');
const outputPath = path.join(__dirname, 'public', 'logo-trace.svg');

// Potrace parameters for a more detailed trace
const params = {
  color: '#002a8f', // Use the AGS blue color
  threshold: 120 // Adjust threshold if needed based on the PNG
};

potrace.trace(imagePath, params, function(err, svg) {
  if (err) {
    console.error('Error vectorizing image:', err);
    process.exit(1);
  }
  
  // Clean up the SVG output to be compatible with our trace animation
  // The output SVG uses <path> elements with fills. We want to convert them to strokes.
  let cleanedSvg = svg.replace(/fill="#002a8f"/g, 'fill="transparent" stroke="#002a8f" stroke-width="2" class="animate-svg-draw"');
  
  fs.writeFileSync(outputPath, cleanedSvg);
  console.log('Successfully generated SVG trace at', outputPath);
});
