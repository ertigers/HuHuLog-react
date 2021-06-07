import styled from "styled-components";
import { useState } from "react";

const categoryMap = {"-": "支出","+": "收入"};
type Keys = keyof typeof categoryMap

type Props = {
  value: Keys;
  onChange: (value: Keys) => void;
}

const CategorySection: React.FC<Props> = (props) => {
  const [categoryList] = useState<Keys[]>(["-", "+"]);
  const category = props.value
  return (
    <Wrapper>
      <ul>
        {categoryList.map(c => 
          <li key={c} className={category===c?'selected':''} onClick={()=>{props.onChange(c)}}>{categoryMap[c]}</li>
        )}
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: #ffda44;
  > ul {
    display: flex;
    justify-content: center;
    font-size: 18px;
    > li {
      width: 20%;
      text-align: center;
      padding: 16px 0;
      position: relative;
      &.selected::after {
        content: "";
        display: block;
        height: 3px;
        background: #333;
        position: absolute;
        bottom: 0;
        width: 100%;
        left: 0;
      }
    }
  }
`;

export { CategorySection };
