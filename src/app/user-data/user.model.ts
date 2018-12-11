export interface IUserData {
    mealCost?: number;
    amountInParty?: number;
    tipAmount?: number;
    userNames?: string;
    customTip?: string;
}

export class UserData {

    mealCost?: number;
    amountInParty?: number;
    givingTip?: boolean;
    tipAmount?: number;
    userNames?: string;

    constructor(userData: IUserData) {
        Object.assign(this, userData);
    }


}

export class RussianData {
    mealCost?: number;
    amountInParty?: number;
    tipAmount?: number;
    userNames?: string;
    russianWinner?: string;
}
