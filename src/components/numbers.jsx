import React, { useState } from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const Dashboardview = () => {
  const [userCount, setUserCount] = useState(0);
  const [productCount, setProductCount] = useState(0);


  return (
    <div>
      <Card sx={{ minWidth: 275, margin: '20px', padding: '10px' }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Dashboard
          </Typography>
          <Typography variant="body1">
            Number of Users: {userCount}
          </Typography>
          <Typography variant="body1">
            Number of Products: {productCount}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboardview;