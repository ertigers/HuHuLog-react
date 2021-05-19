import React from 'react';
import { useParams } from 'react-router';
import { useTags } from 'useTags';

type Params = {
  id:string
}

const TagEdit: React.FC = (props)=>{
  const { findTag } = useTags()
  let { id } = useParams<Params>()
  console.log(id);
  
  const tag = findTag(parseInt(id))
  return(
    <div>{tag.name}</div>
  )
}

export default TagEdit;
