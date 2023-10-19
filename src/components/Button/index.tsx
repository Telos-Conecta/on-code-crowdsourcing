'use client'

import { Icon } from '@iconify/react/dist/iconify.js'

type ButtonVariants = "primary" | "secondary"

type ButtonProps = {
    variant?: ButtonVariants,
    iconLeft?: string,
    iconRight?: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const variants = {
    primary: 'border border-sub-30 bg-on-code hover:bg-on-code-70 text-white gap-1',
    secondary: 'border border-secondary text-black gap-3 hover:bg-on-code-70'
}

const Button = ({ variant = "primary", children, iconLeft, iconRight, ...props }: ButtonProps) => {
    const defaultClasses = 'flex items-center px-[14px] py-[10px] justify-center font-semibold'
   
    return (
        <button {...props}
            className={`${defaultClasses} ${variants[variant]} ${props.className}`}>
            {iconLeft && <Icon icon={iconLeft} />}
            {children}
            {iconRight && <Icon icon={iconRight} />}
        </button>
    )

}
export default Button