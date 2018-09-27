import {
  Theme as MuiTheme,
  createMuiTheme,
  colors as MuiColors,
} from '@material-ui/core';
import { FontWeightProperty } from 'csstype';
import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';

export const colors = {
  amber: MuiColors.amber,
  blue: MuiColors.blue,
  blueGrey: MuiColors.blueGrey,
  brown: MuiColors.brown,
  cyan: MuiColors.cyan,
  deepOrange: MuiColors.deepOrange,
  deepPurple: MuiColors.deepPurple,
  green: MuiColors.green,
  grey: MuiColors.grey,
  indigo: MuiColors.indigo,
  lightBlue: MuiColors.lightBlue,
  lightGreen: MuiColors.lightGreen,
  lime: MuiColors.lime,
  orange: MuiColors.orange,
  pink: MuiColors.pink,
  purple: MuiColors.purple,
  red: MuiColors.red,
  teal: MuiColors.teal,
  yellow: MuiColors.yellow,
};
export type Colors = typeof colors;

export namespace CommonColors {
  export const { white, black } = MuiColors.common;
}
const { grey, indigo, yellow, red } = colors;
const type = 'light';
const customThemeOption = {
  shared: {
    fontWeight: { bold: 'bold' as FontWeightProperty },
    borderWidth: { thick: 4 },
    table: {
      headerBackgroundColor: grey['900'],
      borderColor: grey['400'],
      headerColor: CommonColors.white,
    },
    messages: {
      info: {
        color: type === 'light' ? indigo['700'] : indigo['300'],
      },
      warning: {
        color: type === 'light' ? yellow['800'] : yellow['500'],
      },
      error: {
        color: type === 'light' ? red['700'] : red['500'],
      },
    },
  },
};
const muiThemeOption: ThemeOptions = { palette: { primary: grey } };
const themeOption = Object.assign(muiThemeOption, customThemeOption);
export type Theme = typeof customThemeOption & MuiTheme;
export const createTheme = () => {
  return createMuiTheme(themeOption) as Theme;
};
