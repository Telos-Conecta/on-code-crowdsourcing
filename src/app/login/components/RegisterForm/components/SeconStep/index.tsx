'use client'
import Button from "@/components/Button"
import TextInput from "@/components/TextInput"
import { RegisterFormState } from "../.."

type SecondStepProps = {
    state: RegisterFormState,
    handleChangeState: (updatedValues: RegisterFormState) => void
}

const SecondStep = ({ state, handleChangeState }: SecondStepProps) => {
    return (
        <>
            <TextInput
                onChange={(event) => handleChangeState({ fullName: event.target.value })}
                value={state.fullName}
                label="Nome completo" placeholder="Nome completo" type="text" iconLeft="uil:user" />
            <TextInput
                onChange={(event) => handleChangeState({ dateOfBirth: event.target.value })}
                value={state.dateOfBirth?.toString()}
                label="Data de nascimento" labelClassNames="text-black" placeholder="DD/MM/AAAA" type="date"
                iconLeft="uil:calendar-alt"
            />
            <TextInput
                onChange={(event) => handleChangeState({ cellphone: event.target.value })}
                value={state.cellphone}
                label="Celular" labelClassNames="text-black" placeholder="(00) 9 0000-0000" type="text"
                iconLeft="uil:calendar-alt"
            />

            <div className="mt-[24px]">
                <Button className="rounded-md w-[100%]">Próximo</Button>
            </div>

        </>
    )
}
export default SecondStep