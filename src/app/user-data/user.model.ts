import { IPerson } from '../russian-page/russian-page.component';

export interface IUserData {
    mealCost?: number;
    amountInParty?: number;
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

export class Person {
    russianBillTotal?: number;
    russianTip?: number;
    russianNames: string;

    constructor(person: IPerson) {
        Object.assign(this, person);
    }
}   