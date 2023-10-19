'use client'

import Button from "@/components/Button"
import TextInput from "@/components/TextInput"
import { RegisterFormState } from "../.."

type FirstStepProps = {
    handleNextStep: () => void,
    state: RegisterFormState,
    handleChangeState: (updatedValues: RegisterFormState) => void
}

const FirstStep = ({ handleNextStep, state, handleChangeState }: FirstStepProps) => {
    return (
        <>
            <TextInput label="E-mail"
                onChange={(event) => handleChangeState({ email: event.target.value })}
                value={state.email}
                placeholder="E-mail" type="email" iconLeft="uil:envelope-alt"
            />
            <TextInput
                onChange={(event) => handleChangeState({ passwod: event.target.value })}
                value={state.passwod}
                label="Senha" labelClassNames="text-black" placeholder="Senha" type="password"
                iconLeft="uil:key-skeleton-alt"
            />
            <TextInput
                onChange={(event) => handleChangeState({ confirmPassword: event.target.value })}
                value={state.confirmPassword}
                label="Confirmar Senha" labelClassNames="text-black" placeholder="Confirmar Senha" type="password"
                iconLeft="uil:key-skeleton-alt"
            />

            <div className="mt-[24px]">
                <Button onClick={handleNextStep} className="rounded-md w-[100%]">Próximo</Button>
            </div>

        </>
    )
}
export default FirstStep