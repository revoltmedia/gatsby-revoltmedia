import React from "react"

export default ({ caseStudies }) => {
    return (
        <section id="featured-case-study">
            <header>
                <h2>Featured Case Study</h2>
            </header>
            {caseStudies.map(caseStudy => (
                <div>
                    {caseStudy.caseStudyContent.caseStudyFeatured && (
                        <div id="case-studies-main">
                            <div>
                                <h3>{caseStudy.title}</h3>
                                <div 
                                    className="description"
                                    dangerouslySetInnerHTML={{__html: caseStudy.content}}
                                />
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </section>
    )
}