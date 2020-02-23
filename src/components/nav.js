import React from "react"
import { Link } from "gatsby"

export default ({ nav }) => (
    <ul>
        {nav.map(link => (
        <li
            key={link.name}
        >
            {(link.external) && (
                <a href={link.link}>
                    {link.name}
                </a>
            )}
            {(!link.external) && (
                <Link to={link.link}>
                    {link.name}
                </Link>
            )}
        </li>
        ))}
    </ul>
)
