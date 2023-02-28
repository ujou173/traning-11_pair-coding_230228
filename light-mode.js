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

  rootStyle : {
    width : "430px",
    height : "932px",
    border : "1px solid black",
    display : "flex",
    flexDirection : "column",
    alignItems : "center",

    rootFunc : function() {
      console.log(this.width);
    },
  },
}

makeElement.loopFunc();
makeElement.rootStyle.rootFunc();

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

// root style
root.style.width = "430px";
root.style.height = "932px";
root.style.border = "1px solid black";
root.style.display = "flex";
root.style.flexDirection = "column";
root.style.alignItems = "center";

function elementStyle(element, widthValue,) {
  element.style.width = widthValue;
}

// div style
title.textContent = traningData.title;
title.style.textAlign = "center";
title.style.fontWeight = "400";
title.style.fontSize = "24px";
title.style.borderBottom = "2px solid black";
title.style.width = "200px";
title.style.paddingTop = "301px";
title.style.paddingBottom = "10px";

// p style
paragraph.textContent = traningData.paragraph;
paragraph.style.width = "295px";
paragraph.style.paddingTop = "22px";
paragraph.style.fontSize = "12px";
paragraph.style.fontWeight = "400";
paragraph.style.textAlign = "Justify"

// circle style
circle.style.backgroundColor = traningData.color[0];
circle.style.width = "82px";
circle.style.height = "82px";
circle.style.borderRadius = "82px";
circle.style.marginTop = "123px";
circle.style.cursor = "pointer"

