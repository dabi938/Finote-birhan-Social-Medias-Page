// Lightweight inline SVG icon set. Each icon is self-contained
// (no external icon library needed) and accepts a `size` prop.

export function FacebookIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="12" fill="#1877F2" />
      <path
        d="M15.5 12.5h-2v7h-2.8v-7H9v-2.4h1.7V8.7c0-1.7 1-2.9 3-2.9h1.9v2.5h-1.2c-.6 0-.9.3-.9.9v1.9h2.2l-.2 2.4z"
        fill="#fff"
      />
    </svg>
  )
}

export function InstagramIcon({ size = 22 }) {
  const gradId = 'ig-grad'
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <defs>
        <radialGradient id={gradId} cx="30%" cy="107%" r="150%">
          <stop offset="0%" stopColor="#FFDD55" />
          <stop offset="20%" stopColor="#FFDD55" />
          <stop offset="40%" stopColor="#FF543E" />
          <stop offset="60%" stopColor="#C837AB" />
          <stop offset="100%" stopColor="#3F51B5" />
        </radialGradient>
      </defs>
      <rect x="0" y="0" width="24" height="24" rx="7" fill={`url(#${gradId})`} />
      <rect x="6.2" y="6.2" width="11.6" height="11.6" rx="3.6" stroke="#fff" strokeWidth="1.6" fill="none" />
      <circle cx="12" cy="12" r="3.1" stroke="#fff" strokeWidth="1.6" fill="none" />
      <circle cx="17" cy="7" r="1" fill="#fff" />
    </svg>
  )
}

export function TikTokIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="12" fill="#010101" />
      <path
        d="M15.7 6.5c.4 1.1 1.3 1.9 2.5 2.1v2.1a4.6 4.6 0 0 1-2.5-.8v4.4a4.1 4.1 0 1 1-3.6-4.1v2.2a1.9 1.9 0 1 0 1.5 1.9V5.5h2.1c0 .3 0 .6 0 1z"
        fill="#fff"
      />
    </svg>
  )
}

export function YouTubeIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="12" fill="#FF0000" />
      <path d="M10.3 15.2V8.8L16 12l-5.7 3.2z" fill="#fff" />
    </svg>
  )
}

export function TelegramIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="12" fill="#29A9EA" />
      <path
        d="M6.4 12.1l10.2-3.9c.5-.2.9.1.7.9l-1.7 8.1c-.1.6-.5.7-1 .5l-2.8-2-1.3 1.3c-.2.2-.3.3-.6.3l.2-3 5.5-5-6.8 4.2-2.9-.9c-.6-.2-.6-.6.2-.9z"
        fill="#fff"
      />
    </svg>
  )
}

export function MailIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  )
}

export function WhatsAppIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M4 20l1.3-3.8A7.9 7.9 0 1 1 8.6 19L4 20z" />
      <path
        d="M9 9.5c.1-.6.6-.6 1-.6s.6.1.8.6c.2.5.6 1.5.6 1.6.1.2 0 .3-.1.5-.1.2-.2.3-.4.4-.1.2-.3.3-.1.6.2.4.9 1.4 1.9 1.9.3.2.5.1.7-.1.2-.2.5-.6.6-.8.1-.2.3-.2.5-.1.2.1 1.3.6 1.5.7.2.1.4.2.4.3 0 .2 0 .8-.3 1.2-.3.4-1.2.9-2.1.6-1.4-.5-3.4-1.8-4.6-3.5-.3-.4-.6-.9-.6-1.5 0-.5.2-1 .2-1.1z"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  )
}

export function HeartIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M12 20.3S3.5 15 3.5 9.2A4.7 4.7 0 0 1 12 6.6a4.7 4.7 0 0 1 8.5 2.6c0 5.8-8.5 11.1-8.5 11.1z" />
    </svg>
  )
}

export function ChevronRightIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
      <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const icons = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  tiktok: TikTokIcon,
  youtube: YouTubeIcon,
  telegram: TelegramIcon,
}

export default icons
