import {Person} from './Person';

export class Student implements Person {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly email: string,
    public readonly avatar: string,
  ) {}
}
