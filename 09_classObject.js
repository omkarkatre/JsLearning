class vechicle
{
    constructor(NameofVechicle,colour,model,FuelType,EmissionNorm,company)
    {
    this.NameofVechicle=NameofVechicle;
   this.colour=colour;
   this.model=model;
   this.FuelType=FuelType;
   this.EmissionNorm=EmissionNorm;
   this.company=company;
  
    }
    show(){
        console.log(`Name of vechicle:${this.NameofVechicle},colour of vechicle:${this.colour},Fueltype of vechicle:${this.FuelType},Emission  type of vechicle:${ this.EmissionNorm},Name of company${this.company}`);

    }
    
    

}
let stew=new vechicle(`creta`,`white`,`VANQ60`,`petrol`,`BSIV`,`Hundai`);
let fot=new vechicle(`Thor`,`Red`,`VANQ61`,`petrol`,`BSIV`,`TATA`);
let got=new vechicle(`creta`,`Black`,`VANQ62`,`petrol`,`BSIV`,`Mahindra`);
let not=new vechicle(`creta`,`white`,`VANQ63`,`petrol`,`BSIV`,`TATA`);
let set=new vechicle(`creta`,`white`,`VANQ64`,`petrol`,`BSIV`,`Nessan`);
let arrayofVechicle=[stew,fot,got,not,set]
console.log(`Traversing array`);
for (const vechicle of arrayofVechicle) 
  {
    vechicle.show();
    
  }
  console.log(`---------Step 2-------------`);
  class college {
    constructor(Name,Year,location,founderName){
    this.collegeName=Name;
    this.Year=Year;
    this.location=location;
    this.founderName=founderName;
    }
    go(){
        console.log(`${this.Name},${this.Year},${this.Year},${this.location},${this.founderName}`);
    }
  }
  let cope=new college(`COPE`,`1970`,`PUNE`,`YOUGESH MUSKE`);
  let MJ=new college(`MJ`,`1970`,`JALGAON`,`MOONJE JETHA `);
  let NMC=new college(`NMC`,`1980`,`ENDROL`,`S.R. PATIL`);
  let SHIVAJI=new college(`SHIVSJI`,`2005`,`MUMBAI`,`RAM BHOSALE`);
  let arrayno=[`cope`,`MJ`,`NMC`,`SHIVAJI`]
  console.log(`-----------Tranversing array-------------------`);
  //for (const college of arrayno) {
        //college.go();
  //}
 