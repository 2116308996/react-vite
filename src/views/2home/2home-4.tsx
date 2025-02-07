import { useState,Suspense } from "react";
import Card from './2home-1/components/parent'
const APP = () => {
    return (
        <div>
            <h2>Suspense</h2>
            <h4>Suspense 是一种异步渲染机制，其核心理念是在组件加载或数据获取过程中，先展示一个占位符（loading state），从而实现更自然流畅的用户界面更新体验。</h4>
            <Suspense fallback={<div>Loading...</div>}>
                <Card />
            </Suspense>
        </div>
    )
}
export default APP;
