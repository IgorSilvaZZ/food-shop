import { describe, beforeEach, it } from "vitest";
import { faker } from "@faker-js/faker";

import { UserEntity, UserProps } from "../User.entity";

import { userBuilder } from "./helpers/user-data-builder";

describe("User Entity unit tests", () => {
  let props: UserProps;
  let sut: UserEntity;

  beforeEach(() => {
    props = userBuilder();
    sut = new UserEntity(props);
  });

  it("Constructor Method", () => {
    expect(sut.userProps.name).toEqual(props.name);
    expect(sut.userProps.email).toEqual(props.email);
    expect(sut.userProps.password).toEqual(props.password);
    expect(sut.userProps.address).toStrictEqual(props.address);
    expect(sut.userProps.createdAt).toBeInstanceOf(Date);
    expect(sut.userProps.updatedAt).toBeInstanceOf(Date);
  });

  it("Getter of name field", () => {
    expect(sut.userProps.name).toBeDefined();
    expect(sut.userProps.name).toEqual(props.name);
    expect(typeof sut.userProps.name).toBe("string");
  });

  it("Setter of name field", () => {
    const name = faker.person.fullName();

    sut["name"] = name;

    expect(sut.userProps.name).toEqual(name);
    expect(typeof sut.userProps.name).toBe("string");
  });

  it("Getter of email field", () => {
    expect(sut.userProps.email).toBeDefined();
    expect(sut.userProps.email).toEqual(props.email);
    expect(typeof sut.userProps.email).toBe("string");
  });

  it("Setter of email field", () => {
    const email = faker.internet.email();

    sut["email"] = email;

    expect(sut.userProps.email).toEqual(email);
    expect(typeof sut.userProps.email).toBe("string");
  });

  it("Getter of password field", () => {
    expect(sut.userProps.password).toBeDefined();
    expect(sut.userProps.password).toEqual(props.password);
    expect(typeof sut.userProps.password).toBe("string");
  });

  it("Setter of password field", () => {
    const password = faker.internet.password();

    sut["password"] = password;

    expect(sut.userProps.password).toEqual(password);
    expect(typeof sut.userProps.password).toBe("string");
  });

  it("Getter of name address field", () => {
    expect(sut.userProps.address.name).toBeDefined();
    expect(sut.userProps.address.name).toEqual(props.address.name);
    expect(typeof sut.userProps.address.name).toBe("string");
  });

  it("Setter of name address field", () => {
    const nameAddress = faker.location.street();

    sut["nameAddress"] = nameAddress;

    expect(sut.userProps.address.name).toEqual(nameAddress);
    expect(typeof sut.userProps.address.name).toBe("string");
  });

  it("Getter of createdAt field", () => {});
});
