/* inzeniths.com/santa... shows Santa Box, which lives in the InZeniths_Interactive_lab repo (play.inzeniths.com).
 * The visitor stays on inzeniths.com: this passes the request on and returns the answer as it is.
 * Which page each address shows is decided there (functions/santa/). */
const ORIGIN_DEFAULT = 'https://play.inzeniths.com';

export async function onRequest({ request, env }) {
  const url = new URL(request.url);
  // one domain only: the API and the uploads refuse www, so www.inzeniths.com/santa moves to inzeniths.com/santa
  if (url.hostname.startsWith('www.')) {
    url.hostname = url.hostname.slice(4);
    return Response.redirect(url.href, 302);
  }
  const origin = new URL(env.SANTA_ORIGIN || ORIGIN_DEFAULT).origin;
  const res = await fetch(new Request(new URL(url.pathname + url.search, origin), request), { redirect: 'manual' });
  const location = res.headers.get('location');
  if (!location || !location.startsWith(origin)) return res;
  const out = new Response(res.body, res);
  out.headers.set('location', url.origin + location.slice(origin.length));
  return out;
}
