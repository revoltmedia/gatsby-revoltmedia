import React from "react"
import { Link } from "gatsby"
import Carousel from "react-slick"
import { isBrowser } from "../services/browser"

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
                    <div>
                        <img src={slide.iconUrl} alt={slide.iconAlt} />
                        <h3>{slide.title}</h3>
                        <div className="description">
                            {slide.description}
                        </div>
                        {(slide.link) && (
                            <Link to={slide.link}>
                                More
                            </Link>
                        )}

                    </div>
                ))}
            </Carousel>
        </div>
        // )}
    )
}