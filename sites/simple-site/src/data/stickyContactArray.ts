import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Mail";
// import SMSIcon from "@material-ui/icons/Chat";
import { ContactArray } from "@tidyiq/components/dist/StickyBar";

const stickyContactArray: ContactArray = [
  { href: "tel:+61756465290", Icon: PhoneIcon, label: "07 5646 5290" },
  // { href: "sms:+61404708587", Icon: SMSIcon, label: "0404 708 587" },
  {
    href: "mailto:support@goldcoastmaids.com.au",
    Icon: EmailIcon,
    label: "support@goldcoastmaids.com.au"
  }
];

export default stickyContactArray;
