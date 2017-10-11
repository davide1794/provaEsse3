import {Link, Model} from "./model";

export class Student extends Model {
    firstName: string;
    lastName: string;
    birthYear: string;

    _links: StudentLink = new StudentLink();
}

class StudentLink {
  public self: Link = new Link();
  public student: Link = new Link();

}
