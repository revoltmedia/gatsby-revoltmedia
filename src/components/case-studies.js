import React from "react"
import { Link } from "gatsby"

export default ({ caseStudies }) => {
    return(
        <div id="case-studies-main">
            {caseStudies.map(caseStudy => (
                <div>
                    <h3>{caseStudy.clientName}</h3>
                    <div className="description">
                        {caseStudy.description}
                    </div>
                    {(caseStudy.linkUrl) && (
                        <Link to={caseStudy.linkUrl}>
                            More
                        </Link>
                    )}

                </div>
            ))}
        </div>
    )
}