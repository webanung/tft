import Mmenu from '../../core/oncanvas/mmenu.oncanvas';
import OPTIONS from './_options';
import * as DOM from '../../_modules/dom';
import { extend } from '../../_modules/helpers';

export default function (this: Mmenu) {
    this.opts.iconPanels = this.opts.iconPanels || {};

    //	Extend options.
    const options = extend(this.opts.iconPanels, OPTIONS);

    let keepFirst = false;

    if (options.visible == 'first') {
        keepFirst = true;
        options.visible = 1;
    }

    options.visible = Math.min(3, Math.max(1, options.visible));
    options.visible++;

    //	Add the iconpanels
    if (options.add) {
        this.bind('initMenu:after', () => {
            this.node.menu.classList.add('mm-menu--iconpanel');
        });

        this.bind('initPanel:after', panel => {
            panel.tabIndex = -1;
        });

        //  Keyboard navigation
        this.bind('initPanels:after', () => {
            document.addEventListener('keyup', evnt => {

                //  When tabbing inside the menu
                if (evnt.key === 'Tab' &&
                    document.activeElement?.closest('.mm-menu') === this.node.menu
                ) {
                    /** panel where focus is in. */
                    const panel = document.activeElement.closest('.mm-panel') as HTMLElement;

                    //  Tabbing in a parent-panel.
                    if (!document.activeElement.matches('.mm-panel__blocker') &&
                        panel?.matches('.mm-panel--parent')
                    ) {
                        //  backward tabbing: focus blocker.
                        if (evnt.shiftKey) {
                            DOM.children(panel, '.mm-panel__blocker')[0].focus();

                            //  forward tabbing: focus opened panel.
                        } else {
                            DOM.children(this.node.pnls, '.mm-panel--opened')[0].focus();
                        }

                    }
                }
            });
        });

        //  Show only the main panel.
        if (keepFirst) {
            this.bind('initMenu:after', () => {
                DOM.children(this.node.pnls, '.mm-panel')[0]?.classList.add('mm-panel--iconpanel-first');
            });

        //  Show parent panel(s).
        } else {
            /** The classnames that can be set to a panel */
            const classnames = [
                'mm-panel--iconpanel-0',
                'mm-panel--iconpanel-1',
                'mm-panel--iconpanel-2',
                'mm-panel--iconpanel-3'
            ];

            this.bind('openPanel:after', (panel: HTMLElement) => {

                //  Do nothing when opening a vertical submenu
                if (panel.parentElement.matches('.mm-listitem--vertical')) {
                    return;
                }

                let panels = DOM.children(this.node.pnls, '.mm-panel');

                //	Filter out panels that are not opened.
                panels = panels.filter((panel) =>
                    panel.matches('.mm-panel--parent')
                );

                //	Add the current panel to the list.
                panels.push(panel);

                //	Slice the opened panels to the max visible amount.
                panels = panels.slice(-options.visible);

                //	Add the "iconpanel" classnames.
                panels.forEach((panel, p) => {
                    panel.classList.remove(...classnames);
                    panel.classList.add('mm-panel--iconpanel-' + p);
                });
            });
        }

        this.bind('initPanel:after', (panel: HTMLElement) => {
            if (
                options.blockPanel &&
                !panel.parentElement.matches('.mm-listitem--vertical') &&
                !DOM.children(panel, '.mm-panel__blocker')[0]
            ) {
                const blocker = DOM.create('a.mm-panel__blocker') as HTMLAnchorElement;
                blocker.href = `#${panel.closest('.mm-panel').id}`;
                blocker.title = this.i18n(this.conf.screenReader.closeSubmenu);

                panel.prepend(blocker);
            }
        });
    }
}
