class Employee{
  empName: string;
    empId: number;
    isTransportAvil?:boolean
    constructor(id: number, name:  string ,isTransportAvail?:boolean) {
            this.empName = name;
            this.empId =id;
            this.isTransportAvil=isTransportAvail;
    }
public findEmployees(department:string):any;
    public findEmployees(city:string):any;

    public findEmployees(arg:any):any{
        if(typeof this.isTransportAvil!=='undefined')
        {
            return `empName = ${this.empName}, empId= ${this.empId},isTransformAvail=${this.isTransportAvil},department/city=${arg}`

        }

    else{
        return `empName = ${this.empName}, empId= ${this.empId}, depatment/city${arg}`
    }
    }
}

let obj=new Employee(1,'Pratiksha Mahajan',true)
console.log("-" +obj.findEmployees('Pune'));
console.log("-" +obj.findEmployees('HR'));

let obj2=new Employee(2,'Sushma Motekar')
console.log("-" +obj2.findEmployees('Mumbai'));
console.log("-" +obj2.findEmployees('Electronics'));

