import business from "./business";
import palette from "./palette";
import typography from "./typography";
import logo from "./logo";
import operatingHours from "./operatingHours";

const settings = {
  label: "Settings",
  name: "settings",
  delete: false,
  editor: {
    preview: false
  },
  files: [business, palette, typography, logo, operatingHours]
};

export default settings;
