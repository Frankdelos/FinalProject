export interface IUserData {
    mealCost?: number;
    amountInParty?: number;
    tipAmount?: number;
    userNames?: string;
    editing?: boolean;
}

export class UserData {

    public mealCost?: number;
    public amountInParty?: number;
    public givingTip?: boolean;
    public tipAmount?: number;
    public userNames?: string;
    public editing?: boolean;

    constructor(userData: IUserData) {
        // userData.editing = this.setState(userData);
        Object.assign(this, userData);
    }
    // setState(userData: IUserData) {

    //     if (userData == null || Object.keys(userData).length == 0) {
    //         return true;
    //     }
    //     let editing = false;
    //     Object.keys(userData).forEach((key) => {
    //         console.log('from my setState...', userData[key])
    //         if (userData [key] == null) {
    //             editing = true;
    //         }
    //         console.log();
            
    //     });
    //     return editing;
    // }

}

export class RussianData {
    russianBillTotal?: number;
    russianTip?: number;
    russianNames?: string;
}
