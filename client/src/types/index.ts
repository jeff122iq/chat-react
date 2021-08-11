import {ComponentType} from "react";
import firebase from "firebase";

export interface IRoute {
    path: string
    Component: ComponentType
}
export type IPublicRoutes = IRoute[]

export interface IDocumentData {
    uid: any,
    displayName: any,
    photoUrl: any,
    text: any,
    createdAt: () => any
}