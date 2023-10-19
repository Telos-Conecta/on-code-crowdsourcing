'use client'
import React from "react";
import LoginForm from "./components/LoginForm";
import LoginSidebarImage from "./components/LoginSideBarImage";
import RegisterForm from "./components/RegisterForm";

export type LoginPageActionTypes = 'login' | 'register'

type LoginPageAction = {
    component: React.ReactNode
}

type LoginPageActions = {
    [key in LoginPageActionTypes]: LoginPageAction
}

type LoginPageState = {
    actionType: LoginPageActionTypes
}

export default function Home() {
    const [state, setState] = React.useState<LoginPageState>({
        actionType: "login"
    })

    const handleSetAction = (action: LoginPageActionTypes) => {
        setState({ actionType: action })
    }

    const actions: LoginPageActions = {
        login: {
            component: <LoginForm handleSetAction={handleSetAction} />
        },
        register: {
            component: <RegisterForm handleSetAction={handleSetAction}  />
        }
    }

    return (
        <main className="flex h-screen">
            <LoginSidebarImage />
            <div className="flex-1 flex items-center justify-center">
                {actions[state.actionType].component}
            </div>
        </main>
    )
}
