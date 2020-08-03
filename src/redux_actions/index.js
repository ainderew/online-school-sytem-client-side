export const userDataAction = (userData) =>{
    return{
        type: "storeUserData",
        userData: userData
    }
}
export const clearDataAction = (userData) =>{
    return{
        type: "clearUserData"
    }
}
export const toggleDashboardAction = (dashboardState) =>{
    return{
        type: "toggleDashboard",
        state: dashboardState
    }
}