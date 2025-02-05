import Prism from 'prismjs';
import { useEffect } from 'react';
//导入tomorrow代码主题样式（按需引入）
import "prismjs/themes/prism-okaidia.min.css";
import './viewcode.less'

// 必需的语言支持
import 'prismjs/components/prism-jsx';  // JSX支持
import 'prismjs/components/prism-typescript';  // TypeScript支持
import 'prismjs/components/prism-tsx';  // TSX支持
//导入行号效果css、js文件（按需引入）
import "prismjs/plugins/line-numbers/prism-line-numbers.min.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.min.js";
//import "prismjs/plugins/show-language/prism-show-language";
import { Collapse } from "tdesign-react";

interface CodeProps {
    el: string;
}

const Code = (props: CodeProps) => {
    useEffect(() => {
        Prism.highlightAll();
    }, []);
    const { Panel } = Collapse;
    return (
        <Collapse defaultValue={['default']}>
            <Panel header="源代码">
                <div className="line-numbers">
                    <pre>
                        <code className={`language-tsx`}>{props.el}</code>
                    </pre>
                </div>
            </Panel>
        </Collapse>
    )
}

export default Code