import { data } from '../../database'
import { Header } from '../../widgets/header'
import './StatusService.scss'
export const StatusService = () => {
    return (
        <>
            <Header />
            <section className='content'>
                <div className='status'>
                    <div className='status_content'>
                        <div className='status_text'>
                            <h3 className='status_text_title'>Serviços Externos</h3>
                            <p className='status_text_coment'>Aqui, você pode monitorar o status dos serviços dos quais dependemos. Se enfrentar problemas em nossa plataforma, verifique primeiro o status destes serviços, pois uma interrupção em algum deles pode afetar sua experiência.</p>
                        </div>
                        <div className='status_content_items'>
                            {data.map((item, i) => (
                                <div className='status_content_item' key={i}>
                                    <div className='status_content_item_service'>{item.service}</div>
                                    <div className='status_content_item_status'>
                                        <p>{
                                            (item.status === 'up' && 'Bom')
                                            || (item.status === 'error' && 'Fora do ar')
                                            || (item.status === 'warning' && 'Apresentando lentidão')
                                        }</p>
                                        <div className={`service_status_icon service_icon_${item.status}`}></div>
                                    </div>
                                </div>
                            )
                            )}
                        </div >
                    </div>
                </div>
            </section >
            <section></section>
        </>
    )
}
