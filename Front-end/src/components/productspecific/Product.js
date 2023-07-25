import React, { useState } from 'react'
import './product.css'


const product = {
    name:'Addidas running sports shoes',
    price:'125',
    img:["https://i02.appmifile.com/417_operator_in/17/08/2022/0d6e11e0b3d93f29d2877c77b28d9102!800x800!85.jpg",
    "https://i02.appmifile.com/417_operator_in/17/08/2022/0d6e11e0b3d93f29d2877c77b28d9102!800x800!85.jpg",
    "https://i02.appmifile.com/417_operator_in/17/08/2022/0d6e11e0b3d93f29d2877c77b28d9102!800x800!85.jpg",
    "https://i02.appmifile.com/417_operator_in/17/08/2022/0d6e11e0b3d93f29d2877c77b28d9102!800x800!85.jpg"],
    colors:["red","blue","pink","green"],
    sizes:[39,40,41,42,43,44,45],
    discp:'This is a very nice product to buy'
}

const Product = () => {

    const [selectedColor, setSelectedColor] = useState(product.colors[0])
    const [selectedSize, setSelectedSize] = useState(product.sizes[0])

    const displayimages = product.img.map(image=>{
        return(
            <div className='productleftimgbox'>
                <img src={image} alt="" className='productleftimg'/>
            </div>
        )
    })

    const displaycolors = product.colors.map(color=>{
        return(
            <div className='colorbox' style={{border: selectedColor === color ? `3px solid ${color}` :'none' }} onClick={()=>setSelectedColor(color)}>
                <div className='colorboxbox' style={{backgroundColor: color}}>

                </div>
            </div>
        )
    })

    const displaysizes = product.sizes.map(size=>{
        return(
            <div className='sizebox' style={{color: selectedSize === size ? 'white':'black', backgroundColor: selectedSize === size ? 'black' : 'white'}} onClick={()=>setSelectedSize(size)}>
                {size}
            </div>
        )
    })
  return (
    <>
        <div className='product'>
            <div className='productmain'>
                <div className='productleft'>
                        {displayimages}
                </div>

                <div className='productright'>
                    <div className='productname'>
                        {product.name}
                    </div>

                    <div className='productprice'>
                        ${product.price}
                    </div>

                    <div className='productcolorbox'>
                        Color
                        <div className='colorselectionbox'>
                            {displaycolors}
                        </div>
                    </div>

                    <div className='productsizes'>
                        <button className='sizechartbutton'>
                            size chart
                        </button>
                        size
                        <div className='allsizescontianer'>
                            {displaysizes}
                        </div>
                    </div>
                    
                    <button className='productaddtocart'>
                        Add to Cart
                    </button>
                    
                    <button className='productbuyitnow'>
                        But it now
                    </button>

                    <div className='aboutproduct'>
                        <div className='aboutproductheading'>
                            About this product
                        </div>
                        <span>
                            {product.discp}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Product
