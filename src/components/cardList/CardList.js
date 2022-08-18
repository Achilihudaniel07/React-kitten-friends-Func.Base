
import Card from '../card/Card'

function CardList(props){
    
    return(
        <div className='card-wrapper' style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
        {
          props.clients.map((item) => (
            <Card 
              key={item.id.toString()}
              name={item.name} 
              email={item.email}
              username={item.username}
            />
          ))
        }
      </div>
    )
}
export default CardList;