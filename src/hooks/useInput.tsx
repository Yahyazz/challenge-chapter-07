import { useState } from 'react';

function useInput(defaultValue: any) {
  const [value, setValue] = useState(defaultValue);

  const onValueChangeHandler = (event: any) => {
    setValue(event.target.value);
  };

  return [value, onValueChangeHandler];
}

export default useInput;
