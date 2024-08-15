import './Styles/OnlineConsultationPage.css'

const OnlineConsultationPage = () => {
  return (
    <section className="section-online">
        <div className="container-online">
            <div className="online-content">
                <h1>Tu nutricionista <span>online</span></h1>
                <p>Transforma tu bienestar y calidad de vida con nuestras consultas en linea, 
                    accesibles desde cualquier rincón de México. 
                    Te ofrezco un servicio personalizado que se adapta a tus necesidades específicas, 
                    permitiéndote alcanzar tus metas de salud sin la necesidad de desplazarte. 
                    Estaré a tu lado en cada etapa del proceso, brindándote el apoyo y la orientación que necesitas para avanzar con confianza, 
                    celebrando juntos cada uno de tus logros y asegurando que tu camino hacia una vida más saludable sea gratificante y sostenible.
                </p>
        
            
                <div>
                    <h2>Beneficios de tu consulta en linea</h2>
                    <ul className='online-ul'>
                        <li className='onli-li'>Planes personalizados</li>
                        <li className='onli-li'>Sostenibles a largo plazo</li>
                        <li className='onli-li'>Diseñados par adoptar nuevos hábitos</li>
                        <li className='onli-li'>Recomendaciones de actividad fisica</li>
                        <li className='onli-li'>Consejos y recomendaciones personalizados</li>
                    </ul>
                    <p className='online-ul-text'>¡Inicia tu cambio ahora!</p>
                    <button className="btn-contact">¡Contactame!</button>
                    
                    
                </div>
            </div>
            <div className="image-container-online">
                <img src="public\online1.jpg" alt="" className="circular-image" />
            </div>
        </div>      
    </section>
  )
}

export default OnlineConsultationPage
