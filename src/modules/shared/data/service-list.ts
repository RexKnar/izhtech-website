import Analytics from "../../../icons/lineal/Analytics";
import Browser from "../../../icons/lineal/Browser";
import CloudComputing from "../../../icons/lineal/CloudComputing";
import Design from "../../../icons/lineal/Design";
import Loyalty from "../../../icons/lineal/Loyalty";
import Megaphone from "../../../icons/lineal/Megaphone";
import Shield from "../../../icons/lineal/Shield";
import Telephone from "../../../icons/lineal/Telephone";
import { LinkType } from "../types/demo-1";
import color from "../utils/color";

// used in the services-9 block
export const serviceList1 = [
    {
      id: 1,
      Icon: Telephone,
      color: color.yellow,
      title: '24/7 Support',
      cardColor: 'bg-pale-yellow',
      columnClass: 'col-md-5 offset-md-1 align-self-end',
      description: 'Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta.'
    },
    {
      id: 2,
      Icon: Shield,
      color: color.red,
      title: 'Secure Payments',
      cardColor: 'bg-pale-red',
      columnClass: 'col-md-6 align-self-end',
      description: 'Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta.'
    },
    {
      id: 3,
      color: color.leaf,
      Icon: CloudComputing,
      title: 'Daily Updates',
      cardColor: 'bg-pale-leaf',
      columnClass: 'col-md-5',
      description: 'Nulla vitae elit libero, a pharetra augue.'
    },
    {
      id: 4,
      Icon: Analytics,
      color: color.primary,
      title: 'Market Research',
      cardColor: 'bg-pale-primary',
      columnClass: 'col-md-6 align-self-start',
      description: 'Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget.'
    }
  ];



  export const serviceList = [
    {
      id: 4,
      link: '#',
      Icon: Megaphone,
      color: color.primary,
      columnClass: 'col-md-5 offset-md-1 align-self-end',
      cardColor: 'bg-pale-primary',
      linkType: LinkType.blue,
      title: 'Digital Marketing',
      linkText: 'Know More',
      description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.`
    },
    {
      id: 1,
      link: '#',
      Icon: Design,
      color: color.leaf,
      columnClass: 'col-md-6 align-self-end',
      cardColor: 'bg-pale-leaf',
      title: 'UI/UX Development',
      linkText: 'Know More',
      linkType: LinkType.yellow,
      description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.`
    },
    {
      id: 2,
      link: '#',
      Icon: Browser,
      color: color.red,
      columnClass: 'col-md-5',
      cardColor: 'bg-pale-red',
      title: 'Web/App Development',
      linkText: 'Know More',
      linkType: LinkType.red,
      description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.`
    },
    {
      id: 3,
      link: '#',
      Icon: Loyalty,
      color: color.yellow,
      columnClass: 'col-md-6 align-self-start',
      cardColor: 'bg-pale-yellow',
      linkType: LinkType.green,
      title: 'Branding ',
      linkText: 'Know More',
      description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.`
    },
    
  ];