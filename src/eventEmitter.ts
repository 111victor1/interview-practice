// class EventEmitter {
//     events: {[key: string] : Function[]} = {};
//     on(type: string, callback: Function) {
//         if(!this.events) this.events = Object.create(null);
//         if(!this.events[type]) {
//             this.events[type] = [callback]
//         } else {
//             this.events[type].push(callback);
//         }
//     }
//     off(type: string) {
//         if(!this.events[type]) return;
//         delete this.events[type];
//     }
//     once(type: string, callback: Function) {
//         const func = () => {
//             callback();
//             this.off(type);
//         }
//         this.on(type, func);
//     }
//     emit(type: string, ...args) {
//         this.events[type] && this.events[type].forEach(fn =>  fn(...args))
//     }
// }

// const events = new EventEmitter();
// events.on('click', ()=> {
//     console.log(123);
// })

class EventEmitter {
    events: {[key: string] : Function[]} = {};

    on(type: string, callback) {
        if(!this.events) this.events  = Object.create(null);
        if(!this.events[type]) this.events[type] = [];
        this.events[type].push(callback);
    }
    
    off(type: string) {
        if(!this.events[type]) return;
        delete this.events[type];
    }

    once(type: string, callback) {
        const callOnce = () => {
            callback();
            this.off(type);
        }
        this.on(type, callOnce);
    }

    emit(type: string, ...args) {
        this.events[type] && this.events[type].forEach(func => func(...args));
    }
}
