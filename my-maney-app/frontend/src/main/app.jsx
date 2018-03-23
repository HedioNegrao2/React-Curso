import React from 'react'
import '../common/template/dependencia'

import Header  from '../common/template/header'
import Sidebar from '../common/template/sidebar'
import Footer from  '../common/template/footer'
import Routes from './routes'

export default props => (
    <div className='wraper'>
        <Header />
        <Sidebar />
        <div className='content-wrapper'>
            <Routes />
        </div>
        <Footer />
    </div>

)