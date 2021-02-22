export default function converterDate (string) {
    let newString = `${string.substr(6,10)}, ${string.substring(3,6) - 1}, ${string.slice(0,2)} `
    return newString
}