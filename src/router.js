import React from 'react'
import { Router, Route, Link } from 'react-router'
import {StartingPage, ArchivePage} from './App.js'

React.render((
    <Router>
        <Route path='/' component={StartingPage}></Route>
            <Route path='archive' component={ArchivePage}></Route>
    </Router>
),document.body)