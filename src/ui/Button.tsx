interface ButtonProps {
  children: string;
  type: string;
  link?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

export default function Button({
  children,
  type,
  link,
  onClick,
  icon,
}: ButtonProps) {
  const base =
    "flex items-center justify-center gap-2 mt-2 rounded-md text-[#06FCD8] border-[#06FCD8] hover:bg-[#06FDC8] hover:text-[#000] border-[1.5px] font-medium";
  const style: { [Key: string]: string } = {
    primary:
      base +
      "  lg:w-[150px] lg:h-[45px] w-[90px] h-[40px] text-[10.95px] lg:text-[16.5px] leading-[7.25px]",
    secondary:
      base +
      " lg:px-5 lg:py-5 px-3 py-2 lg:text-[13.5px] text-[8.65px] leading-[5.67px]",
  };
  return (
    <button className={style[type]} onClick={onClick}>
      <a href={link}>{children}</a>
      {icon}
    </button>
  );
}
