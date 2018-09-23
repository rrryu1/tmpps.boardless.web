import * as React from 'react';
import { BarFormContent } from './bar-form-content';
import { BarList } from './bar-list';
import { WithStyleProps } from 'src/common/styles/types';
import { Container } from 'src/components/layout/container';
import { Row } from 'src/components/layout/row';
import { Typography, createStyles, withStyles } from '@material-ui/core';

const styles = createStyles({
  root: {
    paddingLeft: 10,
    paddingRight: 10,
    '$row:last-child': {
      paddingBottom: 0,
    },
  },
  row: {
    paddingBottom: 20,
    '&:first-child': {
      paddingTop: 20,
    },
    '&:last-child': {
      paddingBottom: 0,
    },
  },
});
type Props = WithStyleProps<typeof styles>;
export const Bar = withStyles(styles)(({ classes }: Props) => {
  const { root, row } = classes;
  return (
    <Container className={root}>
      <Row className={row}>
        <Typography variant="display2">ルイーダの酒場</Typography>
      </Row>
      <Row className={row}>
        <BarFormContent />
      </Row>
      <Row className={row}>
        <BarList />
      </Row>
    </Container>
  );
});