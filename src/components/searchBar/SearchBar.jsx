import { Search } from "@mui/icons-material";
import { Paper, IconButton } from "@mui/material";
import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { colors } from "../../constants/colors";

function SearchBar() {
 const [value, setValue] = useState('');
 const navigate = useNavigate()

  const submitHandler = e =>{
    e.preventDefault()
   if(value){
    navigate(`/search/${value}`)
    setValue('')
   } 
  }
  return (
    <Paper
      component={"form"}
      onSubmit = {submitHandler}
      sx={{
        border: `1px solid ${colors.secondary}`,
        pl: 2,
        boxShadow: "none",
        borderRadius: "none",
        mr:'5px'
      }}
    >
      <input type="text" placeholder="Search..." className="search-bar" onChange={e=>setValue(e.target.value)}/>
      <IconButton type="submit">
       <i className="fa-solid fa-magnifying-glass"></i>
      </IconButton>
    </Paper>
  );
}

export default SearchBar;
