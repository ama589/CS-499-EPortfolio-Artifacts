import {Types} from 'mongoose';

export interface Contact {
    _id: Types.ObjectId;
    firstName: string;
    lastName: string;
    phoneNum: string;
    emailAdd: string;
    physAdd: string;

}
