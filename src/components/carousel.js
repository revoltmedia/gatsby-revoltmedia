import React from "react"
import { Link } from "gatsby"
import Carousel from "react-slick"

export default ({ slides }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    return(
        // {isBrowser && (
        <div id="carousel-main">
            <Carousel {...settings}>
                {slides.map(slide => (
                    <div key="slide.id" class="carousel-content">
                        <div>
                            <div>
                                <div class="carousel-image">
                                    <img src={slide.carouselContent.carouselImage.sourceUrl} alt={slide.carouselContent.carouselImage.altText} />
                                </div>
                                <div class="carousel-text">
                                    <h3>{slide.title}</h3>
                                    <div 
                                        className="description"
                                        dangerouslySetInnerHTML={{__html: slide.content}}
                                    >
                                    </div>
                                    {(slide.carouselContent.carouselLinkUrl) && (
                                        <p class="carousel-cta">
                                            <Link to={slide.carouselContent.carouselLinkUrl} >
                                                {(slide.carouselContent.carouselLinkText) && (
                                                    <span>{slide.carouselContent.carouselLinkText}</span>
                                                )}
                                                {(!slide.carouselContent.carouselLinkText) && (
                                                    <span>More</span>
                                                )}
                                            </Link>
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
        // )}
    )
}