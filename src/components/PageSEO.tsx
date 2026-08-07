import { Helmet } from "react-helmet-async";

interface PageSEOProps {
  title: string;
  description: string;
  path?: string;
  jsonLd?: Record<string, unknown>;
}

const PageSEO = ({ title, description, path, jsonLd }: PageSEOProps) => {
  const fullTitle = `${title} | WebThangs`;
  const url = path ? `https://webthangs.site${path}` : undefined;
  const ogImage = "https://webthangs.site/og-image.png";

  const defaultJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "WebThangs",
    url: "https://webthangs.site",
    logo: "https://webthangs.site/favicon.ico",
    description: "WebThangs builds high-converting websites enhanced with AI-powered growth systems: AI sales agents, Generative Engine Optimization, real-time personalization, CRM automation, and continuous CRO.",
    foundingDate: "2025",
    knowsAbout: [
      "Conversion Rate Optimization",
      "AI-Powered Sales Agents and Lead Qualification",
      "Generative Engine Optimization",
      "Dynamic UX and Real-Time Personalization",
      "Automated CRM Workflows and Tech Stack Integration",
      "Accelerated Landing Page Funnels",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "contact@webthangs.site",
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