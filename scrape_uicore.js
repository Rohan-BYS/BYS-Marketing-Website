const fs = require('fs');
const https = require('https');

https.get('https://uicore.pro/all-templates/', (res) => {
    let data = '';

    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('end', () => {
        // Find grid items or image links
        // Look for typical uicore template structure
        // e.g., <img src="..." alt="Template Name" ...> and <a href=".../templates/name"> 
        // We will save the raw HTML to inspect it if regex is too complex
        fs.writeFileSync('uicore_raw.html', data);
        console.log('Saved raw HTML for analysis');
    });
}).on("error", (err) => {
    console.log("Error: " + err.message);
});
