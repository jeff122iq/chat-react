import React, {useContext} from 'react';
import AppRouter from "./components/AppRouter";
import {Context} from "./index";
import {useAuthState} from "react-firebase-hooks/auth";
import Loader from "./components/Loader";

function App():JSX.Element {
    const { auth } = useContext(Context)
    const [user, loading, error] = useAuthState(auth)

    if (loading) {
        return <Loader/>
    }
  return (
    <div>
      <AppRouter/>
    </div>
  );
}

export default App;
