'use client'

interface ProgressBarProps {
    percent: number;
    firstElement?: React.ReactNode
    secondElement?: React.ReactNode
}

const ProgressBar = ({ percent, firstElement, secondElement }: ProgressBarProps) => {
    const percentMessage = `${Math.floor((percent * 100))}%`

    return (
        <div className="flex flex-col w-full gap-3">
            <div className="w-full bg-sub-30 rounded-full h-3">
                <div className="h-full bg-primary rounded-full" style={{ width: percentMessage }} />
            </div>
            <div className="flex items-start relative justify-between">
                <span className="text-lg font-bold" >
                    {percentMessage}
                </span>
                {firstElement && <div className="absoute left-1/2 "> {firstElement}</div>}
                {secondElement && <div> {secondElement}</div>}
            </div>
        </div>
    )
}

export default ProgressBar