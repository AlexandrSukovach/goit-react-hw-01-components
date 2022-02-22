import PropTypes from 'prop-types';
import s from './Statistics.module.css';

function Statistics({ title, stats }) {
   return (
      <div className={s.content}>
         <section className={s.statistics}>
            <h2 className={s.title}>{title}</h2>
            <ul className={s.stat_list}>
               {stats.map(stat => (
                  < li className={s.item} key={stat.id}>
                     <span className={s.label}>{stat.label}</span>
                     <span className={s.percentage}>{stat.percentage}%</span>
                  </li>
               ))}
            </ul>
         </section >
      </div>

   );
}

Statistics.propTypes = {
   stats: PropTypes.arrayOf(
      PropTypes.shape({
         percentage: PropTypes.number.isRequired,
         id: PropTypes.string.isRequired,
         label: PropTypes.string.isRequired,
      }),
   ),
};

// function Statistics({ options }) {
//    return (
//       <div className={s.content}>
//          <section className={s.statistics}>
//             <h2 className={s.title}>Upload stats</h2>
//             <ul className={s.stat_list}>
//                {options.map(option => (
//                   < li className={s.item} key={option.id}>
//                      <span className={s.label}>{option.label}</span>
//                      <span className={s.percentage}>{option.percentage}%</span>
//                   </li>
//                ))}
//             </ul>
//          </section >
//       </div>

//    );
// }

// Statistics.propTypes = {
//    options: PropTypes.arrayOf(
//       PropTypes.shape({
//          percentage: PropTypes.number.isRequired,
//          id: PropTypes.string.isRequired,
//          label: PropTypes.string.isRequired,
//       }),
//    ),
// };

export default Statistics;