
// import React from "react";
// import dogData from "./dog";

// const Buttons = ({ filterItem, setItem, rescuePups }) => {
//     return (
//         <>
//             <div className="d-flex justify-content-center">
//                 {rescuePups.map((Val, id) => {
//                     return (
//                         <button
//                             className="btn-dark text-white p-1 px-2 mx-5 btn fw-bold"
//                             onClick={() => filterItem(Val)}
//                             key={id}
//                         >
//                             {Val}
//                         </button>
//                     );
//                 })}
//                 <button
//                     className="btn-dark text-white p-1 px-3 mx-5 fw-bold btn"
//                     onClick={() => setItem(dogData)}
//                 >
//                     All
//                 </button>
//             </div>
//         </>
//     );
// };

// export default Buttons;


// // this.state = {
// //     sex: "All"
// // }



// // import React, {Component} from 'react';
// // import './css/reset.css';


// // import { FormControl, FormLabel, FormGroup, FormControlLabel, Checkbox } from '@material-ui/core';


// // class FilterGroup extends Component {

// //   generateFormControlLabel = (selection) => {
// //     return (
// //       <FormControlLabel
// //       control={<Checkbox onChange={() => this.handleChange(selection)} value={selection} />}
// //       label={selection}
// //       key={selection}
// //       />
// //     );
// //   }

// //   handleChange = (value) => {
// //     this.props.filterItems(value, this.props.title);
// //   }

// //   render() {

// //     const selections = this.props.selections.map(this.generateFormControlLabel);

// //     return (
// //       <FormControl component="fieldset">
// //         <FormLabel component="legend">{this.props.title.replace('_', ' ')}</FormLabel>
// //         <FormGroup>
// //           {selections}
// //         </FormGroup>
// //       </FormControl>
// //     )
// //   }
// // }

// // export default FilterGroup;