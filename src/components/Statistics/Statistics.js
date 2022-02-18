import s from './Statistics.module.css';



function Statistics({ options }) {
   return (
      <section className={s.statistics}>
         <h2 className={s.title}>Upload stats</h2>
         <ul className={s.stat_list}>
            {options.map(option => (
               < li className={s.item} key={option.id}>
                  <span className={s.label}>{option.label}</span>
                  <span className={s.percentage}>{option.percentage}%</span>
               </li>
            ))}
         </ul>
      </section >
   );
}

export default Statistics;