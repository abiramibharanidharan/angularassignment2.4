interface IManager
{
  name:String
}
interface ILaber
{
  name:string
  workHour:number
}
class Company<T>
{
  employee:T[]
  constructor()
  {
    this.employee=[]
  }
}
let ManagerDetail:IManager={name:"Gopal"}
let LaberDetail:ILaber={name:"Ram",workHour:8}

let JohnsonCompany:Company<IManager>=new Company<IManager>()
JohnsonCompany.employee.push(ManagerDetail)
console.log("Manager Detail")
console.log(JohnsonCompany.employee[0])

let BabyCompany:Company<ILaber>=new Company<ILaber>()
BabyCompany.employee.push(LaberDetail)
console.log("Laber Detail")
console.log(BabyCompany.employee[0])
