import styled from "styled-components";
import React from "react";
import { useTags } from "hooks/useTags";

const Wrapper = styled.section`
  background: #ffffff;
  padding: 0 16px;
  flex-grow: 1;

  > ol {
    height: 36vh;
    overflow: auto;
    padding-top: 10px;
    > li {
      background: #ececec;
      border-radius: 18px;
      display: inline-block;
      padding: 10px 18px;
      font-size: 14px;
      margin: 8px 12px;
      &.selected {
        background: #ffda44;
      }
    }
  }
  > button {
    background: none;
    border: none;
    padding: 2px 4px;
    border-bottom: 1px solid #333;
    color: #666;
    margin-top: 8px;
  }
`;
type categoryType = '-'|'+'
type Props = {
  value: number[];
  category: categoryType;
  onChange: (selected: number[]) => void;
};
const TagsSection: React.FC<Props> = (props) => {
  const { tags } = useTags();
  let tagsList = tags.filter(item=>item.category === props.category)
  const selectedTagIds = props.value;
  const onToggleTag = (tagId: number) => {
    const index = selectedTagIds.indexOf(tagId);
    if (index >= 0) {
      // 如果 tag 已被选中，就复制所有没有被选中的 tag，作为新的 selectedTag
      props.onChange(selectedTagIds.filter((t) => t !== tagId));
    } else {
      props.onChange([...selectedTagIds, tagId]);
    }
  };
  const getClass = (tagId: number) =>
    selectedTagIds.indexOf(tagId) >= 0 ? "selected" : "";
  return (
    <Wrapper>
      <ol>
        {tagsList.map((tag) => (
          <li
            key={tag.id}
            onClick={() => { onToggleTag(tag.id) }}
            className={getClass(tag.id)}
          >
            {tag.name}
          </li>
        ))}
      </ol>
    </Wrapper>
  );
};

export { TagsSection };
