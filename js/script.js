'use strict';
(function (){


  class Person{
    name = null;
    surname = null;
    yearOfBirth = null;

    constructor(name, surname, yearOfBirth) {
      this.name = name;
      this.surname = surname;
      this.yearOfBirth = yearOfBirth;
    }

    getPersonAge(){
      const today = new Date().getFullYear();
      return today - this.yearOfBirth;
    }

  }

  class Student extends Person{

    _attendance = new Array(10);
    _indexOfAttendance = 0;
    _estimates = new Array(10);
    _indexOfEstimates = 0;

    present(){

     if (this._attendance.length > this._indexOfAttendance){
       this._attendance[this._indexOfAttendance] = true;
       this._indexOfAttendance += 1;
     } else {
       throw new Error('amount of chain is bigger than need to')
     }
     return this._attendance;
    };

    absent(){
      if (this._attendance.length > this._indexOfAttendance){
        this._attendance[this._indexOfAttendance] = false;
        this._indexOfAttendance += 1;
      } else {
        throw new Error('amount of chain is bigger than need to')
      }
      return this._attendance;
    };

    getMark(mark){

      if (mark >= 1 && mark <= 10){
        if (this._estimates.length > this._indexOfEstimates){
          this._estimates[this._indexOfEstimates] = +mark;
          this._indexOfEstimates += 1;
        } else {
          throw new Error('amount of chain is bigger than need to')
        }
      }
      return this._estimates;
    };

    _getAverageAttendance(){
      let averageAttendance = 0;
      averageAttendance = this._attendance.reduce((sum = 0, item) => sum += item) / this._indexOfAttendance;
      return averageAttendance;
    }

    _getAverageGrade(){
      let averageGrade = 0;
      averageGrade = this._estimates.reduce((sum = 0, item) => sum += item) / this._indexOfEstimates;
      return averageGrade;
    }

    summary(){
      if (this._getAverageGrade > 9 && this._getAverageAttendance > 0.9){
        console.log('Ути какой молодчинка!');
      }
      if (this._getAverageGrade > 9 || this._getAverageAttendance > 0.9){
        console.log('Норм, но можно лучше');
      }
      if (this._getAverageGrade < 9 && this._getAverageAttendance < 0.9){
        console.log('Редиска!');
      }
    };


  }

  let student = new Student('alina', 'mytsa', 2000)
  student.present()
  student.present()
  student.absent()
  student.present()
  student.present()
  student.present()
  student.present()
  student.present()
  student.present()
  student.present()
  console.log(student._attendance);

  student.getMark(5);
  student.getMark(6);
  student.getMark(10);
  student.getMark(3);
  student.getMark(10);
  student.getMark(2);
  student.getMark(4);
  student.getMark(6);
  student.getMark(10);
  student.getMark(10);
  console.log(student._estimates);

  console.log(student._getAverageGrade());
  console.log(student)


}())



