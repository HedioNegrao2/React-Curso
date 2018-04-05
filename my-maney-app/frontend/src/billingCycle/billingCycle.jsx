import React, { Component }  from 'react'

import ContentHeader from '../common/template/contentHeader'
import content from '../common/template/content'
import Tabs from '../common/tab/tabs'
import TabsHeader from '../common/tab/tabsHeader'
import TabsContent from '../common/tab/tabsContent'
import TabHeader from '../common/tab/tabheader'

class BillingCycle extends Component {
    render(){
        return(
            <div>
                <ContentHeader title='Ciclos de Pagamentos' small='Cadastro' />
                <content>
                    <Tabs>
                       <TabsHeader>
                            <TabHeader label='Listar' icon='bras' target='tablis' />
                            <TabHeader label='Incluir' icon='plus' target='tabCreate' />
                            <TabHeader label='Alterar' icon='pencil' target='tabUpdate' />
                            <TabHeader label='Excluir' icon='trash-o' target='tabDelete' />
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