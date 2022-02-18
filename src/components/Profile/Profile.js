import s from './Profile.module.css';
// import PropTypes from 'prop-types';

function Profile({ options }) {
   return (
      <>
         <div className={s.profile} >
            <div className={s.description} >
               <img
                  src={options.avatar}
                  alt="User avatar"
                  className={s.avatar}
               />
               <p className={s.name} >{options.username}</p>
               <p className={s.tag} >{options.tag}@pmarica</p>
               <p className={s.location} >{options.location}</p>
            </div>
            <ul className={s.stats} >
               <li>
                  <span className={s.label} >Followers</span>
                  <span className={s.quantity} >{options.stats.followers}</span>
               </li>
               <li>
                  <span className={s.label} >Views</span>
                  <span className={s.quantity} >{options.stats.views}</span>
               </li>
               <li>
                  <span className={s.label} >Likes</span>
                  <span className={s.quantity} >{options.stats.likes}</span>
               </li>
            </ul>
         </div>
      </>
   );
}

// Profile.propTypes = {
//    location: PropTypes.string.isRequired,
//    username: PropTypes.string.isRequired,
//    avatar: PropTypes.string.isRequired
// };

export default Profile;