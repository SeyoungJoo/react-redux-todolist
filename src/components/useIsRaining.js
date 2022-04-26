import { useState, useDebugValue } from "react";

const useIsRaining = () => {
  const [isRaining, setIsRaining] = useState(false);

  useDebugValue(isRaining ? "Is Raining" : "Is Not Raining");

  return isRaining;
};

const DebugValueComponent = () => {
  const isRaining = useIsRaining();

  return (
    <div>
      <h2>Do you need a coat today? {isRaining ? "yes" : "maybe"}</h2>
    </div>
  );
};

export default DebugValueComponent;
