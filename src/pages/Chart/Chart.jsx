/* eslint-disable no-unused-vars */
import cards_data from "../../assets/cards/Cards_data"
import { LineChart, Line, XAxis, YAxis, Tooltip, BarChart, Bar } from 'recharts';
import {Link} from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io';
import logo from '../../assets/logo.png'
import Home from '../Home/Home'
import './Chart.css'

const Chart = () =>{
     return (
        <>
        
        <div className='aboutUs'>
    <Link to="/">
      <img src={logo} className='logo' alt="" />
      </Link>
      <h1>About Us ! </h1>
    </div>

        <div className="chart">
        
            <h1 className="chartH1">Statistical chart</h1>
            <LineChart width={1000} height={500} data={cards_data} >
            <XAxis dataKey="name"/>
            <YAxis />
            <Tooltip />
            <Line type="line" dataKey="views" stroke="#FF0000" label="Number of reads" />
            <Line type="line" dataKey="comments" stroke="#00c49f" label="Number of comments" />
            <Line type="line" dataKey="rating" stroke="#ffc107" label="Rating (stars)" />
            </LineChart>
      <div>
        <BarChart width={1000} height={500} data={cards_data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar type="bar" dataKey="views" stroke="#FF0000" label="Number of reads" />
          <Bar type="bar" dataKey="comments" stroke="#00c49f" label="Number of comments" />
          <Bar type="bar" dataKey="rating" stroke="#ffc107" label="Rating (stars)" />
        </BarChart>
      </div>
      </div>
        </>
        
      );
}
export default Chart