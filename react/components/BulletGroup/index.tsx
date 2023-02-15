import React, {Fragment, PropsWithChildren } from "react";
//@ts-ignore
import { useDevice } from "vtex.device-detector";
//@ts-ignore
import { useListContext, ListContextProvider } from "vtex.list-context";
//@ts-ignore
import { useCssHandles } from "vtex.css-handles"
import { getBulletsAlTSXList } from "./modules/bulletsAlList";
import { BulletGroupProps } from "../../interfaces";


const BulletGroup = ({
    bullets,
    children
}: PropsWithChildren<BulletGroupProps>) => {

    const { isMobile } = useDevice();
    const { list } = useListContext() || [];
    const bulletsGroup = getBulletsAlTSXList(bullets)
    const newListContextValue = list.concat(bulletsGroup)

    const CSS_HANDLES = ["bullet__container"]
    const handles = useCssHandles(CSS_HANDLES)

    return (
        <Fragment>
            <ListContextProvider list={newListContextValue}>
                {
                    isMobile ?
                        <div className={handles.bullet__container}>
                            {children}
                        </div>
                        :
                        children
                }
            </ListContextProvider>
        </Fragment>
    )
}

export default BulletGroup;
