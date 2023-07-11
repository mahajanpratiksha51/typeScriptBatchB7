"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
var Employee = /** @class */ (function () {
    function Employee(id, name, isTransportAvail) {
        this.empName = name;
        this.empId = id;
        this.isTransportAvil = isTransportAvail;
    }
    return Employee;
}());
exports.Employee = Employee;
var info = new Employee(101, 'Pratiksha', true);
console.log("empId:=>".concat(info.empId, ", empName:=>").concat(info.empName, ", isTranspotAvail:=>").concat(info.isTransportAvil));
