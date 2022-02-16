export class hobbies{

    name;
    hobi;
    
    constructor(){
        this.name='Ali';

        this.hobi = [
            new hobby("Swimming", 1),
            new hobby("Walking", 1),
            new hobby("Coding", 1),
            new hobby("Driving", 1),
            new hobby("Reading", 1),
            new hobby("Play Game", 1),
             

        ]
    }
    


}


export class hobby{
    
    hobbyName;
    hobbyStatu;
    
    constructor(hobbyName: string,hobbyStatu: number){
        this.hobbyName=hobbyName;
        this.hobbyStatu=hobbyStatu;
    }

     
}