export class Tag {


  static readonly ANGULAR = new Tag('Angular', 'red');
  static readonly PYTHON = new Tag('Python', 'blue');
  static readonly JAVA = new Tag('Java', 'orange');
  static readonly NODE = new Tag('Node JS', 'green');
  static readonly JAVASCRIPT = new Tag('JavaScript', 'pink');
  static readonly JENKINS = new Tag('Jenkins', 'grey');
  static readonly DOCKER = new Tag('Docker', 'lightblue');
  static readonly ANSIBLE = new Tag('Ansible', 'darkred');

  constructor(private readonly key: string, public readonly color: string) {
  }

  toString() {
    return this.key;
  }
}
