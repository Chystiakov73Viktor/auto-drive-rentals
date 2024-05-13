import{u as o,j as t}from"./index-Ck1Bir8_.js";import{d as e,S as i}from"./autoCar-HJ7dq6xU.js";const a=o.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: start;
  background: linear-gradient(to bottom, #0d0c0b, #626161);

  .containerFirstColor {
    width: 100px;
    height: 100px;
    background: linear-gradient(to bottom, #d76432, #f74600);
    clip-path: polygon(0% 0%, -75% 100%, 82% 75%, 100% -44%);
  }

  .containerSecondColor {
    width: 100px;
    height: 100px;
    background: linear-gradient(to bottom, #dc470d, #cb8f77);
    clip-path: polygon(-95% 87%, 45% 41%, 100% -100%, 100% 100%);
  }

  .containerImgColor {
    flex: 1;
    background: linear-gradient(to bottom, #dc470d, #cb8f77);
    clip-path: polygon(8% 44%, 16% 100%, 100% 100%, 100% -16%);
  }

  .containerImg {
    flex: 1;
    clip-path: polygon(13% 47%, 20% 100%, 100% 100%, 100% -11%);
    height: auto;
    overflow: hidden;
  }

  .carImg {
    width: 100%;
    height: auto;
  }

  .titleFirst {
    position: absolute;
    top: 50%;
    font-weight: 500;
    font-size: 48px;
    line-height: 117%;
    letter-spacing: -0.02em;
    color: #fff;
  }
`,r=()=>t.jsxs(a,{children:[t.jsx("div",{className:"containerFirstColor",children:t.jsx("div",{className:"containerSecondColor"})}),t.jsx("div",{className:"containerImgColor",children:t.jsx("div",{className:"containerImg",children:t.jsx("img",{className:"carImg",src:e,alt:"car"})})}),t.jsx("h1",{className:"titleFirst",children:"Looking for a vehicle? You’re at the right place."})]});function c(){return t.jsx(i,{className:"carsHomeSection",titleClassName:"titleCatalog",children:t.jsx(r,{})})}export{c as default};
