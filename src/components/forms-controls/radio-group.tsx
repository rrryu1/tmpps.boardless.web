import { getInjectClasses } from '../../common/styles/styles-helper';
import * as React from 'react';
import { Colors } from '../../common/styles/theme';
import {
  FormLabel,
  RadioGroup as MuiRadioGroup,
  FormControl,
  Radio,
  FormControlLabel,
  createStyles,
} from '@material-ui/core';
import { RadioGroupProps as MuiRadioGroupProps } from '@material-ui/core/RadioGroup';
import { ThemeColorScope } from '../styles/theme-color-scope';
import { FormControlLabelProps } from '@material-ui/core/FormControlLabel';
import { decorate } from 'src/common/styles/styles-helper';
import { createPropagationProps } from 'src/common/component-helper';

const styles = createStyles({
  root: {
    width: '100%',
  },
  group: { flexDirection: 'row' },
});
interface RadioGroupProps {
  themeColor?: keyof Colors;
  label?: string;
  items?: Array<Partial<FormControlLabelProps>>;
  readOnly?: boolean;
}
export const RadioGroup = decorate(styles)<
  RadioGroupProps & MuiRadioGroupProps
>(props => {
  const { themeColor, label, items, readOnly } = props;
  const classes = getInjectClasses(props);
  const { root, group } = classes;
  const pProps = createPropagationProps(props, 'themeColor', 'label', 'items');
  const color = themeColor ? 'primary' : 'default';
  const radioColor = themeColor ? 'primary' : 'default';
  return (
    <ThemeColorScope themeColor={themeColor}>
      <FormControl className={root}>
        <FormLabel>{label}</FormLabel>
        <MuiRadioGroup {...pProps} className={group} color={color}>
          {items &&
            items.map(x => (
              <FormControlLabel
                key={x.value}
                label=""
                {...x}
                control={<Radio disabled={readOnly} color={radioColor} />}
              />
            ))}
        </MuiRadioGroup>
      </FormControl>
    </ThemeColorScope>
  );
});
