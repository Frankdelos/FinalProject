export interface IUserData {
    mealCost: number;
    amountInParty: number;
    givingTip: boolean;
    tipAmount?: number;

}

export class UserData {

    mealCost?: number;
    amountInParty?: number;
    givingTip?: boolean;
    tipAmount?: number;

    constructor(userData: IUserData) {
        Object.assign(this, userData);
    }

}