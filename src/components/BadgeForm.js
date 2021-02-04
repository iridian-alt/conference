import React, { Component } from 'react';

class BadgeForm extends Component {
    handleClick = () => {
        console.log("button was clicked");
    };

    render () {
        return (
           <div>
               <form onSubmit={this.props.onSubmit}>
                   <div className="form-group">
                       <label>
                           First Name
                       </label>
                       <input
                            onChange={this.props.onChange}
                            className="form-control"
                            type="text"
                            name="firstName"
                            value={this.props.formValues.firstName}
                       />
                   </div>

                   <div className="form-group">
                       <label>
                           Last Name
                       </label>
                       <input
                            onChange={this.props.onChange}
                            className="form-control"
                            type="text"
                            name="lastName"
                            value={this.props.formValues.lastName}
                        />
                   </div>

                   <div className="form-group">
                       <label>
                           Email
                       </label>
                       <input
                            onChange={this.props.onChange}
                            className="form-control"
                            type="email"
                            name="email"
                            value={this.props.formValues.email}
                       />
                   </div>

                   <div className="form-group">
                       <label>
                           Job Title
                       </label>
                       <input
                            onChange={this.props.onChange}
                            className="form-control"
                            type="text"
                            name="jobTitle"
                            value={this.props.formValues.jobTitle}
                       />
                   </div>

                   <div className="form-group">
                       <label>
                           Twitter
                       </label>
                       <input
                            onChange={this.props.onChange}
                            className="form-control"
                            type="text"
                            name="twitter"
                            value={this.props.formValues.twitter}
                       />
                   </div>

                   <button
                    onClick={this.handleClick}
                    className="btn btn-primary"
                   >
                    Save
                   </button>
               </form>
               {this.props.error && <p>{this.props.error.message}</p>}
           </div>
        )
    }
}

export default BadgeForm;



/* con state dentro de este componente.
import React, { Component } from 'react';

class BadgeForm extends Component {
    state = {

    };
    handleChange = (e) => {
        // console.log({
        //     name: e.target.name,
        //     value: e.target.value });
        this.setState({
            [e.target.name]: e.target.value,
        });
    };
    handleClick = () => {
        console.log("button was clicked");
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("form was submitted");
        console.log(this.state); //imprimir todo el estado.
    };

    render () {
        return (
           <div>
               <form onSubmit={this.handleSubmit}>
                   <div className="form-group">
                       <label>
                           First Name
                       </label>
                       <input
                            onChange={this.handleChange}
                            className="form-control"
                            type="text"
                            name="text"
                            value={this.state.firstName}
                       />
                   </div>

                   <div className="form-group">
                       <label>
                           Last Name
                       </label>
                       <input
                            onChange={this.handleChange}
                            className="form-control"
                            type="text"
                            name="lastname"
                            value={this.setState.lastName}
                        />
                   </div>

                   <div className="form-group">
                       <label>
                           Email
                       </label>
                       <input
                            onChange={this.handleChange}
                            className="form-control"
                            type="email"
                            name="email"
                            value={this.setState.email}
                       />
                   </div>

                   <div className="form-group">
                       <label>
                           Job Title
                       </label>
                       <input
                            onChange={this.handleChange}
                            className="form-control"
                            type="text"
                            name="jobTitle"
                            value={this.setState.jobTitle}
                       />
                   </div>

                   <div className="form-group">
                       <label>
                           Twitter
                       </label>
                       <input
                            onChange={this.handleChange}
                            className="form-control"
                            type="text"
                            name="twitter"
                            value={this.setState.twitter}
                       />
                   </div>

                   <button
                    onClick={this.handleClick}
                    className="btn btn-primary"
                   >
                    Save
                   </button>
               </form>
           </div>
        )
    }
}

export default BadgeForm;

*/