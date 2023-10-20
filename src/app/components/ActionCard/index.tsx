import Address from "@/components/Address"
import Button from "@/components/Button"
import ProgressBar from "@/components/ProgressBar"
import { StringUtils } from "@/utils/stringUtils"

interface ActionCardProps {
    action: IAction
}

const ActionCard = ({ action }: ActionCardProps) => {
    const {
        img,
        title,
        author,
        description,
        address,
        amountCollected,
        totalGoal,
        finalDate
    } = action


    return (
        <div className="flex flex-col gap-4 rounded-[10px] overflow-hidden shadow-md w-full max-w-[420px] min-w-[320px]">
            <img src={img} className="w-full aspect-card-image" />
            <div className="flex flex-col py-8 px-6">
                <div className="flex flex-col w-full h-[250px] overflow-hidden gap-6">
                    <h2 className="text-xl font-bold line-clamp-2">
                        {title}
                    </h2>
                    <div className="text-sm text-sub"> por: {StringUtils.capitalizeFirstCharacterInName(author ?? "")}</div>
                    <div className="line-clamp-3"> {description}</div>
                    <Address uf={address?.uf} city={address?.city} neighborhood={address?.neighborhood} />
                </div>
                <ProgressBar
                    percent={(amountCollected ?? 0) / (totalGoal ?? 0)}
                    firstElement={
                        <div className="flex flex-col items-center text-sm">
                            <h3 className="font-bold">R$ {amountCollected} </h3>
                            <h4>Arrecadados</h4>
                        </div>
                    }
                    secondElement={
                        <div className="flex flex-col items-end text-sm">
                            <h3 className="font-bold"> 7 dias</h3>
                            <h4>Restantes</h4>
                        </div>
                    }
                />
            </div>
            <Button iconLeft="fluent:handshake-24-filled" className="py-6">
                Apoiar ação
            </Button>
        </div>

    )

}
export default ActionCard