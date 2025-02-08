// 节流函数
const throttle = (func: Function, limit: number) => {
    let inThrottle: boolean;
    return function(this: any, ...args: any[]) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
};
//防抖函数
const debounce = (func: Function, delay: number) => {
    let timeoutId: ReturnType<typeof setInterval>;
    
    return function(this: any, ...args: any[]) {
        // 清除之前的定时器
        clearTimeout(timeoutId);
        
        // 设置新的定时器
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    }
};

export {debounce,throttle};