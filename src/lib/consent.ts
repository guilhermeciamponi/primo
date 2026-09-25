/**
 * Consent, for the one third party this site has: the Google Maps embed on /contact.
 *
 * Ported from nuvenhub.com's own banner (same stack, and the design the owner asked to match).
 * What is NOT ported is the gtag machinery — this site has no GA4, no Meta Pixel and no Google
 * Ads, so there is exactly one thing behind the choice and it is the map.
 *
 * ⚠️ The honesty rule that cost nuvenhub.com a rewrite, kept here deliberately:
 * our own visit counter (`sf_sid`, `nv_vid`) loads from index.html and does NOT pass through
 * this file. So the banner must never say "nothing loads until you accept" — that would be a
 * promise the code does not keep. It says what actually happens: our own measurement is
 * essential and stays with us; Google's map waits for a click.
 *
 * "Essential = ours" is the owner's business decision, taken with the caveat in front of him,
 * not a legal finding. What this file guarantees is the part that must be true: choosing
 * "essentials only" really does mean no request reaches Google.
 */
export type Consent = "granted" | "denied";

const STORAGE_KEY = "apiano.consent";

/** There is something to consent to: the Contact page's Google Maps embed. */
export const hasThirdParty = true;

let listeners: Array<(c: Consent | null) => void> = [];

export function readConsent(): Consent | null {
  try {
    const v = window.localStorage.getItem(STORAGE_KEY);
    return v === "granted" || v === "denied" ? v : null;
  } catch {
    // Private mode: ask again next visit, which is the safe direction.
    return null;
  }
}

export function setConsent(choice: Consent) {
  try {
    window.localStorage.setItem(STORAGE_KEY, choice);
  } catch {
    /* private mode: honoured for this visit only */
  }
  listeners.forEach((fn) => fn(choice));
}

export function onConsentChange(fn: (c: Consent | null) => void) {
  listeners.push(fn);
  return () => {
    listeners = listeners.filter((l) => l !== fn);
  };
}
