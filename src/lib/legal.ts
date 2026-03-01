export interface LegalSection {
  heading: string;
  content: string;
}

export interface LegalPage {
  title: string;
  lastUpdated: string;
  sections: LegalSection[];
}

export const PRIVACY_POLICY: LegalPage = {
  title: "Privacy Policy",
  lastUpdated: "February 28, 2026",
  sections: [
    {
      heading: "Introduction",
      content:
        'LexumSoft ("we", "our", or "us") is a digital marketing agency specializing in website design, online presence management, ad campaign management, and AI receptionist services for plumbing and HVAC companies across the United States.\n\nThis Privacy Policy explains how we collect, use, share, and protect information when you visit our website at www.lexumsoft.com or interact with our services. We are committed to handling your information responsibly and transparently.\n\nBy using our website or submitting a form, you agree to the practices described in this policy. If you do not agree, please discontinue use of our website.',
    },
    {
      heading: "Information We Collect",
      content:
        "We collect information in two main ways: information you provide to us directly, and information collected automatically when you use our website.\n\nWhen you fill out a contact form, request a quote, or reach out to us through any lead form on our website, we may collect your full name, email address, phone number, company name, and the nature of your inquiry.\n\nThis information is provided voluntarily. You are not required to submit it, but without it we cannot respond to your inquiry or provide our services.\n\nWhen you visit our website, certain technical information is collected automatically, including your IP address, browser type, device type, pages visited, referring website, and date and time of your visit. This data helps us understand how visitors use our website so we can improve it.",
    },
    {
      heading: "Cookies and Tracking Technologies",
      content:
        "Our website uses cookies and similar tracking technologies to enhance your browsing experience and gather analytical data.\n\nCookies are small text files placed on your device when you visit a website. They help the site remember your preferences and understand how you interact with the content.\n\nWe use essential cookies required for the website to function properly, analytics cookies to collect data on how visitors use our site, and marketing cookies to track visits for relevant advertising purposes.\n\nMost browsers allow you to control cookies through their settings. You can instruct your browser to refuse all cookies or to alert you when cookies are being sent. Please note that disabling certain cookies may affect the functionality of our website.",
    },
    {
      heading: "How We Use Your Information",
      content:
        "We use the information we collect to respond to your inquiries, provide and deliver our services, communicate with you about service updates and project status, improve our website based on analytics data, and for marketing purposes with your consent where required.\n\nWe may send you information about our services, case studies, or offers that may be relevant to your business. You can opt out of marketing emails at any time.\n\nWe do not use your information for any purpose that is incompatible with the reasons stated above without first obtaining your consent.",
    },
    {
      heading: "Information Sharing and Disclosure",
      content:
        "We do not sell, rent, or trade your personal information to third parties.\n\nWe work with trusted third-party vendors who help us operate our business and deliver our services. These may include email platforms, CRM software, website hosting providers, analytics tools, and advertising platforms. These providers only receive the information necessary to perform their specific functions and are contractually required to keep your information confidential.\n\nWe may disclose your information if required to do so by law, regulation, or legal process. In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.",
    },
    {
      heading: "Data Security",
      content:
        "We take the security of your personal information seriously and implement reasonable administrative, technical, and physical safeguards to protect it from unauthorized access, disclosure, alteration, or destruction.\n\nOur website uses HTTPS encryption to protect data in transit. Access to personally identifiable information within our organization is limited to team members who need it to perform their job functions.\n\nNo method of transmission over the internet is 100% secure. While we strive to protect your information, we cannot guarantee its absolute security. If you believe your information has been compromised, please contact us immediately at waqar@lexumsoft.com.",
    },
    {
      heading: "Your Rights",
      content:
        "Depending on your location and applicable law, you may have certain rights regarding your personal information.\n\nYou may request a copy of the personal information we hold about you, request that we correct inaccurate or incomplete information, request that we delete your personal information, opt out of marketing communications at any time, or request a copy of your data in a portable format.\n\nTo exercise any of these rights, please contact us at waqar@lexumsoft.com or call us at +923282828885. We will respond within 30 days.",
    },
    {
      heading: "Third-Party Links",
      content:
        "Our website may contain links to third-party websites. These websites have their own privacy policies, and we have no control over how they collect or use your information.\n\nWe are not responsible for the privacy practices or content of any third-party websites. We encourage you to review the privacy policy of any website you visit through a link on our site.",
    },
    {
      heading: "Children's Privacy",
      content:
        "Our website and services are designed for business owners and professionals in the plumbing and HVAC industry. They are not directed at individuals under the age of 13, and we do not knowingly collect personal information from children.\n\nIf you believe that a child under 13 has provided us with personal information, please contact us immediately at waqar@lexumsoft.com and we will take steps to delete that information.",
    },
    {
      heading: "Changes to This Policy",
      content:
        'We may update this Privacy Policy from time to time to reflect changes in our practices, technology, or legal requirements. When we do, we will revise the "Last Updated" date at the top of this page.\n\nWe encourage you to review this policy periodically to stay informed about how we are protecting your information. Your continued use of our website after any changes constitutes your acceptance of the updated terms.',
    },
    {
      heading: "Contact Us",
      content:
        "If you have any questions, concerns, or requests related to this Privacy Policy or the way we handle your personal information, please reach out.\n\nEmail: waqar@lexumsoft.com\nPhone: +923282828885\nWebsite: www.lexumsoft.com\n\nWe aim to respond to all privacy-related inquiries within 5 business days.",
    },
  ],
};

export const TERMS_OF_SERVICE: LegalPage = {
  title: "Terms of Service",
  lastUpdated: "February 28, 2026",
  sections: [
    {
      heading: "1. Acceptance of Terms",
      content:
        "By accessing or using the LexumSoft website at www.lexumsoft.com, or by engaging us to provide any of our services, you agree to be bound by these Terms of Service. Please read them carefully before proceeding.\n\nIf you do not agree to these Terms, you should not use our website or engage our services. Your continued use of this website constitutes your acceptance of any updates or changes to these Terms.\n\nThese Terms apply to all visitors, prospective clients, and current clients of LexumSoft.",
    },
    {
      heading: "2. Description of Services",
      content:
        "LexumSoft is a digital marketing agency that exclusively serves plumbing and HVAC companies operating in the United States. Our services include Website Design & Development, Complete Online Presence Management, Ad Campaign Management, After-Hours AI Receptionist, and 24/7 AI Receptionist.\n\nThe specific scope, deliverables, pricing, and timelines for any engagement will be outlined in a separate service agreement or proposal provided to you before work begins. In the event of a conflict between these Terms and a signed service agreement, the service agreement will govern.",
    },
    {
      heading: "3. Use of This Website",
      content:
        "You may use our website for lawful purposes only. Acceptable uses include browsing our services, submitting a contact or lead inquiry form, reading our content, and reaching out to us for business purposes.\n\nProhibited conduct includes attempting to gain unauthorized access to any part of our website or systems, using automated tools to extract data without our written permission, transmitting unlawful or harmful content, introducing malware or malicious code, impersonating any person or entity, and using our website in any way that could impair its functionality.\n\nWe reserve the right to terminate or restrict your access to our website at any time if we believe you are engaging in prohibited conduct.",
    },
    {
      heading: "4. Intellectual Property",
      content:
        "All content on this website — including text, graphics, logos, icons, images, and software — is the property of LexumSoft or its content suppliers and is protected by applicable intellectual property laws.\n\nYou may not reproduce, distribute, modify, or create derivative works from any content on this website without our express written permission.\n\nWith respect to client work: once a project is paid for in full, you will own the final deliverables as specified in your service agreement. We retain the right to display completed work in our portfolio and marketing materials unless you expressly request otherwise in writing.",
    },
    {
      heading: "5. User-Submitted Information",
      content:
        "When you submit information through our website, you represent that the information you provide is accurate, current, and complete.\n\nWe rely on the information you provide to assess your needs, prepare proposals, and deliver services. LexumSoft is not responsible for outcomes that result from incorrect information supplied by you.\n\nBy submitting your information, you consent to us storing and using that information to respond to your inquiry, provide services, and communicate with you. Please review our Privacy Policy for full details on how we handle your data.",
    },
    {
      heading: "6. Disclaimer of Warranties",
      content:
        'This website and its content are provided on an "as is" and "as available" basis without warranties of any kind, either express or implied. LexumSoft disclaims all warranties, including implied warranties of merchantability, fitness for a particular purpose, and non-infringement.\n\nWhile we are committed to delivering measurable results, we cannot and do not guarantee specific outcomes such as a defined number of leads, calls, or revenue. Digital marketing performance is influenced by many factors outside our control. Any projections or estimates we provide are good-faith expectations, not guarantees.',
    },
    {
      heading: "7. Limitation of Liability",
      content:
        "To the fullest extent permitted by applicable law, LexumSoft shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of this website or our services — including lost profits, lost revenue, loss of data, or business interruption.\n\nIn no event shall our total liability exceed the total amount you paid to LexumSoft in the three (3) months preceding the event giving rise to the claim, or five hundred dollars ($500), whichever is greater.",
    },
    {
      heading: "8. Indemnification",
      content:
        "You agree to indemnify, defend, and hold harmless LexumSoft and its owners, employees, contractors, and agents from any claims, liabilities, damages, losses, costs, and expenses arising out of your use of this website or our services, your violation of these Terms, any inaccurate information you submit, or your violation of any applicable law.",
    },
    {
      heading: "9. Termination",
      content:
        "Either party may terminate a service engagement by providing written notice in accordance with the applicable service agreement.\n\nWe reserve the right to suspend or terminate your access to this website at any time if we believe you have violated these Terms.\n\nUpon termination, you remain responsible for any outstanding payments for work completed. Provisions regarding intellectual property, disclaimers, limitations of liability, and indemnification survive termination.",
    },
    {
      heading: "10. Governing Law",
      content:
        "These Terms of Service shall be governed by and construed in accordance with the laws of the United States. Disputes will be subject to binding arbitration or resolved in a court of competent jurisdiction agreed upon by both parties.\n\nIf any provision of these Terms is found to be unenforceable, that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions will remain in full force and effect.",
    },
    {
      heading: "11. Changes to These Terms",
      content:
        'We may update these Terms of Service from time to time. When we make changes, we will update the "Last Updated" date at the top of this page.\n\nYour continued use of this website after any changes constitutes your acceptance of the revised Terms. We encourage you to review these Terms periodically.',
    },
    {
      heading: "12. Contact Information",
      content:
        "If you have any questions about these Terms of Service, please reach out.\n\nEmail: waqar@lexumsoft.com\nPhone: +923282828885\nWebsite: www.lexumsoft.com",
    },
  ],
};

export const COOKIE_POLICY: LegalPage = {
  title: "Cookie Policy",
  lastUpdated: "February 28, 2026",
  sections: [
    {
      heading: "What Are Cookies",
      content:
        "Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently, remember your preferences, and provide information to site owners about how visitors interact with their content.\n\nSome cookies are set by us directly (first-party cookies), while others are set by third-party services we use such as analytics or advertising platforms (third-party cookies). Cookies can be either session cookies, which expire when you close your browser, or persistent cookies, which remain on your device for a set period of time.",
    },
    {
      heading: "How We Use Cookies",
      content:
        "We use cookies to operate and improve the LexumSoft website, understand how visitors engage with our content, and deliver relevant information.\n\nEssential Cookies are strictly necessary for the website to function. Without them, core features like page navigation and form submissions would not work properly.\n\nAnalytics Cookies help us understand how visitors use our site — which pages they visit, how long they stay, and where they exit. This data is aggregated and helps us improve the experience.\n\nFunctional Cookies remember choices you make so we can provide a more personalized experience on return visits.\n\nMarketing Cookies track browsing activity to help us and our advertising partners show you relevant ads about our services.",
    },
    {
      heading: "Types of Cookies We Use",
      content:
        "Essential Cookies:\n- XSRF-TOKEN: Cross-site request forgery protection (Session)\n\nAnalytics Cookies:\n- _ga: Google Analytics — distinguishes unique users (2 years)\n- _ga_[ID]: Google Analytics — persists session state (2 years)\n- _gid: Google Analytics — distinguishes users across sessions (24 hours)\n- _gat: Google Analytics — throttles request rate (1 minute)\n\nFunctional Cookies:\n- cookieconsent_status: Remembers cookie notice acknowledgment (1 year)\n\nMarketing Cookies:\n- _gcl_au: Google Ads — measures ad conversion events (90 days)\n- IDE: Google DoubleClick — retargeting and ad frequency capping (13 months)\n- _fbp: Facebook — identifies browsers for ad delivery (90 days)\n\nThis list reflects our current setup and may be updated as our technology evolves.",
    },
    {
      heading: "Third-Party Cookies",
      content:
        "Some cookies on our website are placed by third-party services we have integrated. We do not have direct control over these cookies, and they are governed by the respective third parties' own privacy and cookie policies.\n\nGoogle Analytics (Google LLC) — We use Google Analytics to understand aggregate traffic patterns. You can opt out by installing the Google Analytics Opt-Out Browser Add-on.\n\nGoogle Ads (Google LLC) — We run paid advertising campaigns through Google Ads. These cookies help us measure campaign performance and manage ad frequency.\n\nMeta Pixel (Meta Platforms, Inc.) — We use Meta's advertising pixel to run targeted campaigns on Facebook and Instagram.\n\nGoogle Tag Manager — We use Google Tag Manager to manage analytics and marketing scripts. Tag Manager itself does not collect personal data.",
    },
    {
      heading: "Managing Your Cookie Preferences",
      content:
        "You are in control of the cookies stored on your device. You can accept, decline, or delete cookies at any time through your browser settings.\n\nGoogle Chrome: Settings > Privacy and security > Cookies and other site data.\nMozilla Firefox: Settings > Privacy & Security > Cookies and Site Data.\nApple Safari: Preferences > Privacy.\nMicrosoft Edge: Settings > Cookies and site permissions.\n\nOn mobile devices, cookie settings are typically found within your browser app's settings menu under privacy or site settings.\n\nYou can also opt out of interest-based advertising through the Digital Advertising Alliance at optout.aboutads.info or the Network Advertising Initiative at optout.networkadvertising.org.",
    },
    {
      heading: "Impact of Disabling Cookies",
      content:
        "Most of our website will continue to function if you choose to disable cookies. However, some features may be affected.\n\nDisabling essential cookies may prevent contact forms and submissions from working correctly. Disabling analytics cookies means we lose the ability to understand how visitors use our site. Disabling functional cookies means we cannot remember your preferences between visits. Disabling marketing cookies means ads may be less relevant and appear more frequently.\n\nDisabling marketing and analytics cookies will not reduce the quality of our services or affect how we respond to any inquiry you submit.",
    },
    {
      heading: "Changes to This Cookie Policy",
      content:
        'We may update this Cookie Policy from time to time as our website, technology, and legal obligations evolve. When we make changes, we will update the "Last Updated" date at the top of this page.\n\nYour continued use of our website after any changes constitutes your acknowledgment of the updated terms.',
    },
    {
      heading: "Contact Us",
      content:
        "If you have questions about this Cookie Policy or would like to exercise any rights related to your data, please reach out.\n\nEmail: waqar@lexumsoft.com\nPhone: +923282828885\n\nWe aim to respond to all inquiries within 2 business days.",
    },
  ],
};
