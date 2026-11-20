/**
 * Every fact on the site lives here, so it can be corrected in one place.
 *
 * Sources (checked November 2026): the restaurant's own Instagram profile
 * (@oreno_ramen) for hours, address, tagline and booking link; Falter and
 * Gault&Millau for the story; several listings for phone and payment.
 * The menu lives in ./menu.ts.
 * Anything marked UNCONFIRMED should be checked with the restaurant.
 */

export const restaurant = {
  name: 'Oreno Ramen',
  nameJa: '俺のラーメン', // as printed in the stamp on their menu
  tagline: 'ramen & soul',
  taglineJa: 'ソウルミュージック & ラーメン',
  street: 'Lerchenfelder Straße 74',
  zip: '1080',
  city: 'Wien',
  phoneDisplay: '01 890 12 48',
  phoneHref: 'tel:+4318901248',
  since: 2019,
  owner: 'Justin Chen',
  // Booking widget linked from the restaurant's Instagram profile.
  reserveUrl: 'https://app.teburio.de/widget/l/mt9eTxyBWEhAfnEF4',
  instagram: 'https://www.instagram.com/oreno_ramen/',
  facebook: 'https://www.facebook.com/orenoramen1080',
  mapUrl:
    'https://www.google.com/maps/search/?api=1&query=Oreno+Ramen+Lerchenfelder+Stra%C3%9Fe+74+1080+Wien',
  outdoorSeats: 26, // Falter listing
  kitchenClosesMinutesBefore: 30,
} as const;

/** Opening hours. Day index follows JS Date: 0 = Sunday. Times are Vienna local time. */
export const hours: Record<number, [string, string][]> = {
  0: [
    ['12:00', '16:00'],
    ['17:00', '22:00'],
  ],
  1: [],
  2: [['17:00', '22:00']],
  3: [['17:00', '22:00']],
  4: [['17:00', '22:00']],
  5: [['17:00', '22:00']],
  6: [['17:00', '22:00']],
};

/**
 * Days the restaurant is closed outside the normal week: holidays, Betriebsurlaub.
 * Dates are inclusive, written YYYY-MM-DD. While one applies, the "open now" line
 * on the home page shows it instead of the regular hours.
 * Example: { from: '2027-07-20', to: '2027-08-02', de: 'Betriebsurlaub', en: 'Summer break', ja: '夏季休業' }
 */
export const closures: { from: string; to: string; de: string; en: string; ja: string }[] = [];

/** One short press quote, attributed. */
export const quote = {
  text: 'Das Wesentliche kommt aus der Küche und in Form einer prächtigen Suppe daher.',
  source: 'Gault&Millau, 2025',
  url: 'https://www.gaultmillau.at/news/best-fuenf-adressen-fuer-ramen-wien',
};
