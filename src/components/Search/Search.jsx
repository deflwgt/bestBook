/* eslint-disable no-unused-vars */
import React from 'react'
import {useState} from 'react'
import '../../assets/cards/Cards_data'
import './Search.css'
import { useSearchParams} from 'react-router-dom';
import cards_data from '../../assets/cards/Cards_data';
import Card from '../../components/Card/Card'
import Modal2 from '../Modal2/Modal2'
import { Link } from 'react-router-dom';
function Search () {
    const [query, setQuery] = useSearchParams();
    const valueQueryName = query.get('bookName');
    const [search,setSearch] = useState('');
    const [book,setBook] = useState(cards_data);
    const [showModal, setShowModal] = useState(false);
    const [selected, setSelected] = useState("");
    const handleShowModal = () => {
        setShowModal(true);
      };
      const handleSelected = (selected) => {
        setSelected(selected);
      };
      const handleCloseModal = () => {
        setShowModal(false);
       
      };
      
  return <div className={`search-container ${search ? "bg" : ""}`}>
      <div className="Search">
        <div className='searchinput'>
          <input type="text" placeholder="What are you looking for?" value={search} onChange={(e)=>{
              setSearch(e.target.value);
              setQuery({
                  bookName:e.target.value
              })
          }}></input> 
          </div>
      </div>
      <div className="searchreturn">
          {
                search && (book.length > 0 ? book.filter(data => {
                  return valueQueryName ? data.name.toLowerCase().includes(valueQueryName.toLowerCase()) : true
                }).map((a) => {
                  return <Card Data={a} key={a.id} img={a.image} name={a.name} onClick={handleShowModal} handleSelected={handleSelected}/>     
                }) : <h1>No Data</h1>)
          }
      </div>
      {/* {showModal && <Modal selected={selected} handleCloseModal={handleCloseModal} />} */}
      
      {showModal && <Modal2 data={selected} show={handleShowModal} onClose={handleCloseModal} />}
      
    </div>
}
export default Search