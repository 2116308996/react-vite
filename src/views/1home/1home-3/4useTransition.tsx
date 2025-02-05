import { useState, useTransition } from "react";

export default function useTransitionFun() {
    const [isPending, startTransition] = useTransition()
    const [list, setList] = useState<number[]>([])
    const getlist = (input: string) => {
        setTimeout(() => {
            startTransition(() => {
                setList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
            })
        }, 1000)
    }
    getlist('123');
    return (
        <div>
            {list.map((item,index)=>{
                return <div key={index}>{item}</div>
            })}
        </div>
    )

}
