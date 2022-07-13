import { useState } from "react";
import UserName from "./UserName";

export default function Hello ({age}){ // object의 porperty만 받을때는 중괄호 필요 
    const [name, setName] =useState('Mike');
    const msg = age > 19 ? "성인 입니다" : "미성년자 입니다"

    return(
        <div>
             <h2 >
                {name}({age}) : {msg}
             </h2>
            <UserName name = {name}/>
          <button onClick={()=>
            {
            setName(name === 'Mike' ? 'jane' : 'Mike')
            }
            }>
            changeName</button>
        </div>
    );
}