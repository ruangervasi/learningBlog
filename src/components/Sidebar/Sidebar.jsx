import React from 'react';
import './Sidebar.css';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

export default ({ title, description }) => (
  <Card className="sidebar">
    <Typography variant="h6" component="h2">
      {title}
    </Typography>
    <Typography className="sidebar-description" variant="body2" component="p">
      {description}
    </Typography>
  </Card>
);