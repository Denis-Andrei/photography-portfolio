import React, {Component} from 'react';
import './single.styles.scss';
import ImageList from '../../components/imageList/imagelist.component';
import Welcome from '../../components/welcome/welcome.component';
import data from '../../assets/data/data';
// import {withRouter} from 'react-router-dom';
import Modal from 'react-responsive-modal';


const imgStyles={
    width: '100%',
}
const modalStyles = {
    overlay: {
      background: "rgba(0,0,0, 0.9)"
    }, 
    modal: {
        transform: 'translateY(5rem)',   
    }
  };


class  SinglePage extends Component {
    constructor(props){
        super(props)
        this.state={
            props: props,
            data: data,
            isOpen: false,
            imgName: ''
        }
    }

    componentDidMount(){
        window.scrollTo(0, 0);
    }

    onOpenModal = (event) => {
        this.setState({ isOpen: true, imgName: event.target.id });
      };
     
    onCloseModal = () => {
        this.setState({ isOpen: false });
      };
    
    render(){
        
        const {props, data, isOpen, imgName} = this.state;
        const filteredItems = data.filter((item)=> item.Ptitle.includes(props.match.params.id1));
        
        return(

            <div className='single-page' >
                
                <img className='header-image' src={require(`../../assets/images/portfolio/${filteredItems[0].image}.jpg`)} alt={filteredItems[0].image}></img>

                <div className='fitered-images'>
                    <Welcome title={filteredItems[0].Ptitle}/>
                    <ImageList data={filteredItems} isOpen={isOpen} open={this.onOpenModal} close={this.onCloseModal}/>
                    
                </div>

                {
                    (isOpen && imgName) 
                ?
                    <Modal open={isOpen} onClose={this.onCloseModal} styles={modalStyles} >
                        <img style={imgStyles} className='modal-image' src={require(`../../assets/images/portfolio/${imgName}.jpg`)} alt={`${imgName}`}/>
                    </Modal>
                :
                    ''
                }
            </div>
        )
}
}
  
export default SinglePage;
