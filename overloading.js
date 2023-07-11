var Employee = /** @class */ (function () {
    function Employee(id, name, isTransportAvail) {
        this.empName = name;
        this.empId = id;
        this.isTransportAvil = isTransportAvail;
    }
    Employee.prototype.findEmployees = function (arg) {
        if (typeof this.isTransportAvil !== 'undefined') {
            return "empName = ".concat(this.empName, ", empId= ").concat(this.empId, ",isTransformAvail=").concat(this.isTransportAvil, ",department/city=").concat(arg);
        }
        else {
            return "empName = ".concat(this.empName, ", empId= ").concat(this.empId, ", depatment/city").concat(arg);
        }
    };
    return Employee;
}());
var obj = new Employee(1, 'Pratiksha Mahajan', true);
console.log("-" + obj.findEmployees('Pune'));
console.log("-" + obj.findEmployees('HR'));
var obj2 = new Employee(2, 'Sushma Motekar');
console.log("-" + obj2.findEmployees('Mumbai'));
console.log("-" + obj2.findEmployees('Electronics'));
