import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{f as y,i as c}from"./assets/vendor-585fe19e.js";document.addEventListener("DOMContentLoaded",function(){let r=null,s;document.querySelector("[data-start]").disabled=!0;const d={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){const t=e[0];t<=new Date?(c.warning({title:"Caution",message:"Please choose a date in the future"}),document.querySelector("[data-start]").disabled=!0):(r=t,document.querySelector("[data-start]").disabled=!1)}};y("#datetime-picker",d),document.querySelector("[data-start]").addEventListener("click",function(){r&&(s=setInterval(()=>{const{days:e,hours:t,minutes:n,seconds:o}=u(r-new Date);i(e,t,n,o)},1e3))});function u(e){const l=Math.floor(e/864e5),m=Math.floor(e%864e5/36e5),f=Math.floor(e%864e5%36e5/6e4),h=Math.floor(e%864e5%36e5%6e4/1e3);return{days:l,hours:m,minutes:f,seconds:h}}function i(e,t,n,o){document.querySelector("[data-days]").textContent=a(e),document.querySelector("[data-hours]").textContent=a(t),document.querySelector("[data-minutes]").textContent=a(n),document.querySelector("[data-seconds]").textContent=a(o),e===0&&t===0&&n===0&&o===0&&(clearInterval(s),c.success({title:"Success",message:"Timer has finished!"}))}function a(e){return String(e).padStart(2,"0")}});
//# sourceMappingURL=commonHelpers.js.map