let count = document.getElementById('count')
let current_count = localStorage.getItem('count')
if (current_count > 0) {
    count.innerHTML = current_count
    localStorage.setItem('count', parseInt(current_count) + 1)
} else {
    localStorage.setItem('count', 1)
    count.innerHTML = 1
}