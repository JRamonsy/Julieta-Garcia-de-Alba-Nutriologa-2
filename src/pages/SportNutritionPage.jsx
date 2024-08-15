import './Styles/SportNutritionPage.css'

const SportNutritionPage = () => {
  return (
    <div className='section-sport'>
        <div className="sport-description-1">
            <div className="sport-description-content">
                <h1 className='sport-title'>Nutrición deportiva</h1>
                <p className='sport-text'>La nutrición deportiva es una rama de la nutrición humana que se especializa en las personas que practican deporte. Pueden ser deportes intensos, como la halterofilia (también llamada culturismo) o el fitness; o deportes de resistencia, es decir, aquellos que implican esfuerzos prolongados en el tiempo, como las carreras de maratón, el ciclismo o los triatlones.</p>
                <p className='sport-text'>En esta especialidad, se trabajan los aspectos nutricionales de cada etapa del deporte: el descanso, la fase activa y la fase de recuperación. La alimentación es clave para mantener un buen estado de salud y para optimizar el rendimiento deportivo, por lo que la nutrición se ha convertido en un verdadero "entrenamiento invisible" y su importancia es cada vez más reconocida por los deportistas.</p>
            </div>
            <div className="sport-images-content">
                <img className='sport-image' alt=""  src="\sport1.jpg" width="300"/>
                <img className='sport-image' alt=""  src="\sport3.jpg" width="300"/>
                <img className='sport-image' alt=""  src="\sport2.jpg" width="600"/>
            </div>
        </div>    
        <div className="sport-description-2">
            <div className="sport-description-content-2">
                <h1 className='sport-title'>¿Qué hago como nutricionista deportivo?</h1>
                <p className='sport-text'>Evalúo y analiza las prácticas dietéticas, las estrategias de ingesta, la composición corporal y el balance de energía (ingesta y consumo) de los deportistas y su relación con el rendimiento deportivo y la salud.</p>
                <p>Proveo de herramientas para mejorar la composición corporal.</p>
                <p>Desarrollo planes de alimentación personalizados (comidas y meriendas) enfocados en el logro de objetivos a corto y largo plazo.</p>
                <p>Atiendo y aconsejo las otras necesidades, como las alergias o intolerancias alimentarias, las trastornos gastrointestinales, la deficiencia de hierro, entre otros.</p>
                <p>Aconsejo sobre estrategias nutricionales para recuperarse de una enfermedad o una lesión.</p>
                <p>Evalúo suplementos nutricionales y otros tipos de productos en cuanto a legalidad, calidad, eficacia y uso apropiado.</p>
                <p>Trabajo en colaboración con los profesionales cercanos al deportista, como el entrenador, el médico, la familia y el equipo.</p>
                <p>Educo sobre cómo leer las etiquetas nutricionales para saber elegir los alimentos adecuados y saber cómo prepararlos.</p>
                <h2 className='sport-title'>Aconsejo a los deportistas sobre:</h2>
                <ul>
                    <li>Nutrición durante el entrenamiento</li>
                    <li>Preparación para un evento competitivo</li>
                    <li>Recuperación posterior al ejercicio</li>
                    <li>Manejo del peso</li>
                    <li>Hidratación</li>
                    <li>Fortalecimiento del sistema inmunológico</li>
                    <li>Consumo de sustancias permitidas</li>
                    <li>Alimentación durante viajes</li>
                </ul>
            </div>
        </div>   
    </div>
  )
}

export default SportNutritionPage
