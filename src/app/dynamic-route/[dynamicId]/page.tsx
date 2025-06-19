
import React from 'react';

const Page = async(
    {params}:{params:Promise<{dynamicId:string}>}
) => {
    const {dynamicId} = await params
    if(dynamicId === '1'){
        return(<p>You are in page 1</p>)
    }
    else if(dynamicId === '2'){
        return(<p>You are in page 2</p>)
    }else{
    return (
        <div>
            <p>Default page with </p>
        </div>
    );
}
}
export default Page;
