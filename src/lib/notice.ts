/**
 * The site notice — and it is a NOTICE, not a consent gate. The distinction is the whole point.
 *
 * This site has nothing to consent to. Our two cookies are set on every visit by decision, and
 * the Google map on /contact loads with the page because showing where the restaurant is IS the
 * page's job. There is no GA4, no Pixel, no Ads. So a pair of "essentials / accept all" buttons
 * would produce identical results, and a visitor pressing one would believe they had chosen
 * something. The lie would be the existence of the pair, not the wording — no sentence fixes it.
 *
 * So: one button, which acknowledges. What it stores is "this person has read it", never a
 * permission, and nothing anywhere branches on it.
 *
 * If the platform ever lets a site decline the year-long `nv_vid`, two buttons become honest
 * again — essentials would keep only the session cookie — and this file grows a real choice.
 */
const KEY = "apiano.notice";

export function noticeSeen(): boolean {
  try {
    return window.localStorage.getItem(KEY) === "seen";
  } catch {
    // Private mode: show it again next time rather than assume it was read.
    return false;
  }
}

export function markNoticeSeen() {
  try {
    window.localStorage.setItem(KEY, "seen");
  } catch {
    /* private mode: honoured for this visit only */
  }
  listeners.forEach((fn) => fn());
}

let listeners: Array<() => void> = [];
export function onNoticeChange(fn: () => void) {
  listeners.push(fn);
  return () => {
    listeners = listeners.filter((l) => l !== fn);
  };
}
