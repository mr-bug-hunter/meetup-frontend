import { useState } from "react"
import useFetch from "../useFetch"
import EventPages from "./EventsPage"
import {Link} from "react-router-dom"


const Event = ({ searchTitle})=>{

    const {data, loading, error} = useFetch("https://meetup-backend-two-beta.vercel.app/meetup")
    
    const [eventsType, setEventType] = useState("All")
    

    const filteredEvents = data?.readMeet?.filter((event)=>{
        const drop = eventsType === "All" ||
     event.eventType === eventsType

     const meetSearch = 
     event.title.toLowerCase().includes(searchTitle.toLowerCase())

     return drop && meetSearch
    })
    
    
    
    // console.log(eventsType)
    return(
        <div className="bg-light">
        <div className="container">
            <div className="mt-4">
               
                <div className="d-flex justify-content-between align-items-center ">
                    <h2> <strong>Meetup Events</strong> </h2>
                    
                
                <select className="form-select w-25 rounded-5 rounded-top-0"
                value={eventsType} onChange={(e)=> setEventType(e.target.value)}
                >
                    <option value="All">Select Event Type</option>
                    <option value="Online Event">Online Event</option>
                    <option value="Offline Event">Offline Event</option>
                </select>
                </div>
                <section className="mt-4">
                    <div className="row">
                    {filteredEvents?.map((events)=>(
                        <div key={events._id} className="col-md-4">
                            <div className="position-relative">
                            <img src={events.img} className="img-fluid rounded" alt="" />
                            <div className="position-absolute top-0 start-0 m-2 bg-light py-2 p-2 rounded">{events.eventType}</div> 
                            </div>
                         <a>{events.timing}</a>
                         <h2><Link to={`/EventsPage/${events._id}`} className="text-decoration-none text-dark">{events.title}</Link></h2> 
                         
                        </div>
                    ))}
                    </div>
                </section>
                
            </div>
        </div>
        </div>
    )
}

export default Event