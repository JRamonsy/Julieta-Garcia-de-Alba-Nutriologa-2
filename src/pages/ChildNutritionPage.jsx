import './Styles/ChildNutritionPage.css';

const ChildNutritioPage = () => {
  return (
    <div className="container-child">
        <div className="container-content">
        <div className="image-child">
            <img className='img-child' src="\NUTRICION-INFANTIL.jpg" alt="Niño pequeño comiendo de un tazón con una cuchara, sentado a una mesa con un plato de pan al lado"/>
        </div>
        <div className="container-child-text">
            <h1 className='child-title'>NUTRICIÓN INFANTIL</h1>
            <p className='text'>Una dieta equilibrada y saludable en la infancia puede reducir el riesgo de enfermedades crónicas, como la obesidad, la diabetes tipo 2 y las enfermedades cardiovasculares en el futuro.</p>
            <div>
            <h1 className='child-title'>¿Cómo puedo ayudar a tu infante?</h1>
            <p className='text'>
            Como nutrióloga especializada en la nutrición de niños y adolescentes, puede ofrecer una serie de servicios:

            </p>
            <ul>
                <li> <b>Evaluación de la dieta actual.</b> Revisare la dieta de tu bebé para identificar deficiencias nutricionales o áreas de mejora.</li>
                <li> <b>Planificación de comidas saludables.</b> Basándome en las necesidades individuales de tu bebé, creare un plan de comidas equilibrado y saludable.</li>
                <li> <b>Educación nutricional.</b> Proporcionare información y orientación sobre la nutrición infantil, incluyendo la introducción de alimentos sólidos y la importancia de una dieta equilibrada.</li>
                <li> <b>Manejo de problemas específicos.</b> Si tu bebé tiene problemas alimentarios específicos, como alergias o intolerancias, te ofrecere estrategias de manejo.</li>
                <li> <b>Seguimiento y apoyo continuo.</b> Puedo proporcionar seguimiento regular, para asegurarnos de que tu bebé está recibiendo la nutrición adecuada a medida que crece y se desarrolla.</li>
            </ul>	
            

            </div>
       
        </div>
    </div>
      
    </div>
  )
}

export default ChildNutritioPage
