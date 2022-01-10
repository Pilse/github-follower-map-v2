import { ChangeEvent, useState } from "react";
import { IuseInput } from "./types";

function useInput(): IuseInput {
  const [input, setInput] = useState<string>("");
  const [focus, setFocus] = useState<boolean>(false);

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) =>
    setInput(event.target.value);

  const onFocusHandler = () => setFocus(() => true);

  const onBlurHandler = () => setFocus(() => false);

  return { input, focus, onChangeHandler, onFocusHandler, onBlurHandler };
}

export default useInput;
