import Layout from "components/Layout";
import { useTags } from "hooks/useTags";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "components/Button";
import {Center} from "components/Center";
import {CategorySection} from '../components/CategorySection';
import { useState } from "react";


const TagList = styled.ol`
  display: flex;
  flex-wrap: wrap;
  margin-top:10px;
  margin-left: 16px;

  > li {
    background: #ffffff;
    border-radius: 18px;
    margin: 8px 12px;
    > a{
      display: inline-block;
      line-height: 90px;
      text-align:center;
      font-size: 14px;
      height: 90px;
      width: 90px;
    }
  }
`;

function Tags() {
  const { tags, addTag} = useTags();
  const [category,setCategory] = useState<'-'|'+'>("-");
  let tagsList = tags.filter(item=>item.category === category)

  return (
    <Layout>
      <CategorySection value={category}
        onChange={value => setCategory(value)}/>    
      <TagList>
        {tagsList.map(tag => (
          <li key={tag.id}>
            <Link to={'/tags/'+tag.id +'/category/' + category}>
              <span className='oneLine'>{tag.name}</span>
            </Link>
          </li>
        ))}
      </TagList>
      <Center>
        <Button onClick={()=>addTag(category)}>新增标签</Button>
      </Center>
    </Layout>
  );
}

export default Tags;
