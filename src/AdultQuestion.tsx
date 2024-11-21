import { FC, ChangeEvent, ChangeEventHandler, MouseEvent } from "react";

type AdultOrNotProps = {
  setIsAdult: (value: boolean) => void;
};

const AdultOrNot: FC<AdultOrNotProps> = ({ setIsAdult }) => {
  const yesHandler = (event: MouseEvent<HTMLButtonElement>) => {
    setIsAdult(true);
    console.log(event);
  };

  const noHandler = (event: MouseEvent<HTMLButtonElement>) => {
    setIsAdult(false);
    console.log(event);
  };

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };

  // const changeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
  //   console.log(event.target.value);
  // };

  return (
    <div>
      Вам Есть 18?
      <button onClick={yesHandler}>Да</button>
      <button onClick={noHandler}>Нет</button>
      <input onChange={changeHandler} />
    </div>
  );
};

export default AdultOrNot;
