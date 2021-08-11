import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../content/routes";
import {CHAT_ROUTE, LOGIN_ROUTE} from "../utils/constants";
import {useAuthState} from "react-firebase-hooks/auth";
import {FC, useContext} from "react";
import {Context} from "../index";

const AppRouter = ():JSX.Element => {
    const { auth } = useContext(Context)
    const [user] = useAuthState(auth)

    return (
        <BrowserRouter>
            {user ?
                <Switch>
                    {privateRoutes.map(({path, Component}) => {
                        return (
                            <Route key={path} path={path} component={Component} exact/>
                        )
                    },
                    )}
                    <Redirect to={CHAT_ROUTE}/>
                </Switch>
                :
                <Switch>
                    {publicRoutes.map(({path, Component}) => {
                            return (
                                <Route key={path} path={path} component={Component} exact/>
                            )
                        },
                    )
                    }
                    <Redirect to={LOGIN_ROUTE}/>
                </Switch>
            }
        </BrowserRouter>
    );
};

export default AppRouter