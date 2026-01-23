type Props = {
  title: string;
  message: string;
};

export function ErrorState({ title, message }: Props) {
  return (
    <div className="p-6 text-center text-red-600">
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="mt-1 text-base">{message}</p>
    </div>
  );
}
