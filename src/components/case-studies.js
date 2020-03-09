import React from "react"

export default ({ caseStudies }) => {
    return (
        <section id="featured-case-study">
            <header>
                <h2>Featured Case Study</h2>
            </header>
            <div>
                {caseStudies.map(caseStudy => (
                    <div key={caseStudy.caseStudyId}>
                        {/* {caseStudy.caseStudyContent.caseStudyFeatured && ( */}
                            <div id="case-studies-main">
                                <div>
                                    {caseStudy.caseStudyContent.caseStudyLogo && (
                                        caseStudy.caseStudyContent.caseStudyLogo.mediaDetails.sizes.filter(size => size.name == 'thumbnail').map(image => (
                                            <img 
                                                src={image.sourceUrl} 
                                                alt={caseStudy.caseStudyContent.caseStudyLogo.altText} 
                                            /> 
                                        )
                                    ))}

                                    {caseStudy.caseStudyContent.caseStudyGallery[0] && (
                                        caseStudy.caseStudyContent.caseStudyGallery[0].mediaDetails.sizes.filter(size => size.name == 'large').map(image => (
                                            <img 
                                                src={image.sourceUrl} 
                                                alt={caseStudy.caseStudyContent.caseStudyGallery[0].altText}
                                            />
                                        )
                                    ))}

                                    <h3>{caseStudy.title}</h3>
                                    
                                    <div 
                                        className="description"
                                        dangerouslySetInnerHTML={{__html: caseStudy.content}}
                                    />
                                </div>
                            </div>
                        {/* )} */}
                    </div>
                ))}
            </div>
        </section>
    )
}