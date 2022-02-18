import s from './FriendList.module.css';

// const FriendList = ({
//    item,
//    id,
//    status,
//    isOnline,
//    avatar,
//    name
// }) => {
//    return (
//       <section className={s.friendList}>
//          <ul className={s.friend_list}>
//             {options.map(option => (
//                < li className={s.item} key={option.id}>
//                   <span className={s.status}>{option.isOnline.true}</span>
//                   {/* <span className={s.status_false}>{option.isOnline.false}</span> */}
//                   <img className={s.avatar} src={option.avatar} alt="User avatar" width="48" />
//                   <p className={s.name}>{option.name}</p>
//                </li>
//             ))}
//          </ul>
//       </section >
//    );
// }

function FriendList({ options }) {
   return (
      <section className={s.friendList}>
         <ul className={s.friend_list}>
            {options.map(option => (
               < li className={s.item} key={option.id}>
                  {option.isOnline === true && <span className={s.status_true}>{option.isOnline}</span>}
                  {option.isOnline === false && <span className={s.status_false}>{option.isOnline}</span>}
                  <img className={s.avatar} src={option.avatar} alt="User avatar" width="48" />
                  <p className={s.name}>{option.name}</p>
               </li>
            ))}
         </ul>
      </section >
   );
}

export default FriendList;