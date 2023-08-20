import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import user from 'user';
import data from 'data';
import PropTypes from 'prop-types';
import FriendList from './FriendList/FriendList';
import friends from 'friends';
import transactions from 'transactions';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import { CreateGlobalStyles } from './GlobalStyles';
import { Layout } from './Layout';
import { ThemeProvider } from 'styled-components';
const theme = {
  colors:{
    red: 'orangered',
    green:'green',
  },
  radius: {
    small: '4px',
    large: '8px'

  } 
 
};

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <Statistics stats={data} />
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} />
        <CreateGlobalStyles />.
      </Layout>
    </ThemeProvider>
  );
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object,
};

Statistics.propTypes = {
  stats: PropTypes.array,
};

FriendList.propTypes = {
  friends: PropTypes.array,
};
TransactionHistory.propTypes = {
  items: PropTypes.array,
};
