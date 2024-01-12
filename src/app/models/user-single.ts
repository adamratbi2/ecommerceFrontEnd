export class UserSingle{
   private _idUser:number;
   private _nameUser:string;
   private _lastNameUser:string;
   private _age:string;
   private _gender:string;
   private _email:string;
   private _etatCivil:string;
   private _passeword:string;


  constructor(idUser: number, nameUser: string, lastNameUser: string, age: string, gender: string, email: string, addresse: string, passeword: string) {
    this._idUser = idUser;
    this._nameUser = nameUser;
    this._lastNameUser = lastNameUser;
    this._age = age;
    this._gender = gender;
    this._email = email;
    this._etatCivil = addresse;
    this._passeword = passeword;
  }


  get idUser(): number {
    return this._idUser;
  }

  set idUser(value: number) {
    this._idUser = value;
  }

  get nameUser(): string {
    return this._nameUser;
  }

  set nameUser(value: string) {
    this._nameUser = value;
  }

  get lastNameUser(): string {
    return this._lastNameUser;
  }

  set lastNameUser(value: string) {
    this._lastNameUser = value;
  }


  get age(): string {
    return this._age;
  }

  set age(value: string) {
    this._age = value;
  }

  get gender(): string {
    return this._gender;
  }

  set gender(value: string) {
    this._gender = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get etatCivil(): string {
    return this._etatCivil;
  }

  set etatCivil(value: string) {
    this._etatCivil = value;
  }

  get passeword(): string {
    return this._passeword;
  }

  set passeword(value: string) {
    this._passeword = value;
  }
}
