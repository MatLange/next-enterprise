import cx from "classnames";
import { UseFormRegisterReturn } from "react-hook-form";

export type TextInputProps = {
  labelText?: string;
  id?: string;
  register?: UseFormRegisterReturn;
  registerFn?: any;
  isDisabled?: boolean;
  isRequired?: boolean;
  placeholder?: string;
  error?: string;
};

const shared =
  "rounded-sm bg-indigo-100 border-indigo-300 border-2 p-2 hover:bg-indigo-200 focus:bg-indigo-200 duration-150 transition-all outline-none focus:ring-2 ring-indigo-300";

const disabled = "opacity-50 hover:bg-indigo-100";

const errored =
  "bg-red-200 border-red-400 focus:bg-red-100 hover:bg-red-100 focus:ring-red-400";

  function handleOnChange(fnOnChange: any, e:any) {
    //alert("OnChange" +  value);
    fnOnChange(e);
  }

const TextInput = ({
  labelText,
  id,
  register,
  registerFn,
  isDisabled = false,
  isRequired = false,
  placeholder,
  error,
}: TextInputProps) => {
  
  const { onChange, name } = registerFn;

  return (
    <label htmlFor={id} className="flex flex-col">
      <span className="mb-1 text-sm">
        {labelText}
        <span className="font-semibold ml-0.5">{isRequired ? "*" : ""}</span>
      </span>

      <input
        {...registerFn}
        onChange={(e) => handleOnChange(onChange, e)}
        required={isRequired}
        placeholder={placeholder}
        autoComplete="off"
        disabled={isDisabled}
        id={id}
        type="text"        
        className={cx(shared, { [disabled]: isDisabled, [errored]: error })}
      ></input>
      <span className="text-red-500 font-semibold text-sm">{error}</span>
      <div className="invalid-feedback">message</div>
    </label>
  );
};

export default TextInput;