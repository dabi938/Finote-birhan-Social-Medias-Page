import LinkCard from './LinkCard.jsx'

export default function LinkList({ links }) {
  return (
    <nav className="link-list" aria-label="Social media links">
      {links.map((link) => (
        <LinkCard key={link.id} label={link.label} icon={link.icon} url={link.url} />
      ))}
    </nav>
  )
}
