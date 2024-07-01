import { SoftwareIntroduction, heroImg ,SoftwareDescription, servicesPagesImg} from "./assets";
import { customIcon } from "./assets/icons/customIcons";

const {headerImgDM, introImgDM, descriptionImgDM} =servicesPagesImg.DigitalMarketingImages;
const {headerImgSF, introImgSF, descriptionImgSF} =servicesPagesImg.softwareImages;
const {headerImgDesign, introImgDesign, descriptionImgDesign} =servicesPagesImg.designImages;
const {headerImgAds, introImgAds, descriptionImgAds} =servicesPagesImg.advertisingImages;
const {headerImgEV,introImgEV ,descriptionImgEV } =servicesPagesImg.eventsImages;
const {headerImgPH,introImgPH ,descriptionImgPH } =servicesPagesImg.photographyImages;




// const {headerImgSF, introImgSF, descriptionImgSF} =servicesPagesImg.softwareImages;

export const data = {
   services:{
    // software
    softwareService:{
        imgSection: { img: headerImgSF, alt: "software service" },
        introduction: {
          srcImg: introImgSF,
          alt: "",
          introductionHeader: {
            darkHeader: "Lorem ipsum dolor sit amet",
            orangeHeader: "consectetur",
          },
          introductionText:
            "Lorem ipsum dolor sit amet consectetur. Viverra tristique vitae rutrum dui aliquet sed at nunc convallis. Tellus facilisis adipiscing cras est Lorem ipsum dolor sit amet consectetur. Viverra tristique vitae rutrum dui aliquet sed at nunc convallis. Tellus facilisis adipiscing cras est Lorem ipsum dolor sit amet consectetur. Viverra tristique vitae rutrum dui aliquet sed at nunc convallis. Tellus facilisis adipiscing cras est Lorem ipsum dolor sit amet consectetur. Viverra tristique vitae rutrum dui aliquet sed at nunc convallis. Tellus facilisis adipiscing cras est.",
        },
        categories: {
          header: { darkHeader: "type of software", orangeHeader: "Services" },
          paragraph:
            "Tellus facilisis adipiscing cras est Lorem ipsum dolor sit amet consectetur. Viverra tristique vitae rutrum dui aliquet sed at nunc convallis. Tellus facilisis adipiscing cras est Lorem ipsum dolor sit amet consectetur. ",
            
            categoriesIcons : [
               { text: "mobile app", icon: customIcon.servicesIcons.software.app },
               { text: "website", icon: customIcon.servicesIcons.software.website },
               { text: "crm system", icon: customIcon.servicesIcons.software.crm },
               { text: "dashboard", icon: customIcon.servicesIcons.software.dashboard },
             ]
          },
        description: {
          srcImg: descriptionImgSF,
          descriptionHeader: {
            darkHeader: "type of software",
            orangeHeader: "Services",
          },
          descriptionText:
            "Tellus facilisis adipiscing cras est Lorem ipsum dolor sit amet consectetur. Viverra tristique vitae rutrum dui aliquet sed at nunc convallis. Tellus facilisis adipiscing cras est Lorem ipsum dolor sit amet consectetur.",
            descriptionData:[ {
              name: "Mobile",
              description:
                "Viverra tristique vitae rutrum dui aliquet sed at nunc convallis. Tellus facilisis adipiscing cras est. software responsive social media e-commerce utility app",
            },
            {
              name: "Website",
              description:
                "Viverra tristique vitae rutrum dui aliquet sed at nunc convallis. Tellus facilisis adipiscing cras est. software responsive social media e-commerce utility app",
            },
            {
              name: "CRM System",
              description:
                "Viverra tristique vitae rutrum dui aliquet sed at nunc convallis. Tellus facilisis adipiscing cras est. software responsive social media e-commerce utility app",
            },
            {
              name: "Dashboard",
              description:
                "Viverra tristique vitae rutrum dui aliquet sed at nunc convallis. Tellus facilisis adipiscing cras est. software responsive social media e-commerce utility app",
            },]
        }
    },
    // digitalMarketingService
    digitalMarketingService:{
        imgSection: { img: headerImgDM, alt: "contact us Image",headerText:"digital marketing" },
        introduction: {
          srcImg: introImgDM,
          alt: "",
          introductionHeader: {
            darkHeader: "Lorem ipsum dolor sit amet",
            orangeHeader: "consectetur",
          },
          introductionText:
            "Lorem ipsum dolor sit amet consectetur. Viverra tristique vitae rutrum dui aliquet sed at nunc convallis. Tellus facilisis adipiscing cras est Lorem ipsum dolor sit amet consectetur. Viverra tristique vitae rutrum dui aliquet sed at nunc convallis. Tellus facilisis adipiscing cras est Lorem ipsum dolor sit amet consectetur.",
        },
        categories: {
          header: { darkHeader: "loarm", orangeHeader: "loarm" },
          paragraph:
            "Tellus facilisis adipiscing cras est Lorem ipsum dolor sit amet consectetur. Viverra tristique vitae rutrum dui aliquet sed at nunc convallis. Tellus facilisis adipiscing cras est Lorem ipsum dolor sit amet consectetur. ",
            categoriesIcons : [
                { text: "social media marketing", icon: customIcon.servicesIcons.digitaMarketing.mediaMarketing },
                { text: "marketing strategy", icon: customIcon.servicesIcons.digitaMarketing.strategy },
                { text: "seo", icon: customIcon.servicesIcons.digitaMarketing.seo },
                { text: "analysis and reports", icon: customIcon.servicesIcons.digitaMarketing.analysisReport },
                { text: "create content", icon: customIcon.servicesIcons.digitaMarketing.content },
    
              ] },
        description: {
          srcImg: descriptionImgDM,
          descriptionHeader: {
            darkHeader: "digital Marketing",
            orangeHeader: "Services",
          },
          descriptionText:
            "Tellus facilisis adipiscing cras est Lorem ipsum dolor sit amet consectetur. Viverra tristique vitae rutrum dui aliquet sed at nunc convallis. Tellus facilisis adipiscing cras est Lorem ipsum dolor sit amet consectetur.",
            descriptionData:[ {
              name: "social media marketing",
              description:
                "Viverra tristique vitae rutrum dui aliquet sed at nunc convallis. Tellus facilisis adipiscing cras est.software responsive social media e-commerce utility app",
            },
            {
              name: "marketing strategy",
              description:
                "Viverra tristique vitae rutrum dui aliquet sed at nunc convallis. Tellus facilisis adipiscing cras est. software responsive social media e-commerce utility app",
            },
            {
              name: "seo",
              description:
                "Viverra tristique vitae rutrum dui aliquet sed at nunc convallis. Tellus facilisis adipiscing cras est. software responsive social media e-commerce utility app",
            },
            {
              name: "analysis and reports",
              description:
                "Viverra tristique vitae rutrum dui aliquet sed at nunc convallis. Tellus facilisis adipiscing cras est. software responsive social media e-commerce utility app",
            }, {
              name: "create content",
              description:
                "Viverra tristique vitae rutrum dui aliquet sed at nunc convallis. Tellus facilisis adipiscing cras est. software responsive social media e-commerce utility app",
            }]}
    },
    // design
    design:{
        imgSection: { img: headerImgDesign, alt: "design service",headerText:"design" },
        introduction: {
          srcImg: introImgDesign,
          alt: "",
          introductionHeader: {
            darkHeader: "Lorem ipsum dolor sit amet",
            orangeHeader: "consectetur",
          },
          introductionText:
            "Lorem ipsum dolor sit amet consectetur. Viverra tristique vitae rutrum dui aliquet sed at nunc convallis. Tellus facilisis adipiscing cras est Lorem ipsum dolor sit amet consectetur. Viverra tristique vitae rutrum dui aliquet sed at nunc convallis. Tellus facilisis adipiscing cras est Lorem ipsum dolor sit amet consectetur.",
        },
        categories: {
          header: { darkHeader: "loarm", orangeHeader: "loarm" },
          paragraph:
            "Tellus facilisis adipiscing cras est Lorem ipsum dolor sit amet consectetur. Viverra tristique vitae rutrum dui aliquet sed at nunc convallis. Tellus facilisis adipiscing cras est Lorem ipsum dolor sit amet consectetur. ",
            categoriesIcons : [
                { text: "logos", icon: customIcon.servicesIcons.design.logosIcons },
                { text: "brand identity", icon: customIcon.servicesIcons.design.brandIcons},
                { text: "printing", icon:  customIcon.servicesIcons.design.printingIcons },
                { text: "social media design", icon:  customIcon.servicesIcons.design.mediaIcons },
                { text: "motion graphic", icon:  customIcon.servicesIcons.design.motionIcons },
                { text: "infographic", icon:  customIcon.servicesIcons.design.infographicIcons },

              ]
        },
        description: {
          srcImg: descriptionImgDesign,
          descriptionHeader: {
            darkHeader: "advertising",
            orangeHeader: "Services",
          },
        
            descriptionText:
            "Tellus facilisis adipiscing cras est Lorem ipsum dolor sit amet consectetur. Viverra tristique vitae rutrum dui aliquet sed at nunc convallis. Tellus facilisis adipiscing cras est Lorem ipsum dolor sit amet consectetur.",
            descriptionData:[ {
              name: "logos",
              description:
                "Viverra tristique vitae rutrum dui aliquet sed at nunc convallis. Tellus facilisis adipiscing cras est.software responsive social media e-commerce utility app",
            },
            {
              name: "brand identity",
              description:
                "Viverra tristique vitae rutrum dui aliquet sed at nunc convallis. Tellus facilisis adipiscing cras est. software responsive social media e-commerce utility app",
            },
            {
              name: "printing",
              description:
                "Viverra tristique vitae rutrum dui aliquet sed at nunc convallis. Tellus facilisis adipiscing cras est. software responsive social media e-commerce utility app",
            },
            {
              name: "social media design",
              description:
                "Viverra tristique vitae rutrum dui aliquet sed at nunc convallis. Tellus facilisis adipiscing cras est. software responsive social media e-commerce utility app",
            }, {
              name: "motion graphic",
              description:
                "Viverra tristique vitae rutrum dui aliquet sed at nunc convallis. Tellus facilisis adipiscing cras est. software responsive social media e-commerce utility app",
            }, {
              name: "info graphic",
              description:
                "Viverra tristique vitae rutrum dui aliquet sed at nunc convallis. Tellus facilisis adipiscing cras est. software responsive social media e-commerce utility app",
            }]
          },
     
    },
    // advertising
    advertising:{
        imgSection: { img: headerImgAds, alt: "contact us Image",headerText:"Advertising" },
        introduction: {
          srcImg: introImgAds,
          alt: "",
          introductionHeader: {
            darkHeader: "Lorem ipsum dolor sit amet",
            orangeHeader: "consectetur",
          },
          introductionText:
            "Lorem ipsum dolor sit amet consectetur. Viverra tristique vitae rutrum dui aliquet sed at nunc convallis. Tellus facilisis adipiscing cras est Lorem ipsum dolor sit amet consectetur. Viverra tristique vitae rutrum dui aliquet sed at nunc convallis. Tellus facilisis adipiscing cras est Lorem ipsum dolor sit amet consectetur.",
        },
        categories: {
          header: { darkHeader: "advertising", orangeHeader: "services" },
          paragraph:
            "Tellus facilisis adipiscing cras est Lorem ipsum dolor sit amet consectetur. Viverra tristique vitae rutrum dui aliquet sed at nunc convallis. Tellus facilisis adipiscing cras est Lorem ipsum dolor sit amet consectetur. ",
            categoriesIcons : [
              { text: "outdoor", icon: customIcon.servicesIcons.adsIcons.indoor },
              { text: "indoor", icon: customIcon.servicesIcons.adsIcons.indoor },
              
            ],},
     
        description: {
          srcImg: descriptionImgAds,
          descriptionHeader: {
            darkHeader: "type of software",
            orangeHeader: "Services",
          },
          descriptionText:
            "Tellus facilisis adipiscing cras est Lorem ipsum dolor sit amet consectetur. Viverra tristique vitae rutrum dui aliquet sed at nunc convallis. Tellus facilisis adipiscing cras est Lorem ipsum dolor sit amet consectetur.",
            descriptionData:[ {
              name: "outdoor",
              description:
                "Viverra tristique vitae rutrum dui aliquet sed at nunc convallis. Tellus facilisis adipiscing cras est.software responsive social media e-commerce utility app",
            },
            {
              name: "indoor",
              description:
                "Viverra tristique vitae rutrum dui aliquet sed at nunc convallis. Tellus facilisis adipiscing cras est. software responsive social media e-commerce utility app",
            },
          ]},

        
    },
    // events
    events:{
        imgSection: { img: headerImgEV, alt: "events service",headerText:"events" },
        introduction: {
          srcImg: introImgEV,
          alt: "",
          introductionHeader: {
            darkHeader: "Lorem ipsum dolor sit amet",
            orangeHeader: "consectetur",
          },
          introductionText:
            "Lorem ipsum dolor sit amet consectetur. Viverra tristique vitae rutrum dui aliquet sed at nunc convallis. Tellus facilisis adipiscing cras est Lorem ipsum dolor sit amet consectetur. Viverra tristique vitae rutrum dui aliquet sed at nunc convallis. Tellus facilisis adipiscing cras est Lorem ipsum dolor sit amet consectetur.",
        },
        
        description: {
          srcImg: descriptionImgEV,
          descriptionHeader: {
            darkHeader: "events ",
            orangeHeader: "services",
          },
          descriptionText:
            "Tellus facilisis adipiscing cras est Lorem ipsum dolor sit amet consectetur. Viverra tristique vitae rutrum dui aliquet sed at nunc convallis. Tellus facilisis adipiscing cras est Lorem ipsum dolor sit amet consectetur.",
        },
    },
    // EVotography
    photography:{
        imgSection: { img: headerImgPH, alt: "contact us Image",headerText:"digital marketing" },
        introduction: {
          srcImg: introImgPH,
          alt: "",
          introductionHeader: {
            darkHeader: "Lorem ipsum dolor sit amet",
            orangeHeader: "consectetur",
          },
          introductionText:
            "Lorem ipsum dolor sit amet consectetur. Viverra tristique vitae rutrum dui aliquet sed at nunc convallis. Tellus facilisis adipiscing cras est Lorem ipsum dolor sit amet consectetur. Viverra tristique vitae rutrum dui aliquet sed at nunc convallis. Tellus facilisis adipiscing cras est Lorem ipsum dolor sit amet consectetur.",
        },
        categories: {
          header: { darkHeader: "loarm", orangeHeader: "loarm" },
          paragraph:
            "Tellus facilisis adipiscing cras est Lorem ipsum dolor sit amet consectetur. Viverra tristique vitae rutrum dui aliquet sed at nunc convallis. Tellus facilisis adipiscing cras est Lorem ipsum dolor sit amet consectetur. ",
        },
        description: {
          srcImg: descriptionImgPH,
          descriptionHeader: {
            darkHeader: "type of software",
            orangeHeader: "Services",
          },
          descriptionText:
            "Tellus facilisis adipiscing cras est Lorem ipsum dolor sit amet consectetur. Viverra tristique vitae rutrum dui aliquet sed at nunc convallis. Tellus facilisis adipiscing cras est Lorem ipsum dolor sit amet consectetur.",
        },
    }
  
  
   }
  };