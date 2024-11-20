import { FC } from "react";

type AdultOrNotProps = {
  setIsAdult: (value: boolean) => void;
};

const AdultOrNot: FC<AdultOrNotProps> = ({ setIsAdult }) => {
  const yesHandler = () => {
    setIsAdult(true);
  };

  const noHandler = () => {
    setIsAdult(false);
  };

  return (
    <div>
      Вам Есть 18?
      <button onClick={yesHandler}>Да</button>
      <button onClick={noHandler}>Нет</button>
    </div>
  );
};

export default AdultOrNot;
