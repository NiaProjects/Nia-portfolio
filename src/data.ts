import { SoftwareIntroduction, heroImg ,SoftwareDescription, servicesPagesImg} from "./assets";
import { customIcon } from "./assets/icons/customIcons";

const {headerImgDM, introImgDM, descriptionImgDM} =servicesPagesImg.DigitalMarketingImages;
const {headerImgSF, introImgSF, descriptionImgSF} =servicesPagesImg.softwareImages;
const {headerImgDesign, introImgDesign, descriptionImgDesign} =servicesPagesImg.designImages;
const {headerImgAds, introImgAds, descriptionImgAds} =servicesPagesImg.advertisingImages;
// const {headerImgSF, introImgSF, descriptionImgSF} =servicesPagesImg.eventsImages;
// const {headerImgSF, introImgSF, descriptionImgSF} =servicesPagesImg.photography;




// const {headerImgSF, introImgSF, descriptionImgSF} =servicesPagesImg.softwareImages;

export const data = {
   services:{
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
          header: { darkHeader: "loarm", orangeHeader: "loarm" },
          paragraph:
            "Tellus facilisis adipiscing cras est Lorem ipsum dolor sit amet consectetur. Viverra tristique vitae rutrum dui aliquet sed at nunc convallis. Tellus facilisis adipiscing cras est Lorem ipsum dolor sit amet consectetur. ",
        },
        description: {
          srcImg: descriptionImgSF,
          descriptionHeader: {
            darkHeader: "type of software",
            orangeHeader: "Services",
          },
          descriptionText:
            "Tellus facilisis adipiscing cras est Lorem ipsum dolor sit amet consectetur. Viverra tristique vitae rutrum dui aliquet sed at nunc convallis. Tellus facilisis adipiscing cras est Lorem ipsum dolor sit amet consectetur.",
        }, categoriesIcons : [
            { text: "mobile app", icon: customIcon.systemIcon },
            { text: "website", icon: customIcon.systemIcon },
            { text: "crm system", icon: customIcon.systemIcon },
            { text: "dashboard", icon: customIcon.systemIcon },
          ]
    },
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
                { text: "social media marketing", icon: customIcon.systemIcon },
                { text: "marketing strategy", icon: customIcon.systemIcon },
                { text: "seo", icon: customIcon.systemIcon },
                { text: "analysis and reports", icon: customIcon.systemIcon },
                { text: "create content", icon: customIcon.systemIcon },
    
              ] },
        description: {
          srcImg: descriptionImgDM,
          descriptionHeader: {
            darkHeader: "digital Marketing",
            orangeHeader: "Services",
          },
          descriptionText:
            "Tellus facilisis adipiscing cras est Lorem ipsum dolor sit amet consectetur. Viverra tristique vitae rutrum dui aliquet sed at nunc convallis. Tellus facilisis adipiscing cras est Lorem ipsum dolor sit amet consectetur.",
        }
    },
    // designService:{
    //     imgSection: { img: headerImgDM, alt: "contact us Image",headerText:"digital marketing" },
    //     introduction: {
    //       srcImg: introImgDM,
    //       alt: "",
    //       introductionHeader: {
    //         darkHeader: "Lorem ipsum dolor sit amet",
    //         orangeHeader: "consectetur",
    //       },
    //       introductionText:
    //         "Lorem ipsum dolor sit amet consectetur. Viverra tristique vitae rutrum dui aliquet sed at nunc convallis. Tellus facilisis adipiscing cras est Lorem ipsum dolor sit amet consectetur. Viverra tristique vitae rutrum dui aliquet sed at nunc convallis. Tellus facilisis adipiscing cras est Lorem ipsum dolor sit amet consectetur.",
    //     },
    //     categories: {
    //       header: { darkHeader: "loarm", orangeHeader: "loarm" },
    //       paragraph:
    //         "Tellus facilisis adipiscing cras est Lorem ipsum dolor sit amet consectetur. Viverra tristique vitae rutrum dui aliquet sed at nunc convallis. Tellus facilisis adipiscing cras est Lorem ipsum dolor sit amet consectetur. ",
    //     },
    //     description: {
    //       srcImg: descriptionImgDM,
    //       descriptionHeader: {
    //         darkHeader: "type of Design",
    //         orangeHeader: "Services",
    //       },
    //       descriptionText:
    //         "Tellus facilisis adipiscing cras est Lorem ipsum dolor sit amet consectetur. Viverra tristique vitae rutrum dui aliquet sed at nunc convallis. Tellus facilisis adipiscing cras est Lorem ipsum dolor sit amet consectetur.",
    //     },
    // },
    design:{
        imgSection: { img: headerImgDesign, alt: "contact us Image",headerText:"digital marketing" },
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
                { text: "social media marketing", icon: customIcon.systemIcon },
                { text: "marketing strategy", icon: customIcon.systemIcon },
                { text: "seo", icon: customIcon.systemIcon },
                { text: "analysis and reports", icon: customIcon.systemIcon },
                { text: "create content", icon: customIcon.systemIcon },
    
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
        },
    },
    advertising:{
        imgSection: { img: headerImgAds, alt: "contact us Image",headerText:"digital marketing" },
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
          header: { darkHeader: "loarm", orangeHeader: "loarm" },
          paragraph:
            "Tellus facilisis adipiscing cras est Lorem ipsum dolor sit amet consectetur. Viverra tristique vitae rutrum dui aliquet sed at nunc convallis. Tellus facilisis adipiscing cras est Lorem ipsum dolor sit amet consectetur. ",
        },
        description: {
          srcImg: descriptionImgAds,
          descriptionHeader: {
            darkHeader: "type of software",
            orangeHeader: "Services",
          },
          descriptionText:
            "Tellus facilisis adipiscing cras est Lorem ipsum dolor sit amet consectetur. Viverra tristique vitae rutrum dui aliquet sed at nunc convallis. Tellus facilisis adipiscing cras est Lorem ipsum dolor sit amet consectetur.",
        },
    },
    events:{
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
        },
        description: {
          srcImg: descriptionImgDM,
          descriptionHeader: {
            darkHeader: "type of software",
            orangeHeader: "Services",
          },
          descriptionText:
            "Tellus facilisis adipiscing cras est Lorem ipsum dolor sit amet consectetur. Viverra tristique vitae rutrum dui aliquet sed at nunc convallis. Tellus facilisis adipiscing cras est Lorem ipsum dolor sit amet consectetur.",
        },
    },
    photography:{
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
        },
        description: {
          srcImg: descriptionImgDM,
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