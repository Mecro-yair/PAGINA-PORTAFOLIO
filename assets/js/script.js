// ====== MENÚ HAMBURGUESA ======
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    hamburger.classList.toggle('active');
  });
}

// ====== FORMULARIO WHATSAPP ======
const form = document.getElementById('contactForm');

if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const number = "51931785299"; // Número del coordinador

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      alert("Por favor completa todos los campos antes de enviar.");
      return;
    }

    const text = `*Nuevo mensaje de contacto*%0A` +
                 `🧑 Nombre: ${encodeURIComponent(name)}%0A` +
                 `📧 Correo: ${encodeURIComponent(email)}%0A` +
                 `💬 Mensaje: ${encodeURIComponent(message)}`;

    window.open(`https://wa.me/${number}?text=${text}`, "_blank");
    form.reset(); // limpia el formulario después de enviar
  });
}
