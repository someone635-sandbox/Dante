import React from "react";
import { BubbleMenuPluginProps } from "../bubble-menu-extension";
export declare type BubbleMenuProps = Omit<BubbleMenuPluginProps, "element"> & {
    className?: string;
};
export declare const BubbleMenu: React.FC<BubbleMenuProps>;
