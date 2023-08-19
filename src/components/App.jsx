import Profile from './Profile';
import Statistics from './Statistics';
import user from 'user';
import data from 'data';
import PropTypes from 'prop-types';
import FriendList from './FriendList';
import TransactionHistory from './TransactionHistory'

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics
       stats={data} 
       />
       <FriendList/>
       <TransactionHistory/>
    </div>
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
  stats: PropTypes.array
}
