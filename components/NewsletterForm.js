import React, { useState } from "react";

function MyForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here, e.g., send data to the server
    setSubmitted(true);

    // You might want to send email to the server using fetch or Axios
    // Example:
    // fetch('your_api_endpoint', {
    //   method: 'POST',
    //   body: JSON.stringify({ email }),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    // })
    // .then(response => response.json())
    // .then(data => {
    //   // Handle response
    // })
    // .catch(error => {
    //   // Handle error
    // });
  };

  return (
    <div className="newsletterWrapper">
      <div className="studioHeadline">
        <h1>Newsletter</h1>
      </div>
      <div className="line"></div>
      <div className="newsletterText">
        <p>
          Wir versenden ca. 4-6 Newsletter im Jahr. Je nachdem was aktuell
          ansteht und uns bewegt variieren die Inhalte zwischen Beiträgen zu
          neuen Projekten oder auch Einladungen zu kleinen Veranstaltungen wie
          Vernissagen und Tastings. <br />
          <br />
          Wenn Sie ebenfalls unseren Newsletter erhalten möchten, tragen Sie
          sich gerne nachstehend ein. Ihre Daten werden nicht weiteregegeben
          oder anderweitig verwendet.
        </p>
      </div>
      {!submitted ? (
        <div className="formWrapper">
          <form
            method="post"
            action="https://td1d27ab7.emailsys1a.net/120/2299/fb52a5ad0d/subscribe/form.html?_g=1700133690"
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
          Sie haben sich erfolgreich mit der Mailadresse: {email} angemeldet.
        </p>
      )}
    </div>
  );
}

export default MyForm;

// import { useEffect } from 'react';

// const NewsletterForm = () => {
//   useEffect(() => {
//     const script = document.createElement('script');
//     script.src =
//       'https://td1d27ab7.emailsys1a.net/form/120/2739/28c1c1f69a/embedded.js';
//     script.async = true;
//     document.body.appendChild(script);

//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   return (
//     <div id="rmOrganism">
//       <div className="rmEmbed rmLayout--vertical rmBase">
//         <div
//           data-page-type="formSubscribe"
//           className="rmBase__body rmSubscription"
//         >
//           <form
//             method="post"
//             action="https://td1d27ab7.emailsys1a.net/120/2299/fb52a5ad0d/subscribe/form.html?_g=1700133690"
//             className="rmBase__content"
//           >
//             <div className="rmBase__container">
//               <div className="rmBase__section">
//                 <div
//                   className="rmBase__el rmBase__el--input rmBase__el--label-pos-left"
//                   data-field="email"
//                 >
//                   <label
//                     htmlFor="email"
//                     className="rmBase__compLabel rmBase__compLabel--hideable"
//                   >
//                     E-Mail
//                   </label>
//                   <div className="rmBase__compContainer">
//                     <input
//                       type="text"
//                       name="email"
//                       id="email"
//                       placeholder=""
//                       className="rmBase__comp--input comp__input"
//                     />
//                     <div className="rmBase__compError"></div>
//                   </div>
//                 </div>
//               </div>

//               <div className="rmBase__section">
//                 <div className="rmBase__el rmBase__el--cta">
//                   <button type="submit" className="rmBase__comp--cta">
//                     Anmelden
//                   </button>
//                 </div>
//               </div>

//             </div>
//           </form>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default NewsletterForm;
