import { makeAutoObservable, runInAction } from "mobx";

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
                words(response);
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

    add=(word) => {
        this.words.push(word);
    };

    remove = (index) => {
        this.words.splice(index, 1);
    };
}