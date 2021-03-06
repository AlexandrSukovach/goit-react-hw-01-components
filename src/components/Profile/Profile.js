import PropTypes from 'prop-types';
import s from './Profile.module.css';
import { BiDotsHorizontalRounded } from 'react-icons/bi';

function Profile({ tag, username, location, avatar, stats }) {
  return (
    <div className={s.content}>
      <div className={s.profile}>
        <div className={s.description}>
          <img src={avatar} alt="User avatar" className={s.avatar} />
          <BiDotsHorizontalRounded size={30} style={{ color: 'grey' }} />
          <p className={s.name}>{username}</p>
          <p className={s.tag}>{tag}@pmarica</p>
          <p className={s.location}>{location}</p>
        </div>
        <ul className={s.stats}>
          <li>
            <span className={s.label}>Followers</span>
            <span className={s.quantity}>{stats.followers}</span>
          </li>
          <li>
            <span className={s.label}>Views</span>
            <span className={s.quantity}>{stats.views}</span>
          </li>
          <li>
            <span className={s.label}>Likes</span>
            <span className={s.quantity}>{stats.likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile;
