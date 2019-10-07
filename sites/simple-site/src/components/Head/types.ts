export type GoogleFonts = [
  {
    family: string;
    weights: string;
  }
];

/**
 * <Head> component props
 */
export interface HeadProps {
  /** Page description */
  readonly description: string;
  /** Page title */
  readonly title: string;
}
