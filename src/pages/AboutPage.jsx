import './Styles/AboutPage.css';

const AboutPage = () => {
  return (
    <div className="container-about">
      <div className="container-about-lay-out">
        <div className='bio-1'>
        <header className='container-imge-title'>
            <img alt="" className="profile-image"  src="\Imagen de WhatsApp 2024-08-10 a las 17.52.28_6a95484f.jpg" />
            <div>
                <h1 className='about-title'>Julieta Garcia de Alba</h1>
                <p className="tagline">La nutrición y el deporte como camino de la constancia</p>
            </div>
        </header>  
        </div>

        <div className="bio-2">
            <p>¡Hola! Soy Julieta, nutrióloga apasionada y dedicada a guiar a mis pacientes hacia un estilo de vida más saludable y equilibrado. Desde muy joven, la alimentación y el bienestar han sido temas que despertaron mi interés, lo que me llevó a seguir una carrera en nutrición, motivada por el deseo de ayudar a las personas a vivir mejor a través de una buena alimentación.</p>
            <p>Con más de [Número de Años] años de experiencia en la práctica clínica, he tenido el privilegio de ayudar a más de [Número de Pacientes] pacientes a mejorar su salud a través de planes de alimentación personalizados y enfoques nutricionales basados en evidencia. Mi enfoque se centra en la educación y el empoderamiento de mis pacientes, brindándoles las herramientas y conocimientos necesarios para tomar decisiones informadas sobre su alimentación y estilo de vida.</p>
            <p>Estoy aquí para acompañarte en cada paso de tu camino hacia una mejor salud. Juntos, podemos construir un plan que no solo te ayude a alcanzar tus metas, sino que también te enseñe a disfrutar de una alimentación sana y consciente. ¡Espero poder trabajar contigo y ser parte de tu transformación hacia una vida más saludable!</p>
        </div>
        <div className='bio-3'>
            <div className="bio-3-section">
                <h2><i className="fas fa-star"></i>Especialidades</h2>
                <p>Me especializo en [Ejemplos de Especialidades, como: nutrición clínica, control de peso, nutrición deportiva, alimentación vegetariana y vegana, y manejo de enfermedades crónicas]. Mi objetivo es proporcionar un apoyo integral que no solo trate los síntomas, sino que también promueva un bienestar a largo plazo.</p>
            </div>
            <div className="bio-3-section">
                <h2><i className="fas fa-heart"></i>Hobbies</h2>
                <p>Fuera de la consulta, me encanta [Ejemplo de Hobbies, como: experimentar con nuevas recetas saludables en la cocina, practicar yoga, salir a correr, y leer sobre nuevas tendencias en salud y bienestar]. Creo que mantener un equilibrio entre el trabajo y el tiempo libre es esencial para una vida plena y saludable, y me esfuerzo por aplicar los mismos principios de bienestar en mi vida personal que promuevo entre mis pacientes.</p>
            </div>
            <div className="bio-3-section">
                <h2><i className="fas fa-question-circle"></i>¿Cómo llegué a la nutrición?</h2>
                <p>Mi interés en la nutrición comenzó cuando, a los [Edad], me di cuenta del impacto que la alimentación tenía en mi propia salud y bienestar. Después de experimentar los beneficios de una dieta equilibrada en mi vida personal, supe que quería dedicarme a ayudar a otros a experimentar lo mismo. La decisión de estudiar nutrición fue, para mí, un paso natural hacia un camino donde pudiera combinar mi amor por la ciencia con mi deseo de contribuir al bienestar de la comunidad..</p>
            </div>
        </div>
        <div className='container-contact-btn'>
          <a className="btn-contact" href="#/contact">¡Contáctame!</a>
        </div>
        <div className="about-formation">
            <h2 className='about-formation-title'>Formación</h2>
            <ul className='about-ul'>
                <li>Licenciado en Nutrición Humana y Dietética por [.....]</li>
                <li>Certificado en Nutrición Deportiva por [.....]</li>
                <li>Curso de Especialización en Nutrición para [.....]</li>
                <li>Curso de Suplementación Deportiva Avanzada por [.....]</li>
                <li>Máster en Psicología [.....]</li>
            </ul>
        </div>
    </div>
           
    </div>
  )
}

export default AboutPage
