
const openWhatsApp = () => {
    const phoneNumber = "+524441785953"; // Reemplaza con tu número (incluye código de país)
    const message = "Que tal, mi nombre es:....., quisiera agendar una cita"; // Mensaje opcional
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank"); // Abre WhatsApp en una nueva pestaña
  };
  
  const WhatsAppButton = () => {

    return (
      <button
        onClick={openWhatsApp}
        className="whats-app-button"
      >
        Abrir WhatsApp
      </button>
    );
  };
  
  export default WhatsAppButton;