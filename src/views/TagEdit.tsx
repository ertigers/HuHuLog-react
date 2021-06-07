import React from 'react';
import {useTags} from 'hooks/useTags';
import {useParams, useHistory} from 'react-router-dom';
import Layout from 'components/Layout';
import Icon from 'components/Icon';
import  Button from 'components/Button';
import styled from 'styled-components';
import {Center} from '../components/Center';
import InputItem from 'components/InputItem';
import None from 'components/None';

type categoryType = '-'|'+'

type Params = {
  id: string
  category: categoryType
}
const Topbar = styled.header`
  display:flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding: 14px;
  background:white;
`;
const InputWrapper = styled.div`
  background:white;
  padding: 0 16px;
  margin-top: 8px;
`;
const TagEdit: React.FC = () => { 
  const {findTag, updateTag, deleteTag} = useTags();
  let {id: idString, category } = useParams<Params>();
  const tag = findTag(parseInt(idString));
  const tagContent = (tag: { id: number; name: string; category: categoryType}) => (
    <div>
      <InputWrapper>
        <InputItem label="标签名" type="text" placeholder="标签名"
               value={tag.name}
               onChange={(e) => {
                 updateTag(tag.id, {name: e.target.value, category});
               }}
        />
      </InputWrapper>
      <Center>
        <Button onClick={() => {deleteTag(tag.id)}}>
          删除标签
        </Button>
      </Center>
    </div>
  );
  const history = useHistory()
  const onClickBack = ()=>{
    history.goBack()
  }

  return (
    <Layout>
      <Topbar>
        <Icon name="left" onClick={onClickBack}/>
        <span>编辑标签</span>
        <Icon/>
      </Topbar>
      {tag ? tagContent(tag) : <None />}
    </Layout>
  );
};

export default TagEdit;