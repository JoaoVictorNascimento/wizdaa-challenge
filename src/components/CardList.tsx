type CardListProps = {
  description: string;
};

const CardList = ({ description }: CardListProps) => {
  return (
    <div className="flex p-4 rounded border border-zinc-200 bg-white text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50">
      <span>{description}</span>
    </div>
  );
};

export default CardList;