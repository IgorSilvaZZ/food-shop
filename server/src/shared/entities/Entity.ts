import { v4 as uuid } from "uuid";

export abstract class Entity<PropsEntity = any> {
  public readonly _id: string;
  public readonly propsEntity: PropsEntity;

  constructor(propsEntity: PropsEntity, id?: string) {
    this.propsEntity = propsEntity;
    this._id = id || uuid();
  }

  get id() {
    return this._id;
  }
}
