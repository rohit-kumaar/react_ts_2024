import { ReactNode } from "react";

type TPropsType = {
  title: string;
  day?: number;
  func: (a: string) => void;
  children: ReactNode;
};

function Header({ title, day = 30, func, children }: TPropsType) {
  return (
    <>
      <h1>
        {title}: and the today day is :{day && <span>{day}</span>}
      </h1>

      <button onClick={() => func("Hey!")} className="button">
        Submit
      </button>

      {children}
    </>
  );
}

export default Header;
