import * as React from 'react';
import {Car} from './car';

interface ComponentProps {
    car: Car;
}

export class CarComponent extends React.Component<ComponentProps, {}> {
    public render() {
        return (
          <div className='car-list-item'>
            <ul className='item-header'>
              <li className='car-model'>
              <h2>{this.props.car.modelName}</h2>
              </li>
              <li className='car-make'>
              <span>{this.props.car.makeName.toUpperCase()}</span>
              </li>
            </ul>
            <p className='car-price'>
              <span>${this.props.car.price.toLocaleString()} drive away</span>
            </p>
          </div>
        );
    }
}
