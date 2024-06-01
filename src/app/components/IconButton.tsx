type Props = {
  text: string;
  icon: JSX.Element;
  onclick: () => void;
  style: string;
};

export const IconButton = ({ text, icon, onclick, style }: Props) => {
  return (
    <button onClick={onclick} className={` ${style}`}>
      {text}
      {icon}
    </button>
  );
};
