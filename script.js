// Precious 32 Dental Clinic Interactive Scripts

document.addEventListener('DOMContentLoaded', () => {
  // Dynamic Year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile Menu Toggle
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
    });
  }

  // Service Category Filtering
  const filterBtns = document.querySelectorAll('.filter-btn');
  const serviceCards = document.querySelectorAll('.service-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active', 'bg-obsidian', 'text-ivory'));
      filterBtns.forEach(b => b.classList.add('bg-white', 'text-obsidian'));

      btn.classList.add('active', 'bg-obsidian', 'text-ivory');
      btn.classList.remove('bg-white', 'text-obsidian');

      const category = btn.getAttribute('data-filter');
      serviceCards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
          card.classList.remove('hidden-card');
        } else {
          card.classList.add('hidden-card');
        }
      });
    });
  });

  // FAQ Accordion
  const faqToggles = document.querySelectorAll('.faq-toggle');
  faqToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const content = toggle.nextElementSibling;
      const icon = toggle.querySelector('.faq-icon');
      const isOpen = !content.classList.contains('hidden');

      document.querySelectorAll('.faq-content').forEach(c => c.classList.add('hidden'));
      document.querySelectorAll('.faq-icon').forEach(i => (i.textContent = '+'));

      if (!isOpen) {
        content.classList.remove('hidden');
        icon.textContent = '−';
      }
    });
  });

  // Appointment Form -> WhatsApp Integration
  const form = document.getElementById('appointment-form');
  const feedback = document.getElementById('form-feedback');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('patientName').value.trim();
      const phone = document.getElementById('patientPhone').value.trim();
      const treatment = document.getElementById('treatmentType').value;
      const date = document.getElementById('preferredDate').value || 'Earliest Available';
      const notes = document.getElementById('patientNotes').value.trim();

      const msg = `Hello Precious 32 Dental Clinic! I would like to book an appointment.%0A%0A*Name:* ${encodeURIComponent(name)}%0A*Phone:* ${encodeURIComponent(phone)}%0A*Treatment:* ${encodeURIComponent(treatment)}%0A*Preferred Date:* ${encodeURIComponent(date)}${notes ? `%0A*Notes:* ${encodeURIComponent(notes)}` : ''}`;

      feedback.textContent = 'Opening WhatsApp to confirm your appointment with Dr. Saurav Shankar Das...';
      feedback.classList.remove('hidden');

      window.open(`https://wa.me/918971884407?text=${msg}`, '_blank', 'noopener');
    });
  }
});
