import s from './Profile.module.css';
import clsx from 'clsx';

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.card}>
        <img className={s.avatar} loading="lazy" src={image} alt={name} />
        <p className={s.name}>{name}</p>
        <p className={clsx(s.tagText, s.tagColor)}>{tag}</p>
        <p className={clsx(s.tagText, s.tagColor)}>{location}</p>
      </div>

      <ul className={s.stats}>
        <li>
          <span className={s.tagText}>Followers</span>
          <span className={s.statsNumbers}>{stats.followers}</span>
        </li>
        <li>
          <span className={s.tagText}>Views</span>
          <span className={s.statsNumbers}>{stats.views}</span>
        </li>
        <li>
          <span className={s.tagText}>Likes</span>
          <span className={s.statsNumbers}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
