function debounce (func: Function, delay: number) {
    let timer: number | null;
    return function() {
        if(timer) window.clearTimeout(timer);
        timer = window.setTimeout(() => {
            func();
        }, delay);
    }
}

function throttle(func: Function, delay:number) {
    let flag = true;
    return function() {
        if(!flag) return;
        flag = false;
        setTimeout(()=> {
            func();
            flag = true;
        },delay)
    }
}