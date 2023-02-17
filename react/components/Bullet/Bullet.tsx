import React from "react"
//@ts-ignore
import { Link } from "vtex.render-runtime"
import { Props } from "../../interfaces"
//@ts-ignore
import { useCssHandles } from "vtex.css-handles"
import { CSS_HANDLES } from '../../style'


const Bullet = ({ src, titleBullet, bulletBrand, bulletPrice, bulletDiscount, link, imageDiscount, imageAudio, rating }: Props) => {
  const handles = useCssHandles(CSS_HANDLES)

  return (
    <div className={`pt1 pl5 ${handles["bullet__item"]}`}>
      <Link to={link.url} className={handles["bullet__item--link"]}>
        <img src={imageAudio} alt='' className={handles["bullet__item--audio"]} />
        <img src={imageDiscount} alt='' className={`${handles["bullet__item--discount"]}`} />
        <div className={handles["bullet__container--imagen"]}>
          <img src={src} alt={titleBullet} className={`${handles["bullet__item--image"]} externalClass`} />
        </div>
        <p className={handles["bullet__item--title"]}>{titleBullet}</p>
        <div>
          <p className={handles["bullet__item--brand"]}>{bulletBrand}</p>
          <img src={ rating} alt="Rating Product" />
          <p className={handles["bullet__item--price"]}>{bulletPrice}</p>
          <p className={handles["bullet__discount--text"]}>{bulletDiscount}</p>
        </div>
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
    },
    imageDiscount: {
      title: "Imagen de Bullet",
      type: "string",
      widget: {
        "ui:widget": "image-uploader"
      }
    },
    imageAudio: {
      title: "Imagen de Bullet",
      type: "string",
      widget: {
        "ui:widget": "image-uploader"
      }
    },
    rating: {
      title: "Rating Product",
      type: "string",
      widget: {
        "ui:widget": "image-uploader"
      }
    }
  }
}

export default Bullet;
