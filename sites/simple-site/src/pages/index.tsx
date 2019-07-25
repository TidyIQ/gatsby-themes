import React, { FC, Fragment } from "react";
import Head from "@tidyiq/gatsby-theme-tidyiq/src/Head";
import SignInForm from "@tidyiq/gatsby-theme-tidyiq/src/SignInForm";
import { InputStylingProps } from "@tidyiq/gatsby-theme-tidyiq/src/Input";
import Button, { ButtonProps } from "@material-ui/core/Button";
import { useSnackbar } from "@tidyiq/gatsby-theme-tidyiq/src";

const fieldStyles: InputStylingProps = {
  color: "default",
  margin: "dense",
  variant: "outlined",
  fullWidth: true
};

const Index: FC = () => {
  const { enqueueSnackbar } = useSnackbar();
  const handleClick: ButtonProps["onClick"] = () => {
    enqueueSnackbar("Yay it works", {
      variant: "success",
      persist: true
    });
  };
  return (
    <Fragment>
      <Head title="Home" description="Test description" />
      <div style={{ padding: "32px" }}>
        <SignInForm fieldStyles={fieldStyles} />
        <Button onClick={handleClick}>Open snackbar</Button>
      </div>
    </Fragment>
  );
};

export default Index;
