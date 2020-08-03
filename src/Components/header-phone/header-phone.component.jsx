import React, {useState, useEffect} from "react";
import Styles from "./header-phone.module.scss";
import {useDispatch} from "react-redux"
import {toggleDashboardAction} from "../../redux_actions"

//IMAGES
import menuBtn from "../../Assets/icons/phoneBurger.svg"
const PhoneHeader = () =>{
    const dispatch = useDispatch()
    const [phoneDashboardState, setPhoneDashboardState] = useState(false)
    
     //FUNCTIONS
  const toggleDashboard = () =>{
    setPhoneDashboardState(prevState => !prevState)
   
  }
  
  useEffect(() =>{
    dispatch(toggleDashboardAction(phoneDashboardState))
  },[phoneDashboardState])
  
    
    return(
        <div className={Styles.header}>
            <h1 className={Styles.h1}>PIT</h1>
            <img onClick={toggleDashboard} src={menuBtn} alt="" className={Styles.menuBtn} />
        </div>
    )
}

export default PhoneHeader;