import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography
} from '@mui/material';
import { UserContext } from '@/context/providers/UserContext';
import { useContext } from 'react';

const Dashboard = () => {
  const { userFirstName, userId, userLastName, userName } =
    useContext(UserContext);
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {`Hello ${userFirstName} ${userLastName}!`}
        </Typography>
        <Typography variant="h5" component="div">
          {userName}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {userId}
        </Typography>
        <Typography variant="body2">
          {`Do you mind if we call you ${userFirstName}?`}.
          <br />
          {'Are you ready to see some cool form stuff?'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Cool form stuff</Button>
      </CardActions>
    </Card>
  );
};

export default Dashboard;
