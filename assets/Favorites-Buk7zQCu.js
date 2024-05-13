import{u as n,j as e,b as t,L as d}from"./index-Ck1Bir8_.js";import{S as c}from"./autoCar-HJ7dq6xU.js";import{b as l,c as g,F as m,P as u,C as x}from"./Pagination-Bn3xJJCB.js";const h="/auto-drive-rentals/assets/car-Uw7OWVM2.jpg",j=n.div`
  .containerImg {
    width: 100%;
    height: 700px;
    overflow: hidden;
  }

  .defaultImg {
    width: 100%;
    height: 100%;
    border-radius: 14px;
    background: #f3f3f2,
      linear-gradient(
        180deg,
        rgba(18, 20, 23, 0.5) 0%,
        rgba(18, 20, 23, 0.5) 100%
      );
    object-fit: cover;
  }
`,f=()=>e.jsx(j,{children:e.jsx("div",{className:"containerImg ",children:e.jsx("img",{className:"defaultImg",src:h,alt:"placeholder"})})});function b(){const a=t(l),s=t(g),r=12,i=o=>e.jsx(x,{dataCard:o});return e.jsx(c,{className:"carsListSection",titleClassName:"titleCatalog",children:s?e.jsx(d,{}):e.jsx(e.Fragment,{children:a.length!==0?e.jsxs(e.Fragment,{children:[e.jsx(m,{}),e.jsx(u,{data:a,itemsPerPage:r,renderCardList:i})]}):e.jsx(f,{})})})}export{b as default};
