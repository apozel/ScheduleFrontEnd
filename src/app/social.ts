export class Social {
  birthAddress: String;
  birthDate: Date;
  birthZipCode: number;
  firstName: string;
  gender: boolean;
  id: number;
  lastName: String;
  phoneNumber: number;

  constructor(social: any) {
    this.birthAddress = social.birthAddress;
    this.birthDate = social.birthDate;
    this.birthZipCode = social.birthZipCode;
    this.firstName = social.firstName;
    this.gender = social.gender;
    this.id = social.id;
    this.lastName = social.lastName;
    this.phoneNumber = social.phoneNumber;
  }

}
