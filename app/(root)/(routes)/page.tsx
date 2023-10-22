'use client'

import { useStoreModal } from '@/hooks/use-store-modal';

import { useEffect } from 'react';
import  testfile  from '../../../testfile.json';

const HomePage =()=>{
  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);
  console.log('testfile here : ',testfile);

  useEffect(() => {
    if(!isOpen){
      onOpen()
    }
  }, [isOpen, onOpen])
  
 
  return null;
}


export default HomePage;