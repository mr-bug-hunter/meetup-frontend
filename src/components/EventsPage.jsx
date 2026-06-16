import { useParams } from "react-router-dom"
import useFetch from "../useFetch"
import Header from "./Header"

const EventPages = () => {
    const eventsId = useParams()
        const {data, loading, error} = useFetch("https://meetup-backend-two-beta.vercel.app/meetup")


    const meet = data?.readMeet?.find(
        (meets)=> meets._id === eventsId.eventsId)

    return (
        
            <div className="container py-4 bg-light">
                <Header/>
             <div className="row">

            <div className="col-md-7">
                <h1>{meet?.title}</h1>

                    <p>Hosted By:</p>
                    <p><strong>{meet?.hostedBy}</strong> </p>

                <img src={meet?.img} className="rounded" alt="" />

                
                <h4><strong>Details:</strong></h4>
                <p>{meet?.details}</p>
                
                <h4><strong>Additional Information: </strong></h4>
                <p><strong>Dress Code: </strong>{meet?.additionalInformation?.[0]}</p>
                <p><strong>Age Restrictions: </strong> {meet?.additionalInformation?.[1]} </p>
                
                <h2><strong>Event Tags:</strong></h2>
                <button className="btn btn-secondary">{meet?.eventTags?.[0]}</button> <span></span>
                <button className="btn btn-secondary">{meet?.eventTags?.[1]}</button>
                <br /> <br />
                </div>
                

                <div className="col-md-5 p-3 shadow rounded">
                    <p>🕐{meet?.timing}</p>
                    <p>📍{meet?.marketingAddress}</p>
                    <p>₹ {meet?.price}</p>
                
                    <h3 className="mt-4"><strong>Speakers: </strong>({meet?.speakers?.length})</h3>
                    
                    <div className="row align-items-start">
                        {meet?.speakers?.map((speaker)=>(
                            <div className="col-md-6">
                                <div className="text-center shadow p-2">
                                    <img src={speaker.image} 
                                    className="rounded-circle mx-auto " alt=""
                                    width="80"
                                    height="80" />
                                    <h6><strong>{speaker.name}</strong></h6>
                                    
                                </div>
                            </div>
                        ))}
                    </div>
                
                    
                 {/* <button className="btn btn-danger d-block mx-auto w-50 mt-3">RSVP</button> */}
                </div>
            </div>
        </div>
    )
}

export default EventPages