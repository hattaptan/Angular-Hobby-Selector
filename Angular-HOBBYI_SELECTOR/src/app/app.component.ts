import { Component } from '@angular/core';
import { hobbies,hobby } from './hobbies';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  flag =false;
  myHobi = new hobbies();
  displayAllHobbies(){

    this.flag=true;
    
    
    }
    hideAllHobbies(){
      this.flag=false;
    }
    
  getName(){
    return this.myHobi.name;
}
getHobby(){

  if(this.flag){
    return this.myHobi.hobi;
     
  }
   
    return this.myHobi.hobi.filter(item => item.hobbyStatu !=0);
   
    
}

likedHobbi(){
  return this.myHobi.hobi.filter(item => item.hobbyStatu!=1);
}
unLikedHobbi(){
  return this.myHobi.hobi.filter(item => item.hobbyStatu!=0);
}

addNewHobby(newHobby: string){

     this.myHobi.hobi.push(new hobby(newHobby,1));
 

}





}

