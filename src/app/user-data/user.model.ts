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

    constructor(UserData: IUserData) {
        Object.assign(this, UserData);
    }

}