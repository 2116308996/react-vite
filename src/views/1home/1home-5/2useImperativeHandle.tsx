import { useRef, useImperativeHandle, forwardRef } from 'react'

// 定义子组件要暴露给父组件的方法类型
interface ChildHandles {
    focus: () => void;
    getValue: () => string;
}

// 子组件，使用 forwardRef 包裹
const Child = forwardRef<ChildHandles>((props, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);
    
    // 使用 useImperativeHandle 自定义暴露的实例值
    useImperativeHandle(ref, () => ({
        // 聚焦输入框
        focus: () => {
            inputRef.current?.focus();
        },
        // 获取输入框的值
        getValue: () => {
            return inputRef.current?.value || '';
        }
    }));

    return <input ref={inputRef} type="text" />;
});

// 父组件
const APP= forwardRef((props,ref) =>{
    const childRef = useRef<ChildHandles>(null);

    const handleClick = () => {
        // 调用子组件暴露的方法
        childRef.current?.focus();
        console.log(childRef.current);
    };
    useImperativeHandle(ref, () => ({
        // 聚焦输入框
        handleClick
    }));
    return (
        <div>
            <Child ref={childRef} />
            <button onClick={handleClick}>聚焦并获取值</button>
        </div>
    );
})
export default APP