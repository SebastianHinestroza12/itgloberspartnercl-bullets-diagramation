import React from "react"
//@ts-ignore
import { Link } from "vtex.render-runtime"
import { LinkProps } from "./BulletTypes"
//@ts-ignore
import { useCssHandles } from "vtex.css-handles"
import "./styles.css"

type Props = {
    src: string
    titleBullet: string
    link: LinkProps
}

const Bullet = ({ src, titleBullet, link }: Props) => {
    const CSS_HANDLES = [
        "bullet__item",
        "bullet__item--title",
        "bullet__item--image",
        "bullet__item--link"
    ]
    const handles = useCssHandles(CSS_HANDLES)

    return (
        <div className={`pt1 pl5 ${handles["bullet__item"]}`}>
            <Link
                to={link.url}
                className={handles["bullet__item--link"]}
            >
                <img src={src} alt={titleBullet} className={`${handles["bullet__item--image"]} externalClass`} />
                <p className={handles["bullet__item--title"]}>{titleBullet}</p>
            </Link>
        </div>
    )
}

Bullet.schema = {
    title: "Bullet",
    type: "object",
    properties: {
        src: {
            title: "Imagen de Bullet",
            type: "string",
            widget: {
                "ui:widget": "image-uploader"
            }
        }
    }
}

export default Bullet;
