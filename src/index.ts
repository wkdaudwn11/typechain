// interface Human {
//   name: string;
//   age: number;
//   gender: string;
// }

// const person = {
//   name: "명주",
//   age: 29,
//   gender: "남자"
// };

class Human {
  public name: string;
  public age: number;
  public gender: string;
  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const lynn = new Human("Lynn", 18, "female");

const getInfo = (person: Human): string => {
  return `이름: ${person.name}, 나이: ${person.age}, 성별: ${person.gender}`;
};

const val: string = getInfo(lynn);
console.log(val);

export {};
