import Header from './components/Header.jsx'
import LinkList from './components/LinkList.jsx'
import siteData from './data/siteData.js'

export default function App() {
  return (
    <div className="page">
      <div className="phone">
        <Header
          logoSrc={siteData.logoSrc}
          logoAlt={siteData.logoAlt}
          titleAmharic={siteData.titleAmharic}
          titleEnglish={siteData.titleEnglish}
          // descriptionEnglish={siteData.descriptionEnglish}
          descriptionAmharic={siteData.descriptionAmharic}
        />

        <main className="content">
          <LinkList links={siteData.links} />
        </main>
      </div>
    </div>
  )
}
