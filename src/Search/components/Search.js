import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { SpaceCard } from "./SpaceCard";
import projImg1 from "../../assets/img/project-img1.png";
import projImg2 from "../../assets/img/project-img2.png";
import projImg3 from "../../assets/img/project-img3.png";
import colorSharp2 from "../../assets/img/color-sharp2.png";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import NavSearch from "../../NavBar/NavSearch";
import React, { useState, useEffect } from 'react';
//import { Container } from "react-bootstrap";

export const Search = () => {
  {
    const [userData, setUserdata]= useState([]);
    const [filterdata, setFilterdata]= useState([]);
    const [query, setQuery] = useState('');
    const [postsPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);


    useEffect( ()=>{
      const getUserdata= async()=>{
        const reqData= await fetch("https://api.spacexdata.com/v4/capsules");
        const resData= await reqData.json();
        //console.log(resData);
        setUserdata(resData);
        setFilterdata(resData);
  
      }
  getUserdata();
    },[]);
  
    const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a onClick={() => paginate(number)} href='!#' className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
    const handlesearch=(event)=>{
      const getSearch= event.target.value; 
      if(getSearch.length > 0)
      {     
       const searchdata= userData.filter( (item)=> item.includes(getSearch));
       setUserdata(searchdata);
      } else {
        setUserdata(filterdata);
      }
      setQuery(getSearch);
    }
    const paginate = pageNumber => setCurrentPage(pageNumber);

  
    return(

          <React.Fragment>              
           <Container>
           
          <div className='row mt-3'> 
              <div className='col-md-12 mt-3 mb-3'>               
                  <div className="col-md-6">                
                  <input  type="text" name='name' value={query}   className="form-control" onChange={(e)=>handlesearch(e)} placeholder='Search Caspsules...' />
                </div>          
              </div>
  
              <div className='col-md-12'>
              <table className="table" style={{ color: "#fff" }}>
                <thead>
                  <tr>
                    <th>Sr. No </th>
                    <th>Name</th>
                    <th>Id</th>
                    <th>Serial No.</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    userData.map( (getUser, index)=>(
                    <tr key={index}>
                    <td>{index+1} </td>
                    <td>{getUser.type}</td>
                    <td>{getUser.id}</td>
                    <td>{getUser.serial}</td>
                    <td>{getUser.status}</td>
                    </tr>
                     )) }  
                      
                </tbody>
              </table>
              </div>
          </div> <Pagination
            postsPerPage={postsPerPage}
        totalPosts={userData.length}
        paginate={paginate}>
          </Pagination>
        </Container>
  
          </React.Fragment>
      );
                    }
                  }
//   const Search = [
//   return (
//     <section className="project" id="project">
//       <Container>
//         <Row>
//           <Col size={12}>
//             <div>
//               <Tab.Container id="projects-tabs" defaultActiveKey="first">
//                 <Nav className="justify-content-center align-items-center">
//                   {/* <Form className="d-flex">
//                     <Form.Control
//                       type="search"
//                       placeholder="Search  Launches/Capsules"
//                       aria-label="Search"
//                     />
//                     <Button variant="outline-success">Search</Button>
//                   </Form>{" "}
//                   &nbsp; &nbsp;
//                   <Form className="d-flex">
//                     <Form.Control
//                       type="search"
//                       placeholder="status"
//                       aria-label="Search"
//                     />
//                     <Button variant="outline-success">Search</Button>
//                   </Form>{" "}
//                   &nbsp; &nbsp;
//                   <Form className="d-flex">
//                     <Form.Control
//                       type="search"
//                       placeholder="Original launch"
//                       aria-label="Search"
//                     />
//                     <Button variant="outline-success">Search</Button>
//                   </Form>{" "}
//                   &nbsp; &nbsp;
//                   <Form className="d-flex">
//                     <Form.Control
//                       type="search"
//                       placeholder="Type"
//                       aria-label="Search"
//                     />
//                     <Button variant="outline-success">Search</Button>
//                   </Form>{" "}
//                   &nbsp; &nbsp; */}
//                   <NavSearch/>
//                 </Nav>
//                 <div></div>&nbsp;&nbsp;&nbsp;
//                 <Tab.Content id="slideInUp">
//                   <Tab.Pane eventKey="first">
//                     <Row>
//                       {Search.map((Search, index) => {
//                         return <SpaceCard key={index} {...Search} />;
//                       })}
//                     </Row>
//                   </Tab.Pane>
//                 </Tab.Content>
//               </Tab.Container>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//       <img className="background-image-right" src={colorSharp2}></img>
//     </section>
//   );
// };

