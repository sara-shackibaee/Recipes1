import React ,{useState} from 'react';

import HomeIcon from '@mui/icons-material/Home';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import CakeIcon from '@mui/icons-material/Cake';
const Tree = ({data}) => {
    return (
        <div>
            <ul>
                {data.map(tree=>(<TreeNode node={tree}/>))}
            </ul>
        </div>
    );
}


const TreeNode = ({node})=>{
    const [childVisiblity , setChildVisiblity] = useState(false)
    const hasChild = node.children? true : false
    return(
        <li>
            <div onClick={e=>setChildVisiblity(v=>!v)}>
                {hasChild&&(
                    <div>
                        {/* < CakeIcon ></CakeIcon> */}
                    </div>
                )}
                <div>
                {/* <LocalBarIcon ></LocalBarIcon> */}
                    {node.lable}
                </div>
            </div>
            {hasChild&&childVisiblity&&<div>
                    <ul>
                        <Tree data={node.children}/>
                    </ul>
                </div>}
        </li>
    )

}

export default Tree;
