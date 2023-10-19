
import Card from "@/components/Card"
import FirstStep from "./components/FirstStep"
import SecondStep from "./components/SeconStep"
import React from "react"
import { Icon } from "@iconify/react/dist/iconify.js"
import { LoginPageActionTypes } from "../../page"

type RegisterFormProps = {
    handleSetAction: (action: LoginPageActionTypes) => void
}

export type RegisterFormState = {
    step?: number,
    email?: string,
    passwod?: string,
    confirmPassword?: string,
    fullName?: string,
    dateOfBirth?: string | Date,
    cellphone?: string
}

const RegisterForm = ({ handleSetAction }: RegisterFormProps) => {

    const [state, setState] = React.useState<RegisterFormState>({
        step: 0,
        email: '',
        passwod: '',
        confirmPassword: '',
        fullName: '',
        dateOfBirth: '',
        cellphone: ''
    })

    const handleChangeState = (updatedValues: RegisterFormState) => {
        setState((previousState) => ({
            ...previousState,
            ...updatedValues
        }))
    }

    const handleNextStep = () => {
        handleChangeState({ step: state.step ? state.step++ : 1 })
    }

    const steps = [
        <FirstStep handleNextStep={handleNextStep} handleChangeState={handleChangeState} state={state} />,
        <SecondStep state={state} handleChangeState={handleChangeState} />
    ]
    return (
        <Card className="border-[#121212]">
            {steps[state.step ?? 0]}

            <div className="mt-[26px]">
                <span className="flex items-center gap-1 text-sub cursor-pointer"
                    onClick={() => handleSetAction("login")}>
                    <Icon icon='uil:user' />
                    Login
                </span>

            </div>
        </Card>
    )
}
export default RegisterForm