import React, { Component } from "react"
import Link from "gatsby-link"
import PropTypes from "prop-types"
import { graphql } from 'gatsby'
// import TemplateWrapper from '../../layouts'

class PostsTemplate extends Component {
    render() {
        const data = this.props.data

        return(
            <div>
            {/* <TemplateWrapper> */}
                <h1>Posts</h1>

                {data.allWordpressPost.edges.map(({node}) => (
                    <div key={node.slug} className={"post"} style={{ marginBottom: 50 }}>
                        <Link to={'post/' + node.slug}>
                            <h3>{node.title}</h3>
                        </Link>

                        <div className={"post-content"} dangerouslySetInnerHTML={{__html: node.excerpt}} />

                        {node.date}
                    </div>
                ))}
            {/* </TemplateWrapper> */}
            </div>
        )
    }
}

PostsTemplate.propTypes = {
    data: PropTypes.object.isRequired,
    edges: PropTypes.array,
}

export default PostsTemplate

export const pageQuery = graphql`
    query postsQuery{
        allWordpressPost{
            edges{
                node{
                    id
                    title
                    excerpt
                    slug
                    date(formatString: "MMMM DD, YYYY")
                }
            }
        }
    }
`