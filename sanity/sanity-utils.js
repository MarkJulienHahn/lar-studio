import { createClient, groq } from "next-sanity";

const client = createClient({
  projectId: "abp66gug",
  dataset: "production",
  apiVersion: "2023-06-01",
});

export async function getLanding() {
  return client.fetch(
    groq`*[_type == "landing"]{"slug": arbeiten.arbeiten->{slug}, "bild": bild.asset->{...}, "alt": bild.alt}`
  );
}

export async function getStudio() {
  return client.fetch(
    groq`*[_type == "studio"]{..., "bild": introImage.bild.asset->{...}, "teamFoto": introImage.bild.asset->{...}, "team": team[]{..., "bild": bild{..., "asset": asset->{...}}}}`
  );
}

export async function getArbeiten() {
  return client.fetch(
    groq`*[_type == "arbeiten"]|order(orderRank)
    {..., 
      "bilder": {bilder[]{"bild": {..., "alt": bild.alt,"asset": bild.asset->{...}}}}, 
      "bild": 
        {
          "asset": bild.asset->{...}, 
          "alt": bild.alt,
          "right": bild.right
        }
    }`
  );
}

export async function getMarken() {
  return client.fetch(
    groq`*[_type == "marken"]|order(orderRank)
    {..., 
      "bilder": {bilder[]{"bild": {..., "alt": bild.alt,"asset": bild.asset->{...}}}}, 
      "bild": 
        {
          "asset": bild.asset->{...}, 
          "alt": bild.alt,
          "right": bild.right
        }
    }`
  );
}

export async function getGalerie() {
  return client.fetch(
    groq`*[_type == "galerie"]
    {..., exhibitions[]
      {..., "bild": 
         {"bild": bild.asset->{...}, 
          "alt": bild.alt},
          "bilder": bilder[]{..., "bild":bild{..., "asset": asset->{...}}}
      }, 
     "introImage": 
       {"bild": introImage.bild.asset->{...}, 
        "alt": introImage.alt
       },
     "marken": marken[]{..., "bild": bild{..., "asset": asset->{...}}}
    }`
  );
}

export async function getProzess() {
  return client.fetch(
    groq`*[_type == "prozess"]|order(orderRank){..., 
      "bilder": {bilder[]{"bild": {..., "alt": bild.alt,"asset": bild.asset->{...}}}}, 
      "bild": 
        {
          "asset": bild.asset->{...}, 
          "alt": bild.alt,
          "right": bild.right
        }
    }`
  );
}

export async function getKontakt() {
  return client.fetch(groq`*[_type == "kontakt"]{...}`);
}

export async function getCookies() {
  return client.fetch(groq`*[_type == "cookies"]{...}`);
}

export async function getProzessIntro() {
  return client.fetch(groq`*[_type == "prozessIntro"]{...}`);
}

export async function getImpressum() {
  return client.fetch(groq`*[_type == "impressum"]{...}`);
}

export async function getDatenschutz() {
  return client.fetch(groq`*[_type == "datenschutz"]{...}`);
}

export async function getAGB() {
  return client.fetch(groq`*[_type == "agb"]{...}`);
}
