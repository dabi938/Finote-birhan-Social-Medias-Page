// ─────────────────────────────────────────────────────────────
// All editable content lives here. Swap the logo, text and
// links in this one file — no need to touch any component.
// ─────────────────────────────────────────────────────────────

const siteData = {
  // Put your real logo file in /public (e.g. /public/logo.png)
  // and point to it here. Until then a placeholder emblem is used.
  logoSrc: '/finot logo.png',
  logoAlt: 'Fnote Berhan Media Logo',

  titleAmharic: 'ፍኖተ ብርሀን ሚዲያ',
  titleEnglish: 'Fnote Berhan Media',

  // descriptionEnglish:
  //   'A channel dedicated to spiritual growth and community building through Ethiopian Orthodox Tewahedo media.',
  descriptionAmharic: 'በኢ/ኦ/ተ/ቤ/ክር በሸ/ከ/የቡ/ክ/ከ የፄዴንያ ስመኝ ቅድስት ድንግል ማርያም ገዳም ፍኖተ ብርሃን ሰንበት ት/ቤት የማህበራዊ ሚድያ ገጾች ሊንክ',

  // Each link becomes one row. `icon` must match a key exported
  // from src/components/icons.jsx
  links: [
    { id: 'facebook', label: 'Facebook', icon: 'facebook', url: 'https://www.facebook.com/finotebirhan1021' },
    { id: 'instagram', label: 'Instagram', icon: 'instagram', url: 'https://www.instagram.com/finote_birhan10?igsh=ajZ4cDd0Zm5pdGd3' },
    { id: 'tiktok', label: 'TikTok', icon: 'tiktok', url: 'https://vm.tiktok.com/ZS9MXNvWKEkKh-ejsWU/' },
    { id: 'youtube', label: 'YouTube', icon: 'youtube', url: 'https://youtube.com/@finotebirhan' },
    { id: 'telegram', label: 'Telegram', icon: 'telegram', url: 'https://t.me/fenotbrehan' },
  ],

  newsletter: {
    placeholder: 'Subscribe to our Newsletter',
    buttonLabel: 'Subscribe',
  },

  contact: {
    emailHref: 'mailto:hello@floteberhanmedia.com',
    whatsappHref: 'https://wa.me/',
    donateHref: 'https://floteberhanmedia.com/donate',
    donateLabel: 'Donate',
  },

  footerCredit: 'Designed by Fnote Media Design',
}

export default siteData
