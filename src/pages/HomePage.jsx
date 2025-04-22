import './Styles/HomePage.css';
import { useNavigate } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const HomePage = () => {

  const navigate = useNavigate();

  const handleNavigateToAbout = () => {
    navigate('/about');
    window.scrollTo(0, 0);
  };

  const handleNavigateToContact = () => {
    navigate('/contact');
    window.scrollTo(0, 0);
  };

  const handleNavigateToOnline = () => {
    navigate('/online');
    window.scrollTo(0, 0);
  };

  const handleNavigateToWeight = () => {
    navigate('/weight');
    window.scrollTo(0, 0);
  };

  const handleNavigateToChild = () => {
    navigate('/child');
    window.scrollTo(0, 0);
  };

  const handleNavigateToSport = () => {
    navigate('/sport');
    window.scrollTo(0, 0);
  };

  const handleNavigateToDiet = () => {
    navigate('/diet');
    window.scrollTo(0, 0);
  };

  const handleNavigateToChronic = () => {
    navigate('/chronic');
    window.scrollTo(0, 0);
  };

  const handleNavigateIntestinalGases = () => {
    window.location.href = 'https://www.academianutricionydietetica.org/que-comer/gases-mejor-dieta-reducir-eliminar/'; 
  };

  const handleNavigateHealthySnacks = () => {
    window.location.href = 'https://www.nutriwhitesalud.com/blog/snacks-saludables'; 
  };

  const handleNavigateTca = () => {
    window.location.href = 'https://tca.som360.org/es/articulo/tca-larga-evolucion'; 
  };

  


  

  




  /*SOCIAL NETWORKS*/

  const dataNetworks = [
    {
      icon: 'fab fa-facebook-f',
      url: 'https://www.facebook.com/nutrijulietagdealba'
    },
    // {
    //   icon:'fab fa-twitter',
    //   url:'https://www.facebook.com/nutrijulietagdealba/?locale=es_LA'
    // },
    {
      icon: 'fab fa-instagram',
      url: 'https://www.instagram.com/nutriologa.juli/'
    },
    {
      icon: 'fab fa-linkedin-in',
      url: 'https://mx.linkedin.com/in/julieta-garcia-de-alba-v-17533aa0'
    },
    {
      icon: 'fab fa-youtube',
      url: 'https://www.youtube.com/watch?v=jkQaS56D5Bs'
    }
  ]

  /*OFFER*/

  const dataOffer = [
    {
      icon: 'icon fas fa-id-card',
      title: 'TRATO PERSONALIZADO',
      text: 'Haremos una evaluación inicial para identificar cuáles son tus objetivos y poder ofrecerte las herramientas que necesitas.'
    },
    {
      icon: 'icon fas fa-bullseye',
      title: 'PLAN DE ALIMENTACIÓN PERSONALIZADO',
      text: 'Te indicaré una prescripción personalizada y diseñaré un plan exclusivamente pensando en tus necesidades y objetivos.'
    },
    {
      icon: 'icon fas fa-mortar-pestle',
      title: 'MENÚS VARIADOS',
      text: 'Diseñaré un menú teniendo en cuenta tus gustos y tu estilo de vida.'
    },
    {
      icon: 'icon fas fa-forward',
      title: 'PROGRESO',
      text: 'Estaré atenta evaluando tu progreso, aclarando tus dudas y ofreciéndote nuevas recomendaciones.'
    }
  ]
  /*SLIDER TESTIMONIES*/

  const dataSlider = [
    {
      name: `Abigail Gomez`,
      img: `\IMG-20240623-WA0007.jpg`,
      review: `
"Quiero expresar mi más sincero agradecimiento a julieta por su dedicación y 
apoyo en este camino hacia una vida más saludable."`
    },
    {
      name: `Eduardo Barrera`,
      img: `\IMG-20240623-WA0007.jpg`,
      review: `
"Mis hábitos alimenticios cambiaron drásticamente y me ayudaron bastante en mi desempeño, siempre das buenos consejos y ánimas para seguir con el plan."`
    },
    {
      name: `Abraham Gil`,
      img: `\IMG-20240623-WA0007.jpg`,
      review: `
"Gracias a sus planes logré bajar alrededor de 10kg con sus planes de dieta y ejercicio en menos de 4 meses. La verdad muy recomendable 😉."`
    },
    {
      name: `Belinda`,
      img: `\IMG-20240623-WA0007.jpg`,
      review: `
"Lograste que mi vida y salud cambiaran por completo con tu ayuda, super prfesional y excelentes planes de alimentacion, SIMPLEMENTE LA MEJOR GRACIAS POR TODO!!!."`
    },
    {
      name: `Graciela`,
      img: `\IMG-20240623-WA0007.jpg`,
      review: `
"Agradezco infinitamente su orientación, mi vida cambió, los menus se adaptan a horarios y a la economía, pero sobre todo a lo que mas te agrade y nunca te quedascon hambre, gracias 😍👌."`
    },
    {
      name: `Virginia`,
      img: `\IMG-20240623-WA0007.jpg`,
      review: `
"❤️Mi proceso fue lento pero lo disfrute demasiado, mis planes siempre fueron los mas deliciosos y muy sencillos de preparar 🥰🤗👍. "`
    }
  ]

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }
    ]
  };

  /*SERVICES*/

  const dataService = [
    {
      img: '\consulta en linea.jpg',
      titleService: 'Consulta en Linea',
      onClick: handleNavigateToOnline
    },
    {
      img: '\perdida o baja de peso.jpg',
      titleService: 'Perdida o Aumento de Peso',
      onClick: handleNavigateToWeight
    },
    {
      img: '\Nutricion-infantil.jpg.webp',
      titleService: 'Nutrición Infantil',
      onClick: handleNavigateToChild
    },
    {
      img: '\alimentacion deportiva.webp',
      titleService: 'Nutrición Deportiva',
      onClick: handleNavigateToSport
    },
    {
      img: '\alimentacion vegana y vegetariana.jpeg',
      titleService: 'Alimentación Vegetariana y Vegana',
      onClick: handleNavigateToDiet
    },
    {
      img: '\enfermedades cronicas1.jpeg',
      titleService: 'Emfermedades Crónicas',
      onClick: handleNavigateToChronic
    }
  ]

  // BLOG

  const dataBlog = [
    {
      img: "\gases.jpg",
      date: "Julio 13, 2022",
      title: "¿Qué no comer cuando tienes gases? Alimentos a evitar para una digestión mejor",
      description: "Los gases son parte del proceso de una digestión normal, no obstante, cuando se manifiestan de forma recurrente...",
      button: "Continuar leyendo" ,
      onclick: handleNavigateIntestinalGases
    },
    {
      img: "\snacks.jpg",
      date: "Septiembre 09, 2023",
      title: "Snacks saludables: ideas y recetas para satisfacer antojos de la mejor forma nutritiva",
      description: "Siempre nos hemos enfrentado al dilema de por qué las cosas mas ricas tienen que engordar y ser malas para nuestro cuerpo...",
      button: "Continuar leyendo",
      onclick: handleNavigateHealthySnacks
    },
    {
      img: "/tca.jpg",
      date: "Abril 15, 2025",
      title: "TCA (Trastorno de la conducta alimentaria): qué es y cómo buscar ayuda",
      description: "Vivimos en la sociedad de la velocidad. Trabajamos más, comemos más y mal, cada vez tenemos menos tiempo....",
      button: "Continuar leyendo",
      onclick: handleNavigateTca
    },
  ]

  // CONTACT

  const dataContact = [
    {
      icon: 'fas fa-phone',
      title: 'Telefono',
      content: '4441 23 45 67 '
    },
    {
      icon: 'fab fa-whatsapp',
      title: 'WhatsApp',
      content: '4441 78 59 53 '
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Ubicación',
      content: 'Av. Cuauhtémoc No.376 Col. Moderna CP 78233'
    },
    {
      icon: 'far fa-clock',
      title: 'Horario',
      content: '10-2 pm y 4 pm-8 pm'
    }
  ]




  return (
    <div className='container-home' id='home'>
      <section className='section-home'>
        <h1 className='presentacion'>¡Hola, Soy Juli!</h1>
        <h5 className='oficio'>Tu nutrióloga</h5>
        <div className='section-home-buttons'>
          <button className='button-conoceme' onClick={handleNavigateToAbout}>Conóceme</button>
          <button className='button-comienza' onClick={handleNavigateToContact}>Contactame</button>
        </div>
      </section>

      <section className='section-social-networks'>
        <div className='container-social-networks'>
          <h1 className='sections'>¡SIGUEME EN MIS REDES SOCIALES!</h1>
          <div className="social-icons">
            {
              dataNetworks.map((network, id) => (
                <a className="social-icon-" href={network.url} key={id}>
                  <i className={network.icon}></i>
                </a>
              ))
            }
          </div>
        </div>
      </section>

      <hr className='separator-line' />

      <section className='section-offer' >
        <div className='section-offer-question'>
          <h1 className='sections'>¿QUÉ TE OFREZCO?</h1>
          <p className="offer-text">Mi rol como dietista consiste en traducir lo que dice la ciencia de la nutrición en aplicaciones prácticas para el día a día. Y mi función, dentro de la reeducación alimentaria, es asegurarme de que apliquemos la evidencia científica con criterio, adaptándola a tu realidad.</p>
          <div className='container-offer-cards'>
            {
              dataOffer.map((offer, id) => (
                <div className='section-offer-card' key={id}>
                  <i className={offer.icon}></i>
                  <h2 className='section-offer-title-2'>{offer.title}</h2>
                  <p className='section-offer-text'>{offer.text}</p>
                </div>
              ))
            }
          </div>
        </div>
      </section>

      <hr className='separator-line' />

      <section className='section-servicios' id='services'>
        <h1 className='sections'>MIS SERVICIOS</h1>
        <div className="services-grid" >
          {
            dataService.map((service, id) => (
              <div className='service-card' key={id} onClick={service.onClick} >
                <div className='service-img'>
                  <img src={service.img} alt="" />
                </div>

                <div>
                  <h3 className='service-text'>
                    {service.titleService}
                  </h3>
                </div>
              </div>
            ))
          }
        </div>
      </section>

      <hr className='separator-line' />

      <div className='container-slider' id='testimonies'>
        <h1 className='sections'>TESTIMONIOS</h1>
        <div className='margin-top-large'>
          <Slider {...settings}>
            {dataSlider.map((card, id) => (
              <div className='card' key={id}>
                {/* <div className='card-header'>
                  <img src={card.img} alt="" className='card-image' />
                </div> */}

                <div className='flex-column-center'>
                  <p className='card-name'>{card.name}</p>
                  <p className='card-text'>{card.review}</p>
                  {/* <button className='card-button'>leer mas</button> */}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <hr className='separator-line' />

      <section className='section-blog' id='blog'>
        <h1 className='sections'>EL BLOG DE NUTRICIÓNATE</h1>
        <p className="offer-text">Artículos sobre alimentación saludable, nuestras geniales recetas y mucho más.<br />
          ¡Suscríbete para que te llegue al correo cada vez que subamos algo!</p>
        <div className="blog-grid">
          {
            dataBlog.map((blog, id) => (
              <div className='container-card-blog' key={id}>
                <img className='container-card-img' src={blog.img} alt="" />
                <div className="container-blog-description">
                  <div>
                    <p className='blog-date'>{blog.date}</p>
                    <h2 className='blog-title'>{blog.title}</h2>
                    <p className='blog-description' >{blog.description}</p>
                    <button  onClick={blog.onclick}  className='read-more'>{blog.button}</button>
                  </div>
                </div>
              </div>
            )
            )}
        </div>
      </section>

      <hr className='separator-line' />

      <section className='section-contact' id='contact'>
        <h1 className='sections'>CONTACTO</h1>
        <p className='offer-text'>Cualquier duda, estoy para ayudarte</p>
        <div className="container-contact-lay-out">
          {
            dataContact.map((contact, id) => (
              <div className="contact-info-grid" key={id}>
                <div className="contact-info-item">
                  <i className={contact.icon} ></i>
                  <h3>{contact.title}</h3>
                  <p className='contact-text-2'>{contact.content}</p>
                </div>
              </div>
            )
            )}
        </div>
        <div className='container-btn-contact'>
          <button className='btn-contact' onClick={handleNavigateToContact}>¡Contactame!</button>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
