import React from "react";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import Table from "../components/Table";
import { useUser } from "../context/UserContext";
import { formatInstallments } from "../helpers/formatInstallments";

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #f4f6f9;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 40px;
  margin-left: 236px;
  width: 100%;
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
  border-radius: 10px;
  width: 160px;
  height: 90px;
  flex-direction: column;
  padding: 10px 20px;
  background-color: #000b3c;
`;

const InfoTitle = styled.span`
  font-family: "Roboto";
  font-size: 18px;
  letter-spacing: 0;
  line-height: 24px;
  font-weight: bold;
  color: #de0c4b;
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
  color: #fff;
  margin-top: 5px;
`;

const TableWrapper = styled.div`
  display: flex;
  width: 80%;
  align-self: center;
  flex-direction: column;
  box-sizing: border-box;
  border: 1px solid #e8ecef;
  border-radius: 4px;
  background-color: #ffffff;
  padding: 20px;
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
  const { userData } = useUser();

  const {
    installments,
    amountPayd,
    amountTaken,
    totalAmountInTaxes,
    monthlyInterest,
  } = userData;

  return (
    <Wrapper>
      <Sidebar />
      <Content>
        <ContentHeader>
          <Info>
            <InfoTitle>Total do Empréstimo:</InfoTitle>
            <InfoValue>
              {amountTaken.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </InfoValue>
          </Info>
          <Info>
            <InfoTitle>Valor já Pago:</InfoTitle>
            <InfoValue>
              {amountPayd.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </InfoValue>
          </Info>
          <Info>
            <InfoTitle>Juros Mensais:</InfoTitle>
            <InfoValue>
              {monthlyInterest.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </InfoValue>
          </Info>
          <Info>
            <InfoTitle>Valor total dos Juros:</InfoTitle>
            <InfoValue>
              {totalAmountInTaxes.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </InfoValue>
          </Info>
        </ContentHeader>
        <TableTitle>Parcelas</TableTitle>

        <TableWrapper>
          <Table
            header={["VALOR", "PAGO", "VENCiMENTO"]}
            data={formatInstallments(installments)}
          />
        </TableWrapper>
      </Content>
    </Wrapper>
  );
}

export default HomePage;
