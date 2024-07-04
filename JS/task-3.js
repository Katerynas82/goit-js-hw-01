
function getElementWidth(content, padding, border){

    let cont = parseFloat(content);
    let pad = parseFloat(padding);
    let bord = parseFloat(border);

    let boxSize = ((cont)+(pad)*2+ (bord)*2);
    return boxSize;
}
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200