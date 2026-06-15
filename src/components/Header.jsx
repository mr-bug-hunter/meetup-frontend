import {Link} from "react-router-dom"

const Header = ({searchTitle, setSearchTitle})=>{
    
    return (
        <div>
            <nav className="navbar bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Meetup</Link>
     <input type="search"
                className="form-control w-50 d-flex justify-content-between align-items-center " 
                placeholder="🔍 Search by Title"
                value={searchTitle}
                onChange={(e)=> setSearchTitle(e.target.value)}/>
  </div>
</nav>
      <div className="container">
    <hr />
    </div>
        </div>

        
    )
    
}

export default Header