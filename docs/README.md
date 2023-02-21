📢 Use this project, [contribute](https://github.com/{OrganizationName}/{AppName}) to it or open issues to help evolve it using [Store Discussion](https://github.com/vtex-apps/store-discussion).

# Bullet Diagramation

![All Contributors](https://img.shields.io/badge/all_contributors-1-green.svg?style=flat-square)



About
This component will allow us to develop bullets that target lower level categories

<img  alt="image" src="https://res.cloudinary.com/dafsjo7al/image/upload/v1677006402/bullet_ibcexh.png">

## Configuration 

1. Import the Bullet Diagramation's app to your theme's dependencies in the manifest.json, for example:
```json
  "dependencies": {
    "{vendor}.bullets-diagramation": "0.x"
  }
 ```
 
 2. Add the list-context block to the store-theme. for example:
```json
 {
"list-context.bullet-group": {
    "title": "List Context Bullets Group",
    "children": [
      "slider-layout#bullet-group"
    ],
    "props": {
      "bullets": [
        {
          "imageAudio": "https://res.cloudinary.com/dafsjo7al/image/upload/v1675884851/audio_bca8qr.png",
          "imageDiscount": "https://res.cloudinary.com/dafsjo7al/image/upload/v1675880251/discount1_lqerjf.png",
          "image": "https://cosonyb2c.vtexassets.com/arquivos/ids/355311/01-Product-WH-1000XM5-S.jpg?v=1762194157",
          "titleBullet": "Audífonos inalámbricos con noise cancelling WH-1000XM5",
          "bulletBrand": "WH1000XM5/BMUC",
          "rating": "https://res.cloudinary.com/dafsjo7al/image/upload/v1676609103/4.5_mdndet.png",
          "bulletPrice": "$ 1.499.900",
          "bulletDiscount": "$ 2.249.900",
          "link": {
            "url": "/electrodomesticos"
          }
        },
      ]
    }  
  }
}
   ```

 Block name     | Description                                      |
| -------------- | ----------------------------------------------- |
| `list-context.bullet-group` | ![https://img.shields.io/badge/-Mandatory-red](https://img.shields.io/badge/-Mandatory-red)  Top level block that must be declared in the store-theme block to render a default detailed list with all bullets   |

### list-context.bullet-group props

| Prop name    | Type            | Description    | Default Value                                                     |
| ------------ | --------------- | --------------------------------------------------------------------- | ---------- | 
| `bullet`        | `Array`       | Define the bullet array to render in the list-context       | `undefined`              |


### bullets props

| Prop name    | Type            | Description    | Default value                                                                                                                               |
| ------------ | --------------- | --------------------------------------------------------------------- | ---------- | 
| `img`        | `String`       | Define the image to render in the list-context       | `undefined`              |
| `titleBullet`        | `String`       | Define the title to render in the list-context       | `undefined`              |
| `Link`        | `LinkProps`       |  Define the url to render in the list-context       | `undefined`              |


## Customization

In order to apply CSS customizations in this and other blocks, follow the instructions given in the recipe on [Using CSS Handles for store customization](https://vtex.io/docs/recipes/style/using-css-handles-for-store-customization).

| CSS Handles |
| ----------- | 
| `bullet__item` | 
| `bullet__item--title` | 
| `bullet__item--image` | 
| `bullet__item--link` | 
| `bullet__item--discount` | 
| `bullet__discount--text` | 
| `bullet__item--audio` | 
| `bullet__item--brand` | 
| `bullet__item--price` | 
| `bullet__container--imagen` | 


<!-- DOCS-IGNORE:start -->

## Contributors ✨

SEBASTIAN MENA
<!-- DOCS-IGNORE:end -->

---- 

Check out some documentation models that are already live: 
- [Breadcrumb](https://github.com/vtex-apps/breadcrumb)
- [Product List Context](https://github.com/vtex-apps/product-list-context)
- [Image](https://vtex.io/docs/components/general/vtex.store-components/image)
- [Condition Layout](https://vtex.io/docs/components/all/vtex.condition-layout@1.1.6/)
- [Add To Cart Button](https://vtex.io/docs/components/content-blocks/vtex.add-to-cart-button@0.9.0/)
- [Store Form](https://vtex.io/docs/components/all/vtex.store-form@0.3.4/)
