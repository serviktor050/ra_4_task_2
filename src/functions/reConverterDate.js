export default function reConverterDate (milliseconds) {
        let year = new Date(milliseconds).getFullYear()
        let month = parseInt(new Date(milliseconds).getMonth(), 10) + 2
        let day = new Date(milliseconds).getDate()
    
        let reconvertedDate = `${day}.${month}.${year}`
        return reconvertedDate
}