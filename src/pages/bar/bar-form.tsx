import * as React from 'react';
import { WithStyleProps } from '../../common/styles/types';
import { Theme, Colors, colors } from '../../common/styles/theme';
import {
  getInjectClasses,
  appendClassName,
} from '../../common/styles/styles-helper';
import { ComponentHelper } from '../../common/component-helper';
import { ObjectHelper } from 'src/common/object-helper';
import { Container, ContainerProps } from 'src/components/layout/container';
import { createStyles } from '@material-ui/core';
import { decorate } from 'src/common/styles/styles-helper';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 20,
      paddingRight: 20,
      borderWidth: theme.shared.borderWidth.thick,
      borderStyle: 'solid',
      borderRadius: 15,
    },
    ...ObjectHelper.mapObject(colors, color => ({
      color: color['500'],
      borderColor: color['500'],
    })),
  });
interface BarFormProps {
  themeColor?: keyof Colors;
}
type Props = WithStyleProps<typeof styles, BarFormProps & ContainerProps>;
export const BarForm = decorate(styles)((props: Props) => {
  const { themeColor } = props;
  const classes = getInjectClasses(props);
  const { root } = classes;
  const pProps = ComponentHelper.createPropagationProps(props, 'themeColor');
  return (
    <Container
      container={true}
      {...pProps}
      className={appendClassName(root, themeColor ? classes[themeColor] : '')}
    />
  );
});