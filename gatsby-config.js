/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Revolt Media`,
    logoUrl: `/assets/images/revoltmedia-white.svg`,
    navMain:[
      {
        name:'Request Proposal',
        link:'/request-proposal',
        external: false
      },
      {
        name:'(530) 454-5674',
        link:'tel:+15304545674',
        external: true
      },
    ],
    slidesMain:[
      {
        title:'Standards Compliant HTML5 for Any Platform',
        link:'',
        iconUrl:'/assets/images/carousel-main/icon-white-html5.png',
        iconAlt:'HTML5',
        description:'Functional, compatible, for the devices your demographic use. Theming for the platform of your choice, WordPress, Drupal and more.',
      },
      {
        title:'Style to Your Specifications',
        link:'',
        iconUrl:'/assets/images/carousel-main/icon-white-css.png',
        iconAlt:'CSS',
        description:'The latest CSS technology. Whether designed from scratch or developed from your brand. Styling techiques to exemplify and extend your look.',
      },
      {
        title:'From tiny to tall',
        link:'',
        iconUrl:'/assets/images/carousel-main/icon-white-mobile.png',
        iconAlt:'Responsive',
        description:'Responsive technology to stay sharp and useable on more device sizes.',
      },
      {
        title:'Semantic = Simplicity',
        link:'',
        iconUrl:'/assets/images/carousel-main/icon-white-semantic.png',
        iconAlt:'Semantic',
        description:'Simple Code, infinite design extendability. A clean structure that even a robot will love.',
      },
      {
        title:'WordPress, Drupal and More',
        link:'',
        iconUrl:'/assets/images/carousel-main/icon-white-wpdrupal.png',
        iconAlt:'WordPress',
        description:'Custom WordPress, Drupal, and more themes from design to build to launch. Functionality for your specific needs.',
      },
      {
        title:'Get an Estimate',
        link:'/contact',
        iconUrl:'/assets/images/carousel-main/icon-white-wpdrupal.png',
        iconAlt:'Contact',
        description:'Get in touch.',
      },
    ],
    caseStudiesMain:[
      {
        clientName:'Revision Brewing',
        gallery:[
          {
            imgUrl:'',
            imgAlt:'',
          }
        ],
        description:'Lorem ipsom.',
        linkUrl:'https://revisionbrewing.com',
        featured: true,
      },
      {
        clientName:'Revolt Media',
        gallery:[
          {
            imgUrl:'',
            imgAlt:'',
          }
        ],
        description:'Lorem ipsom.',
        linkUrl:'https://www.revoltmedia.com',
        featured: false,
      },
    ]
  },
  plugins: [
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        precision: 8,
      },
    },
  ],
}