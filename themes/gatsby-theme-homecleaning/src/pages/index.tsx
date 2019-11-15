import React, { FC } from "react";
import { graphql, PageRendererProps } from "gatsby";
import PageLayout from "../components/PageLayout";
import HomePageFold from "../components/pages/Home/Fold";

const Home: FC<HomeProps> = ({ data }) => {
  const { pageLayoutProps } = data.getHomePage;
  return (
    <PageLayout {...pageLayoutProps}>
      <HomePageFold />
    </PageLayout>
  );
};

export default Home;

export const query = graphql`
  query HomePageQuery {
    getHomePage {
      pageLayoutProps {
        description
        title
      }
    }
  }
`;

interface HomeProps extends PageRendererProps {
  data: {
    getHomePage: {
      pageLayoutProps: {
        description: string;
        title: string;
      };
    };
  };
}
