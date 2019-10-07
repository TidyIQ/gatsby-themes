import CleanersIcon from "@material-ui/icons/Face";
import PaymentIcon from "@material-ui/icons/Payment";
import OnlineBookingIcon from "@material-ui/icons/EventAvailable";
import GuaranteeIcon from "@material-ui/icons/ThumbUp";
import PricesIcon from "@material-ui/icons/CardGiftcard";
import CommunicationIcon from "@material-ui/icons/QuestionAnswer";
import { FeaturesArray } from "@tidyiq/components/dist/Features";

const featuresArray: FeaturesArray = [
  { Icon: OnlineBookingIcon, label: "Easy Online Booking" },
  { Icon: PricesIcon, label: "Fixed Price Packages" },
  { Icon: GuaranteeIcon, label: "Quality Guaranteed" },
  { Icon: CleanersIcon, label: "Experienced Cleaners" },
  { Icon: PaymentIcon, label: "Cash Free Payment" },
  { Icon: CommunicationIcon, label: "Seemless Communication" }
];

export default featuresArray;
