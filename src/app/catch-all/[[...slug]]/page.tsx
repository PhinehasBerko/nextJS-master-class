import React from 'react';

const catchAllSegment = async(
    {params}:{params: Promise<{slug: string[]}>}
) => {
    const {slug} =  await params
    if(slug?.length ===2){
        return(<p>You  are in {slug[0]} and reviewing {slug[1]}</p>)
    }else if(slug?.length ===1){
        return(<p>You  are in {slug[0]}</p>)
    }return (
        <div>
             <div>You are in the slug default</div>
        </div>
    );
}

export default catchAllSegment;
