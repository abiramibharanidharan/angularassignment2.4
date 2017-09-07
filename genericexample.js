var Company = (function () {
    function Company() {
        this.employee = [];
    }
    return Company;
}());
var ManagerDetail = { name: "Gopal" };
var LaberDetail = { name: "Ram", workHour: 8 };
var JohnsonCompany = new Company();
JohnsonCompany.employee.push(ManagerDetail);
console.log("Manager Detail");
console.log(JohnsonCompany.employee[0]);
var BabyCompany = new Company();
BabyCompany.employee.push(LaberDetail);
console.log("Laber Detail");
console.log(BabyCompany.employee[0]);
