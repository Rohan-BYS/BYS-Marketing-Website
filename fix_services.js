const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src/pages');
const targets = [
    'DigitalMarketingService.tsx',
    'MediaProductionService.tsx',
    'ITHardwareService.tsx',
    'CyberSecurityService.tsx',
    'SocialMediaService.tsx',
    'ConsultationService.tsx',
    'ContentStrategyService.tsx',
    'SeoOptimizationService.tsx',
    'UiUxDesignService.tsx'
];

targets.forEach(file => {
    const fp = path.join(dir, file);
    if (!fs.existsSync(fp)) {
        console.log(`Plugin path not found: ${fp}`);
        return;
    }

    let content = fs.readFileSync(fp, 'utf8');

    // Add Imports
    if (!content.includes('import Waves from')) {
        content = content.replace(
            "import SEOHead from '../components/SEOHead';",
            "import SEOHead from '../components/SEOHead';\nimport Waves from '../components/ReactBits/Waves';\nimport ScrollReveal from '../components/ScrollReveal';\nimport StarBorder from '../components/ReactBits/StarBorder';"
        );
    }

    // Add Waves to Hero
    const heroPattern = /(<div className="glass-panel rounded-3xl p-8 relative overflow-hidden[^>]*>)/;
    if (content.match(heroPattern) && !content.includes('<Waves')) {
        content = content.replace(
            heroPattern,
            `$1\n                    <div className="absolute inset-0 z-0 opacity-80">\n                        <Waves lineColor="rgba(104, 54, 244, 0.15)" backgroundColor="transparent" waveSpeedX={0.02} waveSpeedY={0.01} waveAmpX={30} waveAmpY={20} friction={0.9} tension={0.01} maxCursorMove={80} xGap={15} yGap={15} />\n                    </div>`
        );
    }

    // Replace the bottom strategy CTA with StarBorder
    const ctaPattern = /<button className="w-full py-4 bg-primary text-white font-bold rounded-xl[^>]*>([\s\S]*?)<\/button>/g;
    content = content.replace(ctaPattern, `<StarBorder as="button" className="w-full" color="rgba(104,54,244,0.6)" speed="4s">\n                        <span className="flex items-center justify-center gap-2">$1</span>\n                    </StarBorder>`);

    fs.writeFileSync(fp, content, 'utf8');
    console.log(`Enhanced ${file}`);
});
console.log('Service page enhancements applied!');
