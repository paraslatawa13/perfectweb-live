import React from "react";
import { Helmet } from "react-helmet-async";

const defaultImage = "https://perfectwebservices.com/assets/site-logo-BFOW6fmv.svg";

const MetaHelmet = ({ meta }) => {
  const url = `https://perfectwebservices.com${window.location.pathname}`;
  const title = meta?.meta_title ;
  const description =
    meta?.meta_description;
  const image = meta?.meta_image || defaultImage;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="Perfect Web Services" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:url" content={url} />
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default MetaHelmet;
