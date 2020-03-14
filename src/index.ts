interface Human {
  name: string;
  age: number;
  gender: string;
}

const person = {
  name: "명주",
  age: 29,
  gender: "남자"
};

const getInfo = (person: Human): string => {
  return `이름: ${person.name}, 나이: ${person.age}, 성별: ${person.gender}`;
};

const val: string = getInfo(person);
console.log(val);

export {};
