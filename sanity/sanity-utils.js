import { createClient, groq } from "next-sanity";

const client = createClient({
  projectId: "abp66gug",
  dataset: "production",
  apiVersion: "2023-06-01",
});

export async function getLanding() {
  return client.fetch(
    groq`*[_type == "landing"]{"slug": arbeiten.arbeiten->{slug}, "bild": bild.asset->{url}, "alt": bild.alt}`
  );
}

export async function getStudio() {
  return client.fetch(
    groq`*[_type == "studio"]{..., "bild": introImage.bild.asset->{...}}`
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

export async function getGalerie() {
  return client.fetch(
    groq`*[_type == "galerie"]{..., exhibitions[]{..., "bild": {"bild": bild.asset->{...}, "alt": bild.alt, "alt": bild.alt}}, "introImage": {"bild": introImage.bild.asset->{...}, "alt": introImage.alt}}`
  );
}

export async function getKollektion() {
  return client.fetch(
    groq`*[_type == "kollektion"]|order(orderRank){..., "bild": {"asset": vorschaubild.bild.asset->{...}, "alt": vorschaubild.alt}}`
  );
}

export async function getKontakt() {
  return client.fetch(groq`*[_type == "kontakt"]{...}`);
}
