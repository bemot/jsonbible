import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { requestBibles } from "./action";
import "./App.css";


    function BooksGrid(props) {
console.log(props.bible);
   return (
            <ul style={{display: 'flex', flexWrap: 'wrap'}}>
                {props.bible.books.map(({name}) => (
                    <li key={name} style={{margin: 30}}>
                        <ul>
                            <li>{name}</li>


                        </ul>

                    </li>
                ))}

            </ul>

        )
    }

const App = () => {
  const { biblesData, isLoading } = useSelector((state) => state);
  const dispatch = useDispatch();

 

  useEffect(() => {
    dispatch(requestBibles());
  }, []);

 
  return (
    <>
      {isLoading && <div className="loading">Data loading...</div>}
      {biblesData.map((bible) => {
        return (
          <div key={bible.name} className="container">
            <div className="content">
              <h1>{bible.name}</h1>
<div>
              <BooksGrid bible={bible}/>
</div>              
          </div>
          </div>
        );
      })}
    </>
  );
};


export default App;

