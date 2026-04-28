import '../../styles/feti-profile.css'

export default function FetiProfile() {
  return (
    <article className="feti-profile-card">
      <header className="feti-profile-header">
        <img
          className="feti-image"
          src="https://media.discordapp.net/attachments/1414312039622377649/1498795356991787068/Copilot_20260428_231643.png?ex=69f27573&is=69f123f3&hm=2cd674fcc8f6497cfe8e3a72086f030973b14e2df81e650aa010e608ec5e352d&=&format=webp&quality=lossless&width=530&height=796"
          alt="Illustrasjon av Feti Isac Ahmed"
        />
        <h3>Feti Isac Ahmed</h3>
      </header>

      <section className="feti-profile-info" aria-label="Kontaktinformasjon">
        <p>
          <strong>E-post:</strong>{' '}
          <a href="fetiia@hiof.no">Fetiia@hiof.no</a>
        </p>
        <p>
          <strong>Studium:</strong> Bachelor i informasjonssystemer
        </p>
      </section>
    </article>
  )
}