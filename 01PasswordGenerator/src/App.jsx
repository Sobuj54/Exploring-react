import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [passLen, setPassLen] = useState(10);
  const [isNumberAllowed, setIsNumberAllowed] = useState(false);
  const [specialCharAllowed, setSpecialCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTWXYZabcdefghijklmnopqrstwxyz";

    if (isNumberAllowed) str += "01234567879";
    if (specialCharAllowed) str += "!@#$%^&*()_+[]{}|;:,.<>?/\\`~";

    for (let i = 1; i <= passLen; i++) {
      const index = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(index);
    }
    setPassword(pass);
  }, [passLen, isNumberAllowed, specialCharAllowed, setPassword]);

  const copyPasswordToClipboard = () => {
    /*
    1. one way of copying text from input field to clipboard
    window.navigator.clipboard.writeText(password);
    */
    //  2.another way is:
    passwordRef.current?.select(); //this line will add selection effect after copying
    window.navigator.clipboard.writeText(password);
  };

  useEffect(() => {
    passwordGenerator();
  }, [passLen, isNumberAllowed, specialCharAllowed, passwordGenerator]);

  return (
    <>
      <div className="w-full max-w-xl mx-auto shadow-md shadow-slate-400 rounded-md my-10 p-5 bg-slate-400">
        <h2 className="text-xl font-semibold text-center">
          Password Generator
        </h2>

        <div className="mt-5 flex items-center">
          <input
            type="text"
            value={password}
            className="px-3 rounded-md py-1 outline-none w-full"
            placeholder="password"
            ref={passwordRef}
            readOnly
          />
          <button
            className="bg-gray-500 px-2 py-1 rounded-md font-medium"
            onClick={copyPasswordToClipboard}>
            Copy
          </button>
        </div>
        <div className="flex justify-between mt-3">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              max={30}
              min={6}
              value={passLen}
              onChange={(e) => {
                setPassLen(e.target.value);
              }}
            />
            <label>Length {passLen}</label>
          </div>
          <div className="flex gap-x-1">
            <input
              type="checkbox"
              id="numberAllowed"
              defaultChecked={isNumberAllowed}
              onChange={() => setIsNumberAllowed(!isNumberAllowed)}
            />
            <label htmlFor="numberAllowed">Number</label>
          </div>
          <div className="flex gap-x-1">
            <input
              type="checkbox"
              id="specialCharAllowed"
              defaultChecked={specialCharAllowed}
              onChange={() => setSpecialCharAllowed((prev) => !prev)}
            />
            <label htmlFor="numberAllowed">Special character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
