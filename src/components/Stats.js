import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

// Add the imported icons to the fontawesome library


//import data

import {stats} from '../data';
library.add(faCircleCheck);

const Stats = () => {
  return(
     <div className='bg-accent rounded-[20px] p-12'>
     <div className='flex flex-wrap gap-y-8'>
        {stats.map((item,index)=> {
         return (
            <div className='min-h-540px w-3/6 flex flex-col justify-center odd:border-l odd:border-r lg:flex-1 lg:even:border-r lg:odd:border-r'
            key={index}>
            
            <div className='text-sm lg:text-3xl text-x1 flex items-center justify-center gap-10'>
            {item.icon}
              </div>
           <div className='text-xl  lg:text-xl'> {item.text}</div>
      </div>
         );
    })}
    </div>
    </div>
    );
};

export default Stats;
