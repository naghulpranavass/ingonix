const header = document.getElementById('header');
const btn = document.getElementById('searchBtn');
btn.style.cursor = 'pointer';
const inArea = document.getElementById('inputCon');
btn.onclick = function(){
    header.style.display = 'none';
    inArea.style.display = 'flex';
}
const btnNo = document.getElementById('cross');
btnNo.style.cursor = 'pointer';
btnNo.onclick  = function(){
    header.style.display = 'flex';
    inArea.style.display = 'none';
}