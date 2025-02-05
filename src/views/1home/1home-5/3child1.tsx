import { useContext } from 'react';
import { ThemeContext } from './context';

export default function Child1() {
    const { theme, setTheme } = useContext(ThemeContext);
    
    return (
        <div>
            <h3>子组件1</h3>
            <button onClick={() => setTheme('dark')}>
                切换到暗色主题
            </button>
            <button onClick={() => setTheme('light')}>
                切换到亮色主题
            </button>
        </div>
    );
} 