import React from 'react';

import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

import BlogPosts from './BlogPosts';

const useStyles = makeStyles((theme) => ({
  subtitle: {
    textAlign: 'center'
  }
}));

function Read(props) {
  const { loading_blogs, blogs } = props;

  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography component="h2" variant="h6" color="secondary" className={classes.subtitle}>Read</Typography>
      <Typography component="p" variant="body1" color="secondary" className={classes.subtitle}>Reading is good</Typography>
      <BlogPosts loading_blogs={loading_blogs} blogs={blogs} />
    </React.Fragment>
  );
}

export default Read;