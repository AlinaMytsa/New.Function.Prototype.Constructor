'use strict';
(function (){

  function Student(name, surname, yearOfBirth){
    this.name = name;
    this.surname = surname;
    this.yearOfBirth = yearOfBirth;

    this.attendance = new Array(10);
    this.indexOfAttendance = 0;
    this.estimates = new Array(10);
    this.indexOfEstimates = 0;
  }

  Student.prototype.getStudentAge = function (){
    const today = new Date().getFullYear();
    return today - this.yearOfBirth;
  };

  Student.prototype.present = function (){
    if (this.attendance.length > this.indexOfAttendance){
     this.attendance[this.indexOfAttendance] = true;
     this.indexOfAttendance += 1;
   } else {
     throw new Error('amount of chain is bigger than need to')
   }
   return this.attendance;
  };

  Student.prototype.absent = function (){
    if (this.attendance.length > this.indexOfAttendance){
      this.attendance[this.indexOfAttendance] = false;
      this.indexOfAttendance += 1;
    } else {
      throw new Error('amount of chain is bigger than need to')
    }
    return this.attendance;
  };

  Student.prototype.getMark = function (mark){
    if (mark >= 1 && mark <= 10){
      if (this.estimates.length > this.indexOfEstimates){
        this.estimates[this.indexOfEstimates] = +mark;
        this.indexOfEstimates += 1;
      } else {
        throw new Error('amount of chain is bigger than need to')
      }
    }
    return this.estimates;
  };

  Student.prototype.summary = function (){
    let averageGrade = 0;
    averageGrade = this.estimates.reduce((sum = 0, item) => sum + item) / this.indexOfEstimates;

    let averageAttendance = 0;
    averageAttendance = this.attendance.reduce((sum = 0, item) => sum + item) / this.indexOfAttendance;


    const bestGrade = 'Ути какой молодчинка!';
    const normalGrade = 'Норм, но можно лучше';
    const worstGrade = 'Редиска!';

    let result = null;

    if (averageGrade >= 9 && averageAttendance >= 0.9){
      result = bestGrade;
    }
    if (averageGrade > 9 || averageAttendance > 0.9){
      result = normalGrade;
    }
    if (averageGrade < 9 && averageAttendance < 0.9){
      result = worstGrade;
    }
    return result
  };

  let stud = new Student('john', 'smith', 2000);
  stud.present();
  stud.absent();
  stud.absent();
  stud.absent();
  stud.absent();
  stud.absent();
  stud.absent();
  stud.absent();
  stud.absent();
  stud.absent();

  stud.getMark(2);
  stud.getMark(2);
  stud.getMark(2);
  stud.getMark(2);
  stud.getMark(2);
  stud.getMark(2);
  stud.getMark(2);
  stud.getMark(2);
  stud.getMark(2);
  stud.getMark(10);

  console.log(stud.summary());
  console.log(stud);
}())



