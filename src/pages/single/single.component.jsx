import React, {Component} from 'react';
import './single.styles.scss';
import ImageList from '../../components/imageList/imagelist.component';
import Welcome from '../../components/welcome/welcome.component';
import data from '../../assets/data/data';
import {withRouter} from 'react-router-dom';
import Modal from 'react-responsive-modal';


const styles={
    width: '100%',
}
const bg = {
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

    onOpenModal = (event) => {

        this.setState({ isOpen: true, imgName: event.target.id });
      };
     
    onCloseModal = () => {
        this.setState({ isOpen: false });
      };
    
    render(){
        window.scrollTo(0, 0);
        const filteredItems = data.filter((item)=> item.Ptitle.includes(this.state.props.match.params.id1));
    return(
        <div className='single-page' >
            
            <img className='header-image' src={require(`../../assets/images/${filteredItems[0].image}.JPG`)} alt={filteredItems[0].image}></img>

            <div className='fitered-images'>
                <Welcome title={filteredItems[0].Ptitle}/>

                <ImageList data={filteredItems} isOpen={this.state.isOpen} open={this.onOpenModal} close={this.onCloseModal}/>
                
            </div>

            {(this.state.isOpen && this.state.imgName) ?
                        
                        <Modal open={this.state.isOpen} onClose={this.onCloseModal} styles={bg} >
                            
                            <img style={styles} className='modal-image' src={require(`../../assets/images/${this.state.imgName}.JPG`)} alt=""/>
                        </Modal>
                        :
                        ''
                        
                        }
        </div>
    )
}
}
  
export default withRouter(SinglePage);
