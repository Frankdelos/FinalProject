export interface IUserData {
    mealCost?: number;
    amountInParty?: number;
    givingTip?: boolean;
    tipAmount?: number;
    userNames?: string;
}

export class UserData {

    mealCost?: number;
    amountInParty?: number;
    tipAmount?: number;
    userNames?: string;

    constructor(userData: IUserData) {
        Object.assign(this, userData);
    }

}

export class RussianData {
    russianBillTotal?: number;
    russianTip?: number;
    russianNames?: string;
}