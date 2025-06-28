const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');

function clock() {    
    let newDate = new Date();
    let h = newDate.getHours();
    let m = newDate.getMinutes();
    let s = newDate.getSeconds();
    
    if (h < 10) {
        hour.innerHTML = `0${h} : `;
    }
    else{
        hour.innerHTML = `${h} :`;
    }

    if (m < 10) {
        minute.innerHTML = `0${m} : `;
    }
    else{
        minute.innerHTML = `${m} : `;
    }

    if (s < 10) {
        second.innerHTML = `0${s}`;
    }
    else{
        second.innerHTML = `${s}`;
    }
}

setInterval(() => {
    clock()
}, 1000);