import userData from '../userData.json';
import Profile from './Profile/Profile';
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
    </div>
  );
};

export default App;
