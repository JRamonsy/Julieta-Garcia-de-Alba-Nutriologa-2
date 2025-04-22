import './Styles/ContactPage.css';

const ContactPage = () => {
  return (
    <section className="section-contact-page">
      <div className="container-contact-grid">
        <div className="contact-address">
          <h1 className="sections-1">CONTACTAME</h1>
          <p className='intro-info'>
            Si quieres contactar con migo, puedes rellenar el formulario de contacto y te contestare en un plazo de 24 horas, pedir cita directamente o llamarnos por teléfono. Estare encantada de atenderte.
          </p>
          <div className="contact-info-page">
            <div>
              <i className="far fa-clock"></i> Consulta: 10-2 pm y 4 pm-8 pm
            </div>
            <div>
              <i className="fas fa-phone"></i> Teléfono Consulta: 4441 23 45 67
            </div>
            <div>
              <i className="fab fa-whatsapp"></i> WhatsApp: 4441 78 59 53
            </div>
            <div>
              <i className="fas fa-map-marker-alt"></i> Cómo llegar: Dirección: Av.Cuathémoc No.376 Col. Moderna CP 78233
            </div>
          </div>
        </div>
        <div className="contact-form">
          <form>
            <input type="text" placeholder="Nombre y Apellidos" />
            <input type="tel" placeholder="Teléfono" />
            <input type="email" placeholder="E-mail" />
            <textarea placeholder="Comentarios"></textarea>
            <div className="g-recaptcha" data-sitekey="your_site_key">
              <div >
                <textarea
                  id="g-recaptcha-response"
                  name="g-recaptcha-response"
                  className="g-recaptcha-response"
                  style={{
                    width: '250px',
                    border: '1px solid rgb(193, 193, 193)',
                    margin: '10px 25px',
                    padding: '0px',

                    display: 'none',
                  }}
                ></textarea>
              </div>
            </div>
            <button type="submit" className="submit-btn">ENVIAR EMAIL</button>
          </form>
        </div>
        <div className="contact-map">
          <h1 className="sections-1">Dónde encontrarme</h1>
          <div className="content-map">
            <div className="map">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5226.122119145176!2d-100.98974466869339!3d22.14783576552244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842a98ac53e364a7%3A0x42ab31906669f2ec!2sAv.%20Cuauht%C3%A9moc%20376%2C%20De%20Tequisquiapan%2C%2078233%20San%20Luis%20Potos%C3%AD%2C%20S.L.P.!5e0!3m2!1ses-419!2smx!4v1723688272491!5m2!1ses-419!2smx" 
                width="600" 
                height="450" 
                style={{border: 0}} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="info-map">
              <h2 className='weight-sub-title'>Consultorios Medicos - Nutricionistas</h2>
              <p className='intro-info'>
                Si buscas un dietista - nutricionista que te ayude a llegar a tu objetivo, puedes contactar con nuestra consulta de nutrición en San luis Potosí. Tratamos todo tipo de dietas relacionadas con problemas de salud, mejora del rendimiento deportivo, dietas vegetarianas, pérdida de peso o nutrición infantil entre otras. También disponemos de servicio de nutricionista en linea.
              </p>
              <p className="address">
                Av.Cuathémoc No.376 Col. Moderna CP 78233
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
