let user = {
    name: "John",
    sizes: {
      height: 182,
      width: 50
    }
  };

  //let clone = Object.assign({}, user); //얕은복사. 프로퍼티가 원시데이터형 {property1 : value1, property2 : value2} 식이면 이걸로도 깊은복사됨.
  let clone = new Object;
  for(let key in user){
    if(typeof user[key] == 'object'){
        console.log(typeof user[key]);
        clone[key] = {}; 
        /*
            clone['size'] 를 먼저 Object 선언 해둬야 clone.sizes['height or width'] = user.sizes['height or width'] 식으로 프로퍼티 추가가 가능하다.
            그렇지 않으면 clone.sizes는 처음에 undefined로 (clone.sizes => undefined) 객체 내 존재하지 않으므로
            clone.sizes.height = user.sizes.height ==> undefined = user.sizes.height
            
            ====> Uncaught TypeError: Cannot set property 'height' of undefined 오류남. user.sizes['height'] 프로퍼티를 undefined에 복사할 순 없으니까.
        */
        for(let keyinner in user[key]){
            clone[key][keyinner] = user[key][keyinner];
        }
    }else{
        clone[key] = user[key];
    }
    };
  alert( user.sizes === clone.sizes ); // false 반환,  다른 객체로 판단.
  
  // 위에서 clone.sizes = {}로 따로 객체 선언 해주었기 때문에 user와 clone은 서로 독립된 height, width 프로퍼티를 갖고 있습니다
  user.sizes.width++;       // 한 객체에서 프로퍼티를 변경함.
  alert(clone.sizes.width); // 51, 다른 객체이므로 값이 변경되지 않음.



  
  function isEmpty(obj){
    //================================================================================
    //  객체를 입력으로 받아 객체 내에 프로퍼티가 존재하면 true를 반환하는 함수.
    //================================================================================
    for(let s in obj){ 
        /*
            객체 내에 프로퍼티가 존재하면 프로퍼티명이 String 반환되고, for문이 true로 동작하므로
            반복문 내로 진입, 빈 객체가 아니라는 의미로 false가 리턴됨.
        */
       return false;
    }
    return true;
}