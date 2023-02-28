const root = document.getElementById("root");

const makeElement = {
  tagName : ["div", "p", "div"],
  setAttrId : "id",
  setAttrName : ["title", "paragraph", "circle"],
  parent : root,

  maker : function(num) {
    const element = document.createElement(this.tagName[num]);
    element.setAttribute(this.setAttrId, this.setAttrName[num]);
    this.parent.appendChild(element);
  },

  loopFunc : function(){
    for(let i=0; i < this.tagName.length; i++) {
      this.maker(i);
      console.log(i);
    }
  },
}

// makeElement.loopFunc();

// makeElement.maker(0);
// makeElement.maker(1);
// makeElement.maker(2);
// console.dir(root);
// const div = document.createElement("div");
// const p = document.createElement("p");
// const circle = document.createElement("div");

// root.appendChild(div);
// root.appendChild(p);
// root.appendChild(circle);

// const rootStyle = {
//   width : "430px",
//   height : "932px",
//   border : "1px solid black",
//   display : "flex",
//   flexDirection : "column",
//   alignItems : "center",

//   rootFunc : function() {
//     root.style.width = this.width;
//     root.style.height = this.height;
//     root.style.border = this.border;
//     root.style.display = this.display;
//     root.style.flexDirection = this.flexDirection;
//     root.style.alignItems = this.alignItems;
//   },
// }
function rootFunc(rootWidth, rootHeight, rootBorder, rootDisplay, rootFlexDirection, rootAlignItems) {
  root.style.width = rootWidth;
  root.style.height = rootHeight;
  root.style.border = rootBorder;
  root.style.display = rootDisplay;
  root.style.flexDirection = rootFlexDirection;
  root.style.alignItems = rootAlignItems;
}
// rootFunc("430px", "932px", "1px solid black", "flex", "column", "center");

// root style
// root.style.width = "430px";
// root.style.height = "932px";
// root.style.border = "1px solid black";
// root.style.display = "flex";
// root.style.flexDirection = "column";
// root.style.alignItems = "center";

function titleFunc(titleTextContent, titleTextAlign, titleFontWeight, titleFontSize, titleBorderBottom, titleWidth, titlePaddingTop, titlePaddingBottom) {
  title.textContent = titleTextContent;
  title.style.textAlign = titleTextAlign;
  title.style.fontWeight = titleFontWeight;
  title.style.fontSize = titleFontSize;
  title.style.borderBottom = titleBorderBottom;
  title.style.width = titleWidth;
  title.style.paddingTop = titlePaddingTop;
  title.style.paddingBottom = titlePaddingBottom;
}
// titleFunc(traningData.title, "center", "400", "24px", "2px solid black", "200px", "301px", "10px");

// div style
// title.textContent = traningData.title;
// title.style.textAlign = "center";
// title.style.fontWeight = "400";
// title.style.fontSize = "24px";
// title.style.borderBottom = "2px solid black";
// title.style.width = "200px";
// title.style.paddingTop = "301px";
// title.style.paddingBottom = "10px";


function paragraphFunc(paraTextContent, paraWidth, paraPaddingTop, paraFontSize, paraFontWeight, paraTextAlign) {
  paragraph.textContent = paraTextContent;
  paragraph.style.width = paraWidth;
  paragraph.style.paddingTop = paraPaddingTop;
  paragraph.style.fontSize = paraFontSize;
  paragraph.style.fontWeight = paraFontWeight;
  paragraph.style.textAlign = paraTextAlign;
}
// paragraphFunc(traningData.paragraph, "295px", "22px", "12px", "400", "Justify");
// p style
// paragraph.textContent = traningData.paragraph;
// paragraph.style.width = "295px";
// paragraph.style.paddingTop = "22px";
// paragraph.style.fontSize = "12px";
// paragraph.style.fontWeight = "400";
// paragraph.style.textAlign = "Justify"

function circleFunc(circleBackgroundColor, circleWidth, circleHeight, circleBorderRadius, circleMarginTop, circleCursor) {
  circle.style.backgroundColor = circleBackgroundColor;
  circle.style.width = circleWidth;
  circle.style.height = circleHeight;
  circle.style.borderRadius = circleBorderRadius;
  circle.style.marginTop = circleMarginTop;
  circle.style.cursor = circleCursor;
}
// circleFunc(traningData.color[0], "82px", "82px", "82px", "123px", "pointer");
// circle style
// circle.style.backgroundColor = traningData.color[0];
// circle.style.width = "82px";
// circle.style.height = "82px";
// circle.style.borderRadius = "82px";
// circle.style.marginTop = "123px";
// circle.style.cursor = "pointer"

function operate(){
  makeElement.loopFunc();
  rootFunc("430px", "932px", "1px solid black", "flex", "column", "center");
  titleFunc(traningData.title, "center", "400", "24px", "2px solid black", "200px", "301px", "10px");
  paragraphFunc(traningData.paragraph, "295px", "22px", "12px", "400", "Justify");
  circleFunc(traningData.color[0], "82px", "82px", "82px", "123px", "pointer");
}

// 웹페이지 열람 시 함수 실행해서 구조 만들기
operate();

// 동그라미 클릭하면 다크모드로 전환 되도록 이벤트 걸 예정
root.children[2].addEventListener("click", function(){});
// console.dir(circle);