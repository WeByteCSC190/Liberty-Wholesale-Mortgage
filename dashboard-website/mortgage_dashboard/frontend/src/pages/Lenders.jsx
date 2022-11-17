import axios from 'axios';
import * as React from 'react';
import Moment from 'react-moment';
import { useState, useEffect } from 'react';
import Navbar from "../components/Navbar";
import Search from "../components/SearchLenders";
import Table from "../components/TableLenders";
import Loader from "../components/spinner";
import Footer from '../components/Footer';


const Lenders = () => {

  const [dataTable, setDataTable] = useState([]);
  const [logoTable, setLogoTable] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filterType, setFilterType] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  let testData = []
  let sourceImage = []
  
  function getLenders() {
    const getLendersUrl = `${process.env.REACT_APP_API_URL}/api/lender/`;
  axios({
      method: "GET",
      url:getLendersUrl
    }).then((response)=>{
      const data = response.data;
      setDataTable(data)
      testData = data;
      console.log(data)
      return data
    }).catch((error) => {
      if (error.response) {
        console.log(error.response);
        console.log(error.response.status);
        console.log(error.response.headers);
        }
    })

    const getLendersLogoUrl = `${process.env.REACT_APP_API_URL}/api/lenderLogo/`; 
    axios({
      method: "GET",
      url:getLendersLogoUrl,
    }).then((response)=>{
      const image = response.data;
      setLogoTable(image)
      sourceImage = image;
      console.log(image)
      return image
    }).catch((error) => {
      if (error.response) {
        console.log(error.response);
        console.log(error.response.status);
        console.log(error.response.headers);
        }
    })
}


  useEffect(() => {
    getLenders();
    fetchData(searchValue, filterType).then((dataTable) => {
      setDataTable(dataTable);
      console.log(dataTable)
    })
    const filteredData = filterTable(searchValue, filterType);
    setDataTable(filteredData);
  }, [searchValue, filterType]);


  const column = [
    { heading: 'Company', value: 'company' },
    { heading: 'Rating', value: 'rating' },
    { heading: 'Programs', value: 'programs' },
    { heading: 'Details', value:'Details'},
    { heading: 'Website', value: 'website' },
  ]

  const columns = [
    { heading: 'Logo', value: 'logo'},
    { heading: 'FHA ID', value: 'lender_FHA_ID' },
    { heading: 'VA ID', value: 'lender_VA_ID' },
    { heading: 'Account Executive', value: 'account_executive' },
    { heading: 'Phone Number', value: 'phone_num' },
    { heading: 'Email', value: 'email' },
  ] 


  const fetchData = (searchValue, filterType) => {
    setIsLoading(true);
    
    return new Promise((resolve) => {
         
      setTimeout(() => {
   
        if (searchValue !== '') {
          resolve(testData.filter(dataTable => dataTable.fName.toLowerCase().includes(searchValue.toLowerCase())
          ));
        }
        if (filterType !== '') {
          switch (filterType) {
            case 'Company':
              // console.log("filter by first name")
              resolve(handleSorting("company", 'asc'))
            case 'Rating':
              // console.log("filter by last name")
              resolve(handleSorting("rating", 'asc'))
            case 'Programs':
              // console.log("filter by date")
              resolve(handleSorting("programs", 'asc'))
             resolve(testData)
            default:
              resolve(testData)
          }
        } else if (searchValue === '' || filterType === '') {
          resolve(testData)
        }
        setIsLoading(false);
      }, 1000);
    });
  };
const handleSorting = (sortField, sortOrder) => {
 if (sortField) {
  const sorted = [...dataTable].sort((a, b) => {
    return (
        a[sortField].localeCompare(b[sortField], "en", {
        numeric: true,
        }) * (sortOrder === "asc" ? 1 : -1)
    );
  });
   return sorted;
 }
};
const handleSortingDate = () => {
  const sorted = [...dataTable].sort((a, b) => {
    console.log((a.date))
    return (
        (new Moment(a.date)) - (new Moment(b.date))
    );
  });
   return sorted;
};
  const filterTable = (searchValue, filterType) => {
    setIsLoading(true);
    console.log("filterTable function called")
    if (filterType !== '') {
      switch(filterType) {
        case 'Company':
            console.log("filter by company")
            return handleSorting("company", 'asc')
        case 'Rating':
            console.log("filter by rating")
            return handleSorting("rating", 'asc')
        case 'Programs':
            console.log("filter by programs")
            // return handleSortingDate()
           
        default:
            return testData
      }
    } else if (searchValue === '' || filterType==='') {
      return testData
    }
    if (searchValue !== '') {
      console.log(testData.filter(dataTable => dataTable.fname.toLowerCase().includes(searchValue.toLowerCase())
      ))
      return testData.filter(dataTable => dataTable.fname.toLowerCase().includes(searchValue.toLowerCase())
      );
    }
    setIsLoading(false);
  };
  return (
    <>
    <div className="Header">
      <Navbar />
    </div>
     <div className="Content">
     <p className="Page-Title">Lenders</p> 
     <div className="Lenders">
      
      {isLoading ?
        <Loader /> :   <div>    
          <Search 
              callback1={(searchValue)=> setSearchValue(searchValue)} 
              callback2={(filterType)=> setFilterType(filterType)}
              button1={"Company"}
              button2={"Rating"}
              button3={"Programs"}
              />
          <Table api="http://localhost/api/lender/"  
                 page={"Lenders"} data={dataTable} 
                 column={column} columns={columns} 
                 image={logoTable}/>

          <div className="Footer">
             <Footer />
          </div>
         </div>
      }
      </div>
      </div>
      </>
  );
}

export default Lenders;
