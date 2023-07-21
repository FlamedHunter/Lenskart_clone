import React from 'react'
import './listingPage.css'

const list = [
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


const sizes = [
    38,39,40,41,42,43,44,45,46,47,49
]

const color = [
    'red','blue','white','green','orange','pink','yellow'
]


const ListingPage = () => {

    const displayproducts = list.map(product=>{
        return(
            <>
                <div className='newdropsproductmainbox'>
                    <div className='listingpageproductbox'>
                        <div>
                            <img src={product.img} alt="" className='listingpageproductboximg' />
                        </div>
                    </div>
                    <div>
                        <span className='listingpageproductname'>{product.name}</span>
                    </div>
                    <button className='listingpageproductbutton'>
                        <span>View Product - </span>
                        <span className='listingpageproductpricetag'> ${product.price}</span>
                    </button>
                </div>
                
            </>
        )
    })


    const dispplaysizes = sizes.map(size=>{
        return(
            <>
                <button className='filtersizebox'>
                    {size}
                </button>
            </>
        )
    })

    const dispplaycolors = color.map(color=>{
        return(
            <>
                <button className='filtersizebox' style={{ backgroundColor: color }}>
                </button>
            </>
        )
    })


    const handledropdown = (id1,id2)=>{
        if(document.getElementById(id2).clientHeight === 0){
            document.getElementById(id1).style.transform = "rotate(180deg)";
            document.getElementById(id2).style.height = "auto";
            document.getElementById(id2).style.opacity = '1';
        }
        else{
            document.getElementById(id1).style.transform = "";
            document.getElementById(id2).style.height = "0";
            document.getElementById(id2).style.opacity = '0';
        }  
    }


  return (
    <>
        <div className='listingpage'>

            <div className='listingpageoffercontainer'>
                <div className='listingofferbox'>
                    <img src="https://drive.google.com/u/0/uc?id=19bJNpV5lLNQ9A4NutaTj8rZyJ9kxHB-G&export=download" alt=""  className='listingofferimg'/>
                </div>
            </div>

            <div className='listingpagestartcontainer'>
                <div>
                    <h3 className='listingpageleftheading'>
                        Life Style Shoes
                    </h3>
                    <span className='listingpageitemscount'>
                        122 items
                    </span>
                </div>

                <div>
                    <select name="" id="" className='listingpageoption'>
                        <option disabled selected className='listingpageopt'>Select an option</option>
                        <option value="option1" className='listingpageopt'>Trending</option>
                        <option value="option2" className='listingpageopt'>Price (high to low)</option>
                        <option value="option3" className='listingpageopt'>Price (low to high)</option>
                    </select>
                </div>
            </div>

            <div className='lsitingpagemain'>
                <div className='listingpagemainleft'>
                    <h6 className='listingpagemainleftheading'>Filters</h6>


                    <div className='listingpagefiltertypebox'>
                        <div className='listingpagefiltertypeheading'>
                            refine by
                        </div>

                        <div className='listingpagefiltertypearrowbox'>
                            <img src="https://www.svgrepo.com/download/80156/down-arrow.svg" alt=""  className='listingpagefiltertypearrow'/>
                        </div>
                    </div> 

                    <div>

                    </div>


                    <div className='listingpagefiltertypebox' onClick={()=>handledropdown('sizearrow','sizedisplay')}>
                        <div className='listingpagefiltertypeheading'>
                            size
                        </div>

                        <div className='listingpagefiltertypearrowbox' id='sizearrow'>
                            <img src="https://www.svgrepo.com/download/80156/down-arrow.svg" alt=""  className='listingpagefiltertypearrow'/>
                        </div>
                    </div> 

                    <div className='listingpagefiltersizecontainer' id='sizedisplay'>
                        {dispplaysizes}
                    </div>


                    <div className='listingpagefiltertypebox' onClick={()=>handledropdown('colorarrow','colordisplay')}>
                        <div className='listingpagefiltertypeheading'>
                            color
                        </div>

                        <div className='listingpagefiltertypearrowbox' id='colorarrow'>
                            <img src="https://www.svgrepo.com/download/80156/down-arrow.svg" alt=""  className='listingpagefiltertypearrow'/>
                        </div>
                    </div> 

                    <div className='listingpagefiltersizecontainer' id='colordisplay'>
                        {dispplaycolors}
                    </div>


                    <div className='listingpagefiltertypebox' onClick={()=>handledropdown('typearrow','typedisplay')}>
                        <div className='listingpagefiltertypeheading'>
                            Type
                        </div>

                        <div className='listingpagefiltertypearrowbox' id='typearrow'>
                            <img src="https://www.svgrepo.com/download/80156/down-arrow.svg" alt=""  className='listingpagefiltertypearrow'/>
                        </div>
                    </div> 

                    <div className='listingpagefiltersizecontainer' id='typedisplay'>
                        {dispplaycolors}
                    </div>



                </div>

                <div className='listingpagemainright'>
                    {displayproducts}
                </div>
            </div>

        </div>
    </>
  )
}

export default ListingPage
