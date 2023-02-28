console.dir(root.children[2]);
console.dir(root.children);
let toggleSwitch = 0;

// if(toggleSwitch === 0) {
//   operateLight();
// } else {
//   console.log("dark")
// }

// 이유는 아직 모르겠으나 에러가 남, root.children[2]의 속성을 읽을 수 없다고 나옴
root.children[2].addEventListener("click", function() {
  if(toggleSwitch === 0) {
    toggleSwitch = toggleSwitch + 1;
    console.log(toggleSwitch);
  } else {
    operateLight();
    toggleSwitch = 0;
    console.log(toggleSwitch);
  }
});

// root.children[2].addEventListener("click", change());
// function change() {
//   if(toggleSwitch === 0) {
//     operateLight();
//     toggleSwitch = toggleSwitch + 1;
//   } else {
//     console.log("dark")
//     toggleSwitch = 0;
//   }
// }
