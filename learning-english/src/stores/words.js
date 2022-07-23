import { makeAutoObservable, runInAction, values } from "mobx";

export default class WordStore {
    words=[];
    isLoaded= false;
    isLoading=false;

    constructor() {
        makeAutoObservable(this);
    }

    loadData = async () => {
        if (this.isLoaded || this.isLoading) {
            return;
        }
    
        this.isLoading = true;

        fetch('http://itgirlschool.justmakeit.ru/api/words')
            .then((response) => response.json())
            .then((response) => {
                this.words=response;
                this.isLoaded=true; 
                })
            .catch((errors) => setError(errors))
            .finally(() => {
                isLoading(false);
        });

        runInAction(() => {
            this.words = response;
            this.isLoaded = true;
            this.isLoading = false;
        });
    };

    add=(value) => {
        this.isLoading=true;
        const newWord = {
            english: value.english,
            russian: value.russian,
            transcription: value.transcription,
            tags:[],
        };
        fetch('/api/word/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify({newWord}),
        })
        .then((response)=> {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Something went wrong')
            }
        })
        .then(() => {
            this.words.push(newWord);
            this.isLoaded=true;
        })
        .catch(() => {
            this.isLoading=false;
        })
    };

    update=() => {
        this.isLoading=true;
        const newWord = {
            english: value.english,
            russian: value.russian,
            transcription: value.transcription,
            tags:[],
        };
        fetch(`/api/word/${id}/update`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify({newWord}),
        })
        .then((response)=> {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Something went wrong')
            }
        })
        .then(() => {
            this.words.push(newWord);
            this.isLoaded=true;
        })
        .catch(() => {
            this.isLoading=false;
        })
    };

    remove = (index) => {
        this.words.splice(index, 1);
    };
}