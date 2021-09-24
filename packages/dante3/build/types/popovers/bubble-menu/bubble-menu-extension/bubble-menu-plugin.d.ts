import { Editor } from "@tiptap/core";
import { EditorState, Plugin, PluginKey } from "prosemirror-state";
import { EditorView } from "prosemirror-view";
import { Instance, Props } from "tippy.js";
export interface BubbleMenuPluginProps {
    editor: Editor;
    element: HTMLElement;
    tippyOptions?: Partial<Props>;
}
export declare type BubbleMenuViewProps = BubbleMenuPluginProps & {
    view: EditorView;
};
export declare class BubbleMenuView {
    editor: Editor;
    element: HTMLElement;
    view: EditorView;
    enabled: boolean;
    preventHide: boolean;
    tippy: Instance;
    constructor({ editor, element, view, tippyOptions }: BubbleMenuViewProps);
    mousedownHandler: () => void;
    mouseupHandler: () => void;
    focusHandler: () => void;
    blurHandler: ({ event }: {
        event: FocusEvent;
    }) => void;
    createTooltip(options?: Partial<Props>): void;
    update(view: EditorView, oldState?: EditorState): void;
    show(): void;
    hide(): void;
    destroy(): void;
}
export declare const BubbleMenuPluginKey: PluginKey<any, any>;
export declare const BubbleMenuPlugin: (options: BubbleMenuPluginProps) => Plugin<any, any>;
