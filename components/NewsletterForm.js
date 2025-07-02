import React, { useState, useRef } from "react";

function MyForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef(null);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    // NICHT preventDefault verwenden! Wir wollen das Formular ja abschicken.
    setTimeout(() => {
      setSubmitted(true);
    }, 1000); // kurze Verzögerung, damit das Formular abgesendet werden kann
  };

  return (
    <div className="newsletterWrapper">
      <div className="studioHeadline">
        <h1>Newsletter</h1>
      </div>
      <div className="line"></div>
      <div className="newsletterText">
        <p>
          Wir versenden ca. 4–6 Newsletter im Jahr. Je nachdem, was aktuell
          ansteht und uns bewegt, variieren die Inhalte zwischen Beiträgen zu
          neuen Projekten oder Einladungen zu kleinen Veranstaltungen wie
          Vernissagen und Tastings. <br />
          <br />
          Wenn Sie ebenfalls unseren Newsletter erhalten möchten, tragen Sie
          sich gerne nachstehend ein. Ihre Daten werden nicht weitergegeben
          oder anderweitig verwendet.
        </p>
      </div>

      <iframe name="hidden_iframe" style={{ display: "none" }} />

      {!submitted ? (
        <div className="formWrapper">
          <form
            ref={formRef}
            method="post"
            action="https://td1d27ab7.emailsys1a.net/120/2299/fb52a5ad0d/subscribe/form.html?_g=1700133690"
            target="hidden_iframe"
            className="rmBase__content"
            onSubmit={handleSubmit}
          >
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Ihre Email"
              value={email}
              onChange={handleEmailChange}
              required
            />
            <button type="submit">ABSCHICKEN</button>
          </form>
        </div>
      ) : (
        <p className="confirmation">
          Sie haben sich erfolgreich mit der Mailadresse:{" "}
          <strong>{email}</strong> angemeldet.
        </p>
      )}
    </div>
  );
}

export default MyForm;
