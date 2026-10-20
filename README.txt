GREENCROSS PHARMACY — WEBSITE DEMO
==================================

Files:
- index.html — website content
- styles.css — visual design and mobile layout
- script.js — mobile menu, contact links and WhatsApp enquiry form

This is a static site. No framework, build step, database or API key is required.
It can be deployed to Vercel or another static website host.

IMPORTANT — DEMO ONLY
---------------------
This is a concept demonstration, not a verified official pharmacy website.
Before presenting it as a live client website:
1. Confirm the pharmacy has authorized use of the name and branding.
2. Replace the sample phone, WhatsApp, email, address and opening hours.
3. Confirm every service and product category with the pharmacy.
4. Replace demo photos with client-approved photos where possible.
5. Test every link and form on a real phone.
6. Agree the scope, price, ownership, hosting and maintenance with the client.

EDIT CONTACT DETAILS
--------------------
Open script.js and edit GREEN_CROSS_CONFIG:
- phoneDisplay: number displayed on the page.
- phoneDial: number used by the phone dialer, e.g. +263771234567.
- whatsappNumber: international format digits only, e.g. 263771234567.
- email: real contact email.
- address: verified street / shopping centre / town.
- hours: verified opening hours.

Phone links use tel:. Email links use mailto:.
The WhatsApp enquiry form opens WhatsApp with a prefilled message. The customer reviews it and manually taps Send. It does not send automatically.

IMAGES AND FONTS
----------------
Demo images are loaded from Unsplash and fonts from Google Fonts, so they need an internet connection. For a live client site, use client-approved images and check image licensing/performance.

DEPLOY ON VERCEL
----------------
1. Upload index.html, styles.css, script.js and README.txt to the GitHub repository root.
2. Import that repository in Vercel.
3. Choose Other as the framework preset if prompted.
4. For this static site, no build command is required.
5. Deploy and test the live URL on mobile.

FINAL QUALITY CHECKLIST
-----------------------
[ ] Confirmed business details and authorization
[ ] Phone opens dialer
[ ] Email opens email app
[ ] WhatsApp form opens a prefilled message for manual sending
[ ] Mobile navigation works
[ ] All section links work
[ ] No broken images or overflowing layout
[ ] Client-approved photos and content
