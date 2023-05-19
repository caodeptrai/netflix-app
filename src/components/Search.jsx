import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AutoComplete, Spin } from "antd";
import { debounce } from 'lodash';
import axios from "axios";
import { API_KEY, TMDB_BASE_URL } from "../utils/constants";




function DebounceSearch({
  fetchOptions,
  debounceTimeout = 300,
  ...props
}) {
  // Search: abcddassdfasdf

  const [fetching, setFetching] = useState(false);
  const [options, setOptions] = useState([]);
 
  const debounceFetcher = React.useMemo(() => {
    const loadOptions = (value) => {
      setOptions([]);
      setFetching(true);

      fetchOptions(value).then((newOptions) => {
        setOptions(newOptions);
        setFetching(false);
      });
    };

    return debounce(loadOptions, debounceTimeout);
  }, [debounceTimeout, fetchOptions]);

  React.useEffect(() => {
    return () => {
      // clear when unmount
      setOptions([]);
    };
  }, []);

  


  return (
    <AutoComplete
    className = 'custom'
      onSearch={debounceFetcher}
      notFoundContent={fetching ? <Spin size='small' /> : null}
      {...props}
    >
       
      { options?.map((opt) => (
        <AutoComplete.Option 
          key={opt.id} 
          value={opt.name} 
          title={opt.name}
          user = {opt}>
          {` ${opt.name}`}
        </AutoComplete.Option>
      ))}
    </AutoComplete>
  );
}




const Search = () => {
  const [value, setValue] = useState([]);
  const navigate = useNavigate();

    const handleSelect = async (value,option) => {
        navigate(`/movies/${option.key}`)
      setValue("")


  };

  

  async function fetchUserList(search) {
         
    try {
        const response  = await axios.get(`${TMDB_BASE_URL}/search/keyword?api_key=${API_KEY}&page=1&query=${search}`)
        return response.data.results;
   
      } catch (error) {
        console.error(error);
      }
  
    }
    

    

  return (
   <DebounceSearch
      placeholder='Enter search...'
      fetchOptions={fetchUserList}
       onChange={(newValue) => setValue(newValue)}
      onSelect={handleSelect}
       value={value}
       style={{ width: '85%', marginRight: 10 }} 
      allowClear = {true}
      className = 'custom'
       >
       
       </DebounceSearch>
  );
};

export default Search;