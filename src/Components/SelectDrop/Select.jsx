import React, { useEffect, useState } from "react";
import '../SelectDrop/Select.css';
import {FaAngleDown} from 'react-icons/fa'

import { ClickAwayListener } from '@mui/base/ClickAwayListener';

function Select({data,placeholder,icon}){

    const [isOpenSelect , setOpenSelect] = useState(false);
    const [SelectedIndex,setSelectedIndex] = useState(0);
    const [selectedItem,setSelectedItem] = useState(placeholder);

    const [list,setList] = useState(data);
    const [list1,setList1] = useState(data);


    const openSelct=()=>{
        setOpenSelect(!isOpenSelect);
        if(selectedItem.length!=0) setList(data);
    }

    const closeSelect=(index,itemName)=>{
        setSelectedIndex(index);
        setOpenSelect(false);
        setSelectedItem(itemName);
    }

    const filter=(e)=>{

        const keyword = e.target.value.toLowerCase();
        
        // give array for seached key
        const searchedKey = list1.filter((item)=>{
            return item.toLowerCase().includes(keyword);
        })

        // now delete duplicate from searchedKey Array
        const searchedKeyFinal = searchedKey.filter((item,idx)=>searchedKey.indexOf(item)===idx);

        // console.log(finalList);

        setList(searchedKeyFinal);
    }

    return(
        <ClickAwayListener onClickAway={()=>setOpenSelect(false)}>
            <div className="selectDrop cursor position-relative">
                {icon}
            <span className="openSelect" onClick={openSelct}>{selectedItem.length>14 ? selectedItem.substr(0,14)+'...' : selectedItem} <FaAngleDown className="arrow"/></span>
            {
                isOpenSelect && <div className="selectDropdown">
                <div className="searchField">
                    <input type="text" placeholder="seach items..." onChange={filter}/>
                </div>

                <ul className="searchResults">
                    <li key={0} onClick={()=>closeSelect(0,placeholder)} className={`${SelectedIndex==0 ? 'active' : ''}`}>{placeholder}</li>
                {
                    list.map((item,idx)=>{
                        return <li key={idx+1} onClick={()=>closeSelect(idx+1,item)} className={`${SelectedIndex==idx+1 ? 'active' : ''}`}>{item}</li>
                    })
                }
                </ul>

                {/* <ul className="searchResults">
                        <li onClick={()=>closeSelect(0,'All Categories')} className={`${SelectedIndex===0 ? 'active' : ''}`}>All Categories</li>
                        <li onClick={()=>closeSelect(1,'Clothing and beauty')} className={`${SelectedIndex===1 ? "active" : ''}`}>Clothing and beauty</li>
                        <li onClick={()=>closeSelect(2,'Fresh seafood')} className={`${SelectedIndex===2 ? "active" : ''}`}>Fresh seafood</li>
                        <li onClick={()=>closeSelect(3,'Milk and Dairies')} className={`${SelectedIndex===3 ? "active" : ''}`}>Milk and Dairies</li>
                        <li onClick={()=>closeSelect(4,'Pet foods and toys')} className={`${SelectedIndex===4 ? "active" : ''}`}>Pet foods and toys</li>
                        <li onClick={()=>closeSelect(5,'Fast food')} className={`${SelectedIndex===5 ? "active" : ''}`}>Fast food</li>
                        <li onClick={()=>closeSelect(6,'Baking material')} className={`${SelectedIndex===6 ? "active" : ''}`}>Baking material</li>
                        <li onClick={()=>closeSelect(7,'Bread and Juice')} className={`${SelectedIndex===7 ? "active" : ''}`}>Bread and Juice</li>
                        <li onClick={()=>closeSelect(8,'Milk and Dairies')} className={`${SelectedIndex===8 ? "active" : ''}`}>Milk and Dairies</li>
                        <li onClick={()=>closeSelect(9,'Wines and Drinks')} className={`${SelectedIndex===9 ? "active" : ''}`}>Wines and Drinks</li>
                        <li onClick={()=>closeSelect(10,'Clothing and beauty')} className={`${SelectedIndex===10 ? "active" : ''}`}>Clothing and beauty</li>
                        <li onClick={()=>closeSelect(11,'Fresh seafood')} className={`${SelectedIndex===11 ? "active" : ''}`}>Fresh seafood</li>
                        <li onClick={()=>closeSelect(12,'Wines and Drinks')} className={`${SelectedIndex===12 ? 'active' : ''}`}>Wines and Drinks</li>

                    </ul> */}
            </div>
            }
        </div>
        </ClickAwayListener>    
    )

}

export default Select;