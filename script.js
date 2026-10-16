// GreenCross Pharmacy — standalone page logic

const PHONE_WA = "263786231767";

const products = [
  { icon: "💊", name: "Prescriptions", desc: "Fast, accurate dispensing by qualified pharmacists. Bring your script or send it on WhatsApp." },
  { icon: "🌡️", name: "Pain & Fever", desc: "Paracetamol, ibuprofen and trusted relief for the whole family." },
  { icon: "🍊", name: "Vitamins & Immunity", desc: "Daily multivitamins, vitamin C and immune support that actually works." },
  { icon: "🩹", name: "First Aid", desc: "Plasters, bandages, antiseptics and everything for your home kit." },
  { icon: "🤧", name: "Cold & Flu", desc: "Syrups, lozenges and sprays to get you back on your feet." },
  { icon: "🧴", name: "Personal Care", desc: "Skin care, baby products and everyday hygiene essentials." },
];

const quickAnswers = [
  {
    icon: "📝",
    q: "Do I need a prescription?",
    a: "For medicines like antibiotics, yes — but most painkillers, vitamins and first aid items are available over the counter. Send us what you need and we'll confirm.",
  },
  {
    icon: "🚚",
    q: "Can I get my order delivered?",
    a: "Yes. Ask us on WhatsApp and we'll arrange delivery or have your order packed and waiting for pickup at the counter.",
  },
  {
    icon: "🕐",
    q: "When are you open?",
    a: "Monday to Saturday, 8am–6pm, and Sunday mornings. Outside those hours, message us and we'll get back to you first thing.",
  },
  {
    icon: "💬",
    q: "Can I ask the pharmacist something?",
    a: "Of course. Whether it's dosing, side effects or a product recommendation, send your question and our pharmacist will answer you personally.",
  },
];

const testimonials = [
  {
    quote: "They had my mother's blood pressure medication ready within the hour. The pharmacist even called to check how she was doing.",
    name: "Rutendo M.",
    area: "Avondale",
  },
  {
    quote: "I send my script on WhatsApp in the morning and pick it up at lunch. No queues, no hassle. Best pharmacy in the area.",
    name: "Tapiwa C.",
    area: "Borrowdale",
  },
  {
    quote: "The pharmacist took time to explain my son's antibiotics properly — dosage, timing, everything. You don't get that everywhere.",
    name: "Nyasha K.",
    area: "Mount Pleasant",
  },
];

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&")
    .replace(/</g, "<")
    .replace(/>/g, ">")
    .replace(/"/g, '"');
}

function renderProducts() {
  const grid = document.getElementById("products-grid");
  if (!grid) return;
  grid.innerHTML = products
    .map(
      (p) => `
      <div class="card">
        <div class="icon">${p.icon}</div>
        <h3>${escapeHtml(p.name)}</h3>
        <p>${escapeHtml(p.desc)}</p>
      </div>`
    )
    .join("");
}

function renderAnswers() {
  const grid = document.getElementById("answers-grid");
  if (!grid) return;
  grid.innerHTML = quickAnswers
    .map(
      (item) => `
      <div class="card">
        <div class="q"><span class="icon">${item.icon}</span><h3>${escapeHtml(item.q)}</h3></div>
        <p class="a">${escapeHtml(item.a)}</p>
      </div>`
    )
    .join("");
}

function renderTestimonials() {
  const grid = document.getElementById("testimonials-grid");
  if (!grid) return;
  grid.innerHTML = testimonials
    .map(
      (t) => `
      <figure class="card">
        <div class="stars" aria-label="5 star review">★★★★★</div>
        <blockquote>"${escapeHtml(t.quote)}"</blockquote>
        <figcaption>${escapeHtml(t.name)} <span>— ${escapeHtml(t.area)}</span></figcaption>
      </figure>`
    )
    .join("");
}

function setupEnquiryForm() {
  const form = document.getElementById("enquiry-form");
  if (!form) return;

  const nameInput = document.getElementById("enquiry-name");
  const msgInput = document.getElementById("enquiry-message");
  const errorEl = document.getElementById("enquiry-error");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = nameInput.value.trim().slice(0, 100);
    const message = msgInput.value.trim().slice(0, 1000);

    if (!name || !message) {
      errorEl.hidden = false;
      return;
    }

    errorEl.hidden = true;
    const text = "Hello GreenCross Pharmacy, my name is " + name + ".\n\n" + message;
    window.open("https://wa.me/" + PHONE_WA + "?text=" + encodeURIComponent(text), "_blank", "noopener");
  });
}

renderProducts();
renderAnswers();
renderTestimonials();
setupEnquiryForm();
