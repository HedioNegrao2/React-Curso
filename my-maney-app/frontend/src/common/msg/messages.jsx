import React from 'react'
import ReduxToaster from 'react-redux-toastr'
import 'modules/react-redux-toastr/lib/css/react-redux-toastr.css'


export default props =>(
    <ReduxToaster
        timeOut ={1500}
        newestOnTop={false}
        preventDuplicates={true}
        position='top-right'
        transitionIn='fadeiIn'
        transitionOut='fadeOut'
        progressBar />
)