import { Dispatch, SetStateAction } from "react";

type TInputValue = string | number;

function Main<T extends TInputValue>({
  label,
  value,
  setValue,
}: {
  label: string;
  value: T;
  setValue: Dispatch<SetStateAction<T>>;
}) {
  return (
    <form>
      <label htmlFor="userName">{label}</label>
      <input
        type="text"
        id="userName"
        value={value}
        onChange={(e) => setValue(e.target.value as T)}
      />
    </form>
  );
}

export default Main;
