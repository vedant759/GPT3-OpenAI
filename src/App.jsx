import React from 'react'
import {Navbar, Brand, CTA} from "./components"   //Importing the components which are exported from index.js in the components folder.
import {Blog, Features, Footer, Header, WhatGPT3, Possibility} from "./containers" //Importing containers (which are components only) which
                                                                                    //are exported from index.js in the containers folder.

import './App.css'
import './index.css'

const App = ()=>{
    return(
        <div className='App'>
            <div className='gradient__bg'>
            <Navbar />
            <Header />
            </div>
            <Brand />
            <WhatGPT3 />
            <Features />
            <Possibility />
            <CTA />
            <Blog />
            <Footer />
        </div>
    )
}

export default App