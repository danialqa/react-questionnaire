export type IStyles = {
  color_fueled_red: string;
  color_fueled_white: string;
  color_fueled_white: string;
  color_dark_grey: string;
  color_black: string;
  color_white: string;
};

export type ClassNames = keyof IStyles;

declare const styles: IStyles;

export default styles;
