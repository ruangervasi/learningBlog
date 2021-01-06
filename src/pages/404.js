import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO/SEO";

export default () => (
  <Layout>
    <SEO title="404" url="404" description="Page not found!" article />
    <p>Página não encontrada!</p>
  </Layout>
);
