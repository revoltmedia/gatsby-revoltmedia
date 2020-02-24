import React from "react"
import { Link } from "gatsby"

export default ({ nav }) => {
    nav.map(link => {
        link.url = link.url.replace('http://localhost:9098/', '/') 
        
        if( link.url.startsWith('/')){
            link.external = false
        } else {
            link.external = true
        }
    })
    return (
    <ul>
        {nav.map(link => (
        <li
            key={link.id}
        >   
            {link.external && (
                <a href={link.url}>
                    {link.label}
                </a>
            )}
            {!link.external && (
                <Link to={link.url}>
                    {link.label}
                </Link>
            )}
        </li>
        ))}
    </ul>
    )
}
