/*
 GreenCross Pharmacy demo configuration.
 BEFORE SHOWING THIS TO A REAL CLIENT:
 1) Replace the sample phone, WhatsApp, email, address and hours below.
 2) Confirm services/categories with the pharmacy.
 3) Replace demo photos with client-approved photos where possible.
 4) Test all links on a real phone.
*/
const GREEN_CROSS_CONFIG = {
  // Use digits only for WhatsApp, with country code 263 and no leading zero.
  phoneDisplay: "+263 78 623 1767",
  phoneDial: "+263786231767",
  whatsappNumber: "263786231767",
  email: "hello@greencross-pharmacy.example",
  address: "Add confirmed pharmacy address, Zimbabwe",
  hours: "Add confirmed opening hours"
};
const byId = id => document.getElementById(id);
const setText = (id, value) => { const el = byId(id); if (el) el.textContent = value; };
setText("quickAddress", GREEN_CROSS_CONFIG.address);
setText("quickHours", GREEN_CROSS_CONFIG.hours);
setText("phoneText", GREEN_CROSS_CONFIG.phoneDisplay);
setText("emailText", GREEN_CROSS_CONFIG.email);
setText("addressText", GREEN_CROSS_CONFIG.address);
setText("footerAddress", GREEN_CROSS_CONFIG.address);
setText("footerHours", GREEN_CROSS_CONFIG.hours);
setText("year", new Date().getFullYear());
const setLink = (id, href) => { const el = byId(id); if (el) el.href = href; };
setLink("phoneLink", `tel:${GREEN_CROSS_CONFIG.phoneDial}`);
setLink("footerPhone", `tel:${GREEN_CROSS_CONFIG.phoneDial}`);
setLink("emailLink", `mailto:${GREEN_CROSS_CONFIG.email}`);
setLink("footerEmail", `mailto:${GREEN_CROSS_CONFIG.email}`);

const menuToggle = byId("menuToggle");
const mainNav = byId("mainNav");
if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  });
  mainNav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  }));
}
const enquiryForm = byId("enquiryForm");
if (enquiryForm) enquiryForm.addEventListener("submit", event => {
  event.preventDefault();
  const feedback = byId("formFeedback");
  const name = byId("customerName").value.trim();
  const contact = byId("customerContact").value.trim();
  const type = byId("enquiryType").value;
  const message = byId("enquiryMessage").value.trim();
  if (!name || !type || !message) {
    if (feedback) feedback.textContent = "Please complete your name, enquiry type and message.";
    return;
  }
  if (!GREEN_CROSS_CONFIG.whatsappNumber || GREEN_CROSS_CONFIG.whatsappNumber.includes("REPLACE")) {
    if (feedback) feedback.textContent = "The pharmacy WhatsApp number must be configured before enquiries can be sent.";
    return;
  }
  const text = [
    "Hello GreenCross Pharmacy,", "",
    `My name is ${name}.`,
    contact ? `My contact: ${contact}` : "",
    `Enquiry: ${type}`,
    `Message: ${message}`, "",
    "Please let me know the next step. Thank you."
  ].filter(Boolean).join("\n");
  const url = `https://wa.me/${GREEN_CROSS_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank", "noopener,noreferrer");
  if (feedback) feedback.textContent = "WhatsApp opened in a new tab or app. Review the message and tap Send there.";
});
