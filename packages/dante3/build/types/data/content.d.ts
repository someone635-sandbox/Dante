export declare function content2(): string;
export default function content(): string;
export declare const jsonContentD: {
    type: string;
    content: ({
        type: string;
        attrs: {
            level: number;
            url?: undefined;
            src?: undefined;
            width?: undefined;
            height?: undefined;
            loading?: undefined;
            loading_progress?: undefined;
            caption?: undefined;
            direction?: undefined;
            file?: undefined;
            aspect_ratio?: undefined;
            language?: undefined;
        };
        content: ({
            type: string;
            text: string;
            marks?: undefined;
        } | {
            type: string;
            marks: {
                type: string;
                attrs: {
                    color: string;
                };
            }[];
            text: string;
        })[];
    } | {
        type: string;
        attrs?: undefined;
        content?: undefined;
    } | {
        type: string;
        attrs: {
            url: string;
            src: any;
            width: number;
            height: number;
            loading: boolean;
            loading_progress: number;
            caption: string;
            direction: string;
            file: any;
            aspect_ratio: {
                width: number;
                height: number;
                ratio: number;
            };
            level?: undefined;
            language?: undefined;
        };
        content?: undefined;
    } | {
        type: string;
        content: {
            type: string;
            content: {
                type: string;
                content: ({
                    type: string;
                    text: string;
                    marks?: undefined;
                } | {
                    type: string;
                    marks: {
                        type: string;
                        attrs: {
                            href: string;
                            target: string;
                        };
                    }[];
                    text: string;
                })[];
            }[];
        }[];
        attrs?: undefined;
    } | {
        type: string;
        attrs: {
            language: any;
            level?: undefined;
            url?: undefined;
            src?: undefined;
            width?: undefined;
            height?: undefined;
            loading?: undefined;
            loading_progress?: undefined;
            caption?: undefined;
            direction?: undefined;
            file?: undefined;
            aspect_ratio?: undefined;
        };
        content: {
            type: string;
            text: string;
        }[];
    } | {
        type: string;
        content: ({
            type: string;
            text: string;
            marks?: undefined;
        } | {
            type: string;
            marks: {
                type: string;
                attrs: {
                    href: string;
                    target: string;
                };
            }[];
            text: string;
        } | {
            type: string;
            marks: {
                type: string;
            }[];
            text: string;
        })[];
        attrs?: undefined;
    } | {
        type: string;
        attrs: {
            url: any;
            src: string;
            width: number;
            height: number;
            loading: boolean;
            loading_progress: number;
            caption: string;
            direction: string;
            file: any;
            aspect_ratio: {
                width: number;
                height: number;
                ratio: number;
            };
            level?: undefined;
            language?: undefined;
        };
        content?: undefined;
    } | {
        type: string;
        attrs: {
            level: number;
            url?: undefined;
            src?: undefined;
            width?: undefined;
            height?: undefined;
            loading?: undefined;
            loading_progress?: undefined;
            caption?: undefined;
            direction?: undefined;
            file?: undefined;
            aspect_ratio?: undefined;
            language?: undefined;
        };
        content: {
            type: string;
            marks: {
                type: string;
            }[];
            text: string;
        }[];
    })[];
};
export declare const jsonContent2: {
    type: string;
    content: {
        content: ({
            text: string;
            marks: ({
                type: string;
                attrs: {
                    color: string;
                    href?: undefined;
                    target?: undefined;
                };
            } | {
                type: string;
                attrs: {
                    href: string;
                    target: string;
                    color?: undefined;
                };
            })[];
            type: string;
        } | {
            text: string;
            type: string;
            marks?: undefined;
        } | {
            text: string;
            marks: {
                type: string;
            }[];
            type: string;
        })[];
        type: string;
    }[];
};
export declare const contentDemo: {
    type: string;
    content: ({
        type: string;
        attrs: {
            level: number;
            language?: undefined;
        };
        content: {
            type: string;
            marks: {
                type: string;
            }[];
            text: string;
        }[];
    } | {
        type: string;
        content: {
            type: string;
            content: ({
                type: string;
                text: string;
                marks?: undefined;
            } | {
                type: string;
                marks: {
                    type: string;
                    attrs: {
                        href: string;
                        target: string;
                    };
                }[];
                text: string;
            })[];
        }[];
        attrs?: undefined;
    } | {
        type: string;
        content: ({
            type: string;
            text: string;
            marks?: undefined;
        } | {
            type: string;
            marks: {
                type: string;
                attrs: {
                    href: string;
                    target: string;
                };
            }[];
            text: string;
        })[];
        attrs?: undefined;
    } | {
        type: string;
        content: ({
            type: string;
            text: string;
            marks?: undefined;
        } | {
            type: string;
            marks: {
                type: string;
            }[];
            text: string;
        })[];
        attrs?: undefined;
    } | {
        type: string;
        attrs: {
            language: any;
            level?: undefined;
        };
        content: {
            type: string;
            text: string;
        }[];
    } | {
        type: string;
        content: {
            type: string;
            content: {
                type: string;
                content: ({
                    type: string;
                    marks: {
                        type: string;
                    }[];
                    text: string;
                } | {
                    type: string;
                    text: string;
                    marks?: undefined;
                })[];
            }[];
        }[];
        attrs?: undefined;
    })[];
};
export declare const htmlContent = "\n\n<h1 class=\"graf graf--h\"><strong>Dante 3 - This is it!</strong></h1>\n<h2 class=\"graf graf--h\"><strong>Just another medium clone built on top of TipTap</strong></h2><blockquote>\n<p class=\"graf graf--p\">Dante3 is a TipTap based port of&nbsp;<a target=\"_blank\" rel=\"noopener noreferrer nofollow\" class=\"markup--anchor\" href=\"https://github.com/michelson/Dante/tree/master/packages/dante2\">Dante2 (Draftjs)&nbsp;</a>. \nThis version is built on top of&nbsp;<a target=\"_blank\" rel=\"noopener noreferrer nofollow\" class=\"markup--anchor\" href=\"https://www.tiptap.dev/\">TipTap's Prosemirror</a>&nbsp;and reaches all Dante2's features with a shiny ultra mega super uber maintainable architecture.</p></blockquote>\n<p class=\"graf graf--p\">See the demo at:&nbsp;<a target=\"_blank\" rel=\"noopener noreferrer nofollow\" class=\"markup--anchor\" href=\"https://dante-editor.com/\">dante-editor.dev</a></p>\n<h2 class=\"graf graf--h\"><strong>Why rewrite a new version of Dante?</strong></h2><p class=\"graf graf--p\">The previous version (Dante2) was made on DraftJs, that's a facebook library to build WYSIWYG editor, I'd choose that technology because it implemented a very interesting data model and abstracted many parts of the heuristics implementation that&nbsp;<a target=\"_blank\" rel=\"noopener noreferrer nofollow\" class=\"markup--anchor\" href=\"https://github.com/michelson/Dante/tree/master/packages/dante1-legacy\">Dante1 (the previous version)</a>&nbsp;built as a naive implementation relying a lot on DOM manipulation, So Dante2 was great and is working on a ton of production websites. Sadly over the last years this library has not received much attention from maintainers. Among the ~700 unattended reported issues there are some that have become a deal breaker for me:</p><p class=\"graf graf--p\"></p><image-block url=\"blob:http://localhost:3001/b56f657c-130c-46a2-b5e8-f5001cf5c9a3\" width=\"1000\" height=\"754\" loading=\"true\" loading_progress=\"0\" caption=\"caption!\" direction=\"center\" file=\"[object File]\" aspect_ratio=\"[object Object]\"></image-block><ul><li class=\"graf graf--li\"><p class=\"graf graf--p\">Bad mobile support.</p></li><li class=\"graf graf--li\"><p class=\"graf graf--p\">~1MB added to your bundle (immutablejs is heavy)</p></li><li class=\"graf graf--li\"><p class=\"graf graf--p\">Not created for realtime collab.</p></li></ul><h2 class=\"graf graf--h\"><strong>My bet, ProseMirror/TipTap</strong></h2><p class=\"graf graf--p\">After shopping many editors libraries, I mean after tried to implement Dante on almost all of them&nbsp;<strong>(Trix, Editorjs, Quilljs, Slate, Prosemirror)</strong>&nbsp;I've choosen Prosemirror's TipTap library., I guess all editors libraries have their own flaws but after review it all TipTap is the best of it's class, very well designed/architectured, and I love the community around their ecosystem. So that's it.</p><p class=\"graf graf--p\"><strong>Features:</strong></p><ul><li class=\"graf graf--li\"><p class=\"graf graf--p\">Configurable and extensible extensions / plugins / components</p></li><li class=\"graf graf--li\"><p class=\"graf graf--p\">Undo/redo.</p></li><li class=\"graf graf--li\"><p class=\"graf graf--p\">Save Content as a data JSON/HTML structure.</p></li><li class=\"graf graf--li\"><p class=\"graf graf--p\">Load Content as a data JSON/HTML structure.</p></li><li class=\"graf graf--li\"><p class=\"graf graf--p\">Styled components Theme support (built in light/dark themes).</p></li></ul><p class=\"graf graf--p\"><strong>Block based content</strong>:</p><p class=\"graf graf--p\">Dante editor can be extended with (React) components to, currently there are default components to be used as is:</p><ul><li class=\"graf graf--li\"><p class=\"graf graf--p\">Image upload for paste html.</p></li><li class=\"graf graf--li\"><p class=\"graf graf--p\">Video embed.</p></li><li class=\"graf graf--li\"><p class=\"graf graf--p\">Video Recorder.</p></li><li class=\"graf graf--li\"><p class=\"graf graf--p\">Embed.</p></li><li class=\"graf graf--li\"><p class=\"graf graf--p\">Divider.</p></li><li class=\"graf graf--li\"><p class=\"graf graf--p\">Speech.</p></li><li class=\"graf graf--li\"><p class=\"graf graf--p\">Giphy.</p></li></ul><h2 class=\"graf graf--h\"><strong>Installation</strong></h2><p class=\"graf graf--p\"><code>npm install dante3</code>&nbsp;or&nbsp;<code>yarn add dante3</code></p><h2 class=\"graf graf--h\"><strong>Usage</strong></h2><p class=\"graf graf--p\">Component Based</p><pre><code>&lt;DanteEditor\n  content={'hello world'}\n/&gt;</code></pre><h3 class=\"graf graf--h\"><strong>Options:</strong></h3><p class=\"graf graf--p\">Many configuration options and plugin usage can be found on the documentation page:</p><p class=\"graf graf--p\">See&nbsp;<a target=\"_blank\" rel=\"noopener noreferrer nofollow\" class=\"markup--anchor\" href=\"https://dante-editor.dev/\">dante-editor.dev</a></p><h2 class=\"graf graf--h\"><strong>Development</strong></h2><h3 class=\"graf graf--h\"><strong>Installation</strong></h3><ul><li class=\"graf graf--li\"><p class=\"graf graf--p\"><code>git clone https://github.com/michelson/dante</code></p></li></ul><p class=\"graf graf--p\"><strong>dependencies</strong></p><ul><li class=\"graf graf--li\"><p class=\"graf graf--p\"><code>npm install</code>&nbsp;or&nbsp;<code>yarn install</code></p></li></ul><h3 class=\"graf graf--h\"><strong>Building</strong></h3><ul><li class=\"graf graf--li\"><p class=\"graf graf--p\"><code>npm dante3_build</code>&nbsp;or&nbsp;<code>yarn dante3_build</code></p></li></ul><h3 class=\"graf graf--h\"><strong>dev install:</strong></h3><ul><li class=\"graf graf--li\"><p class=\"graf graf--p\">lerna bootstrap</p></li><li class=\"graf graf--li\"><p class=\"graf graf--p\">yarn dev</p></li></ul><h2 class=\"graf graf--h\"><strong>Status</strong></h2><blockquote><p class=\"graf graf--p\">Dante3 is on beta, actively maintained, with all the features that Dante2 has. As is relying in Prosemirror/TipTap this has better browser support and mobile support. Also has realtime collab capabilities.</p></blockquote><h2 class=\"graf graf--h\"><strong>Monorepo</strong></h2><p class=\"graf graf--p\">This repository now contains prior Dante versions, located in the&nbsp;<a target=\"_blank\" rel=\"noopener noreferrer nofollow\" class=\"markup--anchor\" href=\"https://github.com/michelson/Dante/tree/master/packages\">packages</a>&nbsp;folder. so Dante1*, Dante2 and Dante3 lives in the same repo.</p><blockquote><p class=\"graf graf--p\">* Dante(1) is not maintained anymore.</p></blockquote><h3 class=\"graf graf--h\"><strong>Open source license</strong></h3><p class=\"graf graf--p\">Dante is licensed under MIT, so you are free to do whatever you want. If you are using it commercially, become one of our wonderful sponsors to fund the maintenance, support and development of Dante now and in the future.</p><h3 class=\"graf graf--h\"><strong>\uD83D\uDC93&nbsp;Your sponsorship</strong></h3><blockquote><p class=\"graf graf--p\">Your sponsorship helps to maintain, update, support and develop all of our open source projects, including tiptap and many more.</p></blockquote><h3 class=\"graf graf--h\"><strong>Acknowledgments</strong></h3><p class=\"graf graf--p\">Prosemirror library &amp; Tiptap authors</p>\n\n";
export declare const demoS = "\n\n<p class=\"graf graf--p\"><strong>oijodfjaoidja</strong></p>\n\n<p class=\"graf graf--p\"><strong>adosijoj</strong></p>\n\n<p class=\"graf graf--p\"><span style=\"color: #000\">okokokpokpo kpok pok </span></p>\n\n<image-block url=\"https://i.imgur.com/f8Fzzao.jpg\" width=\"980\" height=\"695\" loading=\"false\" loading_progress=\"0\" caption=\"caption!\" direction=\"center\" aspect_ratio=\"{&quot;width&quot;:980,&quot;height&quot;:695,&quot;ratio&quot;:70.91836734693877}\"></image-block>\n\n<p class=\"graf graf--p\"></p>\n\n<embed-block embed_data=\"{&quot;error&quot;:&quot;no matching providers found&quot;,&quot;url&quot;:&quot;https://www.instagram.com/p/CPjYH04pMzS/?utm_source=ig_web_copy_link&quot;}\" provisory_text=\"https://www.instagram.com/p/CPjYH04pMzS/?utm_source=ig_web_copy_link\"></embed-block>\n";
