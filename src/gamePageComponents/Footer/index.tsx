import './Footer.css';
import { Link as LinkScroll, animateScroll as scroll } from 'react-scroll';



function Footer() {
  const goTop = () => 
    {
      scroll.scrollToTop();
    }
  return (
    <div className='footer-container'>
    
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <LinkScroll to='home' onClick={goTop} className='social-logo'>
            Neon Clouds
            </LinkScroll>
          </div>
          <div className='social-icons'>
            
            <a
              className='social-icon-link twitter'
              href='https://twitter.com/NeonCloudsNFT'
              target='_blank'
              rel="noreferrer" 
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </a>

            <a
              className='social-icon-link instragram'
              href='https://instagram.com/NeonCloudsNFT'
              target='_blank'
              rel="noreferrer" 
              aria-label='Twitter'
            >
              <i className='fab fa-instagram' />
            </a>

            <a
              className='social-icon-link github'
              href='https://github.com/'
              target='_blank'
              rel="noreferrer" 
              aria-label='GitHub'
            >
              <i className='fab fa-github' />
            </a>

            <a
              className='social-icon-link discord'
              href='https://discord.gg/P8hc8npWRt'
              target='_blank'
              rel="noreferrer" 
              aria-label='Discord'
            >
              <i className='fab fa-discord' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;

/*<Link
    className='social-icon-link discord'
    to='/'
    target='_blank'
    aria-label='Discord'
  >
    <i className="fab fa-discord"></i>
  </Link>
  <Link
    className='social-icon-link instagram'
    to='/'
    target='_blank'
    aria-label='Instagram'
  >
    <i className='fab fa-instagram' />
  </Link> */