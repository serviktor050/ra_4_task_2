export default function converterDate(data) {
    let newString;
    let year = data.substr(6,10)
    let month = (parseInt(data.substring(3,5), 10))
    let day = data.slice(0,2)
    
    if(data.length === 10) {
        newString = `${year}, ${month}, ${day}`
        if(month < 0) {
            newString = `${year}, ${0}, ${day}`
        }
    } else {
        newString = data
    }
    return newString
}
