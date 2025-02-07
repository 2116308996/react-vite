import Parent from './components/parent'
import { useState } from 'react'
import Card from './components/parent'
import Card2 from './components/parent2'
const APP=()=>{
    const [value,setValue]=useState("")
    const inputChange=(value:string)=>{
        setValue(value)
        console.log(value)
    }
    return (
        <div>
            <Parent></Parent>

            <div>父input:{value}</div>
            <Card title="问卷" subTitle="用户体验问卷" content="内容" callback={inputChange}>
                <div>
                    <section>
                        <span>内容11111</span>
                        <i>内容22222</i>
                        <i>内容33333</i>
                    </section>
                </div>
            </Card>
            <Card2></Card2>
        </div>
    )


}
export default APP;
