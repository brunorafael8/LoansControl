import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { UserService } from "../services";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Table from "../components/Table";

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #f4f6f9;
  margin-top: 40px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  padding: 0 40px;
`;

const ContentHeader = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Info = styled.div`
  display: flex;
  border: 2px solid #5cb5fe;
  width: 160px;
  height: 90px;
  flex-direction: column;
  padding: 10px 20px;
`;

const InfoTitle = styled.span`
  font-family: "Roboto";
  font-size: 18px;
  letter-spacing: 0;
  line-height: 24px;
  font-weight: bold;
  color: #5cb5fe;
  align-self: flex-start;
  height: 50px;
`;

const InfoValue = styled.span`
  font-family: "Open Sans";
  font-size: 16px;
  letter-spacing: 0;
  line-height: 24px;
  font-weight: normal;
  align-self: flex-end;
  margin-top: 5px;
`;

const TableWrapper = styled.div`
  display: flex;
  width: 70%;
  align-self: center;
  flex-direction: column;
`;

const TableTitle = styled.span`
  height: 20px;
  width: 254px;
  color: #354052;
  font-family: "Open Sans";
  font-size: 24px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: 20px;
  align-self: flex-start;
  margin: 40px 0;
`;

function HomePage() {
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    UserService.fetchUser().then((response) => {
      const newArray = response.data?.installments.map(
        (i: {
          value: string;
          formatedValue: string;
          payd: string;
          dueDate: string;
        }) => {
          return {
            formatedValue: i.formatedValue,
            payd: i.payd,
            dueDate: i.dueDate,
          };
        }
      );
      setTableData(newArray);
    });
  }, []);
  return (
    <div>
      <Header />
      <Wrapper>
        <Sidebar />
        <Content>
          <ContentHeader>
            <Info>
              <InfoTitle>Total do Empréstimo:</InfoTitle>
              <InfoValue>R$ 3232</InfoValue>
            </Info>
            <Info>
              <InfoTitle>Valor já Pago:</InfoTitle>
              <InfoValue>R$ 3232</InfoValue>
            </Info>
            <Info>
              <InfoTitle>Juros Mensais:</InfoTitle>
              <InfoValue>R$ 3232</InfoValue>
            </Info>
            <Info>
              <InfoTitle>Valor total dos Juros:</InfoTitle>
              <InfoValue>R$ 3232</InfoValue>
            </Info>
          </ContentHeader>
          <TableTitle>Parcelas</TableTitle>

          <TableWrapper>
            <Table header={["VALOR", "PAGO", "CRIAÇÃO"]} data={tableData} />
          </TableWrapper>
        </Content>
      </Wrapper>
    </div>
  );
}

export default HomePage;
