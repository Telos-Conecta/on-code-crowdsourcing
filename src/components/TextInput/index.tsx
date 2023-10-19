'use client'

import { Icon } from "@iconify/react/dist/iconify.js"
import { twMerge } from "tailwind-merge"

type TextInputProps = {
    iconLeft?: string,
    iconRight?: string,
    label?: string,
    labelClassNames?: string,
    subDescription?: string | React.ReactNode
} & React.InputHTMLAttributes<HTMLInputElement>

const TextInput = ({ iconLeft, iconRight, subDescription, labelClassNames, label, ...props }: TextInputProps) => {
    const defaultInputClasses = 'flex-grow px-3 rounded-[8px] focus:border-none py-2 text-sm outline-0 w-full'
    const defaultLabelClasses = 'block mb-2 text-sm font-bold text-gray-600'
    const mergedLabelClasses = twMerge(defaultLabelClasses, labelClassNames)

    return (
        <div className="mb-6">
            <label className={mergedLabelClasses}> {label}</label>
            <label>{subDescription}</label>
            <div className="flex items-center border border-sub rounded-[8px] bg-white">
                {iconLeft && <div className="pl-2"><Icon icon={iconLeft} className="text-sub" /></div>}
                <input {...props} className={`${defaultInputClasses} ${iconLeft ? 'pl-2' : ''} ${iconRight ? 'pr-2' : ''}`} />
                {iconRight && <Icon icon={iconRight} />}
            </div>
        </div>
    )
}

export default TextInput