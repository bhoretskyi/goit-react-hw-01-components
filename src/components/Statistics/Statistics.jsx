import { StatisticsList, StatisticsListItem, StatisticsSection } from "./Statistics.styled";
export default function ({ title = 'Upload stats', stats }) {
   
  return (
    <StatisticsSection>
      <h2 className="title">{title}</h2>

      <StatisticsList>
        {stats.map(obj => (
          <StatisticsListItem key={obj.id}>
            <span className="label">{obj.label}</span>
            <span className="percentage">{obj.percentage}</span>
          </StatisticsListItem>)
        )}
      </StatisticsList>
    </StatisticsSection>
  );
}
