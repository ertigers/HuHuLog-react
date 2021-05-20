import Button from 'components/Button';
import Icon from 'components/Icon';
import Layout from 'components/Layout';
import React from 'react';
import { useParams } from 'react-router';
import { useTags } from 'useTags';
import styled from 'styled-components';
import InputItem from 'components/InputItem';
import {Center} from 'components/Center';

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
const InputItemWrapper = styled.div`
  margin-top:8px;
  padding: 0 16px;
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
      <InputItemWrapper>
        <InputItem label='标签名' type='text' placeholder='标签名'/>
      </InputItemWrapper>
      <Center>
        <Button>删除标签</Button>
      </Center>
    </Layout>
  )
}

export default TagEdit;
