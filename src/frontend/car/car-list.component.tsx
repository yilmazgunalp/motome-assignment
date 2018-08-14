import * as React from 'react';
import {RouteComponentProps} from 'react-router';
import {CarComponent} from './car.component';
import {Car} from './car';

interface CarListParameters {
    makeName: string
}

interface ComponentState {
    cars: Car[];
}

export class CarListComponent extends React.Component<RouteComponentProps<CarListParameters>, ComponentState> {
    
    constructor(props: any) {
        super(props);

        this.state = {
            cars: [],
        };

        this.getCars();
    }
    public render() {
        return (
            <div className='car-list'>
                <h2>{this.props.match.params.makeName.toUpperCase()}</h2>
            <div className='car-list-wrapper'>
                {this.state.cars.map((car) => <CarComponent car={car}/>)}
            </div>
            </div>
        );
    }

    private getCars() {
      fetch('//localhost:3010/cars/'+this.props.match.params.makeName)
      .then(res => res.json())
      .then(data => this.setState({cars: data}))
    } 
}
