import image1 from '../Pizza images/pizzaimg1.jpg'
import image2 from '../Pizza images/pizzaimg2.jpg'
import image4 from '../Pizza images/pizzaimg4.jpg'


import React from 'react';

const PizzaTypes = () => {
    return (
        <div>
            <div className="container pizzatypes">
			<div className="row">
				<h3 className="text-center">Pizza Types</h3>
				<div className="col-md-4">
					<div className="thumbnail">
				      <img src={image1} alt="pepperoni" />
				      <div className="caption">
				        <h3>Pepperoni Pizza</h3>
				        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
				        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
				        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				        
				      </div>
				    </div>
				</div>
				<div className="col-md-4">
					<div className="thumbnail">
				      <img src={image4} alt="cheese" />
				      <div className="caption">
				        <h3>Cheese Pizza</h3>
				        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
				        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
				        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				        
				      </div>
				      </div>
				</div>
				<div className="col-md-4">
					<div className="thumbnail">
				      <img src={image2} alt="vegetable pizza" />
				      <div className="caption">
				        <h3>Vegetable Pizza</h3>
				        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
				        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
				        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				        
				      </div>
				</div>
			</div>
		</div>
        </div>
        </div>
    );
}

export default PizzaTypes;
