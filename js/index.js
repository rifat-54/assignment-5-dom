const CalculateBtn1=document.getElementById('donation-btn1');
const CalculateBtn2=document.getElementById('donation-btn2');
const CalculateBtn3=document.getElementById('donation-btn3');

function invalidInput(input,mainbalance)
{
    const InputValue=getValueById(input);
    const mainBalance=getValueByIdFromText(mainbalance);
    if(InputValue<=0 || InputValue>mainBalance || isNaN(InputValue))
    {
        alert('Invaid Amont');
        return true;
    }else
    {
        return false;
    }
}

const showHistory=document.getElementById('show-history');

const mainSection=document.getElementById('main-section');

const showAlertBox=document.getElementById('show-box');
showAlertBox.addEventListener('click',function(){
    addHiddenClass('show-box');
    mainSection.style.opacity='1';


});

CalculateBtn1.addEventListener('click',function(){
   const alert= invalidInput('card-1-donaton-input','main-balance');
   if(alert)
   {
        return;
   }
    calculateDonation('card-1-donaton-input','card-1-mainbalnce','main-balance');
    removeHideenClass('show-box');
    mainSection.style.opacity='.3';
   showHistoryText('card-1-donaton-input','donate-1-title');

})

CalculateBtn2.addEventListener('click',function(){
    const alert= invalidInput('card-2-donaton-input','main-balance');
   if(alert)
   {
        return;
   }
    calculateDonation('card-2-donaton-input','card-2-mainbalnce','main-balance');
    removeHideenClass('show-box');
    mainSection.style.opacity='.3';
   showHistoryText('card-2-donaton-input','donate-2-title');

})

CalculateBtn3.addEventListener('click',function(){
    const alert= invalidInput('card-3-donaton-input','main-balance');
   if(alert)
   {
        return;
   }
    calculateDonation('card-3-donaton-input','card-3-mainbalnce','main-balance');
    removeHideenClass('show-box');
    mainSection.style.opacity='.3';
   showHistoryText('card-3-donaton-input','donate-3-title');

})
const HistoryBtn=document.getElementById('history-btn-main');
const DonationBtn=document.getElementById('donation-btn-main');

HistoryBtn.addEventListener('click',function(){
    HistoryBtn.classList.add(
        'bg-[#B4F461]'
    );
    DonationBtn.classList.remove('bg-[#B4F461]');
    
    removeHideenClass('show-history');
    addHiddenClass('card-section');

});

DonationBtn.addEventListener('click',function(){
    HistoryBtn.classList.remove(
        'bg-[#B4F461]'
    );
    DonationBtn.classList.add('bg-[#B4F461]');
    addHiddenClass('show-history');
    removeHideenClass('card-section');


});

