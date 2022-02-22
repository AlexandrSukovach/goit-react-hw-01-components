import PropTypes from 'prop-types';
import s from './FriendList.module.css';



function FriendList({ friends }) {
   return (
      <section className={s.friendList}>
         <ul className={s.friend_list}>
            {friends.map(friend => (
               < li className={s.item} key={friend.id}>
                  {friend.isOnline === true && <span className={s.status_true}>{friend.isOnline}</span>}
                  {friend.isOnline === false && <span className={s.status_false}>{friend.isOnline}</span>}
                  <img className={s.avatar} src={friend.avatar} alt="User avatar" width="48" />
                  <p className={s.name}>{friend.name}</p>
               </li>
            ))}
         </ul>
      </section >
   );
}


FriendList.propTypes = {
   friends: PropTypes.arrayOf(
      PropTypes.shape({
         id: PropTypes.number.isRequired,
         avatar: PropTypes.string.isRequired,
         name: PropTypes.string.isRequired,
         isOnline: PropTypes.bool.isRequired,
      }),
   ),
};

export default FriendList;