/* eslint-disable react/display-name */
import React, { forwardRef } from 'react';

// مكون Page مع forwardRef
const Page = forwardRef((props, ref) => {
    return (
        <div className="bg-slate-200  demoPage" ref={ref}>
            <div className='h-full '>{props.children}</div>
            <p className="text-xs text-end text-black pb-4"></p>
        </div>
    );
});

export default Page;
