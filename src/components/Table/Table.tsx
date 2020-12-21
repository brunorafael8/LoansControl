import React from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

export interface Props {
  header: string[];
  data: any;
}

const Container = styled.div`
  width: 100%;
`;

const Header = styled.div`
  width: 100%;
  border-bottom: 1px solid #e8ecef;
`;

const HeaderItem = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 10px;
`;

const HeaderItemText = styled.span<{ items: number }>`
  font-family: "Open Sans";
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: 0.15px;
  color: #8792a0;
  text-transform: uppercase;
  width: ${({ items }) => 100 / items}%;
`;

const Body = styled.div`
  width: 100%;
`;

const BodyItem = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid #e8ecef;
  padding: 20px 0;
  align-items: flex-start;
`;

const BodyItemText = styled.span<{ items: number }>`
  font-family: "Open Sans";
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #354052;
  width: ${({ items }) => 100 / items}%;
  max-width: 255px;
  word-wrap: break-word;
`;

const Table = (props: Props) => {
  const { header, data } = props;
  console.log(data);
  return (
    <Container>
      <Header>
        <HeaderItem>
          {header.map((i: any) => (
            <HeaderItemText key={uuidv4()} items={header.length}>
              {i}
            </HeaderItemText>
          ))}
        </HeaderItem>
      </Header>
      <Body>
        {data.map((obj: any) => (
          <BodyItem key={uuidv4()}>
            {Object.keys(obj).map((i) => (
              <BodyItemText key={uuidv4()} items={Object.keys(obj).length}>
                {typeof obj[i] === "boolean"
                  ? obj[i]
                    ? "SIM"
                    : "NÃO                                                                                                                            "
                  : obj[i]}
              </BodyItemText>
            ))}
          </BodyItem>
        ))}
      </Body>
    </Container>
  );
};

export default Table;
