export default function reConverterDate (milliseconds) {
        let reconvertedDate
        let year = new Date(milliseconds).getFullYear()
        let month = parseInt(new Date(milliseconds).getMonth(), 10) + 1
        let day = new Date(milliseconds).getDate()

        if(month < 10) {
                reconvertedDate = `${day}.0${month}.${year}`
        } else {
                reconvertedDate = `${day}.${month}.${year}`
        }
        return reconvertedDate
}