import userData from '../userData.json';
import friends from '../friends.json';
import transactions from '../transactions.json';
import Profile from './Profile/Profile';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import './App.css';

const App = () => {
  const { username, tag, location, avatar, stats } = userData;
  return (
    <div className="container">
      <Profile
        name={username}
        tag={tag}
        location={location}
        image={avatar}
        stats={stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
