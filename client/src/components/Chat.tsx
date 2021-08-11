import React, {ChangeEvent, ChangeEventHandler, FC, useCallback, useContext, useState} from "react";
import Page from "./Page";
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";
import "../styles/chat-content.css"
import {useCollectionData} from "react-firebase-hooks/firestore";
import firebase from "firebase";
import Loader from "./Loader";

const Chat: FC = () => {
    const {auth, firestore} = useContext(Context)
    const [user] = useAuthState(auth)
    const [value, setValue] = useState<string>("")

    // const [messages, loading] = useCollectionData(
    //     firestore.collection("messages").orderBy('createdAd')
    // )
    // if (loading) {
    //     return <Loader/>
    // }

    const messages = firestore.collection('messages').get()
        .then(
            querySnapshot => {
                querySnapshot.docs.map(doc => {
                    console.log('LOG 1', doc.data());
                })});

    console.log(Object.keys(messages));

    const sendMessage = async (e: any) => {
        e.preventDefault()
        if (user) {
            await firestore.collection('messages').add(
                {
                    uid: user.uid,
                    displayName: user.displayName,
                    photoUrl: user.photoURL,
                    text: value,
                    createdAt: firebase.firestore.FieldValue.serverTimestamp()
                }
            )
        }
        setValue("")
    }
    return (
        <Page>
            <div className="chat-content container d-flex flex-column">
                <div className="chat">
                    {/*{Object.keys(messages.map(message =>*/}
                    {/*        <div className="container d-flex direction-column">*/}
                    {/*            <p>{messages.displayName}</p>*/}
                    {/*            <div className="message">*/}
                    {/*                {messages.text}*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*))}*/}
                </div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="w-100">
                        <form className="form-inline my-2 my-lg-0 d-flex">
                            <input
                                className="form-control mr-sm-2 w-100"
                                type="search"
                                placeholder="Message"
                                aria-label="Search"
                                value={value}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
                            />
                            <button onClick={sendMessage} className="btn btn-outline-success my-2 my-sm-0"
                                    type="submit">Submit
                            </button>
                        </form>
                    </div>
                </nav>
            </div>
        </Page>
    );
}

export default Chat;