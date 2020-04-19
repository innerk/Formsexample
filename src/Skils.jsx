import React, { useContext } from 'react';
import { FormContext } from './Form';

export default (props) => {

    const context = useContext(FormContext);

    const addtoList = (value, list) =>{
        console.log("0");
        context.setSkills([value].concat(context.skills));
    }

const removeFromList = (value, list) => context.setSkills(context.skills.filter(v => v !== value))

return(
    <div class="alert alert-danger alert-dismissible fade show">
        <p>{context.email}</p>
        <label htmlFor="">
            <input type="checkbox" name="likes[]" id=""
            onChange={(ev) => ev.target.checked ? addtoList("Ruby"): removeFromList("Ruby")}/>
            Ruby
        </label>
        <label htmlFor="">
            <input type="checkbox" name="" id=""
             onChange={(ev) => ev.target.checked ? addtoList("Javascript"): removeFromList("Javascript")}/>
            Javascript                                  
        </label>
        
    </div>
)
}