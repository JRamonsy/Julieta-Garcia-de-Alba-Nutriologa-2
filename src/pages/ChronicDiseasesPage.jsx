import './Styles/ChonicDiseasesPage.css'


const ChronicDiseasesPage = () => {
  return (
    <div className="container-chronic">
      <div className="container-content">
        <div className="image-chronic">
          <img className='img-chronic' src="/comida-basura-1.jpg" alt="Persona con un estetoscopio y alimentos saludables, representando el cuidado nutricional en enfermedades crónicas"/>
        </div>
        <div className="container-chronic-text">
          <h1 className='chronic-title'>ENFERMEDADES CRÓNICAS</h1>
          <p className='text'>
            Una alimentación adecuada es clave en la prevención, control y tratamiento de enfermedades crónicas como la diabetes tipo 2, hipertensión, enfermedades cardiovasculares, dislipidemias y enfermedades renales.
          </p>
          <div>
            <h1 className='chronic-title'>¿Cómo puedo ayudarte si tienes alguna enfermedad crónica?</h1>
            <p className='text'>
              Como nutrióloga, puedo acompañarte en el manejo integral de tu condición a través de un plan nutricional personalizado y un enfoque empático:
            </p>
            <ul>
              <li><b>Valoración nutricional completa.</b> Analizaré tu historial clínico, hábitos alimenticios y estilo de vida para establecer un punto de partida.</li>
              <li><b>Diseño de un plan alimenticio personalizado.</b> Elaboraré un plan de alimentación específico para tu diagnóstico, considerando tus necesidades y preferencias.</li>
              <li><b>Control de parámetros clínicos.</b> Monitorearemos indicadores como glucosa, presión arterial, lípidos, y peso corporal para evaluar los avances.</li>
              <li><b>Educación en hábitos saludables.</b> Recibirás orientación clara sobre qué alimentos favorecen tu salud y cuáles deberías evitar o moderar.</li>
              <li><b>Acompañamiento continuo.</b> Te brindaré seguimiento regular para ajustar el plan conforme avances y ayudarte a mantener tu bienestar a largo plazo.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChronicDiseasesPage;
