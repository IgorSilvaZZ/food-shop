import { faker } from "@faker-js/faker";

import { UserProps } from "../../User.entity";

// Transformando todas propriedades em opcionais
type Override = Partial<UserProps>;

export function userBuilder(userPropsOverride: Override = {}): UserProps {
  return {
    name: userPropsOverride.name ?? faker.person.fullName(),
    email: userPropsOverride.email ?? faker.internet.email(),
    password: userPropsOverride.password ?? faker.internet.password(),
    address: {
      name: userPropsOverride.address?.name ?? faker.location.street(),
      zipCode: userPropsOverride.address?.zipCode ?? faker.location.zipCode(),
      city: userPropsOverride.address?.city ?? faker.location.city(),
      country: userPropsOverride.address?.city ?? faker.location.country(),
      number:
        userPropsOverride.address?.number ?? faker.number.int().toString(),
    },
    updatedAt: userPropsOverride.updatedAt ?? new Date(),
    createdAt: userPropsOverride.createdAt ?? new Date(),
  };
}
