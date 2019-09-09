import React,{Component} from 'react';
import './portofolio.styles.scss';
import data from '../../assets/data/data';

import Jumbotron from '../../components/jumbotron/jumbotron.component';
import JumboImg from '../../assets/images/jumbo-portofolio.jpg';
import FilterBox from '../../components/filterbox/filterbox.component';
import PortofolioCardList from '../../components/portofolio-card-list/portofoliocard-list.component';

class PortofolioPage extends Component{
    constructor(props){
        super(props)
            this.state = {
                props: props,
                categories: ['weddings', 'portraits', 'nature', 'cars', 'others'],
                btnVal: '',
                cards: data,
            }
        
    }

    onBtnClick = (event) => {
        this.setState({btnVal: event.target.value});
    }
    
   

    render(){
        
        const filteredCards = this.state.cards.filter(obj => obj.title.toLowerCase().includes(this.state.btnVal.toLowerCase()));
        
    return(
        <div className='portofolio-page'>
            <Jumbotron title={'portofolio'} image={JumboImg}/>
            <FilterBox onClick={this.onBtnClick} active={this.state.btnVal} name={this.state.categories} props={this.state.props}/>
            <PortofolioCardList  cards={filteredCards} />
        </div>
    )
}
}

export default PortofolioPage;