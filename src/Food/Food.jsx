
import foodList from './Fooddata'
import '../Home/Css/Cakeitems.css'
const Food = ()=>{
    return(
        <>
            <input placeholder='Search...'></input>
            {foodList.map(food=>{
                return(
                    <div style={{margin:'0px 10px',borderBottom:'3px dash purpel'}}>
                        <h1 className='text1'>{food.name}</h1>
                        <img src={food.path}></img>
                        
                        <div className='aboutcake'>
                            <div className='items'>
                                <label>Prep:</label>
                                <label>{food.Prep}</label>
                            </div>
                            <div className='items'>
                                <label>Cook:</label>
                                <label>{food.Cook}</label>
                            </div>
                            <div className='items'>
                                <label>Serves:</label>
                                <label>{food.Serves}</label>
                            </div>
                           
                            
                            
                        </div>
                        <div className='text'>{food.description}</div>
                        <h5 className='text3'>nutritionFacts:</h5>
                        {food.nutritionFacts.map(nutrition=>{
                            return(
                                <div className='aboutcake'>
                                    <div className='items'>
                                        <label>kcal:</label>
                                        <label>{nutrition.kcal}</label>
                                    </div>
                                    <div className='items'>
                                        <label>fat:</label>
                                        <label>{nutrition.fat}</label>
                                    </div>
                                    <div className='items'>
                                        <label>saturates:</label>
                                        <label>{nutrition.saturates}</label>
                                    </div>
                                    <div className='items'>
                                        <label>carbs:</label>
                                        <label>{nutrition.carbs}</label>
                                    </div>
                                    <div className='items'>
                                        <label>sugars:</label>
                                        <label>{nutrition.sugars}</label>
                                    </div>
                                    <div className='items'>
                                        <label>fibre:</label>
                                        <label>{nutrition.fibre}</label>
                                    </div>
                                    <div className='items'>
                                        <label>protein:</label>
                                        <label>{nutrition.protein}</label>
                                    </div>
                                    
                                   <div className='items'>
                                       <label>salt:</label>
                                        <label>{nutrition.salt}</label>

                                   </div>
                                    

                                </div>
                            )
                        })}
                        
                        <h1 className='text3'>Method:</h1>
                        {food.Method.map((metod,i)=>{
                            return(
                                <ul >
                                    <li className='titleformethod'>Step{i+1}:</li>
                                  
                                    <li className='method'>{metod}</li>
                                 
                                </ul>
                            )
                        })}

                    </div>
                )
            })}
        </>
    )
}
export default Food;