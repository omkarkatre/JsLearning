class Employee{

    constructor(emp_id,emp_name,emp_dept,emp_salary,emp_company){

         this.emp_id=emp_id;

         this.emp_name=emp_name;

         this.emp_dept=emp_dept;

         this.emp_salary=emp_salary;

         this.emp_company=emp_company;

        // countEmp++;

    }

    show()

    {

        console.log(`The employee Details are : ${this.emp_id},${this.emp_name},${this.emp_dept},${this.emp_salary},${this.emp_company}`);

    }

}

const emp_anil=new Employee(22,"Anil","IT",50000,"TCS");

const emp_radha= new Employee(33,"Radha","HR",74000,"Wipro");

const emp_rishi= new Employee(55,"Rishi","Finance",47000,"TCS");

const emp_sonali= new Employee(66,"Sonali","Finance",45000,"Infy");

const emp_monika= new Employee(77,"Monika","IT",40000,"Wipro");

const emp_viny= new Employee(88,"Vinayak","IT",75000,"TCS");

const emp_mahi= new Employee(99,"Mahesh","HR",85000,"Infy");
console.log(`List of employee names `);

const array_emps=[emp_anil.emp_name,emp_radha.emp_name,emp_rishi.emp_name,emp_sonali.emp_name,emp_monika.emp_name,emp_viny.emp_name,emp_mahi.emp_name];
array=array_emps.map((emp)=>{
    return emp;
})
console.log(array);
console.log(`--------------------------------------------`);
console.log(`Names of employee department `);
const array_dept=[emp_anil.emp_dept,emp_radha.emp_dept,emp_rishi.emp_dept,emp_sonali.emp_dept,emp_monika.emp_dept,emp_viny.emp_dept,emp_mahi.emp_dept];
array=array_dept.map((emp)=>{
    return emp;
})
console.log(array);
console.log(`--------------------------------`);
console.log(`employee id `);
const array_id=[emp_anil.emp_id,emp_radha.emp_id,emp_rishi.emp_id,emp_sonali.emp_id,emp_monika.emp_id,emp_viny.emp_id,emp_mahi.emp_id];
array=array_id.map((emp)=>{
    return emp;
})
console.log(array);