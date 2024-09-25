

function getValueById(id)
{
    const value=parseFloat(document.getElementById(id).value);
    return value;
}

function getValueByIdFromText(id)
{
    const value=parseFloat(document.getElementById(id).innerText);
    return value;
}

function calculateDonation(input,donatonbalance,mainbalance)
{
    const InputValue=getValueById(input);
    const donationBalance=getValueByIdFromText(donatonbalance);
    const mainBalance=getValueByIdFromText(mainbalance);

    // console.log(InputValue,donationBalance,mainBalance);
    const donatoinNewBanance=donationBalance+InputValue;
    const mainNewBanance=mainBalance-InputValue;
    // console.log(donatoinNewBanance,mainNewBanance);

    // set value
    document.getElementById(donatonbalance).innerText=donatoinNewBanance;
    document.getElementById(mainbalance).innerText=mainNewBanance;

}

function removeHideenClass(id){
    document.getElementById(id).classList.remove('hidden');
}

function addHiddenClass(id)
{
    document.getElementById(id).classList.add('hidden');
}

function showHistoryText(id,title)
{
    const showHistory=document.getElementById('show-history');
    const titleText=document.getElementById(title).innerText;
    const input=document.getElementById(id).value;
    const div=document.createElement('div');
    div.innerHTML=`
    <div class="border border-gray-200 my-1 px-8 py-5 rounded-md">
        <h4 class="font-semibold text-xl">${input} Taka ${titleText}</h4>
        <p class="text-gray-500 text-[16px]">Date: ${new Date().toLocaleString()}</p>
      </div>
    `
    showHistory.insertBefore(div,showHistory.firstChild);
}




