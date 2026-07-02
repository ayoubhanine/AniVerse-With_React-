import StatsCard from "./StatsCard";

export default function StatsGrid({ stats }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => (
        <StatsCard
          key={item.title}
          {...item}
        />
      ))}
    </div>
  );
}