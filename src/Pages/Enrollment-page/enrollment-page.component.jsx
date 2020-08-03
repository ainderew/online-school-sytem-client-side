import React, {useState} from "react"
import Styles from "./enrollment-page.module.scss"


//COMPONENTS
import EnrollmentCodeForm from "../../Components/Enrollment-code-form/enrollment-code-form.component"
import EnrollmentForm from "../../Components/Enrollment-form/enrollment-form.component"
// import LoadingScreen from "../../Components/loading-screen/loading-screen.component"

import Loading from "../../Assets/loading/loading.svg"
const EnrollmentPage = () =>{
    const [confirmationStatus, setConfirmationStatus] = useState(false)
    const [loadingState, setLoadingState] = useState(false)

    //FUNCTIONS
   const setLoading = () =>{
       setLoadingState(true)
   }
    return(
        <div className={Styles.screen}>
            {(loadingState) ?  ((<div className={Styles.loadingContainer}>
                <img src={Loading} alt="loading" className={Styles.loading}/> 
            </div>)) : null}
           {(confirmationStatus) ? <EnrollmentForm setLoading={setLoading} /> : <EnrollmentCodeForm setConfirmationStatus={setConfirmationStatus} />}
           {/* <EnrollmentForm /> */}
        </div>
    )
}
export default EnrollmentPage;