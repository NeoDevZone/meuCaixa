type CardProps = {
  title: string;
  value: string;
  color: string;
};

export function Card({ title, value, color }: CardProps) {
  return (
    <div className="shadow-xl shadow-black/50 drop-shadow-white/40 drop-shadow-md bg-border-detail rounded-2xl p-4 sm:p-6 md:p-8 justify-center flex flex-col items-center w-full max-w-75 md:max-w-100 h-auto min-h-40 sm:min-h-50 md:min-h-60">
      <h2 className="text-2xl sm:text-4xl md:text-4xl font-bold text-text-dark">
        {title}
      </h2>
      <p className={`mt-2 text-xl sm:text-3xl md:text-3xl font-bold ${color}`}>
        {value}
      </p>
    </div>
  );
}
