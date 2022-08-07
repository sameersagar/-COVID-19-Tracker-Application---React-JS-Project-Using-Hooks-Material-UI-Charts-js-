import React, { Component } from 'react';

import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';



import styles from './App.module.css';

import { fetchData } from './api';

import coronaImage from './images/covid.png'






 class App extends Component {
   state = {
     data: {},
     country: '',
   }

  async componentDidMount(){
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) =>{
    const fetchedData = await fetchData(country);

    this.setState({ data: fetchedData, country: country });

  }


  render() {
    const { data, country } = this.state;

    return (
      
      <div className={styles.container}>
        
        <img className={styles.image} src={coronaImage} alt="COVID-19"/>
        <Cards data={data} />
        <br/>
        <h2>Select Country</h2>
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <br/>
        <br/>
        <br/>
        <Chart data={data} country={country}/>  
        <br/>
        <br/>
        <br/>
        <p>Developed By:-</p>
        <p1 ><u>Sameer Sagar</u></p1>
        
      </div>
     
    )
  }
}
export default App;
