import React, { Component }  from 'react'

import ContentHeader from '../common/template/contentHeader'
import content from '../common/template/content'
import Tabs from '../common/tab/tabs'
import TabsHeader from '../common/tab/tabsHeader'
import TabsContent from '../common/tab/tabsContent'

class BillingCycle extends Component {
    render(){
        return(
            <div>
                <ContentHeader title='Ciclos de Pagamentos' small='Cadastro' />
                <content>
                    <Tabs>
                       <TabsHeader>

                       </TabsHeader>
                       <TabsContent>

                        </TabsContent>
                   </Tabs>                        
                </content>
            </div>
        )
    }

}

export default BillingCycle