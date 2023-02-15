import React from "react"
import { BulletsSchema } from '../../../interfaces'
import Bullet from "../../Bullet/Bullet"

export const getBulletsAlTSXList = (bullets: BulletsSchema) => (
  bullets.map((bullet: any, index: number) => {
        return <Bullet
            key={index}
            imageAudio={bullet.imageAudio ? bullet.imageAudio : ''}
            imageDiscount={bullet.imageDiscount ? bullet.imageDiscount : ''}
            src={bullet.image}
            titleBullet={bullet.titleBullet}
            bulletBrand={bullet.bulletBrand}
            bulletPrice={bullet.bulletPrice}
            bulletDiscount={bullet.bulletDiscount ? bullet.bulletDiscount : ''}
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
