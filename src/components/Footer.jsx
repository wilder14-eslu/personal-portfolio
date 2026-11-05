import { FiArrowUp, FiArrowUpRight, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import usePortfolio from "../lib/usePortfolio";

export default function Footer() {
  const { ui, aboutMe, socialMedia } = usePortfolio();
  return (
    <footer id="contactMe" className="site-footer"><div className="container">
      <div className="contact-grid"><div><p className="eyebrow">{ui.contactEyebrow}</p><h2>{ui.contactTitle}</h2><p className="contact-description">{ui.contactDescription}</p><a className="button button-mint" href={`mailto:${aboutMe.email}`}>{ui.contactCta}<FiArrowUpRight aria-hidden="true" /></a></div>
      <div className="contact-details"><h3>{aboutMe.name}</h3><p>{aboutMe.tagLine}</p><a href={`mailto:${aboutMe.email}`}><FiMail aria-hidden="true" />{aboutMe.email}</a><a href={`tel:${aboutMe.phone.replace(/\s/g, "")}`}><FiPhone aria-hidden="true" />{aboutMe.phone}</a><span><FiMapPin aria-hidden="true" />{aboutMe.location}</span><div className="social-links">{socialMedia.map((social) => <a key={social.id} href={social.link} target="_blank" rel="noopener noreferrer">{social.name}<FiArrowUpRight aria-hidden="true" /></a>)}</div></div></div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} Wilder Espinoza</span><span>{ui.footerNote}</span><a href="#home">{ui.backTop}<FiArrowUp aria-hidden="true" /></a></div>
    </div></footer>
  );
}
