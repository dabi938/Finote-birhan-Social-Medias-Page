import icons, { ChevronRightIcon } from './icons.jsx'

export default function LinkCard({ label, icon, url }) {
  const Icon = icons[icon]

  return (
    <a className="link-card" href={url} target="_blank" rel="noopener noreferrer">
      <span className="link-card__icon">{Icon ? <Icon size={26} /> : null}</span>
      <span className="link-card__label">{label}</span>
      <span className="link-card__chevron">
        <ChevronRightIcon />
      </span>
    </a>
  )
}
