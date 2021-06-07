import Layout from "components/Layout";
import { useTags } from "hooks/useTags";
import styled from "styled-components";
import Icon from 'components/Icon';
import { Link } from "react-router-dom";
import Button from "components/Button";
import {Center} from "components/Center";
import {CategorySection} from '../components/CategorySection';
import { useState } from "react";


const TagList = styled.ol`
  background: white;
  > li {
    line-height:20px;
    margin-left: 16px;
    margin-right: 16px;
    border-bottom:1px solid #666;
    > a{
      display:flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 0 12px 0;
    }
  }
`;

function Tags() {
  const { tags, addTag} = useTags();
  const [category,setCategory] = useState<'-'|'+'>("-");

  return (
    <Layout>
      <CategorySection value={category}
        onChange={value => setCategory(value)}/>    
      <TagList>
        {tags.map(tag => (
          <li key={tag.id}>
            <Link to={'/tags/'+tag.id +'/category/' + category}>
              <span className='oneLine'>{tag.name}</span>
              <Icon name='right'/>
            </Link>
          </li>
        ))}
      </TagList>
      <Center>
        <Button onClick={addTag}>新增标签</Button>
      </Center>
    </Layout>
  );
}

export default Tags;
