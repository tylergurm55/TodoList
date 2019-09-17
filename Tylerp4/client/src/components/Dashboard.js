import React from 'react'
import { Route, Switch } from 'react-router-dom';
// import { userInfo } from 'os';

import CreateRoutine from './CreateRoutine'
import RoutineList from './RoutineList';
import SingleRoutine from './SingleRoutine';
import UpdateRoutine from './UpdateRoutine';



class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            routines: []
        }
    }

    render() {
        const { user } = this.props

        return( 
            <div className="routine">
                <Switch>
                    <Route exact path="/dashboard/" component={RoutineList} />
                    <Route exact path='/dashboard/routine/:id' render={(props)=> <SingleRoutine {...props}/>}/>
                    <Route exact path="/dashboard/create" render={(props) => <CreateRoutine {...props} user={user} />} />
                    <Route exact path='/dashboard/routine/:routine_id/update' render={(props) => <UpdateRoutine {...props}/>}/>
                </Switch>
            </div>
        )
    }
}


export default Dashboard