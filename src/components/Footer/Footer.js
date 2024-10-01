import './Footer.css';
import { Link } from 'react-router-dom';
import LinkedInPic from '../../assets/linkedin.svg';
import GitHubPic from '../../assets/github.svg';
import MailPic from '../../assets/mail.png';

function Footer({ showLegalSection = true }) {
  return (
    <footer className="container-fluid text-center" id="footer-section">
      <div className="row">
        {/* Products Section */}
        <FooterSection title="PRODUCTS" links={[
          { name: 'All Products', href: '/Products' },
          { name: 'Templates', href: '#' },
          { name: 'Designs', href: '#' }
        ]} />

        {/* Resources Section */}
        <FooterSection title="RESOURCES" links={[
          { name: 'FAQ', href: '#' },
          { name: 'Blog', href: '#' },
          { name: 'Support', href: '#' }
        ]} />

        {/* Legal Section - Conditionally Rendered */}
        {showLegalSection && (
          <FooterSection title="LEGAL" links={[
            { name: 'Privacy', href: '#' },
            { name: 'Terms', href: '#' }
          ]} />
        )}

        {/* About Section */}
        <FooterSection title="ABOUT" links={[
          { name: 'About Us', href: '/About' },
          { name: 'Contact', href: '/Contact' }
        ]}>
          <ul className='social-icons'>
            <li><a href="https://www.linkedin.com/in/mohamedabdulrahmanyounis/" target="_blank"><img src={LinkedInPic} alt="LinkedIn" loading="lazy" /></a></li>
            <li><a href="https://github.com/MohaDev01" target="_blank"><img src={GitHubPic} alt="GitHub" loading="lazy" /></a></li>
            <li><a href="mailto:mohamedabdulrahmanyounis@gmail.com" target="_blank"><img src={MailPic} alt="Mail" loading="lazy" /></a></li>
          </ul>
        </FooterSection>
      </div>

      {/* Footer 2 Section */}
      <footer className="row text-center text-white py-4" id="footer2-section">
        <div className="col-md-12">
          <p>© 2024 Mohamed Younis - Kumquat. All rights reserved.</p>
        </div>
      </footer>
    </footer>
  );
}

function FooterSection({ title, links, children }) {
  return (
    <div className="col-md-3 col-6 col">
      <h3>{title}</h3>
      <ul className='d-flex flex-column text-justify'>
        {links && links.map(link => (
          <li key={link.name}>
            <Link className="link" to={link.href}>{link.name}</Link>
          </li>
        ))}
        {children}
      </ul>
    </div>
  );
}

export default Footer;