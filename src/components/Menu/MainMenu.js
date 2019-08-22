import React from "react"
import Link from "gatsby-link"
import { graphql, useStaticQuery } from 'gatsby'

const MainMenu = () => {

const { data }  = useStaticQuery(
        graphql`
            query MenuQuery {
                allWordpressWpApiMenusMenusItems(filter: {
                    name:{
                    eq: "Main menu"
                    }
                    }){
                    edges{
                        node{
                            id
                            name
                            items{
                                title
                                url
                                object_slug
                            }
                        }
                    }
                }
            }
        `
    )
    console.log(data)
    const items = data.allWordpressWpApiMenusMenusItems.edges.node.items
    console.log(items)

    return (
        <div>
            <h1>Main Menu</h1>
            <ul>
                {items.map((item) =>
                    <li key={item.object_slug}>
                        <Link to={item.url}>
                            {item.title}
                        </Link>
                    </li>
                )}
            </ul>
        </div>
    )
}


export default MainMenu

