import Select from "@/components/Select";
import useConverter from "@/hooks/useConverter";
import styled from "styled-components";

const Form = styled.form`
    padding: 1rem;
    border-radius: 0.25rem;
    background: #ffffff;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

const Button = styled.button`
    display: inline;
    align-self: center;
    margin: 0;
    padding: 0;
    border: none;
    background: none;
    font-size: 2rem;
    &:hover{
      color: #898987;
      cursor: pointer;
    }
  `;

const Container = styled.div`

    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;


    .exchange {
      display: flex;
      gap: 0.5rem;
    }

    .input-with-select {
      display: flex;
      gap: 0.25rem;
    }
  `;

const Input = styled.input`
    padding: 0.25rem;
    border: 1px solid #e3e3e3;
    border-radius: 0.25rem;
    background: #fbfbfb;
    font-weight: 300;
    font-size: 1.25rem;
  `;

const Home = () => {
  const { currencyNames, handleChangeSelect, first, handleChangeSecond, second, isLoading, handleChangeAmount, handleSwipeCurrencies } = useConverter();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    handleSwipeCurrencies();
  };

  return (
    <Container className="container-converter">
      <Form className="form">
        <Container className="exchange">
          <Container className="input-with-select">
            <Input value={first?.amount || 0} disabled={isLoading} onChange={(e) => handleChangeAmount(Number(e.target.value))} type="text" />
            <Select value={first?.name} options={currencyNames} onChange={(e) => handleChangeSelect(e, 'first')} disabled={isLoading} />
          </Container>
          <Button onClick={(e) => handleClick(e)} className="arrow">↔</Button>
          <Container className="input-with-select">
            <Input value={second?.amount || 0} onChange={(e) => handleChangeAmount(Number(e.target.value))} type="text" disabled={true} />
            <Select options={currencyNames} value={second?.name} onChange={(e) => handleChangeSelect(e, 'second')} disabled={isLoading} />
          </Container>
        </Container>
      </Form>
    </Container>
  );
};

export default Home;