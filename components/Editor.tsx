import { WysiwygEditor } from '@remirror/react-editors/wysiwyg';
import { MarkdownToolbar } from '@remirror/react';

const Editor: React.FC = () => {
    return (
        <div style={{ padding: 16 }}>
            <WysiwygEditor placeholder='Enter text...'>
                <MarkdownToolbar />
            </WysiwygEditor>
        </div>
    );
};

export default Editor;