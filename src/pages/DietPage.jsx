import './Styles/DietPage.css';

const DietPage = () => {
    return (
        <div className="container-diet">
            <div className="container-content-diet">
                
                <div className="content-text">
                    <h1 className='title'>ALIMENTACIÓN VAGETARIANA</h1>
                    <div className='div-text-intro-diet'>
                        <p className='text-intro-diet'>Como nutrióloga especializada en alimentación vegetariana, mi objetivo es ayudarte a alcanzar un equilibrio nutricional que respalde tu estilo de vida sin comprometer tu salud. .</p>
                    </div>
                    <div>
                        <h1 className='title'>¿Cómo puedo ayudarte en alimentación vegetariana?</h1>
                        <p className='text'>
                        A través de un enfoque personalizado, trabajo contigo para crear planes alimenticios que se adapten a tus necesidades y preferencias, asegurando que recibas todos los nutrientes esenciales. Ya sea que estés buscando mejorar tu bienestar general, alcanzar un peso saludable, o manejar condiciones específicas, estoy aquí para guiarte en cada paso de tu viaje hacia una vida más saludable y equilibrada , puede ofrecer una serie de servicios:

                        </p>
                        <ul>
                            <li> <b>Evaluación Nutricional Integral:</b>  Realización de un análisis detallado de tu estado nutricional, historial médico y hábitos alimenticios para identificar áreas de mejora y necesidades específicas.</li>
                            <li> <b>Planificación de Dietas Personalizadas:</b> Diseño de planes de alimentación balanceados que aseguren la ingesta adecuada de proteínas, vitaminas, minerales y otros nutrientes esenciales, adaptados a tus preferencias y objetivos. </li>
                            <li> <b>Suplementación Nutricional:</b> Asesoría sobre la necesidad de suplementos como vitamina B12, hierro, omega-3, y otros nutrientes que pueden ser difíciles de obtener en una dieta vegetariana.</li>
                            <li> <b>Orientación para la Transición al Vegetarianismo:</b> Asistencia para aquellos que desean hacer la transición a una dieta vegetariana, incluyendo recomendaciones para sustituir productos animales y asegurar una nutrición equilibrada.</li>
                            <li> <b>Asesoramiento para Deportistas Vegetarianos:</b> Planificación de dietas que optimicen el rendimiento deportivo, considerando las necesidades energéticas y de recuperación de los atletas vegetarianos.</li>
                        </ul>
                    </div>           
                </div>
                <div className="image-diet">
                    <img src="\vegetariano.jpg" alt="Niño pequeño comiendo de un tazón con una cuchara, sentado a una mesa con un plato de pan al lado" width="600" />
                </div>
            </div>
            <div className="container-content-diet">
                
                <div className="content-text">
                    <h1 className='title'>ALIMENTACIÓN VEGANA</h1>
                    <p className='text'>Como nutriólogo especializado en dietas veganas, mi misión es ayudarte a llevar un estilo de vida saludable y equilibrado, asegurando que tu alimentación vegana cubra todas tus necesidades nutricionales. </p>
                    <div>
                        <h1 className='title'>¿Cómo puedo ayudarte en alimentación vegana?</h1>
                        <p className='text'>
                        Entiendo los desafíos únicos que pueden surgir al seguir una dieta completamente basada en plantas y estoy aquí para ofrecerte soluciones personalizadas que te permitan disfrutar de una salud óptima sin comprometer tus valores. Mi enfoque se basa en una combinación de ciencia nutricional y empatía, brindándote el apoyo necesario para alcanzar tus objetivos de bienestar, puede ofrecer una serie de servicios:

                        </p>
                        <ul>
                            <li> <b>Evaluación Nutricional Completa:</b>  Realizo un análisis detallado de tu salud, hábitos alimenticios y necesidades específicas para desarrollar un plan nutricional adaptado a tu estilo de vida vegano.</li>
                            <li> <b>Planes de Alimentación Personalizados:</b>  Creo planes de dieta equilibrados que aseguran una ingesta adecuada de proteínas, vitaminas, minerales y otros nutrientes esenciales que pueden ser más difíciles de obtener en una dieta vegana.</li>
                            <li> <b>Manejo de Condiciones de Salud Específicas:</b>  Ofrezco apoyo para manejar condiciones como anemia, osteoporosis, problemas digestivos, y otros, ajustando tu dieta vegana para mejorar tu bienestar.</li>
                            <li> <b>Control y Monitoreo de Peso</b> : Desarrollo estrategias para alcanzar y mantener un peso saludable dentro de un marco vegano, equilibrando la ingesta calórica y los macronutrientes.</li>
                            <li> <b>Nutrición Deportiva Vegana:</b>  Diseño planes de alimentación para atletas veganos, optimizando la ingesta de nutrientes para mejorar el rendimiento y la recuperación.</li>
                        </ul>


                    </div>
                </div>

                <div className="image-diet">
                    <img src="\vegana.jpg" alt="Niño pequeño comiendo de un tazón con una cuchara, sentado a una mesa con un plato de pan al lado" width="600"/>
                </div>
            </div>
            

        </div>
    )
}

export default DietPage

