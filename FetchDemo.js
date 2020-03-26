import React, { useEffect, useState } from "react";
function handleHttpErrors(res) {
  if (!res.ok) {
    return Promise.reject({ status: res.status, fullError: res.json() });
  }
  return res.json();
}

const ApiFacade = () => {
  // makeOptions creates the headers and optional body for post or put
  const makeOptions = (method, body) => {
    const opts = {
      method: method,
      headers: {
        "Content-type": "application/json",
        Accept: "application/json"
      }
    };
    if (body) {
      opts.body = JSON.stringify(body);
    }
    return opts;
  };

  const getData = async url => {
    const options = makeOptions("GET"); //True add's the token to the request
    const response = await fetch(url, options).then(handleHttpErrors);
    return response;
  };

  const postData = async (url, data) => {
    const options = makeOptions("POST",data); //True add's the token to the request
    const response = await fetch(url, options).then(handleHttpErrors);
    return response;
  };
  return { getData, postData };
};

export default () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const {getData, postData} = ApiFacade();
  useEffect(() => {
    
      getData("https://jsonplaceholder.typicode.com/userss")
      .then(data => {
        setData(data);
        console.log("DATA", data);
      })
      .catch(error => {
        console.log("ERROR:",error);
        //Is it a servererror (code 4xx or 5xx)
        if(error.fullError){
            error.fullError.then(e=>{if(e.msg){setError(error.status+':'+e.msg)}else{setError(error.status+': '+'Something bad happend')}})
        } else { // or is it a networerror (wrong host or sceme)
            setError("There was a network error")
        }
      });
    return () => {
      console.log("Now we clean up before unmounting");
    };
  }, []);

  return (
    <div>
      <ul>
        {data.map(el => (
          <li>{el.name}</li>
        ))}
      </ul>
        <p style={{color:'red'}}>{error}</p>
    </div>
  );
};
