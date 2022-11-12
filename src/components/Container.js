import React, {Component, useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom';
import Dropdown from './Dropdown';
import Icon from './Icon';
import Suggestion from './Suggestion';

function Container () {

    return (
        <div>
            <div>This is Container</div>
            <Dropdown />
            <Icon />
            <Suggestion />
        </div>
    )
}

export default Container;