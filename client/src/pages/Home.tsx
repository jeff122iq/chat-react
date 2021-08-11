import Page from "../components/Page";
import {Button} from "reactstrap";
import React, {useContext} from "react";
import Container from "../components/Container";
import {Context} from "../index";
import firebase from "firebase";

const Home = ():JSX.Element => {

    const { auth } = useContext(Context)

    const login = async ():Promise<void> => {
        const provider = new firebase.auth.GoogleAuthProvider()
        const user = await auth.signInWithPopup(provider)
        console.log(user)
    }

    return (
        <Page>
            <div className="d-flex justify-content-center my-lg-5">
                <Container>
                    <h1 className="display-3">Добро пожаловать!&#128527;</h1>
                    <p className="lead">В это чате обсуждаем пошлые и эротичные темы в натуральной и юмористичной
                        форме.</p>
                    <hr className="my-2"/>
                    <p>Что бы войти - просто сделай Log-in со своего аккаунта Google.</p>
                    <p className="lead">
                        <Button onClick={() => login()} color="secondary" className="d-flex justify-content-between align-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="bi bi-google" viewBox="0 0 16 16">
                                <path
                                    d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
                            </svg>
                            <p className="mx-5 mb-0">Log-in</p>
                        </Button>
                    </p>
                </Container>
            </div>
        </Page>
    );
};

export default Home