import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-4 text-5xl text-foreground">Strona nie istnieje</h1>
        <p className="mt-4 text-muted-foreground">
          Strona, której szukasz, została przeniesiona lub nie istnieje.
        </p>
        <div className="mt-8">
          <Link to="/" className="btn-gold">Wróć na stronę główną</Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-3xl text-foreground">Wystąpił błąd</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Spróbuj odświeżyć stronę lub wrócić na stronę główną.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button onClick={() => { router.invalidate(); reset(); }} className="btn-gold">
            Spróbuj ponownie
          </button>
          <a href="/" className="btn-outline-gold">Strona główna</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "New Beauty Aldona Dziuba — Gabinet Kosmetyczny Lublin" },
      {
        name: "description",
        content:
          "Ekskluzywny gabinet kosmetyczny New Beauty Aldona Dziuba w Lublinie. Profesjonalne zabiegi pielęgnacyjne, makijaż permanentny, stylizacja brwi i rzęs. Lwowska 6, Lublin.",
      },
      { name: "author", content: "New Beauty Aldona Dziuba" },
      { name: "theme-color", content: "#c9a96e" },
      { property: "og:title", content: "New Beauty Aldona Dziuba — Gabinet Kosmetyczny Lublin" },
      { property: "og:description", content: "Stwórz elegancką, polską stronę internetową dla salonu piękności \"New Beauty Aldona Dziuba\"." },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pl_PL" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "New Beauty Aldona Dziuba — Gabinet Kosmetyczny Lublin" },
      { name: "description", content: "Stwórz elegancką, polską stronę internetową dla salonu piękności \"New Beauty Aldona Dziuba\"." },
      { name: "twitter:description", content: "Stwórz elegancką, polską stronę internetową dla salonu piękności \"New Beauty Aldona Dziuba\"." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/3a73b79b-8f85-4d90-b9af-cee6e5665bf6/id-preview-447585fe--64b6ccae-c083-4585-8b35-8d6755f0ac00.lovable.app-1780062175654.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/3a73b79b-8f85-4d90-b9af-cee6e5665bf6/id-preview-447585fe--64b6ccae-c083-4585-8b35-8d6755f0ac00.lovable.app-1780062175654.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Karla:wght@300;400;500;600&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BeautySalon",
          name: "New Beauty Aldona Dziuba",
          image: "/og-image.jpg",
          telephone: "+48 884 880 966",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Lwowska 6",
            postalCode: "20-400",
            addressLocality: "Lublin",
            addressCountry: "PL",
          },
          url: "/",
          priceRange: "$$",
          aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", reviewCount: "60" },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
