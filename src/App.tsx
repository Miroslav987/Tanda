import React, { useEffect, useState } from 'react';
import { Navbar } from './Components/Navbar';
import { SimilarProducts } from './Components/SimilarProducts';
import { Footer } from './Components/Footer';
import { CardDetails } from './Pages/CardDetails';
import { ListReviews } from './Components/Reviews/ListReviews';
import axios from 'axios';
export interface DetailProduct {
    id:"";
    title:string;
    description:string;
    sellingPrice:number;
    createdAt:string;
    category:{
      name:string;
      slug:string;
    },

}
export interface Comments { 
          name:string;
          description:string;
}
export interface DetailProductProps {
  data: DetailProduct;
}
export interface CommentsProps {
  comments: Comments[];
}

function App() {
  const API = "https://api.tanda.kg/graphql/"
  const [search,setSearch] = useState<number>(1)
  const [data, setData]= useState<DetailProduct>(
    {
      id:"",
      title:"",
      description:"",
      sellingPrice:0,
      createdAt:"",
      category:{
        name:"",
        slug:""
      }
  }
)
const [comments , setComments] =useState([])


  const graphqlQueryProduct= {
       query:`
          query  {
              barcode(id:${search} ) {
                  id
                  title
                  description
                  sellingPrice
                  createdAt
                  category {
                      name
                      slug
                  }
              }
          }`
   } 
  const graphqlQueryComments= {
       query:`
          query  {
            __schema{
                types{
                  name
                  description
                }
            }
          }`
   } 

   function Search() {
      if (search !== 0 && search !<= 365) {
         axios({
          url: API,
          method: 'post',
          data: graphqlQueryProduct
        }).then(response => {
          let {data} = response.data
          setData(data.barcode)
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
        return
    }
  }
   
   function Comments() {
        axios({
          url: API,
          method: 'post',
          data: graphqlQueryComments
        }).then(response => {
          let {data} = response.data
          setComments(data.__schema.types)
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
        
  }
  
  
  useEffect(()=>{
      Search()
  },[search])
  useEffect(()=>{
    Search()
    Comments()
  },[ ])
  
  
  return (
    <>
      <main>
        <Navbar  setSearch={setSearch} search={search} />
        <CardDetails data={data}/>
        <ListReviews comments={comments}/>
        <SimilarProducts/>
        <Footer/>
      </main>
    </>
  );
}

export default App;
