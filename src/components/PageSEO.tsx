import { Helmet } from "react-helmet-async";

interface PageSEOProps {
  title: string;
  description: string;
  path?: string;
}

const PageSEO = ({ title, description, path }: PageSEOProps) => {
  const fullTitle = `${title} | Mercurius Code`;
  const url = path ? `https://mercuriuscode.com${path}` : undefined;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      {url && <meta property="og:url" content={url} />}
      {url && <link rel="canonical" href={url} />}
    </Helmet>
  );
};

export default PageSEO;
