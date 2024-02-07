import { Entity } from "../../entities/Entity";

import { Address } from "../../types/Address.type";

export type UserProps = {
  name: string;
  email: string;
  password: string;
  address: Address;
  createdAt?: Date;
  updatedAt?: Date;
};

export class UserEntity extends Entity<UserProps> {
  constructor(
    public readonly userProps: UserProps,
    id?: string,
  ) {
    super(userProps, id);
    this.userProps.createdAt = this.userProps.createdAt ?? new Date();
  }

  get name() {
    return this.userProps.name;
  }

  get email() {
    return this.userProps.email;
  }

  get password() {
    return this.userProps.password;
  }

  get nameAddress() {
    return this.userProps.address.name;
  }

  get zipCode() {
    return this.userProps.address.zipCode;
  }

  get number() {
    return this.userProps.address.number;
  }

  get city() {
    return this.userProps.address.city;
  }

  get country() {
    return this.userProps.address.country;
  }

  get createdAt() {
    return this.userProps.createdAt;
  }

  get updatedAt() {
    return this.userProps.updatedAt;
  }

  set name(name: string) {
    this.userProps.name = name;
  }

  set email(email: string) {
    this.userProps.email = email;
  }

  private set password(password: string) {
    this.userProps.password = password;
  }

  set nameAddress(nameAddress: string) {
    this.userProps.address.name = nameAddress;
  }

  set zipCode(zipCode: string) {
    this.userProps.address.zipCode = zipCode;
  }

  set number(number: string) {
    this.userProps.address.number = number;
  }

  set city(city: string) {
    this.userProps.address.city = city;
  }

  set country(country: string) {
    this.userProps.address.country = country;
  }
}
