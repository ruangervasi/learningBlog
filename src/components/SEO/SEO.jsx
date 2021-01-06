import React from "react";
import { Helmet } from "react-helmet";
import config from "../../../data/config";

export default ({ title, description, url, article }) => {
  const SEO = {
    title: title ? `${title} | ${config.siteTitle}` : config.siteTitle,
    description: description || config.siteDescription,
    image: config.siteImage,
    url: url ? `${config.siteUrl}${url}` : '',
  }

  return (
    <React.Fragment>
      <Helmet title={SEO.title} >
        <meta name="description" content={SEO.description} />
        <meta name="image" content={SEO.image} />
        {SEO.url && <meta property="og:url" content={SEO.url} />}
        {article ? (
          <meta property="og:type" content="article" />
        ) : (
          <meta property="og:type" content="website" />
        )}
        {SEO.title && <meta property="og:title" content={SEO.title} />}
        {SEO.description && (
          <meta property="og:description" content={SEO.description} />
        )}
        {SEO.image && <meta property="og:image" content={SEO.image} />}
        <meta name="twitter:card" content="summary_large_image" />
        {SEO.title && <meta name="twitter:title" content={SEO.title} />}
        {SEO.description && (
          <meta name="twitter:description" content={SEO.description} />
        )}
        {SEO.image && <meta name="twitter:image" content={SEO.image} />}
      </Helmet>
    </React.Fragment>
  )
}