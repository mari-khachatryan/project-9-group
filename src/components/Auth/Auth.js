import { useMemo } from "react"
import { useAuthTab } from "../../contexts/AuthTabProvider"
import { AUTH_TABS } from "../../helpers/constants"
import Login from "../Login/Login"
import Register from "../Register/Register"
import classes from "./Auth.module.css"
const [LOGIN, REGISTRATION] = AUTH_TABS

const authComponent = {
    [LOGIN]: <Login />,
    [REGISTRATION]: <Register />
}

const Auth = () => {
    const { authRoute } = useAuthTab()

    const MainComponent = useMemo(() => authComponent[authRoute], [authRoute])
    return (
        <div className={classes.authStyle}>
            {MainComponent}
        </div>
    )
}

export default Auth