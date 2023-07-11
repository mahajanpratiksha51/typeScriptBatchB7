export class Employee {
    
    empName: string;
    empId: number;
    isTransportAvil?:boolean
    constructor(id: number, name:  string ,isTransportAvail:boolean) {
            this.empName = name;
            this.empId =id;
            this.isTransportAvil=isTransportAvail;
    }
  
    
}
const info=new Employee(101,'Pratiksha',true)
console.log(`empId:=>${info.empId}, empName:=>${info.empName}, isTranspotAvail:=>${info.isTransportAvil}`);