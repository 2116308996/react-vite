import { useState } from 'react';
import { ThemeContext } from './context';
import Child1 from './3child1';
import Child2 from './3child2';

export default function Parent() {
    const [theme, setTheme] = useState('light');

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <div>
                <h2>父组件</h2>
                <p>当前主题: {theme}</p>
                <Child1 />
                <Child2 />
            </div>
        </ThemeContext.Provider>
    );
}