type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
};

export function DropdownItens({ children, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="w-full px-4 py-2 transition-all duration-200 text-text-dark font-semibold text-left text-md hover:text-primary/80 hover:bg-border-detail/50 rounded-lg hover:cursor-pointer hover:font-bold hover:text-lg"
    >
      {children}
    </button>
  );
}
