import React from 'react';
import classes from './header.module.css';
import HeaderCartButton from './HeaderCartButton'

// import local image
import mealsImage from '../../assets/meals.jpg'


const Header = (props)=>{

    return(
        <React.Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton onClick={props.onShowCart}/>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt='' />
            </div>
        </React.Fragment>
    )
}

export default Header;