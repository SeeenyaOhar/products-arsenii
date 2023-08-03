import * as React from 'react';

 
const SortButton: React.FunctionComponent = () => {
    return ( <div className="btn-group">
    <button type="button" className="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Sort
    </button>
    <div className="dropdown-menu">
      <a className="dropdown-item" href="#">Sort</a>
      <a className="dropdown-item" href="#">Another action</a>
      <a className="dropdown-item" href="#">Something else here</a>
      <div className="dropdown-divider"></div>
      <a className="dropdown-item" href="#">Separated link</a>
    </div>
  </div> );
}
 
export default SortButton;