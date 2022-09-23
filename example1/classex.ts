class Employe{
    private empcode : number=0;
    private empname :string ="";
    readonly  department:string="IT";
    constructor(code:number, name:string){
            this.empcode=code;
            this.empname=name;
            
    }
   display(){
    let num:number=23;
    console.log("empcode="+this.empcode);
    console.log("empname="+this.empname);
    console.log("num="+num);
    console.log("department="+this.department);
   } 
}

let ep=new Employe(1,'Anish');

ep.display();