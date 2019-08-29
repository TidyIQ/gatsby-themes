import React, { FC } from "react";
import Head from "@tidyiq/gatsby-theme-tidyiq/src/Head";
import Navbar from "@tidyiq/components/dist/Navbar";
import { PageRendererProps, Link } from "gatsby";
import { NavData } from "@tidyiq/components/dist/Navbar/NavLink";
import Container from "@material-ui/core/Container";
import Scrim from "@tidyiq/components/dist/Scrim";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Form, {
  FormData,
  FormComponentProps
} from "@tidyiq/components/dist/Form";
import * as yup from "yup";
import Input from "@tidyiq/components/dist/Input";
import AboutIcon from "@material-ui/icons/Person";
import Logo from "../components/Logo";

const navData: NavData[] = [
  { href: "/about", Icon: AboutIcon, label: "About" },
  { href: "/services", Icon: AboutIcon, label: "Services" },
  { href: "/reviews", Icon: AboutIcon, label: "Reviews" },
  { href: "/faq", Icon: AboutIcon, label: "FAQs" },
  { href: "/contact", Icon: AboutIcon, label: "Contact" }
];

const useStyles = makeStyles(theme => ({
  scrim: {
    background:
      "url('homepage-hero-woman-relaxing-1920.jpg') no-repeat 0 center/cover",
    paddingBottom: theme.spacing(36)
  },
  title: {
    paddingBottom: theme.spacing(3),
    textShadow: theme.textShadow
  },
  subtitle: {
    textShadow: theme.textShadow,
    paddingBottom: theme.spacing(5)
  }
}));

interface CreateGatsbyLink {
  (to: string): React.ForwardRefExoticComponent<
    React.RefAttributes<HTMLAnchorElement>
  >;
}

const createGatsbyLink: CreateGatsbyLink = to => {
  const createLink = React.forwardRef<HTMLAnchorElement>((props, ref) => (
    <Link innerRef={ref as any} to={to} {...props} />
  ));
  createLink.displayName = "Link";
  return createLink;
};

const formData: FormData = {
  name: {
    id: "name",
    label: "Name",
    validationSchema: yup.string().email()
  }
};

const SignInForm: FC<FormComponentProps> = () => {
  return <Input fieldData={formData.name} variant="outlined" />;
};

const Index: FC<PageRendererProps> = ({ location }) => {
  const classes = useStyles({});
  return (
    <>
      <Head title="Home" description="Test description">
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans|Oswald|Montserrat|Quicksand:400,500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Scrim className={classes.scrim} color="#ffffff" component="section">
        <Navbar Logo={Logo} navData={navData} pathName={location.pathname} />
        <Container
          maxWidth="lg"
          style={{ paddingTop: 80, textAlign: "center" }}
        >
          <Typography align="center" className={classes.title} variant="h1">
            That Clean Home Feeling!
          </Typography>
          <Typography
            align="center"
            className={classes.subtitle}
            variant="h4"
            component="p"
          >
            You click. We clean. It&apos;s that simple.
          </Typography>
          <Button
            color="secondary"
            component={createGatsbyLink("/book/")}
            size="medium"
            variant="contained"
          >
            Get an instant quote
          </Button>
        </Container>
      </Scrim>
      <section>
        <Container maxWidth="lg">
          <Form formData={formData} component={SignInForm} />
        </Container>
      </section>
    </>
  );
};

export default Index;
