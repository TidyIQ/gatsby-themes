# README under development

## Basic usage

First, install `gatsby` and the theme that you want to use. This example will be using the base theme, `gatsby-theme-tidyiq`.

```bash
$ npm install gatsby gatsby-theme-tidyiq
```

## Configuration

### Theme

Provide your own theme configuration in `theme.ts` located under `src/@tidyiq/gatsby-theme-tidyiq/`

#### Options

#### Default theme

#### Example

```
import { Theme } from "@tidyiq/gatsby-theme-tidyiq/src/theme";
import red from "@material-ui/core/colors/red";
import amber from "@material-ui/core/colors/red";

const theme: Theme = {
  palette: {
    primary: red[500],
    secondary: amber[800]
  }
};

export default theme;
```
