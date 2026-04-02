/**
 * pricing.js — Edit this file to update services and pricing.
 * Also update FAQ items here.
 */

export const services = [
  {
    id: 'haavideo',
    title: 'Häävideo',
    price: 'Alk. 1000\u20ac (sis. alv)',
    description:
      'Sisältää kuvaukset vihkimisestä päivän loppuun. Teen hääpäivänne parhaista hetkistä noin 5–10 minuutin mittaisen koosteen haluamallanne taustamusiikilla.',
  },
  {
    id: 'musiikkivideo',
    title: 'Musiikkivideo',
    price: 'Alk. 1000\u20ac (sis. alv)',
    description: 'Perinteikäs tai vähän erikoisempi. Juuri sinunlaisesi musiikkivideo.',
  },
  {
    id: 'yritysvideo',
    title: 'Tapahtuma- tai mainosvideo',
    price: 'Alk. 900\u20ac (+alv)',
    description:
      'Kuvaamisen lisäksi hoidan myös käsikirjoittamisen toiveidenne mukaisesti.',
  },
  {
    id: 'kiinteisto',
    title: 'Kiinteistövideo',
    price: '450\u20ac (+alv)',
    description:
      'Sisältää ilmakuvauksen kiinteistöstä sekä eri tilojen kuvaamisen. Lopullinen video puolesta minuutista pariin minuuttiin sopivanlaisella taustamusiikilla.',
  },
  {
    id: 'oma',
    title: 'Oma video',
    price: '250\u20ac (sis. alv)',
    description:
      'Sisältää parin tunnin kuvaussession ja siitä muodostetun puolen minuutin videon taustamusiikilla.',
  },
  {
    id: 'muu',
    title: 'Jotain muuta?',
    price: 'Tarjouspyyntö',
    description:
      'Olen avoin keskustelemaan myös muunkinlaisista videoista. Vaikka lyhytelokuvan kuvaaminen voisi onnistua.',
    custom: true,
  },
];

export const faq = [
  {
    question: 'Mitä hinnat sisältävät?',
    answer:
      'Hinnat sisältävät kuvauksen, editoinnin, perusgrafiikat ja musiikit. Tarvittaessa myös käsikirjoittamisen. Hoidan siis kaiken alusta loppuun.',
  },
  {
    question: 'Voiko hintaa neuvotella?',
    answer:
      'Kyllä, erityisesti pidemmille projekteille tai useammalle videolle. Moni asia voi vaikuttaa hintaan, joten kerro tarpeistasi yhteydenotossa, niin teen tarjouksen.',
  },
  {
    question: 'Kuinka kauan editointi kestää?',
    answer:
      'Yleensä noin 1–3 viikkoa kuvausten jälkeen riippuen projektin laajuudesta. Kerron arvioidun aikataulun aina ennen projektin aloittamista.',
  },
  {
    question: 'Missä kuvaatte?',
    answer:
      'Olen asunnon tällä hetkellä Jyväskylässä, mutta matkustan matalalla kynnyksellä minnepäin vain. Matkakulut lisätään yli 50 km matkoille.',
  },
  {
    question: 'Saanko käyttää omaa musiikkia?',
    answer:
      'Kyllä, voit käyttää omaa musiikkia tai ehdottaa biisiä. Hoidan myös tekijänoikeudet tarvittaessa.',
  },
];
