import "./Footer.scss";
import { ReactComponent as CompanyLogo } from "../../Assets/Images/logo-footer.svg";
import { ReactComponent as MapPinIcon } from "../../Assets/Icons/MapPin.svg";
import { ReactComponent as MailIcon } from "../../Assets/Icons/Mail.svg";
import { ReactComponent as PhoneIcon } from "../../Assets/Icons/Phone.svg";
import { ReactComponent as FacebookIcon } from "../../Assets/Icons/Facebook.svg";
import { ReactComponent as TwitterIcon } from "../../Assets/Icons/Twitter.svg";
import { ReactComponent as LinkedInIcon } from "../../Assets/Icons/LinkedIn.svg";
import { ReactComponent as InstagramIcon } from "../../Assets/Icons/Instagram.svg";
import { ReactComponent as PaperplaneIcon } from "../../Assets/Icons/Paperplane.svg";

export default function Footer() {
  return (
    <footer>
      <div className="Top">
        <div className="Company Block">
          <CompanyLogo height="40" />
          <p>
            We provide a full range of interior design, architectural design.
          </p>
          <div className="Links">
            <a href="https://facebook.com/">
              <div className="Facebook">
                <FacebookIcon className="SocialIcon" />
              </div>
            </a>
            <a href="https://twitter.com/">
              <div className="Twitter">
                <TwitterIcon className="SocialIcon" />
              </div>
            </a>
            <a href="https://linkedin.com/">
              <div className="LinkedIn">
                <LinkedInIcon className="SocialIcon" />
              </div>
            </a>
            <a href="https://instagram.com/">
              <div className="Instagram">
                <InstagramIcon className="SocialIcon" />
              </div>
            </a>
          </div>
        </div>

        <div className="Contacts Block">
          <h3>Contacts</h3>
          <a href="geo:47.608007,-122.3339395">
            <MapPinIcon className="ContactsIcon" />
            411 University St, Seattle, USA
          </a>
          <a href="mailto:theratio_interior@mail.com">
            <MailIcon className="ContactsIcon" />
            theratio_interior@mail.com
          </a>
          <a href="tel:+1 800 456 789 123">
            <PhoneIcon className="ContactsIcon" />
            +1 800 456 789 123
          </a>
        </div>

        <div className="Projects Block">
          <h3>Latest Projects</h3>
          <a href="/#">Stylish Family Appertment</a>
          <a href="/#">Modern Villa in Belgium</a>
          <a href="/#">Private House in Spain</a>
        </div>

        <div className="Subscribe Block">
          <h3>Subscribe</h3>
          <form className="SubscribeForm">
            <input placeholder="YOUR EMAIL" type="email" id="email" />
            <button type="submit" className="SubscribeButton">
              <PaperplaneIcon className="PaperplaneIcon" />
            </button>
          </form>
          <div>Follow our newsletter to stay updated about agency</div>
        </div>
      </div>

      <hr />

      <div className="Bottom">
        <div className="BottomLeft">
          Copyright © 2021 Theratio by <a href="/#">ThemeModern</a> All Rights
          Reserved.
        </div>

        <div className="BottomRight">
          <a href="/#">Terms of use</a>
          <div className="Divider">|</div>
          <a href="/#">Privacy Environmental Policy</a>
        </div>
      </div>
    </footer>
  );
}
