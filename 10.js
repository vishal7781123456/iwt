let input_txt = document.getElementById('input_txt')
let search_query = document.getElementById('search')
let output = document.getElementById('output')
const srhptr = () => {
    if (input_txt.value.length > 0 && search_query.value.length > 0) {
        let regex_query = new RegExp(search_query.value, "ig");
        if (regex_query.test(input_txt.value)) {
            output.innerHTML = "Match found!"
        } else {
            output.innerHTML = "Match not found!"
        }
    } else {
        return false
    }
}
const clear_scr = () => {
    document.getElementById("input_txt").value = ""
    document.getElementById("search").value = ""
}