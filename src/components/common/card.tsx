"use client";

const Card = ({
  children,
  styles = "",
  elevated = false,
  containerStyles = ""
}: {
  children: JSX.Element;
  styles?: string;
  elevated?: boolean;
  containerStyles?: string;
}) => {
  const elevatedStyles = "pr-[3px] pb-[3px]";
  return (
    <div className={containerStyles}>
      <div className={`relative ${elevated ? elevatedStyles : ""}`}>
        <div className={`${styles} p-2 bg-black border border-1.5`}>{children}</div>
        {elevated && (
          <>
            <div className="absolute w-[3px] origin-[0_0] bg-white right-0 top-0 h-[calc(100%-3px)] skew-y-[45deg]" />
            <div className="absolute h-[3px] w-[calc(100%-3px)] origin-[0_0] bg-white left-0 bottom-0 skew-x-[45deg]" />
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
