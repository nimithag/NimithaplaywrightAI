let st_name: string = "sai@gmail.com"
 
let st_role: number = 56
 
console.log("Student name is :- "+ st_name )
console.log("Student Role Number:- "+ st_role)


// 2//Another starts here Class

class ATM_1 {
 
    //Method
    Balance_Enqire() {
 
        console.log("Available Bal : 15000 ")
 
    }
 
    MiniStatement() {
 
        console.log(" Take your statemenent ")
 
    }
    withdraw() {
        console.log("Your Withdraw Amount : 5000rs  ")
 
    }
 
    pin_generator(){
 
         console.log("Please genarate your pin number")
    }
 
}
 
//Object formula ===  const variable = new classname();
const screen_ = new ATM_1();
screen_.withdraw()
 
 

// 3 Another starts here

class Tv{
 
 
    Maa_tv(){
 
        console.log("Salaar Movie is showing")
 
    }
 
    Zee_tv(){
 
       
        console.log("This is from zee tv")
    }
 
   
    E_tv(){
 
         console.log("This is from E tv")
    }
 
}
 
const remote=new Tv();
 
remote.Maa_tv()
 

