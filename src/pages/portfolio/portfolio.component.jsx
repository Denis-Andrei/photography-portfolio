import React,{Component} from 'react';
import './portfolio.styles.scss';
import data from '../../assets/data/data';

import JumboImg from '../../assets/images/jumbo-portofolio.jpg';
import Jumbotron from '../../components/jumbotron/jumbotron.component';
import FilterBox from '../../components/filterbox/filterbox.component';
import PortofolioCardList from '../../components/portfolio-card-list/portfolio-card-list.component';

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

    componentDidMount(){
        window.scrollTo(0, 0);
    }
    
    render(){
        const {props, categories, btnVal, cards} = this.state;
        const filteredCards = cards.filter(obj => obj.title.toLowerCase().includes(btnVal.toLowerCase()));
        console.log(filteredCards);
        
        return(
            <div className='portfolio-page'>
                <Jumbotron title={'portfolio'} image={JumboImg}/>
                <FilterBox onClick={this.onBtnClick} active={btnVal} name={categories} props={props}/>
                <PortofolioCardList  cards={filteredCards} />
            </div>
        )
    }
}

export default PortofolioPage;