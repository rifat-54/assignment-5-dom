

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