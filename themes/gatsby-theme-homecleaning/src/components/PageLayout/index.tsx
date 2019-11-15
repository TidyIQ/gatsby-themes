import React, { FC } from "react";
import { makeStyles } from "@tidyiq/sections/dist/styles";
import Footer from "../Footer";
import Head, { HeadProps } from "../Head";
import StickyBar from "../StickyBar";

const useStyles = makeStyles({
  main: {
    marginTop: 48
  }
});

const PageLayout: FC<PageLayoutProps> = ({ children, description, title }) => {
  const classes = useStyles();
  return (
    <>
      <Head title={title} description={description} />
      <StickyBar />
      <main className={classes.main}>{children}</main>
      <Footer />
    </>
  );
};

export default PageLayout;

interface PageLayoutProps {
  description: HeadProps["description"];
  title: HeadProps["title"];
}
