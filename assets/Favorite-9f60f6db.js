import{r as s,j as t}from"./index-742eac5d.js";import{f,C as i}from"./CatalogList-aeefc4da.js";const u=()=>{const[e,a]=s.useState([]);s.useEffect(()=>{f().then(c=>{a(c)})},[]);const o=e.filter(r=>r.favorite===!0);return t.jsx(t.Fragment,{children:t.jsx(i,{adverts:o})})};export{u as default};