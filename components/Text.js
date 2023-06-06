import PortableText from "react-portable-text";

const Text = ({ header, text, padding, info, index }) => {
  const styles = { paddingLeft: `${padding}vw` };

  return (
    <div className="textSection" style={styles}>
      <div className="headerWrapper">
        {index && <span className="indexBig">{index}</span>}
        <h1>{header}</h1>

        <div className="line"></div>
      </div>
      <div>
        <PortableText content={text} />
        {info && (
          <ul className="textList">
            {info.map((entry, i) => (
              <>
                {entry.partner && <li>Partner: {entry.partner}</li>}
                {entry.licht && <li>Licht: {entry.licht}</li>}
                {entry.fotos && <li>Fotos: {entry.fotos}</li>}
                {entry.jahr && <li>Jahr: {entry.jahr}</li>}
                {entry.ort && <li>Ort: {entry.ort}</li>}
              </>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Text;
