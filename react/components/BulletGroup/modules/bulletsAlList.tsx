import React from "react"
import { BulletsSchema } from '../../../interfaces/index'
import Bullet from "../../Bullet/Bullet"

export const getBulletsAlTSXList = (bullets: BulletsSchema) => (
    bullets.map((bullet: any, index : any) => {
        return <Bullet
            key={index}
            imageAudio={bullet.imageAudio}
            imageDiscount={bullet.imageDiscount}
            src={bullet.image}
            titleBullet={bullet.titleBullet}
            bulletBrand={bullet.bulletBrand}
            bulletPrice={bullet.bulletPrice}
            bulletDiscount={bullet.bulletDiscount}
            link={
                bullet.link
                    ?
                    bullet.link
                    :
                    {
                        url: ",",
                        attributeNoFollow: false,
                        attributeTitle: "",
                        openNewTab: false,
                        newTab: false
                    }
            }
        />
    })
)
