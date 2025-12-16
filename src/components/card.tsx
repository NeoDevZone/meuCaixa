type CardProps = {
  title: string;
  value: string;
  color: string;
};

export function Card({ title, value, color }: CardProps) {
  return (
    <div className="shadow-xl shadow-black/50 drop-shadow-white/40 drop-shadow-md bg-border-detail rounded-2xl p-6 justify-center flex flex-col items-center w-75 h-50">
      <h2 className="text-4xl font-bold text-text-dark">{title}</h2>
      <p className={`mt-2 text-3xl font-bold ${color}`}>{value}</p>
    </div>
  );
}
