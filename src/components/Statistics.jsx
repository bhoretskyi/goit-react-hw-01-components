export default function ({ title = 'Upload stats', stats }) {
   
  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>

      <ul className="stat-list">
        {stats.map(obj => (
          <li key={obj.id}>
            <span className="label">{obj.label}</span>
            <span className="percentage">{obj.percentage}</span>
          </li>)
        )}
      </ul>
    </section>
  );
}
