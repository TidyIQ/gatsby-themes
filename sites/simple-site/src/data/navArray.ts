import AboutIcon from "@material-ui/icons/Person";
import { NavData } from "@tidyiq/components/dist/Navbar/NavLink";

const navArray: NavData[] = [
  { href: "/services", Icon: AboutIcon, label: "Services" },
  { href: "/pricing", Icon: AboutIcon, label: "Pricing" },
  { href: "/", Icon: AboutIcon, label: "Reviews" },
  { href: "/faqs", Icon: AboutIcon, label: "FAQs" },
  { href: "/about", Icon: AboutIcon, label: "About" },
  { href: "/contact", Icon: AboutIcon, label: "Contact" }
];

export default navArray;
