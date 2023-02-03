import {useState} from 'react';
import Stage0 from './stage0';
import Stage1 from './stage1';


function FindId() {
    return(
        <div>
            <Stage0/>
            <Stage1/>
            {/* <button>다음</button>
            <button>이전</button> */}
        </div>
    );
}

export default FindId;