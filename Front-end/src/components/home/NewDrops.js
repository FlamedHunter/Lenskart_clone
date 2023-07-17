import React from 'react'
import './newDrops.css'

const newdrops = [
    {
        name: 'Product1',
        img: 'https://i02.appmifile.com/417_operator_in/17/08/2022/0d6e11e0b3d93f29d2877c77b28d9102!800x800!85.jpg',
        price:'22'
    },
    {
        name: 'Product2',
        img: 'https://static.nike.com/a/images/t_default/68b1d9b7-4b7f-4068-ba8a-7dfd72bfb580/air-max-90-shoes-GsjTTK.png',
        price:'22'
    },
    {
        name: 'Product3',
        img: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/869aa196-c592-4614-b8a6-6d8573ce7492/kiger-8-trail-running-shoes-gVwLbV.png',
        price:'22'
    },
    {
        name: 'Product4',
        img: 'https://5.imimg.com/data5/RE/US/MY-49405442/594997.jpg',
        price:'22'
    }
]

const NewDrops = () => {

    const displayproducts = newdrops.map(product=>{
        return(
            <>
                <div>
                    <div className='newdorpsproductsbox'>
                        <div>
                            <img src={product.img} alt="" className='newdropsproductimage' />
                        </div>
                    </div>
                    <div>
                        <span className='newdorpsproductname'>{product.name}</span>
                    </div>
                    <button className='newdropsproductbutton'>
                        <span>View Product - </span>
                        <span className='newdropsproductpricetag'> ${product.price}</span>
                    </button>
                </div>
                
            </>
        )
    })
    
  return (
    <> 
        <div className='newdropscontainer'>
            <div className='newdropsheadingbox'>
                <div className='newdropsheadingcontainer'>
                    <span className='newdropsheading'>don't miss out new drops</span>
                </div>
                
                <div>
                    <button className='newdropsbutton'>
                        shop new drops
                    </button>
                </div>
            </div>

            <div className='newdropsproductscontainer'>
                {displayproducts}
            </div>
        </div>
    </>
  )
}

export default NewDrops
