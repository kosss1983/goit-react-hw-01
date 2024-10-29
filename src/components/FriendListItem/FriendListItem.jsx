import { clsx } from 'clsx';
import s from './FriendListItem.module.css';

const FriendListItem = ({ friend }) => {
  const { avatar, name, isOnline } = friend;
  return (
    <div className={s.wrapper}>
      <img className={s.image} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
      <p className={clsx(isOnline ? s.online : s.offline)}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
};

export default FriendListItem;
