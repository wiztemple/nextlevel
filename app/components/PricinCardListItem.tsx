const PricingCardListItem = ({
  title,
  lastItem,
}: {
  title: string;
  lastItem?: boolean;
}) => {
  return (
    <li
      className={`flex justify-center py-[14px] ${
        lastItem ? "" : "border-b-2 border-b-[#DDD]"
      }`}
    >
      <div className="flex items-center gap-3">
        <span className="text-[#555] text-[13px] leading-4 text-center">
          {title}
        </span>
      </div>
    </li>
  );
};

export default PricingCardListItem;
