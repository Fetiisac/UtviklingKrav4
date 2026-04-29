import "../../styles/kalid-kort.css";


import kalidbilde from "../../assets/aigenererte.png";


export default function KalidKort() {
  return (
    <article className="kalid-kort">
      <header>
        <h2>Kalid I.Musa</h2>
      </header>

      <figure>
        <img src={kalidbilde} alt="Kalid Kort" />
        <figcaption>Bachelor i informasjonsteknologi</figcaption>
      </figure>

      <p>
        Kontakt:{' '}<a href="mailto:kalid@hiof.no">
          kalid@hiof.no
        </a>
      </p>
    </article>
  );
}
