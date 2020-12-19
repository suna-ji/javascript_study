// my solution
// Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];
  let str = "";
  for(let fruit of fruits){
    str += fruit.toString();
  }
  console.log(str);
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
  const newArray = array.slice(2);
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
  const studentWith90 = students.filter((students)=> students.score == 90);
  console.log(studentWith90);
}

// Q6. make an array of enrolled students
{
  const enrolledStudents = students.filter((students) => students.enrolled == true);
  console.log(enrolledStudents);
  
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  const scoreArr = [];
  for(let student of students){
    scoreArr.push(student.score);
  }
  console.log(scoreArr);
}

// Q8. check if there is a student with the score lower than 50
{
  const isLowerThan50 = students.some((students) => students.score < 50);
  console.log(isLowerThan50);
}

// Q9. compute students' average score
{
  let avgScore = 0;
  for(let student of students){
    // console.log(typeof(student.score));
    avgScore += student.score;
  }
  avgScore /= students.length;
  console.log(avgScore);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const scoreArr = [];
  for(let student of students){
    scoreArr.push(student.score);
  }
  const scoreStr = scoreArr.join(', ');
  console.log(scoreStr);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const scoreArr = [];
  for(let student of students){
    scoreArr.push(student.score);
  }
  scoreArr.sort();
  const scoreStr = scoreArr.join(', ');
  console.log(scoreStr);
}
