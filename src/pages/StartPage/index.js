import React from 'react';
import { Link } from "react-router-dom";
import './index.css';
import logiGetIn from "../../assets/img/logo-getin.png"
import Search from '../../components/Search';
import SearchDetails from '../../components/SearchDeatails';
import RestaurantList from '../../components/RestaurantList';
import axios from 'axios';

class StartPage extends React.Component {

    state = {
        restaurants: [],
        paginator: {
            limit: 10,
            page: 1,
            total: 0
        },
        termToSearch: '',
        search: false,
        loading: false
    }
    

    componentDidMount() {
        this.searchRestaurants();
        window.addEventListener('scroll', this.loadMore);
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.loadMore);
    }

    loadMore = () => {
        if (window.innerHeight + document.documentElement.scrollTop === document.scrollingElement.scrollHeight) {
            let paginator = this.state.paginator;
            paginator.page++;
            this.setState({ paginator }, () => {
                this.searchRestaurants(true)
            });
            
        }
    }

    handleTerm = (newValue) => {
        let paginator = this.state.paginator;
        paginator.page = 1;
        this.setState({ paginator });
        this.setState({ search: newValue ? true : false });
        this.setState({ termToSearch: newValue }, () => {
            this.searchRestaurants();
        });
        
    }

    searchRestaurants = (add = false) => {

        if(this.state.paginator.total && (this.state.paginator.total / this.state.paginator.limit) < this.state.paginator.page) {
            return;
        }

        this.setState({ loading: true });

        const url = `https://605d074f9386d200171ba209.mockapi.io/api/v1/restaurants?page=${this.state.paginator.page}&limit=${this.state.paginator.limit}&search=${this.state.termToSearch}`
        axios.get(url)
          .then(res => {

            if(!this.state.paginator.total) {
                let paginator = this.state.paginator;
                paginator.total = res.data.pagination.total;
                this.setState({ paginator });
            }

            console.log(this.state.paginator.page)
            console.log((this.state.paginator.total / this.state.paginator.limit))
            

            const restaurants = add ? this.state.restaurants.concat(res.data.data) : res.data.data;
            this.setState({ restaurants });
            this.setState({ loading: false });
        })
    }

    render() {
        return(
        <>
            <div id="header" className={`all-content ${this.state.search ? 'searching' : ''}`}>
                <div className="header">
                    <div className="content">
                        <div className="container">
                            <div className="header-content">
                                <div className="top-header">
                                    <div className="logo-get-in">
                                        <img src={logiGetIn}></img>
                                    </div>
                                    <div className="title-top">
                                        <h2 className="dark-down">Descubra novos sabores</h2>
                                        <p className="lead dark">Aqui eu converso com você sobre<br/>nossa proposta</p>
                                    </div>
                                </div>
                                <Search handleTerm={this.handleTerm} ></Search>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main">
                    <div className="content">
                        <div className="container-main">
                            <div className="top-header restaurants-top-header">
                                <h2>Restaurantes</h2>
                                <SearchDetails term={this.state.termToSearch}></SearchDetails>
                            </div>
                            <RestaurantList list={this.state.restaurants} loading={this.state.loading}></RestaurantList>
                        </div>
        
                    </div>
                </div>
            </div>
        </>
        );
    }
  }
  
  export default StartPage;