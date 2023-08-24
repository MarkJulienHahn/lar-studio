import MouseDiv from "./MouseDiv";
import PortableText from "react-portable-text";

const TextMobile = ({ header, text, info, index, dates, length }) => {
  return (
    <div className="textOuter">
      <div className="textSection">
        <div className="headerWrapper">
          {index && (
            <span className="index" style={{ paddingRight: "10px" }}>
              {length - index + 1}
            </span>
          )}
          <span className="textHeadline">{header}</span>
        </div>
        <div className="line"></div>
        <div>
          <PortableText content={text} />
          {info && (
            <ul className="textList">
              {info.map((entry, i) => (
                <span key={i}>
                  {entry.partner && <li>Partner: {entry.partner}</li>}
                  {entry.licht && <li>Licht: {entry.licht}</li>}
                  {entry.fotos && <li>Fotos: {entry.fotos}</li>}
                  {entry.kunst && <li>Kunst: {entry.kunst}</li>}
                  {entry.jahr && <li>Jahr: {entry.jahr}</li>}
                  {entry.ort && <li>Ort: {entry.ort}</li>}
                </span>
              ))}
            </ul>
          )}
          {dates && (
            <div className="textList">
              <div className="date">
                <span className="index">Vernissage</span>
                {dates.vernissage} — <span className="index">Finissage</span>
                {dates.finissage}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TextMobile;
