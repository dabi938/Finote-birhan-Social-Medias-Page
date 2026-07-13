export default function Header({ logoSrc, logoAlt, titleAmharic, titleEnglish, descriptionEnglish, descriptionAmharic }) {
  return (
    <header className="hero">
      <div className="hero__logo-ring">
        <img
          src={logoSrc}
          alt={logoAlt}
          className="hero__logo"
          onError={(e) => {
            e.currentTarget.style.display = 'none'
          }}
        />
      </div>

      <h1 className="hero__title-am">{titleAmharic}</h1>
      <h2 className="hero__title-en">{titleEnglish}</h2>

      <p className="hero__desc">
        {descriptionEnglish}
        <br />
        <span className="hero__desc-am">{descriptionAmharic}</span>
      </p>
    </header>
  )
}
