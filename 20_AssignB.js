class Empolyee{
    constructor(emp_id,emp_name,emp_dept,emp_salary,emp_company){
        this.emp_id=emp_id;
        this.emp_name =emp_name;
        this.emp_dept=emp_dept;
        this.emp_salary=emp_salary;
        this.emp_company=emp_company;
    }
}
const emp_anil=new Empolyee(22,`Anil`,`IT`,50000,`TCS`);
const emp_radha=new Empolyee(33,`radha`,`HR`,74000,`Wipro`);
const emp_rishi=new Empolyee(55,`rishi`,`Finance`,47000,`TCS`);
const emp_sonali=new Empolyee(66,`sonali`,`Finance`,45000,`Infy`);
const emp_monika=new Empolyee(77,`monika`,`IT`,40000,`Wipro`);
const emp_vinay=new Empolyee(88,`vinay`,`IT`,75000,`TCS`);
const emp_mahi=new Empolyee(99,`mahi`,`HR`,85000,`Infy`);

arrayEmpolyees=[`anil`,`radha`,`rishi`,`soanli`,`monika`,`vinay`,`mahi`]
for (const element of arrayEmpolyees) {
    if (emp_anil.emp_dept==`TCS`) {
        console.log(emp_name,emp_company);
        
    }
    console.log(element);
    
}

