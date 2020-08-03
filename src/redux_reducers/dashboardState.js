const dashboardReducer = (state=false,action) =>{
    switch (action.type){
        case "toggleDashboard":
            state = action.state;
            return state;
        default:
            return state;
    }
    
}

export default dashboardReducer;