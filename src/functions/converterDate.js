export default function converterDate(data) {
    let newString;
    if(data.length === 10) {
        newString = `${data.substr(6,10)}, ${data.substring(3,6) - 1}, ${data.slice(0,2)}`
    } else {
        newString = data
    }
    return newString
}