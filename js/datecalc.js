import { formatError } from "./common.js";
import { diffDates, diffToHtml } from "./diffDates.js";

const datecalcForm = document.getElementById('datecalc');
const datecalcResult = document.getElementById('datecalc_result');

datecalcForm.addEventListener("submit", handleCalcDates);

function handleCalcDates(event){
    event.preventDefault();

    datecalcResult.innerHTML ="";
    
    let {firstDate, secondDate} = event.target.elements;
    firstDate= firstDate.value, secondDate=secondDate.value;

    if (firstDate && secondDate) {
        const result = diffDates(firstDate, secondDate);
        datecalcResult.innerHTML = diffToHtml(result);
    } 
    else datecalcResult.innerHTML = formatError("Для расчета промежутка необходимо заполнить оба поля!");
}