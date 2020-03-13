const getInfo = (name: string, age: number, gender: string): string => {
  return `이름: ${name}, 나이: ${age}, 성별: ${gender}`;
};

const val: string = getInfo("명주", 29, "남자");
console.log(val);
export {};
