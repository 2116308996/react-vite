//节流
//300ms内执行一次,第一次立即执行
const useThrottle = (func: Function, delay = 300) => {
    var canrun = true
    return (...args: any[]) => {
        if (canrun) {
            func(...args)
            canrun = false;
            setTimeout(() => {
                canrun = true
            }, delay)
        }
    }
}
//防抖 触发事件后函数会立即执行，n 秒内触发事件不会执行功能函数下一次调用，
//n秒后再次触发才会再次执行功能函数。
const useDebounce = (func: Function, delay = 300, flag = true) => {
    let timer: ReturnType<typeof setTimeout>|null=null;
    return (...args: any[]) => {
        if (flag) {
            func.apply(this,args)
            flag = false
            timer = setTimeout(() => {
                flag = true
            }, delay)
        } else {
            if (timer) {
                clearTimeout(timer)
            }
            timer = setTimeout(() => {
                func.apply(this,args)
            }, delay)
        }
    }
}
//tsc -b && 
export {
    useDebounce,
    useThrottle
}