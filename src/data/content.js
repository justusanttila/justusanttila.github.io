/**
 * content.js — Edit this file to update all site texts.
 * Changes here reflect across the entire site automatically.
 */

export const meta = {
  siteName: 'Videotuotanto Justus Anttila',
  email: 'info@justusanttila.fi',
  city: 'Jyväskylä',
  postalCode: '40500',
  businessId: '3158053-8',
  youtubeUrl: 'https://www.youtube.com/channel/UCig1_rJ-hfGG3bxtLcEuC_Q',
  instagramUrl: 'https://www.instagram.com/justus.anttila/',
};

export const nav = {
  homeLabel: 'Etusivu',
  portfolioLabel: 'Portfolio',
  pricingLabel: 'Hinnasto',
  contactLabel: 'Yhteydenotto',
  menuAriaLabel: 'Valikko',
  skipLink: 'Hyppää pääsisältöön',
};

export const home = {
  pageTitle: 'Videotuotanto Justus Anttila – Ammattimainen videokuvaus',
  metaDescription:
    'Justus Anttila tarjoaa ammattimaista videotuotantoa. Häävideot, musiikkivideot, yritysvideot ja kiinteistövideot. Ota yhteyttä ja saat tarjouksen.',
  heroTitle: 'Videotuotanto',

  aboutHeading: 'Minusta',
  aboutParagraphs: [
    'Nimeni on Justus Anttila ja olen elokuva- ja videokuvaaja.',
    'Olen tehnyt kuvaushommia vuodesta 2020. Olen tehnyt muun muassa mainosvideoita, musiikkivideoita, häävideoita ja lyhytelokuvia.',
    'Tällä hetkellä asun Jyväskylässä, mutta matkustan matalalla kynnyksellä minnepäin vain.',
    'Toimin tehokkaasti yhden miehen kokoonpanolla, joten pystyn pitämään kulut kurissa. Laadusta ei silti tarvitse tinkiä, sillä kokemusta hommista on reilusti.',
  ],

  portfolioTeaserHeading: 'Portfolio',
  portfolioTeaserText: 'Tässä esimerkkejä töistäni.',
  portfolioTeaserCta: 'Katso koko portfolio',

  pricingTeaserHeading: 'Hinnasto',
  pricingTeaserText:
    'Kilpailukykyiset hinnat laadukkaaseen videotuotantoon.',
  pricingTeaserCta: 'Katso koko hinnasto',

  contactTeaserHeading: 'Ota yhteyttä',
  contactTeaserText:
    'Voit ottaa minuun yhteyttä sähköpostilla info@justusanttila.fi. Kerro kuka olet, millaista videota tarvitset ja vielä alustava ajankohta kuvaamiselle. Jos sinulla on jotain kysymyksiä, niin kysy ihmeessä.',
  contactTeaserCta: 'Ota yhteyttä',
};

export const portfolio = {
  pageTitle: 'Portfolio – Videotuotanto Justus Anttila',
  metaDescription:
    'Katso Justus Anttilan videotuotannon portfolio. Esimerkkejä häävideoista, musiikkivideoista, yritysvideoista ja kiinteistövideoista.',
  heading: 'Portfolio',
  intro:
    'Esimerkkejä videotuotannoistani eri kategorioissa. Valitse kategoria nähdäksesi videot.',
  ctaHeading: 'Kiinnostaako yhteistyö?',
  ctaText: 'Löysitkö sopivan tyylin? Ota yhteyttä ja keskustellaan projektistasi.',
  ctaButton: 'Ota yhteyttä',
};

export const pricing = {
  pageTitle: 'Hinnasto – Videotuotanto Justus Anttila',
  metaDescription:
    'Videotuotannon hinnasto Justus Anttilalta. Hinnat häävideoille, musiikkivideoille, yritysvideoille ja kiinteistövideoille.',
  heading: 'Hinnasto',
  intro:
    'Kilpailukykyiset hinnat laadukkaaseen videotuotantoon. Toimin yhden miehen kokoonpanolla, joten kulut pysyvät kurissa vaikka laatu pysyy korkeana. Hinnat alkaen (sis. alv tai +alv mainittu). Tarvittaessa räätälöin palvelut juuri tarpeisiisi sopiviksi – ota yhteyttä!',
  servicesHeading: 'Palvelut ja hinnat',
  faqHeading: 'Usein kysytyt kysymykset',
  faqIntro: 'Tässä vastauksia yleisimpiin kysymyksiin. Jos kysymystäsi ei löydy, ota yhteyttä!',
  ctaButton: 'Kysy lisätietoja',
};

export const contact = {
  pageTitle: 'Yhteydenotto – Videotuotanto Justus Anttila',
  metaDescription:
    'Ota yhteyttä Justus Anttilaan videotuotantoon liittyen. Sähköposti: info@justusanttila.fi. Kerro projektistasi ja saat tarjouksen.',
  heading: 'Ota yhteyttä',
  intro:
    'Kiitos kiinnostuksestasi! Kerro projektistasi sähköpostilla tai lomakkeella alla. Vastaan yleensä 1–2 arkipäivän sisällä.',
  formHeading: 'Lähetä viesti',
  formSubmit: 'Lähetä',
  formSuccess: 'Viesti lähetetty! Otan yhteyttä pian.',
  formError: 'Virhe lähetyksessä. Yritä uudelleen tai lähetä sähköpostilla.',
  labels: {
    name: 'Nimi',
    email: 'Sähköposti',
    service: 'Palvelutyyppi',
    message: 'Viesti',
  },
  serviceOptions: [
    { value: '',              label: 'Valitse palvelu...' },
    { value: 'haavideo',      label: 'Häävideo' },
    { value: 'musiikkivideo', label: 'Musiikkivideo' },
    { value: 'yritysvideo',   label: 'Yritysvideo' },
    { value: 'kiinteisto',    label: 'Kiinteistövideo' },
    { value: 'oma',           label: 'Oma video' },
    { value: 'muu',           label: 'Muu' },
  ],
};
