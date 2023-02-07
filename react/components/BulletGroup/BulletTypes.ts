export type BulletsSchema = Array<{
    image: string
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