// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join(', and ');
    console.log(result);
    
}

// Q2. make an array out of a string
{
    const fruits = '🍎, 🥝, 🍌, 🍒';
    const fruitsArr = fruits.split(', ');
    console.log(fruitsArr);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
    const array = [1, 2, 3, 4, 5];
    array.reverse();
    console.log(array);
}

// Q4. make new array without the first two elements
{
    const array = [1, 2, 3, 4, 5];
    const newArray = array.slice(0, 2);
    console.log(newArray);
}

class Student {
constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
}
}
const students = [
new Student('A', 29, true, 45),
new Student('B', 28, false, 80),
new Student('C', 30, true, 90),
new Student('D', 40, false, 66),
new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
    // find<S extends T>(predicate: (this: void, value: T, index: number, obj: T[]) => value is S, thisArg?: any): S | undefined;
    // const result = students.find(function(student){
    //     return student.score === 90;
    // });
    const result = students.find((student)=> student.score === 90);
    console.log(result);
}

// Q6. make an array of enrolled students
{
    const result = students.filter((student)=> student.enrolled);
    console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
    const result = students.map((student) => student.score);
    console.log(result);
    // map은 배열안에 들어있는 모든 요소들을 파라미터로 전달한 콜백함수를 호출하면서 콜백함수에 의해 가공된 값으로 대체하는 기능을 한다.
    // ❗️ 콜백함수에서 의미없는 변수를 지정하면 (value와 item과 같은) 이해하기 어려움 ❗️
}

// Q8. check if there is a student with the score lower than 50
{
    // 한명이라도!
    const result = students.some((student)=> student.score < 50);
    console.log(result);
    // 모든 학생!
    const result2 = students.every((student)=> student.score >= 50);
    console.log(!result2);
}

// Q9. compute students' average score
{
    // prev는 우리가 return한 값!
    // curr는 배열 하나씩 순차적으로
    // const result = students.reduce((prev, curr)=>{
    //     console.log('---------------');
    //     console.log(prev);
    //     console.log(curr);
    //     return prev + curr.score;
    // },0);
    const result = students.reduce((prev, curr)=> prev + curr.score, 0);
    console.log(result / students.length);
    // reduce는 배열을 돌면서 값을 누적할 때 쓰인다.
    // reduceRight는 뒤에서부터 돈다.
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
    const result = students
    .map((student) => student.score)
    .filter((score) => score >= 50)
    .join(', ');
    console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
    const result = students
    .map((student) => student.score)
    .sort((a, b) => a - b) // 반대로 정렬하고 싶으면 b-a
    .join(', ');
    console.log(result);
}