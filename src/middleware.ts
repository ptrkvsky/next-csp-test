import { NextResponse, type NextRequest } from 'next/server';

export function generateCsp() {
  // Générer un nonce aléatoire converti en base64. Il doit être différent à chaque chargement de page HTTP.
  const nonce = crypto.randomUUID();

  const csp = [
    { name: 'default-src', values: ["'self'"] },
    {
      name: 'script-src',
      values: [
        "'self'",
        "'unsafe-eval'",
        'https:',
        'http:',
        `'nonce-${nonce}'`,
        "'strict-dynamic'",
      ],
    },
    {
      name: 'style-src',
      values: [
        "'self'",
        "'unsafe-inline'",
        'https://fonts.googleapis.com',
        'try.abtasty.com',
        '*.abtasty.com',
      ],
    },
    {
      name: 'connect-src',
      values: [
        "'self'",
        'http://demo.safti.local:12081',
        'https://*.abtasty.com',
        'https://*.clarity.ms',
        'https://*.google-analytics.com',
        'https://*.google.com',
        'https://*.googletagmanager.com',
        'https://*.new-immo-group.app',
        'https://*.new-immo-group.dev',
        'https://*.safeti-immobilien.de',
        'https://*.safti.es',
        'https://*.safti.fr',
        'https://abtasty.com',
        'https://api.privacy-center.org',
        'https://ariane.abtasty.com/',
        'https://bo.safeti-immobilien.de/api',
        'https://bo.safti.es',
        'https://bo.safti.es/api/highlightblock',
        'https://bo.safti.es/api/saftiblock',
        'https://bo.safti.fr',
        'https://bo.safti.fr/api/highlightblock',
        'https://bo.safti.fr/api/saftiblock',
        'https://clarity.ms',
        'https://dcinfos-cache.abtasty.com',
        'https://google-analytics.com',
        'https://google.com',
        'https://googletagmanager.com',
        'https://maps.googleapis.com',
        'https://new-immo-group.app',
        'https://new-immo-group.dev',
        'https://safeti-immobilien.de',
        'https://safti.es',
        'https://safti.fr',
        'https://stats.g.doubleclick.net',
      ],
    },
    {
      name: 'font-src',
      values: [
        "'self'",
        '*.abtasty.com',
        'https://abtasty.com',
        'https://fonts.gstatic.com',
      ],
    },
    {
      name: 'img-src',
      values: [
        "'self'",
        'data:',
        '*.new-immo-group.app',
        '*.new-immo-group.dev',
        'http://demo.safti.local:9873',
        'https://*.clarity.ms',
        'https://*.leadsmonitor.io',
        'https://*.safeti-immobilien.de',
        'https://*.safti.es',
        'https://*.safti.fr',
        'https://c.bing.com',
        'https://clarity.ms',
        'https://leadsmonitor.io',
        'https://maps.googleapis.com',
        'https://maps.gstatic.com',
        'https://nig-aws-preprod-bien-photo.s3.eu-west-3.amazonaws.com',
        'https://nig-aws-prod-bien-photo.s3.eu-west-3.amazonaws.com',
        'https://photo.safeti-immobilien.de',
        'https://purecatamphetamine.github.io',
        'https://safeti-immobilien.de',
        'https://safti.es',
        'https://safti.fr',
        'https://www.facebook.com',
        'https://www.google-analytics.com',
        'https://www.google.com',
        'https://www.google.de',
        'https://www.google.es',
        'https://www.google.fr',
        'https://www.googletagmanager.com',
      ],
    },
    { name: 'worker-src', values: ["'self'", 'blob:'] },
    {
      name: 'frame-src',
      values: [
        "'self'",
        'https://*.alainbossard.fr',
        'https://*.bien-estimer-safti.fr',
        'https://*.cloudpano.com',
        'https://*.dailymotion.com',
        'https://*.facebook.com',
        'https://*.floorfy.com',
        'https://*.google.com',
        'https://*.istaging.com',
        'https://*.klapty.com',
        'https://*.matterport.com',
        'https://*.nodalview.com',
        'https://*.previsite.com',
        'https://*.previsite.net',
        'https://*.provirtualvisit.com',
        'https://*.rhinov.pro',
        'https://*.ricohtours.com',
        'https://*.youtu.be',
        'https://*.youtube.com',
        'https://alainbossard.fr',
        'https://bien-estimer-safti.fr',
        'https://cloudpano.com',
        'https://dailymotion.com',
        'https://facebook.com',
        'https://floorfy.com',
        'https://google.com',
        'https://istaging.com',
        'https://klapty.com',
        'https://matterport.com',
        'https://nodalview.com',
        'https://omega-de.new-immo-group.dev',
        'https://omega-es.new-immo-group.dev',
        'https://omega-fr.new-immo-group.dev',
        'https://omega-preprod-safti-de.new-immo-group.app',
        'https://omega-pt.new-immo-group.dev',
        'https://omega.safti.de',
        'https://omega.safti.es',
        'https://omega.safti.fr',
        'https://omega.safti.pt',
        'https://player.vimeo.com',
        'https://previsite.com',
        'https://previsite.net',
        'https://provirtualvisit.com',
        'https://rhinov.pro',
        'https://ricohtours.com',
        'https://td.doubleclick.net',
        'https://tour.giraffe360.com',
        'https://youtu.be',
        'https://youtube.com',
      ],
    },
    {
      name: 'frame-ancestors',
      values: [
        "'self'",
        'http://*.safti-fr.localhost',
        'http://safti-fr.localhost',
        'https://*.safeti-immobilien.de',
        'https://*.safti.es',
        'https://*.safti.fr',
        'https://omega-de.new-immo-group.dev',
        'https://omega-es.new-immo-group.dev',
        'https://omega-fr.new-immo-group.dev',
        'https://omega-pt.new-immo-group.dev',
        'https://omega.safti.de',
        'https://omega.safti.es',
        'https://omega.safti.fr',
        'https://omega.safti.pt',
        'https://safeti-immobilien.de',
        'https://safti.es',
        'https://safti.fr',
      ],
    },
    {
      name: 'media-src',
      values: [
        "'self'",
        'https://*.safti.es',
        'https://*.safti.fr',
        'https://*.safeti-immobilien.de',
        'https://safti.es',
        'https://safti.fr',
        'https://safeti-immobilien.de',
      ],
    },
    {
      name: 'object-src',
      values: [
        "'self'",
        'https://*.safti.es',
        'https://*.safti.fr',
        'https://*.safeti-immobilien.de',
        'https://safti.es',
        'https://safti.fr',
        'https://safeti-immobilien.de',
      ],
    },
    {
      name: 'manifest-src',
      values: [
        "'self'",
        '*.new-immo-group.app',
        'https://*.safeti-immobilien.de/',
        'https://*.safti.es',
        'https://*.safti.fr',
        'https://safeti-immobilien.de',
        'https://safti.es',
        'https://safti.fr',
      ],
    },
  ];

  const cspString = csp
    .map((directive) => {
      return `${directive.name} ${directive.values.join(' ')}`;
    })
    .join('; ');

  return { csp: cspString, nonce };
}

export async function middleware(request: NextRequest) {
  // Générer CSP et nonce
  const { csp, nonce } = generateCsp();

  // Cloner les en-têtes de la requête
  const requestHeaders = new Headers(request.headers);

  // Définir l'en-tête nonce pour lecture dans les pages si nécessaire  @example const nonce = headers().get("x-nonce") || "";
  requestHeaders.set('x-nonce', nonce);

  // Définir l'en-tête CSP
  // const headerKey = 'content-security-policy-report-only'
  const headerKey = 'content-security-policy';

  // Définir l'en-tête CSP pour que "app-render" puisse le lire et générer des balises avec le nonce
  requestHeaders.set(headerKey, csp);

  // Créer une nouvelle réponse
  const response = NextResponse.next({
    request: {
      // Nouveaux en-têtes de requête
      headers: requestHeaders,
    },
  });

  // Définir également le CSP pour qu'il soit transmis au navigateur
  response.headers.set(headerKey, csp);

  return response;
}

// https://nextjs.org/docs/app/building-your-application/configuring/content-security-policy
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    {
      source: '/((?!api|_next/static|_next/image|favicon.ico).*)',
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
      ],
    },
  ],
};
