import React, { Component } from "react";
import { graphql, Link } from "gatsby";
import _ from "lodash";
import Layout from "../components/Layout";
import Card from '@material-ui/core/Card';

export default class Post extends Component {
  render() {
    const { data } = this.props;
    const { title, tags, date } = data.markdownRemark.frontmatter;
    const { html } = data.markdownRemark;
    return (
      <Layout>
        <Card style={{ backgroundColor: '#FFF', width: '100%', padding: '1.5rem', margin: '10px 15px'}}>
          <h2 style={{ fontSize: '22px', fontWeight: 'bold' }}>{title}</h2>
          <p>{tags.map(tag => <Link style={{ color: '#000', marginRight: '10px' }} key={tag} to={`/tag/${_.kebabCase(tag)}`}>{tag}</Link>)}</p>
          <p>{date}</p>
          <div className="content">
            <p dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </Card>
      </Layout>
    )
  }
};

export const pageQuery = graphql`
  query PostPage($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } } ) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        date(formatString: "DD/MM/YYYY")
        tags
        description
      }
      fields {
        slug
      }
    }
  }
`;