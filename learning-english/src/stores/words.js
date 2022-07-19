import { makeAutoObservable } from "mobx";

export default class WordStore {
    word=[];

    constructor() {
        makeAutoObservable(this);
    }

    add=() => {
        
    }
}