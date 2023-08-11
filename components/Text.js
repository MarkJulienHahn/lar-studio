import MouseDiv from "../components/MouseDiv";
import PortableText from "react-portable-text";

const Text = ({ header, text, info, index, dates, setShowInfo }) => {
  return (
    <div className="textOuter" onClick={() => setShowInfo(false)}>
      <MouseDiv lable={"×"} />
      <div className="textSection">
        <div className="headerWrapper">
          {index && (
            <span className="index" style={{ paddingRight: "10px" }}>
              {index}
            </span>
          )}
          <h1 className="textHeadline">{header}</h1>
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

export default Text;
