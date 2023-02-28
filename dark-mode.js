// let root = document.getElementById('root');
    root.style.cssText="width:430px; height:932px; position:absolute; background-color:darkgray;" //색표시 숫자로 적용하는 법을 잘모르겠습니다. 
    
    for(let i = 0; i<4; i++) {
    let makeDiv =document.createElement('div');
    // makeDiv.textContent= i + "번째 root의 자식";//구분목적
    root.appendChild(makeDiv);
   //root의 자식인 div 4구역을 만들자 
   if(i===0) {  // 1  div 
    makeDiv.style.cssText="width=147px; height:29px; font-size: 24px; position:absolute; left:141px; top:301px "
    makeDiv.textContent="Lorem Ipsum"
   } 
   else if(i === 1){ // bar 큰제목밑에 흰바가 색깔이 왜 안나올까? 
    makeDiv.style.cssText="color:tomato; width=199px; height:2px;  position:absolute; left: 115px; top:340px; " 
   }
   else if (i=== 2){   // 본문부분 
    makeDiv.style.cssText="width=295px; height:186px; position:absolute; left:67px; top:364px; right:68px; font-size:12px; text-align:justify"
    makeDiv.textContent="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
   }
   else{  // 동그라미 4번째 div 
    makeDiv.style.cssText="width:82px; height:82px; background-color:white; border-radius: 41px; margin-top:673px;margin-left:174px "
  }
  
    }