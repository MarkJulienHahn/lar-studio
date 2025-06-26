import MouseDiv from "../components/MouseDiv";
import PortableText from "react-portable-text";

const Text = ({
  header,
  text,
  info,
  index,
  dates,
  setShowInfo,
  setMouseLable,
  length
}) => {

  return (
    <div className="textOuter" onClick={() => setShowInfo(false)}>
      {/* <MouseDiv lable={"×"} /> */}
      <div className="textSection">
        <div className="headerWrapper">
          {length > 0 && (
            <span className="index" style={{ paddingRight: "10px" }}>
              {length - index + 1}
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
                  {entry.kunst && <li>Kunst: {entry.kunst}</li>}
                  {entry.jahr && <li>Jahr: {entry.jahr}</li>}
                  {entry.ort && <li>Ort: {entry.ort}</li>}
                  {entry.link && (
                    <li
                      onMouseEnter={() => setMouseLable(null)}
                      onMouseLeave={() => setMouseLable("×")}
                    >
                      Website:&nbsp;
                      <a
                        style={{ textDecoration: "underline" }}
                        href={entry.link.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {entry.link.name}
                      </a>
                    </li>
                  )}
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
