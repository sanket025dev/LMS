import { createContext, useEffect, useState } from "react";
import { dummyCourses } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import{ useAuth, useUser} from "@clerk/clerk-react"

export const AppContext = createContext()
export const AppContextProvider = (props)=>{

    const currency = import.meta.env.VITE_CURRENCY
    const navigate = useNavigate()

    // course section
    const [allCourses, setAllCourses]= useState([])

    const {getToken} = useAuth()
    const {user} = useUser()

    // const [forTeacher, setForTeacher]= useState(true)
    const [enrolledCourses, setEnrolledCourses] = useState([])

    // fetch user enroll
    const fetcUserEnrolledCourses = async ()=>{
        setEnrolledCourses(dummyCourses)
    }

    // fetch all courses
    const fetchAllCourses = async ()=>{
        setAllCourses(dummyCourses)
    }
    //excute fetch
    useEffect(()=>{
        fetchAllCourses()
        fetcUserEnrolledCourses()
    },[])

    const logToken = async ()=>{
        console.log(await getToken());
    }

    useEffect(() => {
        if(user){
            logToken()
        }
    },[user])
    

    const value = {
        currency, allCourses, navigate, enrolledCourses, fetcUserEnrolledCourses
    }

    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )

}