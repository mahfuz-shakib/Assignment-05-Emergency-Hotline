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
function display(id){
  document.getElementById('card-section').classList.add('hidden');
  document.getElementById('history-section').classList.add('hidden');
  document.getElementById(id).classList.remove('hidden');
  document.getElementById(id).classList.add('block');
  console.log(window.addEventListener('resize',(e)=>{
  }));
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
      alert("You have not enoughed coin. To call atleast 20 coins needed.");
      return;
    }
    setValue("coin-count", currentCoin - 20);

    alert(`Calling ${service[i].innerText} ${helpline[i].innerText}...`);
    const lastCall = document.createElement("div");
    lastCall.innerHTML = `
        <div class="bg-gray-50 flex justify-between items-center p-3 inter-font text-sm rounded-lg gap-1 mt-3 ">
            <div>
                <h1 class="mb-[2px] font-semibold">${service[i].innerText}</h1>
                <p class="text-gray-600">${helpline[i].innerText}</p>
            </div>
            <p>${new Date().toLocaleTimeString()}</p>
        </div>
        `;
    const container = document.getElementById("history-container");
    container.insertBefore(lastCall, container.firstChild);
  });
  
}
document.getElementById("clear-btn").addEventListener("click", () => {
    document.getElementById("history-container").innerText = "";
  });

  for (let i = 0; i < copy.length; i++) {
  copy[i].addEventListener("click", ()=> {
    setValue('copy-count',getValue('copy-count')+1);
    helpline[i].addEventListener('copy',()=>{
      alert(`${helpline[i].innerText} number copied`);
    });
  });
}
document.getElementById('see-hotlines-btn').addEventListener('click',()=>{ 
  display('card-section');
})
document.getElementById('see-call-history-btn').addEventListener('click',()=>{ 
  display('history-section');
})
