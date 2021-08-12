import React, {ChangeEvent, FC, useContext, useEffect, useState} from "react";
import Page from "./Page";
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";
import "../styles/chat-content.css"
import firebase from "firebase";
import {IDocumentData} from "../types";

const Chat: FC = () => {
    const {auth, firestore} = useContext(Context)
    const [user] = useAuthState(auth)
    const [value, setValue] = useState<string>("")
    const [messages, setMessages] = useState<IDocumentData[]>([])

    useEffect(() => {
        firestore.collection('messages').get()
            .then(
                querySnapshot => {
                    const message = querySnapshot.docs.map((item) => {
                        return item.data()
                    });
                    setMessages(message as IDocumentData[])
                });
    }, [])

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
            firestore.collection('messages').get({source: 'default'})
                .then(
                    querySnapshot => {
                        const message = querySnapshot.docs.map((item) => {
                            return item.data()
                        });
                        setMessages(message as IDocumentData[])
                    });
        }
        setValue("")
    }

    return (
        <Page>
            <div className="chat-content container d-flex flex-column">
                <div className="chat overflow-auto">
                    {
                        messages.map((item, idx) => {
                            return (
                                <div className="container d-flex flex-column my-4" key={idx}>
                                    <div className="container d-flex p-0">
                                        <div className="user-image">
                                            <img src={item.photoUrl} alt=""/>
                                        </div>
                                        <p>{item.displayName}</p>
                                    </div>
                                    <div className="message">
                                        {item.text}
                                    </div>
                                </div>
                            )
                        })
                    }
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