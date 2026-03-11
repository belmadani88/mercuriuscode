import { Helmet } from "react-helmet-async";

interface PageSEOProps {
  title: string;
  description: string;
  path?: string;
  jsonLd?: Record<string, unknown>;
}

const PageSEO = ({ title, description, path, jsonLd }: PageSEOProps) => {
  const fullTitle = `${title} | HeurOps`;
  const url = path ? `https://heurops.com${path}` : undefined;
  const ogImage = "https://heurops.com/og-image.png";

  const defaultJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "HeurOps",
    url: "https://heurops.com",
    logo: "https://heurops.com/favicon.ico",
    description: "We design and deploy custom AI digital workers that operate inside your business 24/7.",
    foundingDate: "2025",
    founder: {
      "@type": "Person",
      name: "Oussama Bel Madani",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "hello@heurops.com",
      contactType: "sales",
    },
    sameAs: [],
  };

  const structuredData = jsonLd || defaultJsonLd;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />
      {url && <meta property="og:url" content={url} />}
      {url && <link rel="canonical" href={url} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </Helmet>
  );
};

export default PageSEO;