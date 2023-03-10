export type BulletsSchema = Array<{
    image: string
    imageAudio?: string
    bulletBrand: string
    bulletPrice: string
    rating : string
    bulletDiscount?: string
    imageDiscount?: string
    titleBullet: string
    link?: LinkProps
}>

export interface LinkProps {
    url: string
    attributeNoFollow?: boolean
    attributeTitle?: string
    openNewTab?: boolean
    newTab?: boolean
}

export interface BulletGroupProps {
    bullets: BulletsSchema
}

export interface Props {
    src: string
    rating : string
    bulletBrand: string
    bulletPrice: string
    bulletDiscount?: string
    imageAudio?: string
    imageDiscount?: string
    titleBullet: string
    link: LinkProps
}
