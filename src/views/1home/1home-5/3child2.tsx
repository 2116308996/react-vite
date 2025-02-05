import { useContext } from 'react';
import { ThemeContext } from './context';

export default function Child2() {
    const { theme } = useContext(ThemeContext);
    
    return (
        <div>
            <h3>子组件2</h3>
            <p>当前主题: {theme}</p>
        </div>
    );
} 