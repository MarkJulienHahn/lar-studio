import Link from "next/link";
import NewsletterForm from "./NewsletterForm";

export default function Footer({ hideNewsletter }) {
  return (
    <div className="footerOuter">
      {!hideNewsletter && <NewsletterForm />}
      <div className="footerWrapper">
        <div className="footerRow">
          LAR GmbH
          <br />
          Wolframstraße 20
          <br />
          70191 Stuttgart
        </div>
        <div className="footerRow">
          +49 (0) 711 - 91210877
          <br />
          <a href="mailto:mail@larstudio.de">mail@larstudio.de</a>
          <br />
          <a href="www.larstudio.de">www.larstudio.de</a>
        </div>
        <div className="footerRow">
          <a
            href="https://www.instagram.com/lar_studio/"
            target="blank"
            rel="_noreferrer"
          >
            Instagram
          </a>
          <br />
          <a
            href="https://www.bowerbird.io/studios/lar-studio-de"
            target="blank"
            rel="_noreferrer"
          >
            Bowerbird
          </a>
        </div>
        <div className="footerRow">
          <Link href="/impressum">Impressum</Link>
          <br />
          <Link href="/datenschutz">Datenschutz</Link>
          <br />
          <Link href="/agb">AGB</Link>
        </div>
      </div>
    </div>
  );
}
