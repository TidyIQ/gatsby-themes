/* eslint-disable @typescript-eslint/no-var-requires, global-require, @typescript-eslint/camelcase */
import CMS from "netlify-cms-app";
import { settings, socialMedia, pages, components } from "./collections";

/** Netlify CMS config */
const config = {
  load_config_file: false,
  media_folder: "static/img",
  public_folder: "img",
  collections: [settings, socialMedia, pages, components]
};

/** Change to file system backend for development  */
if (process.env.NODE_ENV === "development") {
  // eslint-disable-next-line import/no-extraneous-dependencies
  const FileSystemBackend = require("netlify-cms-backend-fs");
  config.backend = {
    name: "file-system",
    api_root: "/api"
  };
  config.display_url = "http://localhost:8000";
  CMS.registerBackend("file-system", FileSystemBackend);
} else {
  config.backend = {
    backend: {
      name: "test-repo"
    }
  };
}

CMS.init({ config });
