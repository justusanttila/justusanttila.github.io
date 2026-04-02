/**
 * videos.js — Edit this file to manage portfolio videos.
 *
 * Each video entry has:
 *   id:          YouTube video ID (the part after watch?v= or youtu.be/)
 *   title:       Display title
 *   description: Short description shown under the video
 *   featured:    number → lower number appears higher on home page teaser (optional)
 */

export const videoCategories = [
  { id: 'yritysvideot',     label: 'Yritysvideot' },
  { id: 'musiikkivideot',   label: 'Musiikkivideot' },
  { id: 'lyhytelokuvat',    label: 'Lyhytelokuvat' },
  { id: 'tyylivideot',      label: 'Tyylivideot' },
  { id: 'sisallontuotanto', label: 'Suomen Sisällöntuotanto' },
  { id: 'haavideot',        label: 'Häävideot' },
  { id: 'hybridi',          label: 'HybridiSpeksi' },
];

export const videos = {
  yritysvideot: {
    heading: 'Yritysvideot',
    intro: 'Tekemiäni mainosvideoita eri yritysasiakkaille.',
    items: [
      {
        id: 'VQMspQF6A_M',
        title: 'Turun päivä 2025',
        description: 'Tapahtumakooste Turun päivän 2025 tunnelmista.',
        featured: 1,
      },
      {
        id: 'p_IRrpFw7zM',
        title: 'Turun päivä 2024',
        description: 'Tapahtumakooste Turun päivän 2024 tunnelmista.',
      },
      {
        id: 'lFAp9xn3WGU',
        title: 'Lemon ranta',
        description: 'Mainosvideo Lemon rannalle.',
      },
      {
        id: 'ZU-CjSIXnC0',
        title: 'Merikarvian lukio',
        description: 'Mainosvideo Merikarvian lukiolle.',
      },
    ],
  },

  musiikkivideot: {
    heading: 'Musiikkivideot',
    intro: 'Perinteikäs tai vähän erikoisempi musiikkivideo.',
    items: [
      {
        id: 'pdSqCGR8epU',
        title: 'HURMOX - Kiirekiire',
        description: 'Energinen biisi ja musiikkivideo arjen kiireestä.',
        featured: 2
      },
      {
        id: 'ztX8xv-4Yys',
        title: 'Vapausaste – Olet ihminen',
        description: 'Musiikkivideo Vapausasteen kappaleelle Olet ihminen.',
      },
      {
        id: 'EpbMHqssn0k',
        title: 'Jessica ja Bålder – Jouluna',
        description: 'Jouluinen musiikkivideo, jossa Jessica ja Bålder Quartet yhdistävät voimansa.',
      },
      {
        id: 'puMBpccmGBA',
        title: 'Bålder Quartet – La Folia',
        description: 'Klassinen musiikkivideo Bålder Quartetille Vivaldin La Folia sävellyksestä',
      },
      {
        id: 'XWU9Gp-FiDU',
        title: 'Bålder Quartet – Verano Porteño',
        description: 'Toinen klassinen musiikkivideo Bålder Quartetille tällä kertaa kappaleena Piazzollan Verano Porteño eli kesä. Tästä tehtiin myös muut vuodenajat.',
      },
    ],
  },

  lyhytelokuvat: {
    heading: 'Lyhytelokuvat',
    intro: 'Tarinan voi kertoa myös lyhyessä ajassa.',
    items: [
      {
        id: 'tRztWATosW0',
        title: 'Menneisyyden Säröt',
        description: 'Salaperäinen kutsu kokoaa joukon nuoria aikuisia mökille viikonloppua viettämään. Viikonlopun aikana vanhat ihmissuhteet, käsittelemätön suru ja menneisyyden ristiriidat alkavat nousta pintaan. Jokaisen on kohdattava, mitä on yrittänyt vältellä ja päättämään, jatkaako eteenpäin vai jääkö kiinni menneeseen.',
        featured: 3,
      },
      {
        id: '2kdkR3WONfo',
        title: 'Kuulustelu',
        description: 'Tuntematon nainen on hyökännyt rikollisporukan kimppuun ja hänet on vangittu. Kuka hän oikein on ja miksi hän on lähtenyt tappelemaan rikollisten kanssa?',
      },
      {
        id: 'U69ruqeYK58',
        title: 'Vuosisadan bileet',
        description: 'Draamaa ja komediaa bileissä. Nuoren tytön vanhemmat lähtevät lomalle, joten tyttö päättää tietenkin kutsua kaverinsa bileisiin. Kaikki ei kuitenkaan ole, miltä näyttää.',
      },
      {
        id: 'dPR-NBE5b6E',
        title: 'Mies ja tikkaat',
        description: 'Absurdi lyhytelokuva miehestä ja tikkaista.',
      },
      {
        id: 'il0ERFnr500',
        title: 'Luomisen tuska',
        description: 'Lyhytelokuva luovuudesta ja turhautumisesta.',
      },
      {
        id: 'tFCdjlcJC9g',
        title: 'Eksyksissä Yo-kylässä',
        description: 'Komedia ylioppilaskylässä eksymisestä.',
      },
      {
        id: 'LBkamNWOtSw',
        title: 'Ritari ja varas',
        description: 'Toimintavetoinen lyhytelokuva ritarista ja varkaasta.',
      },
    ],
  },

  tyylivideot: {
    heading: 'Tyylivideot',
    intro: 'Esimerkkejä siitä, minkä tyylistä materiaalia pystyn tuottamaan.',
    items: [
      {
        id: 'lPNuScLXPxQ',
        title: 'Frozen day',
        description: 'Tyylivideo talvisessa maisemassa.',
      },
      {
        id: 'KaGq6oV4rOI',
        title: 'Koiran elämää',
        description: 'Tyylivideo koiran arjesta.',
      },
      {
        id: 'L6q9L16jB00',
        title: 'Drone',
        description: 'Ilmakuvausdemo dronella.',
      },
      {
        id: 'MfwuvPpw99E',
        title: 'Tanssivideo',
        description: 'Tyylivideo tanssin maailmasta.',
      },
      {
        id: '3-sy1SEG1rg',
        title: 'Kimalaiset on söpöjä',
        description: 'Makrokuvausvideo kimalaisista.',
      },
    ],
  },

  sisallontuotanto: {
    heading: 'Suomen Sisällöntuotanto',
    intro:
      'Vuonna 2021 tein Suomen Sisällöntuotannolle töitä freelancerina. Heiltä tulivat sarjoille ideat, asiakkaat ja käsikirjoitukset. Valitettavasti kyseinen firma meni koronan vuoksi konkurssiin. Olen ollut kuvaamassa ja editoimassa useita heidän somesarjoistaan ja tehnyt näiden intro-osuudet ja grafiikat.',
    items: [
      {
        id: 'SfBbMewRxnI',
        title: 'Norsupartio',
        description: 'Somesarja Norsupartiosta.',
      },
      {
        id: 'KYWtQO8sliQ',
        title: 'Sokkotreffit Willassa',
        description: 'Somesarja sokkotrefeistä Willassa.',
      },
    ],
  },

  haavideot: {
    heading: 'Häävideot',
    intro:
      ' ',
    items: [
      {
        id: '1zE0N9esQes',
        title: 'Victoria ja Kinu',
        description: 'Tekemäni häävideo muutaman vuoden takaa. Kalusto on ehtinyt päivittyä ja ote parantua tämän videon jälkeen.',
      },
    ],
  },

  hybridi: {
    heading: 'HybridiSpeksi',
    intro:
      'HybridiSpeksi on luonnontieteiden ja tekniikan tiedekunnan opiskelijoiden speksi – eräänlaista opiskelijateatteria. Olen tehnyt heille useita videoita ja ollut muutenkin mukana toiminnassa.',
    items: [
      {
        id: 'fmCjxaopc-E',
        title: 'HS2019 Teaseri',
        description: 'Teaseri HybridiSpeksi 2019 -esityksestä.',
      },
      {
        id: 'RRqUhaG_E9s',
        title: 'HS2019 Traileri',
        description: 'Traileri HybridiSpeksi 2019 -esityksestä.',
      },
      {
        id: 'nQqhkyH5Tbk',
        title: 'HS2020 Teaseri',
        description: 'Teaseri HybridiSpeksi 2020 -esityksestä.',
      },
      {
        id: 'rtUkmookmh8',
        title: 'HS2020 Traileri',
        description: 'Traileri HybridiSpeksi 2020 -esityksestä.',
      },
    ],
  },
};

/**
 * Returns all videos marked with featured:number, with category labels.
 * Lower featured value appears first. Ties keep original declaration order.
 */
export function getFeaturedVideos() {
  const flatVideos = Object.values(videos).flatMap((cat) =>
    cat.items.map((v) => ({ ...v, categoryLabel: cat.heading }))
  );

  return flatVideos
    .map((v, orderIndex) => ({
      ...v,
      __rank: typeof v.featured === 'number' ? v.featured : null,
      __order: orderIndex,
    }))
    .filter((v) => v.__rank !== null && Number.isFinite(v.__rank))
    .sort((a, b) => a.__rank - b.__rank || a.__order - b.__order)
    .map(({ __rank, __order, ...video }) => video);
}
