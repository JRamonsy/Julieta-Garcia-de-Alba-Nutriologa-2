import '../../pages/Styles/FooterPage.css';



const dataFooter = [
    {
        icon: 'fab fa-facebook-f',
        url: 'https://www.facebook.com/nutrijulietagdealba'
    },
    // {
    //     icon: 'fab fa-twitter',
    //     url: 'https://www.facebook.com/nutrijulietagdealba/?locale=es_LA'
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
];

const handleNavigateStudioRs = () => {
    window.location.href = 'https://ramonsalas.com/'; 
  };
  


const Footer = () => {
    // Obtener el año actual
    const currentYear = new Date().getFullYear();

    return (
        <div className='container-footer'>
            <div className="container-footer-icons">
                {dataFooter.map((info, id) => (
                    <a className="social-btn" href={info.url} key={id}>
                        <i className={`${info.icon} footer-icon`}></i>
                    </a>
                ))}
            </div>
            <hr className='separator-line-footer' />
            <div className='container-footer-text'>
                <h4 className='footer-derechos'>
                Actialización {currentYear} | por Studio RS
                <img className='img-rs' 
                onClick={handleNavigateStudioRs}
                src="\logo RS white theme.png" alt="" />
                </h4>
                <h4 className='footer-derechos'>
                ®Julieta García de Alba | Lic. en Nutrición
                </h4>
            </div>
        </div>
    );
};

export default Footer;
