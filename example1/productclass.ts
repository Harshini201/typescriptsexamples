class Products{
    private pid : number= 0;
    private pname :string ="";
     readonly price:number= 200;
    constructor(code:number, name:string){
            this.pid=code;
            this.pname=name;
            
    }
   display(){
    let qty =1;
    console.log("bill=" +this.price*qty );
     
  
   } 
}

let con=new Products(1,'Bag');

con.display();