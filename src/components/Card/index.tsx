type CardProps = {
    children: React.ReactNode,
} & React.HTMLAttributes<HTMLDivElement>

export default function Card({ children, ...props }: CardProps) {
    const defaultClasses = `bg-white p-[24px] pt-32px rounded-lg shadow-md w-full max-w-md border`

    return (
        <div className={`${defaultClasses} ${props.className}`}>
            {children}
        </div>
    )
}
