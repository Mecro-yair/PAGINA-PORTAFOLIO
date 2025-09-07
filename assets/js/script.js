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

// ====== YOUTUBE PLAYER (Máxima calidad y evitar reproducción simultánea) ======
const ytScript = document.createElement('script');
ytScript.src = "https://www.youtube.com/iframe_api";
document.head.appendChild(ytScript);

let players = [];

function onYouTubeIframeAPIReady() {
  // Video 1 (NOT)
  players.push(new YT.Player('player1', {
    height: '450',
    width: '800',
    videoId: 'qv7xmCNmTSs',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  }));

  // Video 2 (AND)
  players.push(new YT.Player('player2', {
    height: '450',
    width: '800',
    videoId: '7F2b0maYkCY',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  }));
  // Video 3
  players.push(new YT.Player('player3', {
    height: '450',
    width: '800',
    videoId: 'nj2Xw3EyQR0',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  }));
  // Video 4
  players.push(new YT.Player('player4', {
    height: '450',
    width: '800',
    videoId: 'y4JQsavTR4Q',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  }));
}

function onPlayerReady(event) {
  event.target.setPlaybackQuality('highres'); // Forzar calidad máxima
}

function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.PLAYING) {
    // Pausar todos los demás players
    players.forEach(p => {
      if (p !== event.target) {
        p.pauseVideo();
      }
    });
  }
}
