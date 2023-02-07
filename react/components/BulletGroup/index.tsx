import React, { PropsWithChildren } from "react";
import { BulletsSchema } from "./BulletTypes";
//@ts-ignore
import { useDevice } from "vtex.device-detector";
//@ts-ignore
import { useListContext, ListContextProvider } from "vtex.list-context";
//@ts-ignore
import { useCssHandles } from "vtex.css-handles"
import { getBulletsAlTSXList } from "./modules/bulletsAlList";

export interface BulletGroupProps {
    bullets: BulletsSchema
}

const BulletGroup = ({
    bullets,
    children
}: PropsWithChildren<BulletGroupProps>) => {
    const { isMobile } = useDevice();
    const { list } = useListContext();

    console.log("Bullets", bullets)

    const bulletsGroup = getBulletsAlTSXList(bullets)
    const newListContextValue = list.concat(bulletsGroup)

    const CSS_HANDLES = ["bullet__container"]
    const handles = useCssHandles(CSS_HANDLES)

    return (
        <ListContextProvider list={newListContextValue}>
            {
                isMobile ?
                    <div className={handles.bullet__container}>
                        {bulletsGroup}
                    </div>
                    :
                    children
            }
        </ListContextProvider>
    )
}

export default BulletGroup;
