const WHATSAPP_NUMBER = "33612345678";
const WHATSAPP_MESSAGE =
  "Bonjour VIBRA'SON, je souhaite avoir plus d'informations sur vos activités.";

export default function WhatsAppButton() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Nous contacter sur WhatsApp"
    >
      <span className="whatsapp-float_pulse" aria-hidden="true"></span>
      <span className="whatsapp-float_icon" aria-hidden="true">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="30"
          height="30"
          fill="currentColor"
        >
          <path d="M16.004 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.257.59 4.462 1.71 6.404L3.2 28.8l6.557-1.68a12.74 12.74 0 0 0 6.243 1.626h.005c7.058 0 12.795-5.74 12.795-12.8 0-3.42-1.33-6.635-3.748-9.052A12.72 12.72 0 0 0 16.004 3.2zm0 23.386h-.004a10.6 10.6 0 0 1-5.41-1.482l-.388-.23-3.89.997 1.038-3.795-.253-.39a10.594 10.594 0 0 1-1.63-5.686c0-5.87 4.777-10.646 10.65-10.646 2.844 0 5.517 1.109 7.527 3.121a10.59 10.59 0 0 1 3.115 7.53c-.002 5.87-4.78 10.646-10.646 10.646zm5.84-7.973c-.32-.16-1.894-.934-2.187-1.041-.293-.107-.507-.16-.72.16-.213.32-.826 1.04-1.013 1.254-.187.213-.373.24-.693.08-.32-.16-1.352-.498-2.575-1.588-.952-.85-1.594-1.898-1.781-2.218-.187-.32-.02-.494.14-.653.144-.144.32-.374.48-.56.16-.187.213-.32.32-.534.107-.213.054-.4-.026-.56-.08-.16-.72-1.735-.987-2.375-.26-.624-.523-.54-.72-.55l-.613-.01c-.213 0-.56.08-.853.4-.293.32-1.12 1.094-1.12 2.668 0 1.575 1.147 3.096 1.307 3.31.16.213 2.256 3.444 5.466 4.83.764.33 1.36.527 1.825.674.767.244 1.465.21 2.017.127.615-.092 1.894-.774 2.16-1.522.267-.747.267-1.387.187-1.521-.08-.133-.293-.213-.613-.373z" />
        </svg>
      </span>
      <span className="whatsapp-float_label">WhatsApp</span>
    </a>
  );
}
