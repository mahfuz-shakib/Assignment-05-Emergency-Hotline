const love = document.getElementsByClassName("heart-icon");
const service = document.getElementsByClassName("service");
const helpline = document.getElementsByClassName("helpline");
const copy = document.getElementsByClassName("copy");
const call = document.getElementsByClassName("call");

function getValue(id) {
  return parseInt(document.getElementById(id).innerText);
}
function setValue(id, value) {
  document.getElementById(id).innerText = value;
}
for (let i = 0; i < love.length; i++) {
  love[i].addEventListener("click", () => {
    setValue("heart-count", getValue("heart-count") + 1);
  });
}
for (let i = 0; i < call.length; i++) {
  call[i].addEventListener("click", () => {
    const currentCoin = getValue("coin-count");
    if (currentCoin < 20) {
      alert("coin end");
      return;
    }
    setValue("coin-count", currentCoin - 20);
    alert(`calling ${service[i].innerText} ${helpline[i].innerText} .....`);
    
    const lastCall = document.createElement("div");
    lastCall.innerHTML =`
        <div class="bg-gray-50 flex justify-between items-center p-3 inter-font rounded-lg ">
            <div>
                <h1 class="text-[16px] mb-[2px]">${service[i]}</h1>
                <p class="text-gray-600">${helpline[i]}</p>
            </div>
            <p>${new Date().toLocaleTimeString}</p>
        </div>
        `
        console.log(lastCall);
    document.getElementById('history-container').appendChild(lastCall);
    // lastCall.innerHTML="";
    // console.log(history-container);
  });
}
