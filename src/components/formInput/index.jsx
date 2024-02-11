'use client'
import { useState } from "react";
export const FormInput = (props) => {
    const [focused, setFocused] = useState(false);
    const { label, errorMessage, onChange, autoFillGoogle, id, disabled, ...inputProps } = props;
 
    const handleFocus = (e) => {
        setFocused(true);
    };

    return (
        <div >
            <label className="block mt-4 mb-2  text-sm font-medium text-white">{label}</label>
            <input
                className="border  sm:text-sm rounded-lg  block w-full p-2.5  border-gray-600 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                {...inputProps}
                onChange={onChange}
                onBlur={handleFocus}
                onFocus={() =>
                    inputProps.name === "confirmPassword" && setFocused(true)
                }
                focused={focused.toString()}
                disabled={autoFillGoogle && disabled}
            />
            <span className="span">{errorMessage}</span>
        </div>
    );
};

