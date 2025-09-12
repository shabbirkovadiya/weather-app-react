import { useEffect, useState } from "react";
const useDebounce = (text, time = 1000) => {
  const [debounseval, setdebounseval] = useState(text);
  useEffect(() => {
    let timeout = setTimeout(() => setdebounseval(text), time);
    return () => clearTimeout(timeout);
  }, [text, time]);
  return debounseval;
};
export default useDebounce;