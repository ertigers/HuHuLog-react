import {useEffect, useState} from 'react';
import {createId} from 'lib/createId';
import {useUpdate} from './useUpdate';

type categoryType = '-'|'+'

const useTags = () => { // 封装一个自定义 Hook
  // category: '-'|'+' 
  const [tags, setTags] = useState<{ id: number; name: string; category: categoryType }[]>([]);
  useEffect(() => {
    let localTags = JSON.parse(window.localStorage.getItem('tags') || '[]');
    if (localTags.length === 0) {
      localTags = [
        {id: createId(), name: '衣', category:'-'},
        {id: createId(), name: '食', category:'-'},
        {id: createId(), name: '住', category:'-'},
        {id: createId(), name: '行', category:'-'},
        {id: createId(), name: '工资', category:'+'},
      ];
    }
    setTags(localTags);

  }, []); // 组件挂载时执行
  useUpdate(() => {
    window.localStorage.setItem('tags', JSON.stringify(tags));
  }, tags);
  const findTag = (id: number) => tags.filter(tag => tag.id === id)[0];
  const findTagIndex = (id: number) => {
    let result = -1;
    for (let i = 0; i < tags.length; i++) {
      if (tags[i].id === id) {
        result = i;
        break;
      }
    }
    return result;
  };
  const updateTag = (id: number, {name,category}: { name: string ,category:categoryType}) => {
    setTags(tags.map(tag => tag.id === id ? {id, name, category} : tag));
  };
  const deleteTag = (id: number) => {
    setTags(tags.filter(tag => tag.id !== id));
  };
  const addTag = (category:categoryType) => {
    const tagName = window.prompt('新标签的名称为');
    if (tagName !== null && tagName !== '') {
      setTags([...tags, {id: createId(), name: tagName, category}]);
    }
  };
  const getName = (id: number) => {
    const tag = tags.filter(t => t.id === id)[0];
    return tag ? tag.name : '';
  };
  return {tags, getName, addTag, setTags, findTag, updateTag, findTagIndex, deleteTag};
};

export {useTags};