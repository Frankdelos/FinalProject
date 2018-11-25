

export class LocalStorageService<T> {

    constructor(private key: string) {

    }

    saveItemsToLocalStorage(userdatas: Array<T>) {
        const savedData = localStorage.setItem(this.key, JSON.stringify(userdatas));
        return savedData;
    }

    getItemsFromLocalStorage() {
        const savedData = JSON.parse(localStorage.getItem(this.key));
        return savedData;
    }

    clearItemFromLocalStorage() {
        localStorage.clear();
    }





}