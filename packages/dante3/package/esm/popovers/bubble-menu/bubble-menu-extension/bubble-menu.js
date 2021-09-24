import { Extension } from '@tiptap/core';
import { B as BubbleMenuPlugin } from '../../../bubble-menu-plugin-09ccf371.js';
import 'prosemirror-state';
import 'tippy.js';

var BubbleMenu = Extension.create({
    name: "bubbleMenu",
    defaultOptions: {
        element: null,
        tippyOptions: {},
    },
    addProseMirrorPlugins: function () {
        if (!this.options.element) {
            return [];
        }
        return [
            BubbleMenuPlugin({
                editor: this.editor,
                element: this.options.element,
                tippyOptions: this.options.tippyOptions,
            }),
        ];
    },
});

export { BubbleMenu };
