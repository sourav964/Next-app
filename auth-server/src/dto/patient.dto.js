export class PatientDTO {
  constructor({ id, name,email, age, phone,gender, address }) {
    this.id = id;
    this.name = name;
    this.address = email;
    this.age = age;
    this.phone = phone;
    this.gender = gender;
    this.address = address;
     
  }
}

export class CreatePatientDTO {
  constructor({ name, email,age, phone,gender, address }) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.phone = phone;
    this.gender = gender;
    this.address = address;
  }
}

export class UpdatePatientDTO {
  constructor({ name,email, age, phone,gender, address }) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.phone = phone;
    this.gender = gender;
    this.address = address;
  }
}
