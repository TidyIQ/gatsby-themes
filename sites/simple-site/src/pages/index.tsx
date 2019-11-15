import React, { FC } from "react";
import { PageRendererProps } from "gatsby";
import StickyBar from "@tidyiq/components/dist/StickyBar";
import Footer from "@tidyiq/components/dist/Footer";
import { Card, CardContent, Hidden } from "@material-ui/core";
import CommonQuestions from "@tidyiq/components/dist/CommonQuestions";
import Features from "@tidyiq/components/dist/Features";
import CTADivider from "@tidyiq/components/dist/CTADivider";
import Services from "@tidyiq/components/dist/Services";
import Intro from "@tidyiq/components/dist/Intro";
import Benefits from "@tidyiq/components/dist/Benefits";
import Guarantee from "@tidyiq/components/dist/Guarantee";
import Tally from "@tidyiq/components/dist/Tally";
import Reviews from "@tidyiq/components/dist/Reviews";
import Fold from "@tidyiq/components/dist/Fold";
import PreBookingForm from "@tidyiq/components/dist/PreBookingForm";
import Container from "@tidyiq/components/dist/Container";
import Typography from "@material-ui/core/Typography";
import HighlightedReview from "@tidyiq/components/dist/Fold/HighlightedReview";
import Logo from "../components/Logo";
import Head from "../components/Head";
import navArray from "../data/navArray";
import stickyContactArray from "../data/stickyContactArray";
import socialArray from "../data/socialArray";
import legalLinksArray from "../data/legalLinksArray";
import featuresArray from "../data/featuresArray";
import benefitsArray from "../data/benefitsArray";
import servicesArray from "../data/servicesArray";
import tallyArray from "../data/tallyArray";
import reviewsArray from "../data/reviewsArray";
import commonQuestionsArray from "../data/commonQuestionsArray";
import officeHoursArray from "../data/officeHoursArray";
import cleaningHoursArray from "../data/cleaningHoursArray";

const Homepage: FC<PageRendererProps> = ({ location: { pathname } }) => {
  return (
    <>
      <Head title="Home" description="Test description" />

      <StickyBar contactArray={stickyContactArray} socialArray={socialArray} />

      <Fold Logo={Logo} navArray={navArray} pathname={pathname} />

      <Hidden mdUp>
        <Container style={{ paddingTop: 32, paddingBottom: 32 }}>
          <Typography
            align="center"
            component="p"
            variant="h4"
            style={{ paddingBottom: 24 }}
          >
            You click. We clean. It&apos;s that simple.
          </Typography>
          <Card raised>
            <CardContent>
              <PreBookingForm />
            </CardContent>
          </Card>
          <Hidden smUp>
            <HighlightedReview />
          </Hidden>
        </Container>
      </Hidden>

      <Hidden xsDown>
        <Features featuresArray={featuresArray} />
      </Hidden>

      <Intro Logo={Logo} />

      <Benefits
        benefitsArray={benefitsArray}
        title="You're Going to Love Us"
        subtitle="
          Lorem ipsum dolor sit amet sed do eiusmod tempor"
      />

      <CTADivider />

      <Services servicesArray={servicesArray} />

      <Guarantee />

      <Reviews reviewsArray={reviewsArray} />

      <Hidden xsDown>
        <Tally tallyArray={tallyArray} />
      </Hidden>

      <CommonQuestions faqArray={commonQuestionsArray} />

      <Footer
        cleaningHoursArray={cleaningHoursArray}
        contactArray={stickyContactArray}
        Logo={Logo}
        officeHoursArray={officeHoursArray}
        otherLinksArray={legalLinksArray}
        socialArray={socialArray}
      />
    </>
  );
};

export default Homepage;
