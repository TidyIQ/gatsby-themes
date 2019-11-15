/* eslint-disable @typescript-eslint/no-var-requires, global-require, import/no-extraneous-dependencies  */

import fs from "fs";
import appProviderComponentSchema from "./src/cms/schema/appProviderComponent";
import footerComponentSchema from "./src/cms/schema/footerComponent";
import getAppProviderComponentResolver from "./src/cms/resolvers/getAppProviderComponent";
import getFooterComponentResolver from "./src/cms/resolvers/getFooterComponent";
import getHeadComponentResolver from "./src/cms/resolvers/getHeadComponent";
import getHomePageResolver from "./src/cms/resolvers/getHomePage";
import getHomePageFoldResolver from "./src/cms/resolvers/getHomePageFold";
import getLogoTextComponentResolver from "./src/cms/resolvers/getLogoTextComponent";
import getNavBarComponentResolver from "./src/cms/resolvers/getNavBarComponent";
import getStickyBarComponentResolver from "./src/cms/resolvers/getStickyBarComponent";
import headComponentSchema from "./src/cms/schema/headComponent";
import homePageSchema from "./src/cms/schema/homePage";
import homePageFoldSchema from "./src/cms/schema/homePageFold";
import logoTextComponentSchema from "./src/cms/schema/logoTextComponent";
import navBarComponentSchema from "./src/cms/schema/navBarComponent";
import pageLayoutComponentSchema from "./src/cms/schema/pageLayoutComponent";
import stickyBarComponentSchema from "./src/cms/schema/stickyBarComponent";
import socialMediaYamlSchema from "./src/cms/schema/socialMediaYaml";
import typographyYamlSchema from "./src/cms/schema/typographyYaml";

// Make sure required files and folders exist
exports.onPreBootstrap = ({ reporter }) => {
  const contentPath = "data";
  const staticPath = "static";
  const mediaPath = "static/img";

  if (!fs.existsSync(contentPath)) {
    reporter.info(`creating the ${contentPath} directory`);
    fs.mkdirSync(contentPath);
  }

  if (!fs.existsSync(staticPath)) {
    reporter.info(`creating the ${staticPath} directory`);
    fs.mkdirSync(staticPath);
    fs.mkdirSync(mediaPath);
  }

  if (!fs.existsSync(mediaPath)) {
    reporter.info(`creating the ${mediaPath} directory`);
    fs.mkdirSync(mediaPath);
  }

  // const requiredYamlFiles = ["business", "homepage"];

  // requiredYamlFiles.forEach(file => {
  //   if (!fs.existsSync(`${contentPath}/${file}.yaml`)) {
  //     reporter.info(`creating the ${file} file`);
  //     fs.writeFileSync(`${contentPath}/${file}.yaml`, "");
  //   }
  // });
};

// Load middleware for dev environment
exports.onCreateDevServer = ({ app }) => {
  const fsMiddlewareAPI = require("netlify-cms-backend-fs/dist/fs");
  fsMiddlewareAPI(app);
};

/**
 * Create GraphQL schema definitions
 */
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  createTypes(appProviderComponentSchema);
  createTypes(footerComponentSchema);
  createTypes(headComponentSchema);
  createTypes(homePageSchema);
  createTypes(homePageFoldSchema);
  createTypes(logoTextComponentSchema);
  createTypes(navBarComponentSchema);
  createTypes(pageLayoutComponentSchema);
  createTypes(socialMediaYamlSchema);
  createTypes(stickyBarComponentSchema);
  createTypes(typographyYamlSchema);
};

/**
 * Create GraphQL resolvers
 */
exports.createResolvers = ({ createResolvers }) => {
  createResolvers(getAppProviderComponentResolver);
  createResolvers(getFooterComponentResolver);
  createResolvers(getHeadComponentResolver);
  createResolvers(getHomePageResolver);
  createResolvers(getHomePageFoldResolver);
  createResolvers(getLogoTextComponentResolver);
  createResolvers(getNavBarComponentResolver);
  createResolvers(getStickyBarComponentResolver);
};
