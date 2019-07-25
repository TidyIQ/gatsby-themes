/**
 * Main theme exports
 */

import { RecursivePartial } from "./_config/utils/typescript";
import store from "./_config/state";
import { progressActions } from "./_config/state/progress";
import { DefaultThemeConfig } from "./_config/theme/config/default";

/**
 * Typescript generics
 */

export {
  RecursiveNonNullable,
  RecursivePartial
} from "./_config/utils/typescript";

/**
 * State
 */

export type State = ReturnType<typeof store["getState"]>;

export const actions = {
  progress: progressActions
};

/**
 * Theme
 */

export type ThemeConfig = RecursivePartial<DefaultThemeConfig>;
export { default as themeConfig } from "./_config/theme/config";

/**
 * Snackbar
 */

export { useSnackbar } from "notistack";
