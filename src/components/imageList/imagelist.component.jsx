// import React, {Component} from 'react';
// import './imagelist.styles.scss';
// import Image from '../image/image.component';



// class ImageList extends Component {
//     constructor(){
//         super()
//         this.state = {
            
//         }
//     }
    

//     render(){
//         console.log(data)
//     return(
//         <div className='image-list'>
//             {
//                data[0].listImages.map(imgTitle => 
//                 <dialog
//                 className="dialog"
//                 style={{ position: "absolute" }}
//                 open
//                 // onClick={this.handleShowDialog}
//                 >
//                     <Image id={imgTitle} image={imgTitle}/> 
//                 </dialog>
               
//                )

//             }
//         </div>

//         )
//     }
// }


// export default ImageList; 



import React from 'react';
import './imagelist.styles.scss';
import Image from '../image/image.component';


const ImageList = ({data, open}) =>{
    
    return(
        <div className='image-list'>
            {
               data[0].listImages.map(imgTitle =>
               
                    <Image id={imgTitle} image={imgTitle}  open={open} /> 

               )
                
            }
           
        </div>
    )
}

export default ImageList; 