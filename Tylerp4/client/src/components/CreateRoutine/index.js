import React from 'react';
import './CreateRoutine.css';
import { Redirect } from 'react-router-dom';
import { createRoutine } from '../../services/apiService'
import './CreateRoutine.css'

class CreateRoutine extends React.Component {
    constructor(props) {
        super(props)

        this.props = props
        this.state = {
            created: false,
            name: '',
            userId: props.user.id
        }
    }


  handleChange = (e) => {
    const currentElement = e.target
    const { name, value } = currentElement
    const newState = {};
    newState[name] = value
    this.setState(newState)
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    const { userId, name, startTime, endTime, description } = this.state
    const routine = { userId, name, startTime, endTime, description};

    await createRoutine(routine);

    this.setState({created: true})
  }



    render() {
        if (this.state.created){return <Redirect to="/dashboard"></Redirect>}
        return (
            <div className="routines">
                    <h1>What to do:</h1>
                    <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
                        <label for="startTime">Start :</label>
                        <input name="startTime" type="text" />
                        <label for="endTime">End Time :</label>
                        <input name="endTime" type="text" />
                        <label for="description">What to do :</label>
                        <input name="description" type="text" />
                        <div className="submit"><input type = "submit" /></div> 
                    </form>
            </div>
        );
    };
}

export default CreateRoutine