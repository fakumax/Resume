import { AiFillLinkedin, AiOutlineWhatsApp } from 'react-icons/ai';
import { RiTelegramFill } from 'react-icons/ri';
import { VscGithub } from 'react-icons/vsc';
import { FiMail } from 'react-icons/fi';
import { useThemeColors } from '@/hooks/useThemeColors';
import { useLanguage } from '@/i18n/useLanguage';
import { CONTACT } from '@/data/content';
import './Contact.css';

const Contact = () => {
  const colors = useThemeColors();
  const { t } = useLanguage();

  const iconStyle = { color: colors.accent, backgroundColor: colors.card };

  return (
    <section id="contact" className="contact" style={{ backgroundColor: colors.bgAlt }}>
      <div className="contact-inner">
        <div className="contact-heading" style={{ color: colors.text }}>
          {t.contactIntro}
        </div>
        <div className="contact-icons">
          <a href={CONTACT.email} title={CONTACT.email.replace('mailto:', '')} className="contact-icon" style={iconStyle}>
            <FiMail />
          </a>
          <a
            href={CONTACT.github}
            target="_blank"
            rel="noopener noreferrer"
            title={CONTACT.github}
            className="contact-icon"
            style={iconStyle}
          >
            <VscGithub />
          </a>
          <a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            title={CONTACT.linkedin}
            className="contact-icon"
            style={iconStyle}
          >
            <AiFillLinkedin />
          </a>
          <a
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            title={CONTACT.whatsapp}
            className="contact-icon"
            style={iconStyle}
          >
            <AiOutlineWhatsApp />
          </a>
          <a
            href={CONTACT.telegram}
            target="_blank"
            rel="noopener noreferrer"
            title={CONTACT.telegram}
            className="contact-icon"
            style={iconStyle}
          >
            <RiTelegramFill />
          </a>
        </div>
        <div className="contact-footer" style={{ borderColor: colors.border, color: colors.textFaint }}>
          <span>
            {t.footerBuilt} · © {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
