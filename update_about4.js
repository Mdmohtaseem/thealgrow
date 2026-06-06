const fs = require('fs');
const path = 'src/app/about/page.js';
let content = fs.readFileSync(path, 'utf8');

// 1. Add import
if (!content.includes('import Home3NewTestimonial')) {
    content = content.replace(
        "import Home5AboutSection from '@/components/about/Home5AboutSection'",
        "import Home5AboutSection from '@/components/about/Home5AboutSection'\nimport Home3NewTestimonial from '@/components/testimonial-section/Home3NewTestimonial'"
    );
}

// 2. Remove the testimonial section
const testimonialSectionStart = content.indexOf('<div className="about-page-testimonial-section">');
const testimonialSectionEndToken = '<AwardListSection />'; // Actually we removed AwardListSection, let's find the end manually
// Wait, AwardListSection was removed. The next segment is Home3Footer
// Let's look for Home3PartnerSection as the start and Home1processSection or something else.
// Currently the structure is:
// <Home5AboutSection />
// <Home3PartnerSection />
// <div className="about-page-testimonial-section"> ... </div>

const partnerSectionIndex = content.indexOf('<Home3PartnerSection />');
if (partnerSectionIndex !== -1 && testimonialSectionStart !== -1) {
    const startOfTestimonial = testimonialSectionStart;
    const endOfTestimonial = content.indexOf('</div>\n            </div>\n        </>', startOfTestimonial); // Find the end of the surrounding div

    // The testimonial section is the last thing before the fragment end (if Footer is not there? Wait, Footer was after AwardListSection, no wait. Let's check the original file again.)
}

