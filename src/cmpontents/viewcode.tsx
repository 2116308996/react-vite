import Prism from 'prismjs';
import { useEffect } from 'react';
//导入tomorrow代码主题样式（按需引入）
import "prismjs/themes/prism-tomorrow.min.css";
import './viewcode.less'
//导入行号效果css、js文件（按需引入）
import "prismjs/plugins/line-numbers/prism-line-numbers.min.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.min.js";
import { Collapse } from "tdesign-react";
const code = (props: any) => {
    useEffect(() => {
        Prism.highlightAll();
    }, []);
    const { Panel } = Collapse;
    return (
        <Collapse defaultValue={['default']}>
            <Panel header="源代码">
                <div className="line-numbers">
                    <pre>
                        <code className={`language-html`}>{props.el}</code>
                    </pre>
                </div>
            </Panel>
        </Collapse>
    )
}

export default code