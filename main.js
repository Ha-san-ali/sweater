(()=>{const e=document.querySelector(".top-banner form"),t=document.querySelector(".top-banner input"),n=document.querySelector(".top-banner .msg"),a=document.querySelector(".ajax-section .cities"),r=document.createElement("li");e.addEventListener("submit",(o=>{o.preventDefault();let c=t.value;const s=r.querySelectorAll(".ajax-section .city"),l=Array.from(s);l.length>0&&l.filter((e=>{let t="";return c.includes(",")?c.split(",")[1].length>2?(c=c.split(",")[0],t=e.querySelector(".city-name span").textContent.toLowerCase()):t=e.querySelector(".city-name").dataset.name.toLowerCase():t=e.querySelector(".city-name span").textContent.toLowerCase(),t==c.toLowerCase()})),fetch(`https://api.openweathermap.org/data/2.5/weather?q=${c}&appid=27f2a9f11155973e7ef74a36ed757a32&units=metric`).then((e=>e.json())).then((e=>{const{main:t,name:n,sys:o,weather:c}=e,s=t.temp<16?"Yes":"No",l=t.temp<16?"color:#EAEEDA":"color:#FCF2F5";c[0].icon,r.classList.add("city");const i=`\n      <h1 class="sweaterweather" style=${l}>${s}</h1>\n      <h1 class="city-temp" style=${l} data-name="${n},${o.country}"> It is currently&nbsp;${Math.round(t.temp)}°C in ${n}, ${o.country}</h1>\n      `;r.innerHTML=i,a.appendChild(r)})).catch((()=>{n.textContent="Please search for a valid city 😩"})),n.textContent="",e.reset(),t.focus()}))})();