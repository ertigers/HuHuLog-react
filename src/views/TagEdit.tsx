import Button from 'components/Button';
import Icon from 'components/Icon';
import Layout from 'components/Layout';
import React from 'react';
import { useParams } from 'react-router';
import { useTags } from 'useTags';
import styled from 'styled-components';

type Params = {
  id:string
}
const Topbar = styled.header`
  display:flex;
  justify-content: space-between;
  align-items:center;
  line-height: 20px;
  padding: 14px;
  background:white;
`

const TagEdit: React.FC = (props)=>{
  const { findTag } = useTags()
  let { id } = useParams<Params>()
  console.log(id);
  
  const tag = findTag(parseInt(id))
  console.log(tag);
  
  return(
    <Layout>
      <Topbar>
        <Icon name='left'/>
        <span>编辑标签</span>
        <Icon name=''></Icon>
      </Topbar>
      <div>
        <label>
          <span>标签名：</span>
          <input type="text" placeholder='标签名'/>
        </label>
      </div>
      <div>
        <Button>删除标签</Button>
      </div>
    </Layout>
  )
}

export default TagEdit;
